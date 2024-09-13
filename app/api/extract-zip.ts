import fs from 'fs';
import path from 'path';
import AdmZip from 'adm-zip';
import fetch from 'node-fetch';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { zipUrl, fileName } = req.body;

    if (!zipUrl || !fileName) {
      return res.status(400).json({ error: 'Missing parameters' });
    }

    try {
      // Fetch the zip file
      const response = await fetch(zipUrl);
      const buffer = await response.buffer();

      // Create a zip object
      const zip = new AdmZip(buffer);

      // Define the extraction path
      const extractPath = path.join(process.cwd(), 'public', fileName);

      // Extract the contents
      zip.extractAllTo(extractPath, true);
      res.status(200).json({ message: 'Extraction successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to extract zip file' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}