"use client"

import React, { useState } from 'react';
import { marked } from 'marked';

import "./markdown.css"

interface DocumentationResult {
    success: boolean;
    documentation?: string;
    error?: string;
}

const CodeDocumentationGenerator: React.FC = () => {
    const [githubLink, setGithubLink] = useState<string>('');
    const [output, setOutput] = useState<string>('Documentation will appear here...');
    const [loading, setLoading] = useState<boolean>(false);

    const postLink = async (link: string): Promise<void> => {
        setLoading(true);
        setOutput('');

        try {
            const response = await fetch('/api/documentationgenerator', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ githublink: link })
            });

            const result: DocumentationResult = await response.json();

            if (result.success) {
                setOutput(result.documentation || '');
            } else {
                setOutput(`Error: ${result.error}`);
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            setOutput(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    const githubDoc = async (): Promise<void> => {
        if (!githubLink) {
            alert("Please enter a GitHub link");
            return;
        }

        await postLink(githubLink);
    };

    const copyToClipboard = (): void => {
        navigator.clipboard.writeText(output).then(() => {
            alert('Documentation copied to clipboard!');
        });
    };

    const downloadDocs = (): void => {
        const blob = new Blob([output], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'documentation.md';
        a.click();
        URL.revokeObjectURL(url);
    };

    // Convert markdown to HTML
    const getMarkdownAsHtml = (): string => {
        return marked(output) as string;
    };

    return (
        <div className="font-sans max-w-screen-xl mx-auto p-5">
            <h1 className="text-3xl font-bold mb-6">🚀 Code Documentation Generator</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-white p-5 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Input Code</h2>

                    <input
                        type="text"
                        id="githublink"
                        placeholder="GitHub repository link:"
                        className="w-full p-2 my-2 border border-gray-300 rounded"
                        value={githubLink}
                        onChange={(e) => setGithubLink(e.target.value)}
                    />

                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 transition-colors"
                        onClick={githubDoc}
                    >
                        Generate Documentation
                    </button>

                    <div className={`text-center text-gray-600 mt-4 ${loading ? 'block' : 'hidden'}`}>
                        <p>⏳ Generating documentation...</p>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Generated Documentation</h2>

                    <div
                        className="markdown-content bg-gray-50 p-4 rounded max-h-[900px] overflow-y-auto prose prose-sm max-w-none"
                        dangerouslySetInnerHTML={{ __html: getMarkdownAsHtml() }}
                    />

                    <div className="flex gap-2 mt-4">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
                            onClick={copyToClipboard}
                        >
                            📋 Copy to Clipboard
                        </button>

                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
                            onClick={downloadDocs}
                        >
                            📥 Download
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CodeDocumentationGenerator;