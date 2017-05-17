<template>
  <div id="app">
    <!--头部-->
    <loading v-if="loadingState"></loading>
    <navbar v-if="navState"></navbar>
    <!--banner-->
    <!--<keep-alive>-->
      <transition
      enter-active-class="animated fadeIn"
      >
        <router-view></router-view>
      </transition>
    <!--</keep-alive>-->
    <!--尾部-->
    <footbar v-if="footState"></footbar>
  </div>
</template>

<script>



  import footbar from './components/footbar.vue'
  import navbar from './components/navbar.vue'
  import home from './components/home.vue'
  import {mapGetters} from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

    components:{
        navbar,footbar
    },
    computed:mapGetters(['navState','footState','loadingState']),
    mounted(){
        this.changeRouter(this.$route.path)

    },


    watch:{
        $route(to){
            this.changeRouter(to.path)

        }
    },
    methods:{
        changeRouter(path){
            let paths=path.substring(1)
            if(paths=='login'||
                paths=='reg'||
                paths.indexOf('articles')!=-1)
            {
                console.log('reg')
                this.$store.dispatch('hidenav')
                this.$store.dispatch('hidefoot')
            }else if(paths=='user'){
                console.log('user')
                this.$store.dispatch('hidenav')
                this.$store.dispatch('showfoot')
            }else{
                this.$store.dispatch('shownav')
                this.$store.dispatch('showfoot')
            }
        }
    },

}
</script>

<style>
@import "assets/css/index.css";
</style>
