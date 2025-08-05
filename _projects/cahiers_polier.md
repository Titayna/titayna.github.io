---
layout: page
title: Handwritten Text Recognition and the Notebooks of Jean-Henri Polier de Vernand (1715-1791)
description: Master Thesis Project of Digital Transcription of 26,300 Pages Through HTR Technology (2023)
img:
importance: 5
category: PAST
published: true
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTR Polier de Vernand - Digital Transcription Repository</title>
    <style>
        /* Light Mode (Default) - Using your site colors */
        :root {
            --theme-color: #fff391;  /* Light yellow */
            --theme-secondary: #f0d4ff;  /* Light purple */
            --theme-accent: #79f9ff;  /* Cyan */
            --theme-bg-light: rgba(255, 243, 145, 0.2);  /* Light yellow transparent */
            --theme-border: rgba(121, 249, 255, 0.3);  /* Cyan transparent */
        }

        /* Dark Mode - Using your dark site colors */
        html[data-theme="dark"] {
            --theme-color: #fff391;  /* Light Yellow - CORRECTED */
            --theme-secondary: #c2abff;  /* Purple */
            --theme-accent: #69ffe6;  /* Mint */
            --theme-bg-light: rgba(255, 243, 145, 0.2);  /* Light yellow transparent */
            --theme-border: rgba(105, 255, 230, 0.3);  /* Mint transparent */
        }

        body {
            font-family: "Google Sans Code", monospace !important;
            line-height: 1.6;
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        .hero-section {
            text-align: center;
            margin: 40px 0 50px 0;
        }

        .main-title {
            color: var(--theme-color);
            font-weight: 700;
            font-size: 2.5em;
            margin-bottom: 15px;
            line-height: 1.2;
        }

        .subtitle {
            color: var(--global-text-color);
            font-weight: 400;
            font-size: 1.2em;
            margin-bottom: 30px;
            font-style: italic;
        }

        .institution-credits {
            color: var(--global-text-color);
            font-size: 0.95em;
            margin-bottom: 30px;
        }

        .section-header {
            color: var(--theme-color);
            font-weight: 600;
            font-size: 1.6em;
            margin: 40px 0 20px 0;
            border-bottom: 2px solid var(--theme-color);
            padding-bottom: 8px;
        }

        .subsection-header {
            color: var(--theme-secondary);
            font-weight: 500;
            font-size: 1.2em;
            margin: 30px 0 15px 0;
        }

        /* Key Metrics Showcase - This should now show pink background */
        .metrics-showcase {
            background: rgba(255, 13, 142, 0.1);
            border: 1px solid rgba(255, 13, 142, 0.2);
            border-radius: 12px;
            padding: 30px;
            margin: 30px 0;
            text-align: center;
        }

        html[data-theme="dark"] .metrics-showcase {
            background: rgba(255, 13, 142, 0.1);
            border-color: rgba(255, 13, 142, 0.2);
        }

        .primary-metric {
            font-size: 2em;
            font-weight: 700;
            color: var(--global-text-color);
            margin-bottom: 10px;
            font-family: "Google Sans Code", monospace !important;
        }

        html[data-theme="dark"] .primary-metric {
            color: var(--global-text-color);
        }

        .metric-label {
            font-size: 1.3em;
            color: var(--global-text-color);
            margin-bottom: 15px;
        }

        .metric-description {
            color: var(--global-text-color);
            font-style: italic;
        }

        /* Statistics Grid */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin: 25px 0;
        }

        .stat-card {
            background: rgba(255, 13, 142, 0.1);
            border-radius: 8px;
            padding: 20px;
            border: 1px solid rgba(255, 13, 142, 0.2);
            transition: background-color 0.3s ease;
        }

        html[data-theme="dark"] .stat-card {
            background: rgba(255, 13, 142, 0.1);
            border-color: rgba(255, 13, 142, 0.2);
        }

        .stat-value {
            font-size: 2em;
            font-weight: 600;
            color: var(--theme-secondary);
            margin-bottom: 5px;
        }

        .stat-title {
            font-weight: 600;
            color: var(--global-text-color);
            margin-bottom: 10px;
        }

        .stat-detail {
            font-size: 0.9em;
            color: var(--global-text-color);
            line-height: 1.5;
        }

        /* Methodology Flow */
        .methodology-section {
            background: var(--theme-bg-light);
            border: 1px solid var(--theme-border);
            border-radius: 8px;
            padding: 25px;
            margin: 25px 0;
        }

        .workflow-list {
            counter-reset: workflow-counter;
            list-style: none;
            padding-left: 0;
            margin: 20px 0;
        }

        .workflow-list li {
            position: relative;
            padding-left: 50px;
            margin: 20px 0;
            counter-increment: workflow-counter;
        }

        .workflow-list li::before {
            content: counter(workflow-counter);
            position: absolute;
            left: 0;
            background: var(--theme-accent);
            color: var(--global-bg-color);
            border-radius: 50%;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            font-weight: 600;
        }

        /* Technical Specs Table */
        .specs-grid {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 15px;
            margin: 20px 0;
            background: var(--theme-bg-light);
            padding: 25px;
            border-radius: 8px;
            border: 1px solid var(--theme-border);
        }

        .spec-label {
            font-weight: 600;
            color: var(--theme-secondary);
        }

        .spec-value {
            color: var(--global-text-color);
        }

        /* Dataset Table */
        .dataset-table {
            width: 100%;
            border-collapse: collapse;
            margin: 25px 0;
            background: rgba(255, 13, 142, 0.1);
            border-radius: 8px;
            overflow: hidden;
            border: 1px solid rgba(255, 13, 142, 0.2);
        }

        html[data-theme="dark"] .dataset-table {
            background: rgba(255, 13, 142, 0.1);
            border-color: rgba(255, 13, 142, 0.2);
        }

        .dataset-table th {
            background: var(--theme-accent);
            color: var(--global-bg-color);
            padding: 15px;
            font-weight: 600;
            text-align: left;
        }

        .dataset-table td {
            padding: 12px 15px;
            border-bottom: 1px solid var(--global-divider-color);
        }

        .dataset-table tr:hover {
            background: var(--theme-bg-light);
        }

        /* Code Examples */
        .code-example {
            background: var(--global-card-bg-color);
            border: 1px solid var(--global-divider-color);
            border-radius: 6px;
            padding: 20px;
            margin: 20px 0;
            font-family: "Courier New", monospace;
            font-size: 0.9em;
            overflow-x: auto;
        }

        .code-comment {
            color: var(--global-text-color-light);
            font-style: italic;
        }

        /* Historical Context */
        .historical-note {
            background: var(--theme-bg-light);
            border-left: 4px solid var(--theme-color);
            padding: 20px;
            margin: 25px 0;
            font-style: italic;
        }

        /* Repository Links */
        .repo-links {
            display: flex;
            gap: 15px;
            margin: 30px 0;
            flex-wrap: wrap;
        }

        .theme-link {
            color: var(--theme-accent);
            text-decoration: none;
            padding: 10px 20px;
            border: 2px solid var(--theme-accent);
            border-radius: 6px;
            font-weight: 500;
            transition: all 0.3s ease;
        }

        .theme-link:hover {
            background: var(--theme-accent);
            color: var(--global-bg-color);
        }

        .theme-link.primary {
            background: var(--theme-color);
            color: var(--global-bg-color);
            border-color: var(--theme-color);
        }

        .theme-link.primary:hover {
            background: var(--theme-secondary);
            border-color: var(--theme-secondary);
        }

        /* Results Highlight */
        .results-highlight {
            text-align: center;
            margin: 40px 0;
            padding: 30px;
            background: rgba(121, 249, 255, 0.15);
            border-radius: 12px;
            color: var(--global-text-color);
            border: 1px solid var(--theme-accent);
        }

        html[data-theme="dark"] .results-highlight {
            background: rgba(105, 255, 230, 0.15);
        }

        .results-highlight h3 {
            font-size: 1.8em;
            margin-bottom: 15px;
        }

        .results-highlight p {
            font-size: 1.1em;
            opacity: 0.9;
        }

        /* Footer */
        .footer-text {
            font-style: italic;
            text-align: center;
            color: var(--global-text-color-light);
            margin: 50px 0 20px 0;
            padding-top: 30px;
            border-top: 1px solid var(--global-divider-color);
        }

        /* Theme Toggle - Removed */

        /* Responsive Design */
        @media (max-width: 768px) {
            body {
                padding: 15px;
            }

            .main-title {
                font-size: 2em;
            }

            .primary-metric {
                font-size: 3em;
            }

            .stats-grid {
                grid-template-columns: 1fr;
            }

            .specs-grid {
                grid-template-columns: 1fr;
            }

            .repo-links {
                flex-direction: column;
            }

            .theme-toggle {
                display: none;
            }
        }
    </style>

