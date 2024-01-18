import axios from "axios";

const baseUrl = `http://localhost:8080`;

const getCourses =  async () => {

    const response = await axios.get(`${baseUrl}/courses`);
    return response.data;
}

const getDsaTopics =  async () => {

    const response = await axios.get(`${baseUrl}/dsa`);
    return response.data;
}

const getQuestions =  async (topic) => {

    if ( topic === 'strings' ) {

        const response = await axios.get(`${baseUrl}/questions/strings`);
        return response.data;
    }
   
}

export { getCourses, getDsaTopics, getQuestions };