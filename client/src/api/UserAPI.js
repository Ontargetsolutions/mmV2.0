import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Gets the user with the given email
  getUserByEmail: function(email) {
    const emailToSearch = email.payload ? email.payload : email;
    console.log(`api forntend user data ${JSON.stringify(emailToSearch)}`);
    return axios.get("/api/users/email/" + emailToSearch);
  },
  // Update the user with the given id
  updateUser: function(id, userData) {
    console.log(`api forntend user data ${userData}, id ${id}`);
    return axios.put("/api/users/" + id, userData);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  // Gets users by { ... }
  getAllWorkers: function() {
    console.log(`en el frontend api pa buscar los trabajadores`);
    return axios.get("/api/users/getEmployees");
  },
  // get User With a specific project id
  getUserProject: function(userId, projectId) {
    console.log("Api", userId, projectId);
    return axios.get("/api/users/user/" + userId + "/project/" + projectId);
  }
};
