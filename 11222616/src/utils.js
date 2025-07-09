// Generate a random short ID
export function generateShortId() {
  return Math.random().toString(36).substring(2, 8);
}

// Save URL + expiry to localStorage
export function saveToStorage(id, url, expiry = null) {
  const expiresAt = expiry || Date.now() + 30 * 60 * 1000; // 30 mins from now
  const payload = {
    url,
    expiry: expiresAt
  };
  localStorage.setItem(`short_${id}`, JSON.stringify(payload));
}

// Get original URL and expiry
export function getFromStorage(id) {
  const data = localStorage.getItem(`short_${id}`);
  if (!data) return null;

  const parsed = JSON.parse(data);
  if (Date.now() > parsed.expiry) {
    return { expired: true };
  }

  return { url: parsed.url };
}
