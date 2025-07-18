import { NextResponse } from "next/server";

import { CachedDocGenerator } from './advanced-features.js';
import GitHubCodeFetcher from './github.js';

const githubAPIkey: string = "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"

const docGen = new CachedDocGenerator();
const gitFetcher = new GitHubCodeFetcher(githubAPIkey);

export async function POST(request: Request) {
    try {
        const { githublink } = await request.json();

        const repo = await gitFetcher.fetchRepositoryCode(githublink);
        const result = await docGen.createReadmeFromGitHub(repo, githublink);

        return NextResponse.json({ success: true, documentation: result });
    } catch (error) {
        return NextResponse.json({ success: true, error: error/*"failed to create documentation"*/ });
    }
}