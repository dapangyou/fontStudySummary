let myOptions;
function myPlugin(options) {
    myOptions = options
}

// 插件必须具备install函数
myPlugin.install = function (Vue) { 
    // 1.判断当前的组件名

    // 2.根据vuex去调用、改变数据
    // 

    Vue.mixin({
        created() { 
            if (this.$options.name === 'about' || 
                this.$options.name === 'home') {
                this.$store.dispatch('addByAct');
                 }
        }
    })
}
 
export default myPlugin;