</head>
<body>

<div class="hero-section">
    <h1 class="main-title">Les Cahiers Polier</h1>
    <div class="institution-credits">
        Archives cantonales vaudoises (ACV) × EPFL Collège des Humanités Digitales (CDH)<br>
        Master's Research in Digital Humanities & History, University of Lausanne (2023)
    </div>
</div>

<div class="metrics-showcase">
    <div class="primary-metric">8.78%</div>
    <div class="metric-label">Character Error Rate (2023)</div>
    <div class="metric-description">
        Acceptable accuracy for initial digitization of historical documents<br>
        <em>Requires manual correction for scholarly precision; serves as foundation for computational analysis</em>
    </div>
</div>

<div class="section-header">Project Overview</div>

<p>This repository presents the comprehensive digital transcription of Jean-Henri Polier de Vernand's personal notebooks, accomplished through state-of-the-art Handwritten Text Recognition (HTR) technologies. As lieutenant baillival of Lausanne from 1754 to 1791, Polier systematically documented daily life across 26,300 manuscript pages, creating one of the most significant historical records of 18th-century Lausanne society.</p>

<div class="historical-note">
    <strong>Historical Significance:</strong> Jean-Henri Polier de Vernand served as one of the most important figures in Lausanne society of his time, holding positions in multiple councils and courts. His meticulous documentation provides unprecedented insight into the social, economic, and political fabric of 18th-century Swiss urban life.
