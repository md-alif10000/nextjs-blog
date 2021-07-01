export const api = "http://localhost:8000";
export const generatePublicUrl = (image) => {
  return `${api}/public/${image}`;
};
