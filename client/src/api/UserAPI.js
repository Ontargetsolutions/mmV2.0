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
    console.log(`en la api para buscar el user en la bd by email ${email}`)
    return axios.get(`/api/users/email/${email}/`);
  },
  // Update the user with the given id
  updateUser: function(id, userData) {
    return axios.put("/api/users/" + id, userData);
  },
  // Saves a user to the database
  saveUser: function(userData) {
      console.log(`api forntend user data ${JSON.stringify(userData)}`)
    return axios.post("/api/users", userData);
  },
  // Gets users by { ... }
  getUsersWhere: function(userData) {
    return axios.post("/api/users/where", userData);
  },
  // get User With a specific project id
  getUserProject: function(userId, projectId) {
    console.log("Api",userId, projectId)
    return axios.get("/api/users/user/" + userId + "/project/" + projectId);
  }
};