</div>

<div class="section-header">Quantitative Analysis</div>

<div class="stats-grid">
    <div class="stat-card">
        <div class="stat-value">26,300</div>
        <div class="stat-title">Manuscript Pages</div>
        <div class="stat-detail">Complete digitization of Polier's personal notebooks spanning his entire career as lieutenant baillival</div>
    </div>

    <div class="stat-card">
        <div class="stat-value">37 years</div>
        <div class="stat-title">Temporal Coverage</div>
        <div class="stat-detail">Continuous documentation from 1754 until Polier's death in 1791</div>
    </div>

    <div class="stat-card">
        <div class="stat-value">40</div>
        <div class="stat-title">Training Pages</div>
        <div class="stat-detail">Manually transcribed pages representing diverse layouts, vocabulary, and writing styles</div>
    </div>

    <div class="stat-card">
        <div class="stat-value">JSON</div>
        <div class="stat-title">Structured Output</div>
        <div class="stat-detail">Machine-readable format enabling computational analysis and digital humanities research</div>
    </div>

</div>

<div class="section-header">Methodological Framework</div>

<div class="methodology-section">
    <div class="subsection-header">Technical Pipeline</div>
    <p>The digital transcription process employed a multi-stage approach combining manual ground truth generation with automated recognition systems:</p>

    <ol class="workflow-list">
        <li><strong>Ground Truth Generation</strong>: Strategic selection and manual transcription of representative pages using Transkribus platform</li>
        <li><strong>Layout Analysis</strong>: Automated text line detection and baseline correction through computer vision algorithms</li>
        <li><strong>Model Training</strong>: HTR-Flor++ implementation with TensorFlow, enhanced by Bentham dataset pre-training</li>
        <li><strong>Mass Inference</strong>: Application of trained model to entire corpus with GPU acceleration via Google Colab</li>
        <li><strong>Post-Processing</strong>: Conversion of predictions to structured JSON format maintaining page-level organization</li>
        <li><strong>Quality Validation</strong>: Statistical analysis and sample verification against ground truth standards</li>
    </ol>

</div>

<div class="section-header">Training Dataset Composition</div>

<p>The training dataset was strategically constructed to represent the diversity of Polier's writing across different periods, contexts, and content types:</p>

