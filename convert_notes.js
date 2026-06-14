const { marked } = require('marked');
const fs = require('fs');
const path = require('path');

// Read the markdown file
const mdContent = fs.readFileSync('notes.md', 'utf-8');

// Configure marked
marked.setOptions({
  breaks: true,
  gfm: true
});

// Convert markdown to HTML
const htmlBody = marked.parse(mdContent);

// Create full HTML document with styling
const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cloud Computing & DevOps - Revision Notes</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.7;
            color: #2d3748;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 2rem;
        }

        .container {
            max-width: 900px;
            margin: 0 auto;
            background: white;
            border-radius: 16px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            padding: 3rem;
        }

        h1 {
            font-size: 2.5rem;
            color: #1a202c;
            margin-bottom: 1.5rem;
            padding-bottom: 1rem;
            border-bottom: 4px solid #667eea;
            background: linear-gradient(90deg, #667eea, #764ba2);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        h2 {
            font-size: 1.8rem;
            color: #2d3748;
            margin: 2rem 0 1rem;
            padding-left: 1rem;
            border-left: 5px solid #667eea;
        }

        h3 {
            font-size: 1.4rem;
            color: #4a5568;
            margin: 1.5rem 0 0.75rem;
        }

        h4 {
            font-size: 1.2rem;
            color: #718096;
            margin: 1rem 0 0.5rem;
        }

        p {
            margin-bottom: 1rem;
            color: #4a5568;
        }

        strong {
            color: #2d3748;
            font-weight: 600;
        }

        img {
            max-width: 100%;
            height: auto;
            border-radius: 12px;
            margin: 1.5rem 0;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        img:hover {
            transform: scale(1.02);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
        }

        pre {
            background: #1a202c;
            color: #e2e8f0;
            padding: 1.5rem;
            border-radius: 12px;
            overflow-x: auto;
            margin: 1.5rem 0;
            box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        code {
            font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
            font-size: 0.9rem;
        }

        pre code {
            background: transparent;
            padding: 0;
            color: inherit;
        }

        :not(pre) > code {
            background: #edf2f7;
            padding: 0.2rem 0.5rem;
            border-radius: 6px;
            color: #e53e3e;
            font-size: 0.9rem;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.5rem 0;
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        thead {
            background: linear-gradient(90deg, #667eea, #764ba2);
        }

        th {
            color: white;
            padding: 1rem;
            text-align: left;
            font-weight: 600;
        }

        td {
            padding: 0.75rem 1rem;
            border-bottom: 1px solid #e2e8f0;
        }

        tbody tr:hover {
            background: #f7fafc;
        }

        tbody tr:last-child td {
            border-bottom: none;
        }

        blockquote {
            border-left: 5px solid #667eea;
            padding: 1rem 1.5rem;
            margin: 1.5rem 0;
            background: linear-gradient(90deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
            border-radius: 0 12px 12px 0;
            font-style: italic;
            color: #4a5568;
        }

        blockquote p {
            margin: 0;
        }

        ul, ol {
            margin: 1rem 0;
            padding-left: 2rem;
            color: #4a5568;
        }

        li {
            margin-bottom: 0.5rem;
        }

        hr {
            border: none;
            height: 3px;
            background: linear-gradient(90deg, #667eea, #764ba2);
            margin: 2rem 0;
            border-radius: 2px;
        }

        a {
            color: #667eea;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.2s ease;
        }

        a:hover {
            color: #764ba2;
            text-decoration: underline;
        }

        .emoji {
            font-style: normal;
        }

        @media (max-width: 768px) {
            body {
                padding: 1rem;
            }

            .container {
                padding: 1.5rem;
            }

            h1 {
                font-size: 1.8rem;
            }

            h2 {
                font-size: 1.4rem;
            }

            img {
                border-radius: 8px;
            }
        }

        /* Print styles */
        @media print {
            body {
                background: white;
                padding: 0;
            }

            .container {
                box-shadow: none;
                padding: 0;
            }

            img {
                max-width: 100%;
                box-shadow: none;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        ${htmlBody}
    </div>
</body>
</html>`;

// Write the HTML file
fs.writeFileSync('notes.html', fullHtml, 'utf-8');
console.log('✅ Conversion complete! HTML file saved as: notes.html');
console.log(`📄 File size: ${(Buffer.byteLength(fullHtml) / 1024).toFixed(2)} KB`);
