import { useQuery } from "react-query";

export const clientAPI = (url) => {
  const { isLoading, data } = useQuery("bc", async () => {
    const response = await fetch(url, {
      method: "get",
    });
    if (!response.ok) throw new Error(response.statusText);
    return await response.json();
  });
  return { data };
};
