import axios from "axios";

export default {
  //get all notification by user
  getNotifications: userId => {
    return axios.get(`/api/notification/${userId}`);
  },

  // Get all notificaions non read so far
  getNotificationNoRead: clientId => {
    return axios.get(`/api/notification/noread/${clientId}`);
  },

  // Save the quote
  saveNotifications: notification => {
    return axios.post(`/api/notification`, notification);
  },

  // Save the quote
  updateNotifications: (notificationId, notification) => {
    return axios.put(`/api/notification/${notificationId}`, notification);
  }
};
