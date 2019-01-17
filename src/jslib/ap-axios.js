/*
 * @Author: APeng 
 * @Date: 2019-01-17 21:00:02 
 * @Last Modified by: APeng
 * @Last Modified time: 2019-01-17 21:08:50
 */

 // 这里用 axios 来进行 http 请求
 // 文档地址：https://www.kancloud.cn/yunye/axios/234845

 import axios from 'axios'

 const apAxios = axios.create({
     baseURL: `http://localhost:8080`,
     timeout: 10000,
 })

 // 添加请求拦截器
 apAxios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config
 }, function (err) {
     // 对请求错误做些什么
     return Promise.reject(err)
 })

 // 添加响应拦截器
 apAxios.interceptors.response.use(function (response) {
     // 对响应数据做点什么
     return response
 }, function (err) {
     // 对响应错误做点什么
     return Promise.reject(err)
 })

 export default apAxios //  抛出