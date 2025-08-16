#!/usr/bin/env node

/**
 * Automated PDF Generation for Jekyll CV
 *
 * This script generates a PDF from your CV page using Puppeteer.
 * It can be integrated into your Jekyll build process or run standalone.
 *
 * Installation:
 * npm install puppeteer fs-extra
 *
 * Usage:
 * node generate-cv-pdf.js
 *
 * For GitHub Actions integration, see the YAML file below.
 */

const puppeteer = require("puppeteer");
const fs = require("fs-extra");
const path = require("path");

class CVPDFGenerator {
  constructor(options = {}) {
    this.options = {
      // Local development URL (Jekyll serve)
      localUrl: "http://localhost:4000/cv/",
      // Production URL
      productionUrl: "https://titayna.github.io/cv/",
      // Output directory
      outputDir: "./assets/pdf/",
      // Output filename
      filename: "cv.pdf",
      // PDF options
      pdfOptions: {
        format: "A4",
        printBackground: true,
        preferCSSPageSize: true,
        margin: {
          top: "20mm",
          right: "15mm",
          bottom: "20mm",
          left: "15mm",
        },
      },
      // Environment detection
      useProduction: process.env.NODE_ENV === "production" || process.argv.includes("--production"),
      ...options,
    };
  }

  async generatePDF() {
    console.log("🚀 Starting CV PDF generation...");

    // Ensure output directory exists
    await fs.ensureDir(this.options.outputDir);

    const browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage", "--disable-gpu"],
    });

    try {
      const page = await browser.newPage();

      // Set viewport for consistent rendering
      await page.setViewport({
        width: 1200,
        height: 1600,
        deviceScaleFactor: 2,
      });

      // Determine which URL to use
      const url = this.options.useProduction ? this.options.productionUrl : this.options.localUrl;

      console.log(`📄 Loading CV from: ${url}`);

      // Navigate to CV page
      await page.goto(url, {
        waitUntil: "networkidle2",
        timeout: 30000,
      });

      // Wait for content to load
      await page.waitForSelector(".cv", { timeout: 10000 });

      // Inject print-specific CSS
      await page.addStyleTag({
        content: this.getPrintCSS(),
      });

      // Remove interactive elements for PDF
      await page.evaluate(() => {
        // Remove navigation elements
        const nav = document.querySelector(".navbar, nav, .navigation");
        if (nav) nav.style.display = "none";

        // Remove footer
        const footer = document.querySelector("footer");
        if (footer) footer.style.display = "none";

        // Ensure proper page breaks
        const cards = document.querySelectorAll(".card");
        cards.forEach((card, index) => {
          if (index > 0 && index % 3 === 0) {
            card.style.pageBreakBefore = "always";
          }
        });

        // Fix any layout issues
        document.body.style.background = "white";
        const container = document.querySelector(".container, .container-fluid");
        if (container) {
          container.style.maxWidth = "none";
          container.style.padding = "0";
        }
      });

      const outputPath = path.join(this.options.outputDir, this.options.filename);

      console.log("📄 Generating PDF...");

      // Generate PDF
      await page.pdf({
        path: outputPath,
        ...this.options.pdfOptions,
      });

      console.log(`✅ PDF generated successfully: ${outputPath}`);

      // Get file size for confirmation
      const stats = await fs.stat(outputPath);
      console.log(`📊 File size: ${(stats.size / 1024).toFixed(1)} KB`);

      return outputPath;
    } catch (error) {
      console.error("❌ Error generating PDF:", error);
      throw error;
    } finally {
      await browser.close();
    }
  }

  getPrintCSS() {
    return `
      /* Print-specific CSS for PDF generation */
      @media print {
        body {
          -webkit-print-color-adjust: exact !important;
          color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        
        .card {
          break-inside: avoid;
          margin-bottom: 1rem !important;
        }
        
        .list-group-item {
          break-inside: avoid;
        }
        
        .badge {
          -webkit-print-color-adjust: exact !important;
          color-adjust: exact !important;
        }
        
        a {
          color: inherit !important;
          text-decoration: none !important;
        }
        
        .navbar, nav, footer, .no-print {
          display: none !important;
        }
        
        .container {
          max-width: none !important;
          padding: 0 !important;
        }
        
        /* Ensure proper spacing */
        .mt-3 {
          margin-top: 1rem !important;
        }
        
        .p-3 {
          padding: 1rem !important;
        }
      }
      
      /* Additional styling for better PDF appearance */
      body {
        font-size: 14px !important;
        line-height: 1.4 !important;
      }
      
      .card-title {
        font-size: 18px !important;
        margin-bottom: 0.75rem !important;
      }
      
      .list-group-item {
        border: none !important;
        padding: 0.5rem 0 !important;
      }
      
      .badge {
        font-size: 11px !important;
        padding: 0.25rem 0.5rem !important;
      }
    `;
  }
}

// CLI execution
if (require.main === module) {
  const generator = new CVPDFGenerator();

  generator
    .generatePDF()
    .then((outputPath) => {
      console.log(`🎉 CV PDF ready at: ${outputPath}`);
      process.exit(0);
    })
    .catch((error) => {
      console.error("Failed to generate PDF:", error);
      process.exit(1);
    });
}

module.exports = CVPDFGenerator;
