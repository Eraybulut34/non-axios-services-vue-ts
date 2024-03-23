import { fetchWithInterceptors } from "./FetchService";

export class HttpClient {
  async Get(url: string, query?: object) {
    const queryString = query ? `?${new URLSearchParams(query as URLSearchParams).toString()}` : ""
    return fetchWithInterceptors(`${url}${queryString}`, {
      method: "GET",
    })
  }

  async Post(url: string, item: any) {
    return fetchWithInterceptors(url, {
      method: "POST",
      body: JSON.stringify(item),
    });
  }

  async Put(url: string, item: any) {
    return fetchWithInterceptors(url, {
      method: "PUT",
      body: JSON.stringify(item),
    });
  }

  async Delete(url: string, item: any) {
    return fetchWithInterceptors(url, {
      method: "DELETE",
      body: JSON.stringify(item),
    });
  }

  async Patch(url: string, item: any, query?: object) {
    const queryString = query
      ? `?${new URLSearchParams(query as URLSearchParams).toString()}`
      : "";
    return fetchWithInterceptors(`${url}${queryString}`, {
      method: "PATCH",
      body: JSON.stringify(item),
    });
  }
}
