<template>
    <div class="newsList">
        <ul>
            <li v-for="(item,index) in arr" :key="item.id">
                <a href="javascript:;">
                    <h2>{{item.id}}.{{item.title}}</h2>
                    <p>{{item.detail}}</p>
                </a>
            </li>

        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                arr:[]
            }
        },
        mounted(){
            let url='/src/data/follow.data'
            this.$http.get(url).then(
                (res)=>{
                  this.arr=res.data
                }
            ).catch((res)=>{
                console.log(res.status)
            })
    }
    }
</script>
<style>
    @import "../assets/css/index.css";
    .newsList{clear: both;margin-bottom:1rem;margin-top:.7rem;}
</style>