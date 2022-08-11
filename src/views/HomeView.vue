<template>
    <div class="home">
        <div class="container_wrap">
            <menu-view />
        </div>
    </div>
</template>

<script>
import MenuView from './MenuView.vue';

export default {
    name: 'HomeView',
    components: {
        MenuView
    }
}
</script>

<style>
    .home {
        position: relative;
        min-height: 100%;
        overflow-x: hidden;
        background-color: #fbfbfb
    }
    .home {
        background-color: #000;
    }
    .home.without_player  {
        background-color: #fbfbfb
    }
    /*.home:before {*/
         /*background-position: -4px -76px;*/
         /*width: 182px;*/
         /*height: 169px;*/
         /*position: absolute;*/
         /*top: 0;*/
         /*right: 0;*/
         /*content: ""*/
    /*}*/
    /*.home:before, .section_navermusic .logo, .section_vibe .title {*/
        /*background-image: url(https://vibe.naver.com/20220811112716_resources/img/sp_navermusic.ad2c9af8.png);*/
        /*background-image: -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent)), url(https://vibe.naver.com/20220811112716_resources/img/sp_navermusic.596c58d6.svg);*/
        /*background-image: linear-gradient(transparent, transparent), url(https://vibe.naver.com/20220811112716_resources/img/sp_navermusic.596c58d6.svg);*/
        /*background-size: 361px 357px*/
    /*}*/
    .home.without_player .container_wrap  {
        max-width: none
    }
    .container_wrap  {
        max-width: 1920px;
        margin: 0 auto
    }
    .container_wrap.membership  {
        min-height: 100vh;
        background-color: #fbfbfb
    }

</style>
