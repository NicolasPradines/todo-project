import axios from 'axios'

const apiListes = axios.create({
  baseURL: 'https://my-json-server.typicode.com/NicolasPradines/todo-project',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getListes() {
    return apiListes.get('/listes')
  },
  getListesInfo(id){
    return apiListes.get('/listes/' + id)
  }
}
