import Vue from 'vue'
// 1.引入vue-router
import VueRouter from 'vue-router';

// 2.使用(安装)vue-router（VueRouter是作为插件增强Vue的功能）
Vue.use(VueRouter);

//3.引入你要的组件
import homeItem from "../pages/home"
import mineItem from "../pages/mine"
import classifyItem from "../pages/classify"
import cartItem from "../pages/cart"

// 4. 实例化router并配置参数:路由规则
let router = new VueRouter({
    // 配置参数：不同的 URL 显示不同的内容
    routes: [
        // 首页
        {
            name: 'home',
            path: '/home', //当浏览器地址为/home时，显示Home组件的内容
            component: homeItem
        },
        {
            path: '/', //当浏览器地址为/home时，显示Home组件的内容
            redirect: '/home' //重定向
        },
        {
            name: 'classify',
            path: '/classify',
            component: classifyItem
        },

        {
            name: 'cart',
            path: '/cart',
            component: cartItem
        },
        {
            name: 'mine',
            path: '/mine',
            component: mineItem
        }
    ]
});

// 4.导出路由

export default router;