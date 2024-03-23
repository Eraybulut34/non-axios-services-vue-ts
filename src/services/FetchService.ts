import { API_BASE } from "@/config/setting";

export async function fetchWithInterceptors(url: string, options = {}) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `exampleToken`,
    ...(options.headers || {}),
  };

  try {
    const response = await fetch(`${API_BASE}${url}`, { ...options, headers });
    const clonedResponse = response.clone();
    if (!response.ok) {
      if (response.status == 401) {
        console.log("401 - Unauthorized");
      }
      if (response.status === 500) {
        console.log("500 - Internal Server Error");
      }
      throw new Error("Network response was not ok.");
    }
    return await clonedResponse.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
