class TodoService {
  constructor(httpClient) {
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

  async createTodos(todo) {
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
