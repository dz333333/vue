<template>
    <div class="home">
<slider></slider>
        <!--home列表-->
        <div class="newsList">
            <ul>
                <li v-for="(item,index) in arr" :key="item.id">
                    <!--<a href="article_m.html">-->
                        <!--<h2>1.xx</h2>-->
                        <!--<p>oooo</p>-->
                    <!--</a>-->
                    <router-link  :to="{name:'articles',params:{aid:index}}">
                        <h2>{{item.id}}.{{item.title}}</h2>
                        <p>{{item.detail}}</p>
                    </router-link>
                </li>

            </ul>
        </div>
    </div>
</template>
<script>
    import slider from './slider.vue'
    export default{
        data(){
            return {
                arr:[]
            }
        },
        mounted(){
            this.$store.dispatch('showloading');
            let url='/src/data/index.data';
            this.$http.get(url).then(
                (res)=>{
                    setTimeout(()=>{
                        this.arr=res.data
                        this.$store.dispatch('hideloading')
                    },1000)
                }
            ).catch(
                (res)=>{
                    alert(res.status)
                }
            )
        },
        components:{
            slider
        }
    }
</script>