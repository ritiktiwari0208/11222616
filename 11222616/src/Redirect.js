import { useEffect, useState } from 'react';
import { getFromStorage } from './utils';

export default function Redirect({ shortId }) {
  const [message, setMessage] = useState('Redirecting...');

  useEffect(() => {
    const result = getFromStorage(shortId);
    if (!result) {
      setMessage('Link not found.');
    } else if (result.expired) {
      setMessage('This link has expired.');
    } else {
      window.location.href = result.url;
    }
  }, [shortId]);

  return <p>{message}</p>;
}
