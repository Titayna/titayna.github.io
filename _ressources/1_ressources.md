---
layout: page
title: Prompt Engineering Guidebook
description: A compact guide to writing prompts for generative AI models.
img: /assets/img/guidebook.jpg
importance: 1
category: GUIDEBOOK
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prompt Engineering Guidebook</title>
    <style>
        /* Light Mode (Default) */
        :root {
            --theme-color: #ff0d8e;
        }

        /* Dark Mode */
        html[data-theme="dark"] {
            --theme-color: #69ffe6;
        }

        body {
            font-family: "Google Sans Code", monospace;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: var(--global-bg-color);
            color: var(--global-text-color);
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
            transition: opacity 0.3s ease, transform 0.3s ease;
        }

        html[data-theme="dark"] .hero-image img {
            box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
        }

        .hero-image a:hover img {
            opacity: 0.8;
            transform: scale(1.02);
        }

        .main-title {
            color: var(--theme-color);
            font-weight: 700;
            font-size: 2.2em;
            margin-bottom: 10px;
        }

        .version-info {
            color: var(--global-text-color-light);
            font-weight: 400;
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

        .technique-header {
            color: var(--global-text-color);
            font-weight: 600;
            margin: 20px 0 10px 0;
        }

        .key-insight {
            background: rgba(255, 13, 142, 0.1);
            border-left: 4px solid var(--theme-color);
            padding: 15px;
            margin: 20px 0;
            font-weight: 500;
        }

        html[data-theme="dark"] .key-insight {
            background: rgba(105, 255, 230, 0.1);
        }

        .definition-list { margin: 15px 0; }
        .definition-item { margin: 10px 0; padding: 8px 0; }
        .definition-term { font-weight: 600; color: var(--theme-color); }

        .numbered-steps {
            counter-reset: step-counter;
            list-style: none;
            padding-left: 0;
        }

        .numbered-steps li {
            position: relative;
            padding-left: 40px;
            margin: 15px 0;
            counter-increment: step-counter;
        }

        .numbered-steps li::before {
            content: counter(step-counter);
            position: absolute;
            left: 0;
            background: var(--theme-color);
            color: var(--global-bg-color);
            border-radius: 50%;
            width: 25px;
            height: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            font-weight: 600;
        }

        .bullet-list { list-style: none; padding-left: 0; }
        .bullet-list li { padding: 5px 0; position: relative; padding-left: 25px; }
        .bullet-list li::before {
            content: "▸";
            position: absolute;
            left: 0;
            color: var(--theme-color);
            font-weight: 600;
        }

        .highlight-box {
            background: rgba(105, 255, 230, 0.1);
            border: 1px solid rgba(105, 255, 230, 0.3);
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
        }

        html[data-theme="dark"] .highlight-box {
            background: rgba(255, 13, 142, 0.1);
            border: 1px solid rgba(255, 13, 142, 0.3);
        }

        .audience-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }

        .audience-card {
            background: var(--global-card-bg-color);
            border-radius: 8px;
            padding: 20px;
            border-left: 4px solid var(--theme-color);
            transition: background-color 0.3s ease;
        }

        .audience-title {
            font-weight: 600;
            color: var(--theme-color);
            margin-bottom: 10px;
        }

        .spec-grid {
            display: grid;
            grid-template-columns: 1fr 3fr;
            gap: 15px;
            margin: 20px 0;
        }

        .spec-label {
            font-weight: 600;
            color: var(--theme-color);
        }

        .symbol {
            color: var(--theme-color);
            font-weight: 600;
            margin-right: 8px;
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
            border-top: 1px solid var(--global-divider-color);
        }

        .footer-text {
            font-style: italic;
            text-align: center;
            color: var(--global-text-color-light);
        }

        /* Remove fallback section */
    </style>

</head>
<body>

<div class="version-info">
    <span style="font-weight: 600;">Version 2.0 (March 2025)</span> | 
    <a href="/assets/pdf/demystifying_nlp_v2.pdf" class="theme-link">Download PDF</a>
</div>

<div class="hero-image">
    <a href="/assets/pdf/demystifying_nlp_v2.pdf" class="theme-link">
        <img src="/assets/img/guidebook.jpg" alt="Prompt Engineering Guidebook Preview">
    </a>
</div>

<p style="font-size: 1.1em; margin-bottom: 30px;">This guidebook provides practical strategies for effective communication with AI systems.</p>

<div class="section-header">Overview</div>

<p>This guide addresses the challenges facing researchers and practitioners working with generative AI.</p>

<div class="key-insight">
    <span style="font-weight: 600;">Key insight</span>: Using generative AI involves Natural Language Processing (NLP), not human language.
</div>

<div class="section-header">Guide Structure</div>

<div class="subsection-header">1. Foundations</div>

