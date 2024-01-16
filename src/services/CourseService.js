import axios from "axios";

const baseUrl = `http://localhost:3002`;

const getCourses =  async () => {

    const response = await axios.get(`${baseUrl}/courses`);
    return response.data;
}

const getDsaTopics =  async () => {

    const response = await axios.get(`${baseUrl}/dsa`);
    return response.data;
}

export { getCourses, getDsaTopics };