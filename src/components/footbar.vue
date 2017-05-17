<template>
    <div class="foot-btn" >
        <ul>
            <!--<li class="home"><a href="index_m.html"></a></li>-->
            <!--<li class="write"><a href="javascript:;"></a></li>-->
            <!--<li class="my"><a href="mydoc_m.html"></a></li>-->
            <router-link to="/home" tag="li" class="home" active-class="active">
                <a href="javascript:;"></a>
            </router-link>
            <router-link to="/fllow" tag="li" class="write" active-class="active">
                <a href="javascript:;"></a>
            </router-link>
            <router-link to="/user" tag="li" class="my" active-class="active">
                <a href="javascript:;"></a>
            </router-link>
        </ul>
    </div>
</template>