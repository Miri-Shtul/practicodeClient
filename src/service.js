import axios from 'axios';

// const apiUrl = "http://localhost:5126/todoItems"
axios.defaults.baseURL="http://localhost:5126/todoItems"
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
    const result = await axios.get()
    return result.data;
  },

  addTask: async (newTodo) => {
    const result = await axios.post(axios.defaults.baseURL, { name: newTodo, isComplete: false})
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
