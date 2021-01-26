export default {
    created() { 
        setTimeout(() => { 
            console.log(`组件${this.$options.name}的请求发出去了....`);
        },1000);
    }
    // 组件的影子
}