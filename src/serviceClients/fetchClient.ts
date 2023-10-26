export interface IFetchClient {
  get(url: string): Promise<Response>;
  post(url: string, body: unknown): Promise<Response>;
}

const FetchClient: IFetchClient = {
  async get(url: string) {
    return await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

  async post(url: string, body: unknown) {
    return await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  },
};

export default FetchClient
