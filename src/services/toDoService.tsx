import { IFetchClient } from "../serviceClients/fetchClient";

class TodoService {
  private httpClient: IFetchClient;

  constructor(httpClient: IFetchClient) {
    this.httpClient = httpClient;
  }

  async getTodos() {
    try {
      const response = await this.httpClient.get(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async createTodos(todo: unknown) {
    try {
      const response = await this.httpClient.post(
        "https://jsonplaceholder.typicode.com/todos/",
        todo
      );
      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default TodoService;
