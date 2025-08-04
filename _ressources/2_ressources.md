---
layout: page
title: Notion Template for PhD Planning
description: A customizable Notion planner designed to help PhD students track their research, deadlines, publications, and goals in one structured space.
img:
importance: 2
category: TEMPLATES
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zephyr Planner for PhD - Notion Template</title>
    <style>
        /* Light Mode (Default) */
        :root {
            --theme-color: #ff0d8e;
            --bg-color: #ffffff;
            --text-color: #333333;
            --text-light: #666666;
            --card-bg: #f8f9fa;
            --border-color: #e0e0e0;
            --highlight-bg: rgba(255, 13, 142, 0.1);
            --highlight-border: rgba(255, 13, 142, 0.3);
            --secondary-highlight: rgba(105, 255, 230, 0.1);
            --secondary-border: rgba(105, 255, 230, 0.3);
        }

        /* Dark Mode */
        html[data-theme="dark"] {
            --theme-color: #69ffe6;
            --bg-color: #1a1a1a;
            --text-color: #e0e0e0;
            --text-light: #a0a0a0;
            --card-bg: #2a2a2a;
            --border-color: #404040;
            --highlight-bg: rgba(105, 255, 230, 0.1);
            --highlight-border: rgba(105, 255, 230, 0.3);
            --secondary-highlight: rgba(255, 13, 142, 0.1);
            --secondary-border: rgba(255, 13, 142, 0.3);
        }

        body {
            font-family: "Google Sans Code", monospace;
            line-height: 1.6;
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
            background-color: var(--bg-color);
            color: var(--text-color);
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        .hero-image {
            text-align: center;
            margin: 20px 0 30px 0;
        }

        .hero-image img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        html[data-theme="dark"] .hero-image img {
            box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
        }

        .main-title {
            color: var(--theme-color);
            font-weight: 700;
            font-size: 2.2em;
            margin-bottom: 10px;
        }

        .subtitle {
            color: var(--text-light);
            font-weight: 400;
            font-size: 1.1em;
            margin-bottom: 30px;
        }

        .section-header {
            color: var(--theme-color);
            font-weight: 600;
            font-size: 1.4em;
            margin: 30px 0 15px 0;
            border-bottom: 2px solid var(--theme-color);
            padding-bottom: 5px;
        }

        .subsection-header {
            color: var(--theme-color);
            font-weight: 500;
            font-size: 1.1em;
            margin: 25px 0 10px 0;
        }

        .component-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }

        .component-card {
            background: var(--card-bg);
            border-radius: 8px;
            padding: 20px;
            border-left: 4px solid var(--theme-color);
            transition: background-color 0.3s ease;
        }

        .component-title {
            font-weight: 600;
            color: var(--theme-color);
            margin-bottom: 15px;
            font-size: 1.1em;
        }

        .feature-description {
            margin-bottom: 15px;
            line-height: 1.7;
        }

        .feature-list {
            list-style: none;
            padding-left: 0;
            margin: 10px 0;
        }

        .feature-list li {
            padding: 3px 0;
            position: relative;
            padding-left: 20px;
            font-size: 0.95em;
        }

        .feature-list li::before {
            content: "•";
            position: absolute;
            left: 0;
            color: var(--theme-color);
            font-weight: 600;
        }

        .architecture-section {
            background: var(--secondary-highlight);
            border: 1px solid var(--secondary-border);
            border-radius: 8px;
            padding: 25px;
            margin: 25px 0;
        }

        .workflow-list {
            counter-reset: workflow-counter;
            list-style: none;
            padding-left: 0;
        }

        .workflow-list li {
            position: relative;
            padding-left: 50px;
            margin: 15px 0;
            counter-increment: workflow-counter;
        }

        .workflow-list li::before {
            content: counter(workflow-counter);
            position: absolute;
            left: 0;
            background: var(--theme-color);
            color: var(--bg-color);
            border-radius: 50%;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            font-weight: 600;
        }

        .specs-grid {
            display: grid;
            grid-template-columns: 1fr 3fr;
            gap: 15px;
            margin: 20px 0;
            background: var(--card-bg);
            padding: 20px;
            border-radius: 8px;
        }

        .spec-label {
            font-weight: 600;
            color: var(--theme-color);
        }

        .integration-note {
            background: var(--highlight-bg);
            border-left: 4px solid var(--theme-color);
            padding: 15px;
            margin: 20px 0;
            font-style: italic;
        }

        .theme-link {
            color: var(--theme-color);
            text-decoration: none;
            transition: opacity 0.3s ease;
        }

        .theme-link:hover {
            opacity: 0.8;
        }

        .divider {
            margin: 40px 0;
            border: none;
            border-top: 1px solid var(--border-color);
        }

        .footer-text {
            font-style: italic;
            text-align: center;
            color: var(--text-light);
        }
    </style>

</head>
<body>

<div class="hero-image">
    <img src="/assets/img/guidebook.jpg" alt="Zephyr Planner for PhD Template Preview">
</div>

<div class="subtitle">
    ACCESS HERE: | 
    <a href="https://titaynakw.notion.site/Zephyr-Planner-for-PhD-Dark-mode-345601cd8dfd44219294e4395e7ee7b6" class="theme-link">Dark Mode Template</a> | 
    <a href="https://zephyrplanning.notion.site/?pvs=74" class="theme-link">Light Mode Template</a>
</div>

<p>A comprehensive Notion workspace designed to address the organizational complexities of doctoral research through integrated project management, data tracking, and academic workflow systematization.</p>

