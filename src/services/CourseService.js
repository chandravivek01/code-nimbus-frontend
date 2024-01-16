import axios from "axios";

const baseUrl = `http://localhost:3002/courses`;

const getCourses =  async () => {

    const response = await axios.get(`${baseUrl}`);
    return response.data;
}

export { getCourses };