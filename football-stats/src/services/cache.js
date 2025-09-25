// Cache service is no longer needed with mock data
// All data is now served instantly from static mock data

export const getCache = (key) => {
  console.warn('Cache service is deprecated - using mock data instead');
  return null;
};

export const setCache = (key, data) => {
  console.warn('Cache service is deprecated - using mock data instead');
};
