import axios from 'axios'

const apiListes = axios.create({
  baseURL: 'https://my-json-server.typicode.com/NicolasPradines/todo-project',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getlistes() {
    return apiListes.get('/listes'
    )
  },
}