<div class="definition-list">
    <div class="definition-item">
        <span class="definition-term">Definitions</span>: Understanding LLMs as mathematical models
    </div>
    <div class="definition-item">
        <span class="definition-term">Limitations</span>: Critical analysis of training data dependencies
    </div>
    <div class="definition-item">
        <span class="definition-term">Historical Context</span>: Evolution from ELIZA through modern transformers
    </div>
</div>

<div class="subsection-header">2. Core Principles</div>

<div class="definition-list">
    <div class="definition-item">
        <span class="definition-term">Clarity</span>: Using straightforward, unambiguous language
    </div>
    <div class="definition-item">
        <span class="definition-term">Context</span>: Providing situational information
    </div>
    <div class="definition-item">
        <span class="definition-term">Precision</span>: Delimiting inputs with quotation marks, XML tags
    </div>
    <div class="definition-item">
        <span class="definition-term">Examples</span>: Implementing few-shot prompting
    </div>
</div>

<div class="subsection-header">3. Advanced Techniques</div>

<div class="technique-header"><span class="symbol">✳︎</span>Role Prompting</div>
<p style="margin-left: 20px;">Strategic persona assignment to align model outputs with specific expertise.</p>

<div class="technique-header"><span class="symbol">✳︎</span>Multi-shot Prompting</div>
<div style="margin-left: 20px;">
    <div class="definition-list">
        <div class="definition-item">
            <span class="definition-term">Zero-shot</span>: Task performance without prior examples
        </div>
        <div class="definition-item">
            <span class="definition-term">One-shot</span>: Single example-guided performance
        </div>
        <div class="definition-item">
            <span class="definition-term">Few-shot</span>: Multiple example-driven learning
        </div>
    </div>
</div>

<div class="technique-header"><span class="symbol">✳︎</span>Reasoning Frameworks</div>
<div style="margin-left: 20px;">
    <div class="definition-list">
        <div class="definition-item">
            <span class="definition-term">Chain-of-Thought (CoT)</span>: Linear, step-by-step problem decomposition
        </div>
        <div class="definition-item">
            <span class="definition-term">Tree-of-Thought (ToT)</span>: Hierarchical exploration of multiple reasoning paths
        </div>
        <div class="definition-item">
            <span class="definition-term">Graph-of-Thought (GoT)</span>: Network-based reasoning allowing cycles
        </div>
    </div>
</div>

<div class="subsection-header">4. Practical Applications</div>

<p>The guide includes detailed examples for:</p>

<ul class="bullet-list">
    <li>Academic writing and peer review organization</li>
    <li>Conference invitation personalization</li>
    <li>Literary analysis with structured outputs</li>
</ul>

<div class="section-header">Key Contributions</div>

<div class="subsection-header">Methodological Framework</div>

<p>This guide introduces a systematic approach based on four iterative steps:</p>

<ol class="numbered-steps">
    <li><span style="font-weight: 600;">Define the Goal</span>: Establishing specific, measurable criteria</li>
    <li><span style="font-weight: 600;">Craft the Prompt</span>: Implementing clarity, context, precision</li>
    <li><span style="font-weight: 600;">Generate &amp; Evaluate</span>: Testing outputs against criteria</li>
    <li><span style="font-weight: 600;">Refine</span>: Iterating based on performance assessment</li>
</ol>

<div class="subsection-header">Critical Perspective on AI Limitations</div>

<p>This resource emphasizes critical understanding:</p>

<ul class="bullet-list">
    <li>Training data bias propagation</li>
    <li>Hallucination patterns</li>
    <li>Distinction between probability-based responses and factual accuracy</li>
</ul>

<div class="section-header">Target Audience</div>

<div class="audience-grid">
    <div class="audience-card">
        <div class="audience-title">Researchers and Academics</div>
        <p>Seeking to integrate AI tools into scholarly workflows</p>
    </div>
    <div class="audience-card">
        <div class="audience-title">Digital Humanities Practitioners</div>
        <p>Working at technology-humanities intersection</p>
    </div>
    <div class="audience-card">
        <div class="audience-title">Graduate Students</div>
        <p>Developing computational literacy alongside disciplinary expertise</p>
    </div>
</div>

<div class="section-header">Pedagogical Approach</div>

<div class="highlight-box">
    <p>This guidebook treats AI interaction as <span style="font-weight: 600;">computational thinking</span> that requires:</p>
    <ul class="bullet-list">
        <li>Understanding system capabilities and constraints</li>
        <li>Systematic approach to problem decomposition</li>
        <li>Iterative refinement based on empirical results</li>
    </ul>
</div>

<div class="section-header">Technical Specifications</div>

<div class="spec-grid">
    <div class="spec-label">Format:</div>
    <div>PDF guidebook with visual examples and practical examples</div>
    
    <div class="spec-label">Version:</div>
    <div>2.0 (March 2025)