<table class="dataset-table">
    <thead>
        <tr>
            <th>Notebook Range</th>
            <th>Pages Selected</th>
            <th>Selection Criteria</th>
            <th>Content Characteristics</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>001-020</td>
            <td>15 pages</td>
            <td>Early period documentation</td>
            <td>Initial writing patterns, varied layouts</td>
        </tr>
        <tr>
            <td>040-080</td>
            <td>12 pages</td>
            <td>Regular interval sampling</td>
            <td>Administrative content, numerical data</td>
        </tr>
        <tr>
            <td>100-160</td>
            <td>10 pages</td>
            <td>Middle period diversity</td>
            <td>Mixed content types, layout variations</td>
        </tr>
        <tr>
            <td>185</td>
            <td>3 pages</td>
            <td>Late period examples</td>
            <td>Mature writing style, complex layouts</td>
        </tr>
    </tbody>
</table>

<div class="section-header">Technical Implementation</div>

<div class="subsection-header">Core Technologies</div>

<div class="specs-grid">
    <div class="spec-label">HTR Framework:</div>
    <div class="spec-value">HTR-Flor++ with TensorFlow backend</div>
    
    <div class="spec-label">Pre-training Dataset:</div>
    <div class="spec-value">tranScriptorium Bentham collection</div>
    
    <div class="spec-label">Layout Analysis:</div>
    <div class="spec-value">Transkribus XML export with baseline detection</div>
    
    <div class="spec-label">Computing Environment:</div>
    <div class="spec-value">Google Colab with GPU acceleration</div>
    
    <div class="spec-label">Output Format:</div>
    <div class="spec-value">Structured JSON with page-level organization</div>
    
    <div class="spec-label">Character Encoding:</div>
    <div class="spec-value">Unicode UTF-8 with accent normalization</div>
</div>

<div class="results-highlight">
    <h3>Research Foundation</h3>
    <p>This digital corpus provides a searchable foundation for computational analysis, with manual correction workflows established for critical passages requiring scholarly precision.</p>
</div>

<div class="section-header">Repository Access</div>

<div class="repo-links">
    <a href="https://github.com/Titayna/CahiersPolier/tree/main/polier_notebook_json" class="theme-link primary">☀︎ JSON Dataset ☀︎</a>
    <a href="https://github.com/Titayna/CahiersPolier/blob/main/Master_thesis_Kauffmann_2023.pdf" class="theme-link">☀︎ Master's Thesis (French) ☀︎</a>
    <a href="https://github.com/Titayna/CahiersPolier" class="theme-link">☀︎ GitHub Repository ☀︎</a>
</div>

<div class="subsection-header">Implementation Considerations</div>

<div class="methodology-section">
    <div class="subsection-header">Prerequisites</div>
    <ul style="list-style: none; padding-left: 0;">
        <li style="margin-bottom: 8px;">• Python environment with OpenCV, TensorFlow, and NumPy dependencies</li>
        <li style="margin-bottom: 8px;">• Access to Google Colab or equivalent GPU computing environment</li>
        <li style="margin-bottom: 8px;">• Transkribus account for layout analysis and ground truth generation</li>
    </ul>

    <div class="subsection-header">Replication Workflow</div>
    <ul style="list-style: none; padding-left: 0;">
        <li style="margin-bottom: 8px;">• Execute <code>From_Transkribus_to_HTR_Flor.ipynb</code> for training data preparation</li>
        <li style="margin-bottom: 8px;">• Train model using HTR-Flor++ framework on prepared dataset</li>
        <li style="margin-bottom: 8px;">• Apply trained model to complete manuscript collection</li>
        <li style="margin-bottom: 8px;">• Process predictions using <code>From_HTR_Flor_to_JSON.ipynb</code></li>
    </ul>

</div>

<div class="section-header">Future Developments</div>

<p>Ongoing research includes enhanced error correction algorithms, multilingual recognition capabilities for Polier's occasional English passages, and development of specialized annotation tools for historical document analysis. The established methodology provides a replicable framework for similar digital humanities projects involving historical manuscript collections.</p>

<p class="footer-text">
    Digital humanities research bridging 18th-century manuscript traditions with 21st-century computational methodologies.
</p>

</body>
</html>