<div class="section-header">Template Architecture</div>

<div class="architecture-section">
    <div class="subsection-header">Core Framework</div>
    <p>The Zephyr Planner implements a centralized database architecture that connects thesis management, research data, academic networking, and project tracking through Notion's relational database system. This structure supports the interdisciplinary and iterative nature of doctoral research.</p>
</div>

<div class="section-header">System Components</div>

<div class="component-grid">
    <div class="component-card">
        <div class="component-title">PhD Dashboard</div>
        <div class="feature-description">Centralized overview interface providing real-time status monitoring across all doctoral activities.</div>
        <ul class="feature-list">
            <li>Thesis area progress visualization</li>
            <li>Task completion metrics</li>
            <li>Writing progress indicators</li>
            <li>Notes and references overview</li>
        </ul>
    </div>

    <div class="component-card">
        <div class="component-title">Thesis Writing Management</div>
        <div class="feature-description">Structured environment for dissertation development with status tracking and cross-referenced note integration.</div>
        <ul class="feature-list">
            <li>Chapter organization with templates</li>
            <li>Writing status indicators</li>
            <li>Navigation between thesis sections</li>
            <li>Linked note references</li>
        </ul>
    </div>

    <div class="component-card">
        <div class="component-title">Bibliography Integration</div>
        <div class="feature-description">Reference management system with Zotero compatibility for systematic citation tracking.</div>
        <ul class="feature-list">
            <li>Zotero database integration</li>
            <li>Citation status tracking</li>
            <li>Reference categorization</li>
            <li>Literature review organization</li>
        </ul>
    </div>

    <div class="component-card">
        <div class="component-title">Task and Project Management</div>
        <div class="feature-description">Comprehensive task organization with status indicators, due dates, and progress tracking for academic projects.</div>
        <ul class="feature-list">
            <li>Task status indicators and reminders</li>
            <li>Due date tracking</li>
            <li>Project progress monitoring</li>
            <li>Academic milestone planning</li>
        </ul>
    </div>

    <div class="component-card">
        <div class="component-title">Note-Taking System</div>
        <div class="feature-description">Organized note management with cross-referencing capabilities and easy access to research materials.</div>
        <ul class="feature-list">
            <li>Meeting notes documentation</li>
            <li>Research note organization</li>
            <li>Cross-referenced note linking</li>
            <li>Quick note access system</li>
        </ul>
    </div>

    <div class="component-card">
        <div class="component-title">Contact Management</div>
        <div class="feature-description">Professional contact database with institutional affiliations and application tracking capabilities.</div>
        <ul class="feature-list">
            <li>Contact database with institutional details</li>
            <li>Application status tracking</li>
            <li>Professional contact categorization</li>
        </ul>
    </div>

</div>

<div class="section-header">Implementation Workflow</div>

<ol class="workflow-list">
    <li><span style="font-weight: 600;">Template Duplication</span>: Standard Notion template duplication process into personal workspace</li>
    <li><span style="font-weight: 600;">Database Configuration</span>: Customization of database properties to match specific research requirements</li>
    <li><span style="font-weight: 600;">Integration Setup</span>: Connection with external tools (Zotero, calendar applications, reference managers)</li>
    <li><span style="font-weight: 600;">Data Migration</span>: Transfer of existing research materials, notes, and project information</li>
    <li><span style="font-weight: 600;">Workflow Establishment</span>: Implementation of regular update and review processes</li>
</ol>

<div class="section-header">Technical Specifications</div>

<div class="specs-grid">
    <div class="spec-label">Template Versions:</div>
    <div>Available in both light and dark mode configurations for optimal visual comfort</div>
    
    <div class="spec-label">Platform Requirements:</div>
    <div>Notion.so account (free tier sufficient for individual use)</div>
    
    <div class="spec-label">Device Compatibility:</div>
    <div>Optimized for desktop and laptop interfaces; mobile access available</div>
    
    <div class="spec-label">External Integrations:</div>
    <div>Zotero reference management, calendar synchronization capabilities</div>
    
    <div class="spec-label">Template Format:</div>
    <div>Digital workspace with pre-configured databases and relational structures</div>
    
    <div class="spec-label">Customization Level:</div>
    <div>Full database schema modification, property customization, workflow adaptation</div>
    
    <div class="spec-label">Language Support:</div>
    <div>English interface with customizable field labels</div>
    
    <div class="spec-label">Display Modes:</div>
    <div>Two distinct template versions optimized for light and dark theme preferences, ensuring visual accessibility across different working environments</div>
</div>

<div class="section-header">Implementation Considerations</div>

<div class="subsection-header">Prerequisites</div>
<ul class="feature-list">
    <li>Functional Notion account with database creation capabilities</li>
    <li>Basic familiarity with Notion's database and relation systems</li>
    <li>Access to desktop or laptop device for optimal interface utilization</li>
</ul>

<div class="subsection-header">Setup Process</div>
<ul class="feature-list">
    <li>Template duplication via Notion's standard duplication mechanism</li>
    <li>Database property customization based on specific research requirements</li>
    <li>Integration configuration with existing research tools and workflows</li>
</ul>

<div class="subsection-header">Maintenance Requirements</div>
<ul class="feature-list">
    <li>Regular database updates to maintain current project status</li>
    <li>Periodic review of task and milestone tracking accuracy</li>
    <li>Ongoing customization as research focus evolves</li>
</ul>

<hr class="divider">

<p class="footer-text">
    Documentation of a structured approach to doctoral research organization using Notion's database and project management capabilities.
</p>

</body>
</html>
