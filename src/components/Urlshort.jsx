import React, { useState } from 'react';
import axios from 'axios';

const UrlShortener = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');

  const shortenUrl = async () => {
    try {
      const response = await axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`);
      setShortUrl(response.data.result.full_short_link);
      setError('');
    } catch (err) {
      setError('Error shortening the URL. Please try again.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    shortenUrl();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">URL Shortener</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter a URL"
          className="p-2 w-full border border-gray-400 rounded"
        />
        <button
          type="submit"
          className="mt-4 w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Shorten URL
        </button>
      </form>

      {shortUrl && (
        <div className="mt-4 p-2 bg-green-200 rounded">
          <p>Shortened URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{shortUrl}</a></p>
        </div>
      )}

      {error && (
        <div className="mt-4 p-2 bg-red-200 rounded">
          <p className="text-red-600">{error}</p>
        </div>
      )}
    </div>
  );
};

export default UrlShortener;
