import home from './components/home.vue'
import articles from './components/articles.vue'
import column from './components/column.vue'
import error from './components/error.vue'
import reg from './components/reg.vue'
import login from './components/login.vue'
import user from './components/user.vue'
import fllow from './components/fllow.vue'
const routes=[
    {path:'/home',component:home},
    {name:'articles',path:'/articles/:aid',component:articles},
    {path:'/column',component:column},
    {path:'/error',component:error},
    {path:'/reg',component:reg},
    {path:'/login',component:login},
    {path:'/user',component:user},
    {path:'/fllow',component:fllow},
    {path:'/',redirect:'/home'},
]
export default {routes}