import conf from '@/config';
const Fly = require("flyio/dist/npm/wx");
const fly = new Fly;

function flyInstance(args) {
    const defaultOptions = {
        baseURL: conf.api,
        timeout: 50000,
        loading: true,
        // withCredentials: true,
    };

    const options = { ...defaultOptions, ...args };
    //添加请求拦截器
    fly.interceptors.request.use((request)=>{
        //给所有请求添加自定义header
        // request.headers["X-Tag"]="flyio";
        //打印出请求体
        request.baseURL = options.baseURL;
        request.timeout = options.timeout;
        //终止请求
        //var err=new Error("xxx")
        //err.request=request
        //return Promise.reject(new Error(""))
        const { loading } = request.body && typeof(request.body.loading) !== 'undefined' ? request.body : options;
        console.log(loading, '---');
        loading && uni.showLoading({ title: 'loading' });
    
        //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
        return request;
    })

    //添加响应拦截器，响应拦截器会在then/catch处理之前执行
    fly.interceptors.response.use(
        (response) => {
            uni.hideLoading();
            //只将请求结果的data字段返回
            // console.log(response);
            return response.data;
        },
        (err) => {
            uni.hideLoading();
            //发生网络错误后会走到这里
            //return Promise.resolve("ssss")
        }
    )

    return fly;
}

export default flyInstance;
