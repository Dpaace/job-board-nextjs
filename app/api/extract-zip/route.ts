import fs from 'fs';
import path from 'path';
import AdmZip from 'adm-zip';
import fetch from 'node-fetch';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const { zipUrl, fileName } = await req.json();

    if (!zipUrl || !fileName) {
        return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
    }

    try {
        const response = await fetch(zipUrl);
        const buffer = await response.buffer();
        // const buffer = await response.arrayBuffer();

        const zip = new AdmZip(buffer);
        const extractPath = path.join(process.cwd(), 'public', fileName);
        zip.extractAllTo(extractPath, true);
        return NextResponse.json({ message: 'Extraction successful' });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to extract zip file' }, { status: 500 });
    }
}