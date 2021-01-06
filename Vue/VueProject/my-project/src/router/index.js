// 配置路由相关的信息
import VueRouter from 'vue-router';
import Vue from 'vue';

import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'


const Profile = () =>
    import ('../components/Profile');

// 1.通过vue.use(插件) 安装插件
Vue.use(VueRouter);

// 2.创建VueRouter对象
const routes = [{
        path: "/",
        redirect: "/home"
    },
    {
        path: "/home",
        // component: Home
        // 路由的懒加载
        component: () =>
            import ('../components/Home'),
        meta: { title: '首页' },
        children: [{
                path: '/',
                redirect: '/home/news'
            },
            {
                path: '/home/news',
                component: () =>
                    import ('../components/HomeNews'),
            },
            {
                path: '/home/message',
                component: () =>
                    import ('../components/HomeMessage'),
            }
        ]
    },
    {
        path: "/about",
        component: () =>
            import ('../components/About'),
        meta: { title: '关于' },
    },
    {
        path: "/user/:userId",
        component: () =>
            import ('../components/User'),
        meta: { title: '用户' },
    },
    {
        path: "/profile",
        component: Profile,
        meta: { title: '档案' },
    }
];

const router = new VueRouter({
    //配置路由和组件的映射关系
    routes,
    mode: "history",
    // 激活的时候的class 就是active
    linkActiveClass: 'active'
});

// 导航守卫(hook)
// router.beforeEach((to, from, next) => {
//     document.title = to.matched[0].meta.title;
//     // console.log(to);
//     if (!token) {
//         next({ path: '/login' });
//     }
//     next();
// });

// 后置钩子(hook)
// router.afterEach((to, from) => {
//     console.log('------');
// });

//3.将routes对象挂载到实例中
export default router;