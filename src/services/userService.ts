import apiClients, { CanceledError } from "../services/api-clients";
export interface User {
  id: number;
  name: string;
}

class UserService {
  getAllUsers() {
    const controller = new AbortController();
    const request = apiClients.get<User[]>("/users", {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }
  deleteUser(id: number) {
    return apiClients.delete("users/" + id);
  }
  createUser(user: User) {
    return apiClients.post("/users", user);
  }
  updateUser(user: User) {
    return apiClients.patch("/users/" + user.id, user);
  }
}

export default new UserService();
