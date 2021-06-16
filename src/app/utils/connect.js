import axios from "axios";

const connect = async (url, method, data) => {
  try {
    const response = await axios.request({
      baseURL: "http://localhost:3000/",
      url: url,
      method: method,
      data: data,
    });
    return { success: true, message: response.data };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export default connect;
