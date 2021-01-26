/** proxy: 跨域代理配置
 *
 * target: 真实的请求值
 * bypass: 请求之前的相关配置
 * changeOrigin: 是否跨域
 * pathRewrite: 设置前缀：如果不进行配置，那么代理的 url 会变成 target + '/api' + data
 */
module.exports  =   {  
    devServer:  {    
        proxy:  {      
            '/app':  {        
                target:   'http://toutiao-app.itheima.net/',
                ws:  true,
                changeOrigin:  true,
                pathRewrite:  {          
                    '^/app':   ''        
                }      
            }   
        }  
    }
}