import React, { useState } from 'react';
import { generateShortId, saveToStorage } from './utils';

export default function Shortener() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleShorten = () => {
    const id = generateShortId();
    saveToStorage(id, longUrl);
    setShortUrl(`${window.location.origin}/${id}`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Paste your long URL here"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        style={{ width: '60%', padding: '0.5rem' }}
      />
      <br /><br />
      <button onClick={handleShorten} style={{ padding: '0.5rem 1rem' }}>
        Shorten
      </button>

      {shortUrl && (
        <p>
          Short URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
        </p>
      )}
    </div>
  );
}
