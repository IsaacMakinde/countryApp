interface FetchClient {
  get(url: string): Promise<Response>;
  post(url: string, body: any): Promise<Response>;
  // Add other methods as needed
}

export default FetchClient;
