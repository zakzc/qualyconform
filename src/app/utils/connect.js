import axios from "axios";

const connect = async (url, method, data) => {
  console.log("receive:", url, method, data, "to send");
  try {
    const response = await axios.request({
      baseURL: "http://localhost:3000/",
      url: url,
      method: method,
      data: data,
    });
    console.log("from api:", response.data);
    return { success: true, message: response.data };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export default connect;
