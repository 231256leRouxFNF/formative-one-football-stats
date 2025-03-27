const CACHE_EXPIRATION = 3600000; // 1 hour in milliseconds

export const getCache = (key) => {
  const cachedData = localStorage.getItem(key);
  if (!cachedData) return null;

  const { data, timestamp } = JSON.parse(cachedData);
  if (Date.now() - timestamp > CACHE_EXPIRATION) {
    localStorage.removeItem(key);
    return null;
  }

  return data;
};

export const setCache = (key, data) => {
  const cachedData = {
    data,
    timestamp: Date.now(),
  };
  localStorage.setItem(key, JSON.stringify(cachedData));
};