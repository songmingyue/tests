import axios from 'axios'

const service = axios.create({
  baseURL: 'http://192.168.0.198:4000',
  timeout: 2000
})
// 请求拦截器
service.interceptors.request.use((config) => {
  return Promise.resolve(config)
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use((config) => {
  if (config.status === 200) {
    return Promise.resolve(config.data.data)
  } else {
    const arr = []
    return Promise.resolve(arr)
  }
}, (err) => {
  console.log(err, 'err')
  return Promise.reject(err)
})

export default service
