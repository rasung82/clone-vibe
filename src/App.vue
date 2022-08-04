<template>
    <home-container />
</template>


<script>
import HomeContainer from './containers/HomeContainer';

    export default {
        name: 'App',
        components: {
            HomeContainer
        }
    }
</script>

<style>
    .wrap {
        height: 100%
    }

    html:not([data-platform*=mobile]) a.section_title:hover {
        text-decoration: underline
    }

    body, button, dd, div, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, input, legend, li, ol, p, table, td, textarea, th, ul {
        margin: 0;
        padding: 0
    }

    body, input, select, table, textarea {
        font-family: -apple-system, BlinkMacSystemFont, AppleSDGothicNeo, Helvetica, "맑은 고딕", "Malgun Gothic", 돋움, Dotum, sans-serif;
        font-size: 14px;
        line-height: 1.25em
    }

    body {
        -webkit-text-size-adjust: none
    }

    body, html {
        height: 100%
    }

    table {
        border-collapse: collapse
    }

    fieldset, img {
        border: 0
    }

    img {
        vertical-align: top
    }

    li {
        list-style: none
    }

    address, em {
        font-style: normal
    }

    a {
        text-decoration: none
    }

    button {
        cursor: pointer;
        border-radius: 0
    }

    body {
        -ms-overflow-style: -ms-autohiding-scrollbar
    }

</style>
