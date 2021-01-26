import axios from 'axios';

// export function requesy(config,success,failure) {
//     const instance = axios.create({
//         baseURL: "http://127.0.0.1:8000",
//         timeout: 3000
//     });
//     instance(config).then(res => {
//         console.log(res);
//     })
//     .catch(error=>{

//     });
// }

// export function request(config) {
//     return new Promise((resolve,reject)=>{
//         // 1.创建axios实例
//         const instance = axios.create({
//             baseURL: "http://127.0.0.1:8000",
//             timeout: 3000
//         });

//         // 发送真正的网络请求
//         instance(config).then(res=>{
//             resolve(res);
//         }).catch(error=>{
//             reject(error);
//         });
//     });
// }


// export function request(config) {
//         // 1.创建axios实例
//         const instance = axios.create({
//             baseURL: "http://127.0.0.1:8000",
//             timeout: 3000
//         });

//         return instance(config);
// }



// request({
//     url: ""
// });




// axios拦截器
axios.interceptors.request.use(config=>{
    console.log(config);
},error=>{
    console.log(error);
});
axios.interceptors.response.use();