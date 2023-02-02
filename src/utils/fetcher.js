export const fetcher = async (url) => {
  try {
    const response = await fetch(url);
    const result = await response.json();

    if (response.status !== 200) throw new Error("error");
    return result;
  } catch (error) {
    throw error;
  }
};
