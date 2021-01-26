import Vue from 'vue'
import Router from 'vue-router'
const Home = () =>
    import ('@/pages/Home/Home')
const Recommend = () =>
    import ('@/pages/Recommend/Recommend')
const Chat = () =>
    import ('@/pages/Chat/Chat')
const Me = () =>
    import ('@/pages/Me/Me')
const Search = () =>
    import ('@/pages/Search/Search')
const Hot = () =>
    import ('@/pages/Home/Hot/Hot')
const Box = () =>
    import ('@/pages/Home/Children/Box')
const Dress = () =>
    import ('@/pages/Home/Children/Dress')
const Ele = () =>
    import ('@/pages/Home/Children/Ele')
const General = () =>
    import ('@/pages/Home/Children/General')
const Man = () =>
    import ('@/pages/Home/Children/Man')
const Mbaby = () =>
    import ('@/pages/Home/Children/Mbaby')
const Shirt = () =>
    import ('@/pages/Home/Children/Shirt')

Vue.use(Router)

export default new Router({
    routes: [{
            path: "",
            redirect: "/home",
        },
        {
            path: "/home",
            component: Home,
            children: [{
                    path: "/home",
                    redirect: "/home/hot",
                },
                // 热门版块
                { path: 'hot', component: Hot },
                // 服饰版块
                { path: 'dress', component: Dress },
                // 鞋包版块
                { path: 'box', component: Box },
                // 母婴版块
                { path: 'mbaby', component: Mbaby },
                // 百货版块
                { path: 'general', component: General },
                // 食品版块
                // { path: 'food', component: Food },
                // 内衣版块
                { path: 'shirt', component: Shirt },
                // 男装版块
                { path: 'man', component: Man },
                // 电器版块
                { path: 'ele', component: Ele },
                // { path: '/home', redirect: '/home/hot' }
            ]
        }, {
            path: "/recommend",
            component: Recommend
        }, {
            path: "/chat",
            component: Chat
        }, {
            path: "/me",
            component: Me
        },
        {
            path: "/search",
            component: Search
        }
    ]
})