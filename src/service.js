import axios from 'axios';

const apiURL = process.env.REACT_APP_API_URL;
axios.defaults.baseURL = apiURL;

axios.interceptors.response.use(
  function(response){
    return response;
  },
  function(error){
    console.log('error',error)
  }
)

export default {
  getTasks: async () => {
    console.log("url", apiURL)
    const result = await axios.get(apiURL)
    console.log(result.data)
    return result.data;
  },
 

  addTask: async (newTodo) => {
    const result = await axios.post(apiURL, { name: newTodo, isComplete: false})
    return result.data;
  },

  setCompleted: async (id, isComplete) => {
    await axios.put(`/${id}?isComplete=${isComplete}`)
  },

  deleteTask: async (id) => {
    const result = await axios.delete(`/${id}`)
    return result.data;
  }
};
