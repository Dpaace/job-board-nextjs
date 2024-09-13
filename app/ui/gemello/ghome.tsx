// pages/index.tsx

import { useState, useEffect } from 'react';
import NewIndexPage from './newindex';

const GHome: React.FC = () => {
  const [extractedUrl, setExtractedUrl] = useState<string>('');
  

  useEffect(() => {
    const fetchExtractedUrl = async () => {
      try {
        const response = await fetch('/api/extract-zip');
        const data = await response.json();

        if (data.baseUrl) {
          setExtractedUrl(data.baseUrl);
        }
      } catch (error) {
        console.error('Error fetching extracted URL:', error);
      }
    };

    fetchExtractedUrl();
  }, []);

  return extractedUrl ? (
    <NewIndexPage fileURL={`${extractedUrl}/Assetbundle`} />
  ) : (
    <div>Loading...</div>
  );
};

export default GHome;
