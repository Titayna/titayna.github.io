---
layout: page
title: Source Code as Cultural Heritage - UNESCO Exhibition 2026
description: Contributing to an exhibition exploring source code as cultural artifact for Software Heritage's 10th anniversary at UNESCO headquarters
img:
importance: 3
category: CURRENT
published: true
related_publications: true
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Source Code Exhibition - UNESCO Heritage Project</title>
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
            --theme-color: #fff391;  /* Light Yellow */
            --theme-secondary: #c2abff;  /* Purple */
            --theme-accent: #69ffe6;  /* Mint */
            --theme-bg-light: rgba(255, 243, 145, 0.2);  /* Light yellow transparent */
            --theme-border: rgba(105, 255, 230, 0.3);  /* Mint transparent */
        }

        body {
            font-family: "Google Sans Code", monospace !important;
            line-height: 1.6;
            max-width: 1200px;
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
            font-size: 2.8em;
            margin-bottom: 15px;
            line-height: 1.2;
        }

        .subtitle {
            color: var(--global-text-color);
            font-weight: 400;
            font-size: 1.3em;
            margin-bottom: 20px;
            font-style: italic;
        }

        .institution-credits {
            color: var(--global-text-color);
            font-size: 1em;
            margin-bottom: 30px;
            font-weight: 500;
        }

        .role-highlight {
            background: var(--theme-bg-light);
            border: 2px solid var(--theme-accent);
            border-radius: 12px;
            padding: 25px;
            margin: 30px 0;
            text-align: center;
        }

        .role-title {
            font-size: 1.3em;
            font-weight: 500;
            color: var(--theme-secondary);
            margin-bottom: 10px;
        }

        .role-description {
            color: var(--global-text-color);
            font-style: italic;
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
            font-size: 1.3em;
            margin: 30px 0 15px 0;
        }

        /* Key Metrics Showcase */
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
            font-size: 3em;
            font-weight: 700;
            color: var(--global-text-color);
            margin-bottom: 10px;
            font-family: "Google Sans Code", monospace !important;
        }

        .metric-label {
            font-size: 1.4em;
            color: var(--global-text-color);
            margin-bottom: 15px;
        }

        .metric-description {
            color: var(--global-text-color);
            font-style: italic;
        }

        /* Theme Cards */
        .themes-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 25px;
            margin: 30px 0;
        }

        .theme-card {
            background: var(--theme-bg-light);
            border: 1px solid var(--theme-border);
            border-radius: 12px;
            padding: 25px;
            transition: all 0.3s ease;
        }

        .theme-card:hover {
            transform: translateY(-2px);
            border-color: var(--theme-accent);
        }

        .theme-title {
            font-size: 1.3em;
            font-weight: 600;
            color: var(--theme-secondary);
            margin-bottom: 15px;
        }

        .theme-description {
            color: var(--global-text-color);
            line-height: 1.6;
        }

        /* Timeline */
        .timeline-section {
            background: var(--theme-bg-light);
            border: 1px solid var(--theme-border);
            border-radius: 12px;
            padding: 30px;
            margin: 30px 0;
        }

        .timeline-item {
            display: flex;
            align-items: center;
            margin: 20px 0;
            position: relative;
        }

        .timeline-date {
            background: var(--theme-accent);
            color: var(--global-bg-color);
            padding: 8px 16px;
            border-radius: 20px;
            font-weight: 600;
            font-size: 0.9em;
            min-width: 180px;
            text-align: center;
        }

        .timeline-content {
            margin-left: 20px;
            color: var(--global-text-color);
        }

        .timeline-title {
            font-weight: 600;
            margin-bottom: 5px;
        }

        /* Committee Grid */
        .committee-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            margin: 25px 0;
        }

        .committee-card {
            background: rgba(255, 13, 142, 0.1);
            border: 1px solid rgba(255, 13, 142, 0.2);
            border-radius: 8px;
            padding: 20px;
        }

        html[data-theme="dark"] .committee-card {
            background: rgba(255, 13, 142, 0.1);
            border-color: rgba(255, 13, 142, 0.2);
        }

        .committee-name {
            font-weight: 600;
            color: var(--theme-secondary);
            margin-bottom: 5px;
        }

        .committee-role {
            color: var(--global-text-color);
            font-size: 0.9em;
            margin-bottom: 8px;
        }

        .committee-institution {
            color: var(--global-text-color);
            font-size: 0.85em;
            font-style: italic;
        }

        /* Quote Section */
        .quote-section {
            background: rgba(121, 249, 255, 0.15);
            border-left: 4px solid var(--theme-accent);
            border-radius: 8px;
            padding: 25px;
            margin: 30px 0;
            font-style: italic;
            position: relative;
        }

        html[data-theme="dark"] .quote-section {
            background: rgba(105, 255, 230, 0.15);
        }

        .quote-text {
            font-size: 1.1em;
            color: var(--global-text-color);
            margin-bottom: 15px;
        }

        .quote-author {
            font-weight: 600;
            color: var(--theme-secondary);
            font-size: 0.9em;
        }

        /* Submission Guidelines */
        .submission-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin: 25px 0;
        }

        .submission-item {
            background: var(--theme-bg-light);
            border: 1px solid var(--theme-border);
            border-radius: 8px;
            padding: 20px;
        }

        .submission-number {
            background: var(--theme-accent);
            color: var(--global-bg-color);
            border-radius: 50%;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            margin-bottom: 15px;
        }

        .submission-title {
            font-weight: 600;
            color: var(--theme-secondary);
            margin-bottom: 10px;
        }

        .submission-description {
            color: var(--global-text-color);
            font-size: 0.9em;
            line-height: 1.5;
        }

        /* Links */
        .repo-links {
            display: flex;
            gap: 15px;
            margin: 30px 0;
            flex-wrap: wrap;
            justify-content: center;
        }

        .theme-link {
            color: var(--theme-accent);
            text-decoration: none;
            padding: 12px 24px;
            border: 2px solid var(--theme-accent);
            border-radius: 8px;
            font-weight: 500;
            transition: all 0.3s ease;
            text-align: center;
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

        /* Impact Section */
        .impact-highlight {
            text-align: center;
            margin: 40px 0;
            padding: 40px;
            background: rgba(121, 249, 255, 0.15);
            border-radius: 15px;
            border: 2px solid var(--theme-accent);
        }

        html[data-theme="dark"] .impact-highlight {
            background: rgba(105, 255, 230, 0.15);
        }

        .impact-highlight h3 {
            font-size: 2em;
            margin-bottom: 20px;
            color: var(--theme-secondary);
        }

        .impact-highlight p {
            font-size: 1.2em;
            color: var(--global-text-color);
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto;
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

        /* Responsive Design */
        @media (max-width: 768px) {
            body {
                padding: 15px;
            }

            .main-title {
                font-size: 2.2em;
            }

            .primary-metric {
                font-size: 2.5em;
            }

            .themes-grid {
                grid-template-columns: 1fr;
            }

            .committee-grid {
                grid-template-columns: 1fr;
            }

            .submission-grid {
                grid-template-columns: 1fr;
            }

            .repo-links {
                flex-direction: column;
            }

            .timeline-item {
                flex-direction: column;
                text-align: center;
            }

            .timeline-content {
                margin-left: 0;
                margin-top: 10px;
            }
        }
    </style>

</head>
<body>

<div class="hero-section">
    <h1 class="main-title">Source Code as Cultural Heritage</h1>
    <div class="subtitle">Contributing to UNESCO Exhibition, Paris 2026</div>
    <div class="institution-credits">
        Software Heritage 10th Anniversary × Inria × UNESCO Memory of the World Programme<br>
        An interdisciplinary collaboration between leading digital science institutions
    </div>
</div>

<!-- Call for Participation Status -->
<div style="background: linear-gradient(135deg, var(--theme-accent), var(--theme-secondary)); border-radius: 15px; padding: 30px; margin: 30px 0; text-align: center; border: 3px solid var(--theme-color);">
    <div style="font-size: 1.5em; font-weight: 700; color: var(--global-bg-color); margin-bottom: 15px;">
        📢 Call for Participation Now Open!
    </div>
    <div style="font-size: 1.1em; color: var(--global-bg-color); margin-bottom: 20px; opacity: 0.95;">
        Submissions welcome until <strong>September 8, 2025</strong>
    </div>
    <a href="https://www.softwareheritage.org/2025/07/07/code-exhibit-unesco-cfp/" style="display: inline-block; background: var(--theme-color); color: var(--global-bg-color); padding: 15px 30px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 1.1em; transition: all 0.3s ease; border: 2px solid var(--theme-color);">
        View Full Call & Submit
    </a>
</div>

<div class="role-highlight">
    <div class="role-title">Project Contributor & Organizing Team Member</div>
    <div class="role-description">
        Supporting the development of an innovative exhibition that explores source code as cultural artifact alongside traditional heritage forms
    </div>
</div>

<div class="metrics-showcase">
    <div class="primary-metric">2026</div>
    <div class="metric-label">UNESCO Exhibition Opening</div>
    <div class="metric-description">
        A collaborative effort between Software Heritage, Inria, and UNESCO<br>
        <em>Exploring new perspectives on digital artifacts in human culture</em>
    </div>
</div>

<div class="section-header">Project Overview</div>

    {% quote abelson1984structure %}
    Programs must be written for people to read, and only incidentally for machines to execute.
    {% endquote %}

<p>I have the privilege of contributing to this innovative exhibition that explores source code as what the Software Heritage team calls "a rich tapestry of meaning" {% cite software_heritage_proposal %} revealing authorial intent, historical contexts, and creative expression. The project represents an exciting collaboration between Software Heritage, Inria (French National Institute for Research in Digital Science and Technology), UNESCO, and researchers from various disciplines, working together to develop new approaches to digital heritage preservation.</p>

<p>This initiative builds on work by many scholars in the field and connects to my own doctoral research on treating source code as historical source material. Working alongside the talented teams at Software Heritage and Inria, as well as fellow researchers, we're exploring how programming might be understood as cultural expression similar to other creative and intellectual endeavors.</p>

<div class="section-header">Exhibition Themes</div>

<div class="themes-grid">
    <div class="theme-card">
        <div class="theme-title">Source Code as Historical Testimony</div>
        <div class="theme-description">
            Exploring how code serves as witness to computing evolution. Contributors examine pieces ranging from foundational software like Apollo-11 equations to grassroots creations that reflect early computing communities.
        </div>
    </div>

    <div class="theme-card">
        <div class="theme-title">Source Code as Mirror of Society</div>
        <div class="theme-description">
            Investigating how code reflects the social structures and contexts of its creation. This theme examines how programming carries the assumptions, values, and perspectives of its time and place.
        </div>
    </div>

    <div class="theme-card">
        <div class="theme-title">Source Code as Cultural Artifact</div>
        <div class="theme-description">
            Appreciating code's creative potential by exploring its aesthetics, structures, and expressive qualities. This includes everything from artistic code competitions to live coding performances.
        </div>
    </div>

</div>

<div class="section-header">Project Timeline</div>

<div class="timeline-section">
    <div class="timeline-item">
        <div class="timeline-date">September 8, 2025</div>
        <div class="timeline-content">
            <div class="timeline-title">Submission Deadline</div>
            International call for contributions closes with submissions from diverse perspectives
        </div>
    </div>

    <div class="timeline-item">
        <div class="timeline-date">End September 2025</div>
        <div class="timeline-content">
            <div class="timeline-title">Selection Process</div>
            Exhibition committee reviews proposals and notifies selected contributors
        </div>
    </div>

    <div class="timeline-item">
        <div class="timeline-date">Fall 2025</div>
        <div class="timeline-content">
            <div class="timeline-title">Collaborative Review</div>
            Working with contributors to refine texts and ensure accessibility for broad audiences
        </div>
    </div>

    <div class="timeline-item">
        <div class="timeline-date">Early 2026</div>
        <div class="timeline-content">
            <div class="timeline-title">Exhibition Opening</div>
            Public launch at UNESCO headquarters during Software Heritage Symposium
        </div>
    </div>

</div>

<div class="section-header">Collaboration Team</div>

<div class="subsection-header">Organizing Team</div>
<div class="committee-grid">
    <div class="committee-card">
        <div class="committee-name">Mathilde Fichen</div>
        <div class="committee-role">Doctoral Researcher</div>
        <div class="committee-institution">National Conservatory of Arts and Crafts (CNAM) & Software Heritage</div>
    </div>

    <div class="committee-card">
        <div class="committee-name">Titaÿna Kauffmann</div>
        <div class="committee-role">Doctoral Researcher</div>
        <div class="committee-institution">C²DH, University of Luxembourg</div>
    </div>

    <div class="committee-card">
        <div class="committee-name">Camille Picard</div>
        <div class="committee-role">Science Outreach Manager</div>
        <div class="committee-institution">Inria</div>
    </div>

</div>

<div class="subsection-header">Exhibition Committee</div>
<div class="committee-grid">
    <div class="committee-card">
        <div class="committee-name">David C. Brock</div>
        <div class="committee-role">Senior Research Fellow</div>
        <div class="committee-institution">Computer History Museum, San Francisco</div>
    </div>

    <div class="committee-card">
        <div class="committee-name">Pierre Depaz</div>
        <div class="committee-role">Postdoctoral Researcher</div>
        <div class="committee-institution">Staatliche Hochschule für Gestaltung Karlsruhe</div>
    </div>

    <div class="committee-card">
        <div class="committee-name">Stefano Penge</div>
        <div class="committee-role">Curator</div>
        <div class="committee-institution">Codexpo.org</div>
    </div>

    <div class="committee-card">
        <div class="committee-name">Valérie Schafer</div>
        <div class="committee-role">Professor</div>
        <div class="committee-institution">University of Luxembourg</div>
    </div>

    <div class="committee-card">
        <div class="committee-name">Bostjan Spetic</div>
        <div class="committee-role">Curator</div>
        <div class="committee-institution">Slovenian Computer Museum</div>
    </div>

    <div class="committee-card">
        <div class="committee-name">Artemis Yagou</div>
        <div class="committee-role">Curator</div>
        <div class="committee-institution">Deutsches Museum</div>
    </div>

</div>

<div class="section-header">How to Participate</div>

<p>The exhibition welcomes diverse perspectives from computer scientists, humanities scholars, activists, artists, and others who can offer unique insights into source code's cultural dimensions. Contributors are invited to submit materials in the following format:</p>

<div class="submission-grid">
    <div class="submission-item">
        <div class="submission-number">1</div>
        <div class="submission-title">Title Suggestion</div>
        <div class="submission-description">Initial title for your contribution (can be refined collaboratively)</div>
    </div>

    <div class="submission-item">
        <div class="submission-number">2</div>
        <div class="submission-title">Source Code Excerpt</div>
        <div class="submission-description">Code sample as high-quality image, PDF, or text file with appropriate licensing</div>
    </div>

    <div class="submission-item">
        <div class="submission-number">3</div>
        <div class="submission-title">Source Information</div>
        <div class="submission-description">Author, creation date, source, and licensing details for the code</div>
    </div>

    <div class="submission-item">
        <div class="submission-number">4</div>
        <div class="submission-title">Commentary (~300 words)</div>
        <div class="submission-description">Your perspective on the code's significance from technical, historical, social, or creative angles</div>
    </div>

    <div class="submission-item">
        <div class="submission-number">5</div>
        <div class="submission-title">Brief Biography</div>
        <div class="submission-description">Your background and connection to programming or source code (100 words)</div>
    </div>

</div>

<div class="impact-highlight">
    <h3>A Collaborative Vision</h3>
    <p>This exhibition represents a collective effort to explore new ways of understanding computational artifacts. By bringing together diverse perspectives, we hope to contribute to ongoing conversations about digital heritage and the cultural dimensions of programming.</p>
</div>

<div class="section-header">Looking Forward</div>

<p>I'm excited to be part of this collaborative effort and curious to see what insights emerge from bringing together so many different viewpoints on source code. The exhibition will be presented in both English and French and made available under open licenses to encourage further research and similar initiatives.</p>

<p>The organizing institutions hope this project might contribute to broader discussions about how we understand and preserve digital culture, while acknowledging that this is just one perspective among many in the growing field of digital heritage studies.</p>

<div class="repo-links">
    <a href="https://www.softwareheritage.org/2025/07/07/code-exhibit-unesco-cfp/" class="theme-link primary">☀︎ Call for Participation ☀︎</a>
    <a href="mailto:sourcecode-exhibit@inria.fr" class="theme-link">☀︎ Submit Proposal ☀︎</a>
    <a href="https://www.softwareheritage.org/" class="theme-link">☀︎ Software Heritage ☀︎</a>
</div>

<p class="footer-text">
    Contributing to conversations about code, culture, and collaborative digital heritage exploration<br>
</p>

</body>
</html>
