import axios from "axios"
import { Loading } from 'element-ui'
import { Message } from 'element-ui'
//loading方法
let loading
function startLoading() {
 loading = Loading.service({
  lock: true,
  text: '加载中……',
  background: 'rgba(0, 0, 0, 0.7)'
 })
}
 
function endLoading() {
 loading.close()
}

//合并请求load延时
let needLoadingRequestCount = 0
 
export function showFullScreenLoading() {
 if (needLoadingRequestCount === 0) {
  startLoading()
 }
 needLoadingRequestCount++
}
 
export function tryHideFullScreenLoading() {
 if (needLoadingRequestCount <= 0) return
 needLoadingRequestCount--
 if (needLoadingRequestCount === 0) {
  endLoading()
 }
}


axios.defaults.headers.post["Content-Type"]="application/json"
//请求拦截器
axios.interceptors.request.use((config) => {
    showFullScreenLoading()
    return config
   }, (error) => {
    return Promise.reject(error)
})
//响应拦截器
axios.interceptors.response.use((response) => {
    tryHideFullScreenLoading()
    return response
   }, (error) => {
    return Promise.reject(error)
   })
// export function HttpGet (url,params,config){
//     if(res.status=200){
//         return response.data
//     }
// }

    // post: (url, data, config = { showLoading: true }) => axios.post(url, data, config)

// export default HttpGet= {
//     get: (url, data, config = { showLoading: true }) => axios.post(url, data, config)

// }


// export default function httpPost(url, data, config = { showLoading: true }){
//     axios.post(url, data, config).then(function(res){
//         return res
//     }).catch(function(err){
//         console.log(err)
//     })
// };
// export default function httpGet(url, data, config = { showLoading: true }){
//     axios.get(url, data, config).then(function(res){
//         return res
//     }).catch(function(err){
//         console.log(err)
//     })
// }
const defaultConfig = { showLoading: true }
export default {
    get: (url, config,callback) => axios.get(url,{ ...defaultConfig, ...config },callback).then(function(res){
      
        if (res.statusCode == 200) {
            if (res.data.code == 400) {
               alert("aaa")
            } else {
                callback && callback(res.data)
            }
        } else {
           alert("系统繁忙")
        }
    }).catch(function(err){
        alert("aaa")
        Message.error('账号和密码不能为空')
        console.log(Message)
    }),
    put: (url, data, config) => axios.put(url, data, { ...defaultConfig, ...config }),
    post: (url, data, config) => axios.post(url, data, { ...defaultConfig, ...config }),
    patch: (url, data, config) => axios.patch(url, data, { ...defaultConfig, ...config }),
    delete: (url, data, config) => axios.delete(url, { ...defaultConfig, ...config })
  }