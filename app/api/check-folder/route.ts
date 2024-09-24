import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { folderName } = await request.json();

        const extractPath = path.join(process.cwd(), 'public', 'FileExtracts', folderName);

        try {
            await fs.access(extractPath);
            return NextResponse.json({ exists: true });
        } catch (error) {
            return NextResponse.json({ exists: false });
        }
    } catch (error) {
        return NextResponse.json({ error: 'Failed to check folder.' }, { status: 500 });
    }
}
