<template>
    <h1 class="logo">
        <a href="/" class="link_logo router-link-active"><span class="blind">VIBE</span></a>
    </h1>
</template>


<script>
    export default {
        name: 'LogoComponent',
        components: {
        }
    }
</script>

<style>
    .header .link_logo:after {
        background-image: url(https://vibe.naver.com/20220802152450_resources/img/sp_vibe.b4549320.png);
        background-image: -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent)), url(https://vibe.naver.com/20220802152450_resources/img/sp_vibe.5408b1c4.svg);
        background-image: linear-gradient(transparent, transparent), url(https://vibe.naver.com/20220802152450_resources/img/sp_vibe.5408b1c4.svg);
        background-size: 774px 747px
    }
    .blind {
        overflow: hidden;
        position: absolute;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px
    }

</style>