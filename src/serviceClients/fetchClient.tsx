export interface IFetchClient {
  get(url: string): Promise<Response>;
}

export const FetchClient: IFetchClient = {
  async get(url: string) {
    return await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};
