<template>
    <header id="header" class="header gradation hide_banner">
        <logo />
        <div class="my_menu">
            <profile />
            <search />
        </div>

    </header>

</template>


<script>
/**
 * 메뉴는 프로파일, 검색, 기본 메뉴, 플로팅 영역 메뉴가 존재한다.
 * 로그인하면 기본 메뉴에 '보관함'이 추가된다.
*/
import Logo from '../../components/menu/Logo';
import Profile from '../../components/menu/Profile'
import Search from '../../components/menu/Search'

    export default {
        name: 'MenuContainer',
        components: {
            Logo,
            Profile,
			Search
        }
    }
</script>

<style>
    .header .recent_keyword_area .keyword_title:after, .header:after {
        display: block;
        content: "";
        clear: both
    }

    .header .input_search::-ms-clear, .header .input_search::-ms-reveal {
        display: none;
        width: 0;
        height: 0
    }

    .header .input_search::-webkit-search-cancel-button, .header .input_search::-webkit-search-decoration, .header .input_search::-webkit-search-results-button, .header .input_search::-webkit-search-results-decoration {
        display: none
    }

    .header .btn_close_search:after, .header .btn_menu:after, .header .btn_search:after, .header .profile .nickname:after, .header .recent_keyword_area .btn_delete:after {
        display: inline-block;
        vertical-align: top;
        content: ""
    }

    .header .btn_close_input:before, .header .btn_close_search:after, .header .btn_menu:after, .header .btn_search:after, .header .floating_area .link_desktopapp, .header .floating_area .link_desktopapp:hover, .header .floating_area .link_subscribe, .header .icon_search, .header .link_login:before, .header .profile .img_wrap .default_thumb, .header .profile .nickname:after, .header .recent_keyword_area .btn_delete:after {
        background-image: url(https://vibe.naver.com/20220802152450_resources/img/sp_topbar.f9766c07.png);
        background-image: -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent)), url(https://vibe.naver.com/20220802152450_resources/img/sp_topbar.b16613cd.svg);
        background-image: linear-gradient(transparent, transparent), url(https://vibe.naver.com/20220802152450_resources/img/sp_topbar.b16613cd.svg);
        background-size: 637px 597px
    }

    .header {
        position: fixed;
        top: 0;
        bottom: 81px;
        width: 245px;
        z-index: 10100;
        background-color: #000;
        border-right: 1px solid hsla(0, 0%, 100%, .1)
    }

    @media (max-width: 1919px) {
        .header {
            left: 0
        }
    }

    @media (max-width: 1279px) {
        .header {
            width: 225px
        }
    }

    @media (max-width: 767px) {
        .header {
            right: 0;
            bottom: auto;
            width: auto;
            height: 67px;
            border-right: none
        }
    }

    @media (max-width: 593px) {
        .header {
            height: 64px
        }
    }

    @media (max-width: 767px) {
        .header .logo {
            float: left
        }
    }

    .header .link_logo {
        display: inline-block;
        vertical-align: top
    }

    @media (max-width: 767px) {
        .header .link_logo {
            height: 67px
        }
    }

    @media (max-width: 593px) {
        .header .link_logo {
            height: 64px
        }
    }

    .header .link_logo:after {
        background-position: -248px -321px;
        width: 114px;
        height: 20px;
        display: block;
        margin: 27px 10px 26px 24px;
        content: ""
    }

    @media (max-width: 767px) {
        .header .link_logo:after {
            margin: 24px 10px 0 20px
        }
    }

    @media (max-width: 593px) {
        .header .link_logo:after {
            margin: 22px 15px 0 20px
        }
    }

    .header .btn_search {
        display: none
    }

    @media (max-width: 767px) {
        .header .btn_search {
            display: block;
            position: absolute;
            right: 53px;
            height: 67px
        }
    }

    @media (max-width: 593px) {
        .header .btn_search {
            height: 64px
        }
    }

    @media (max-width: 374px) {
        .header .btn_search {
            right: 52px
        }
    }

    .header .btn_search:after {
        background-position: -480px -512px;
        width: 20px;
        height: 20px
    }

    @media (max-width: 767px) {
        .header .btn_search:after {
            margin: 24px 11px 0
        }
    }

    @media (max-width: 593px) {
        .header .btn_search:after {
            margin: 22px 11px 0
        }
    }

    @media (max-width: 374px) {
        .header .btn_search:after {
            margin: 22px 9px 0
        }
    }

    .header .btn_menu {
        display: none;
        float: right;
        height: 67px;
        text-align: center
    }

    @media (max-width: 767px) {
        .header .btn_menu {
            display: block;
            height: 64px
        }
    }

    .header .btn_menu:after {
        background-position: -355px -160px;
        width: 22px;
        height: 16px;
        margin: 24px 20px 0 10px
    }

    @media (max-width: 767px) {
        .header .btn_menu:after {
            margin: 24px 20px 0 11px
        }
    }

    @media (max-width: 374px) {
        .header .btn_menu:after {
            margin: 23px 20px 0 12px
        }
    }

    .header .my_menu {
        position: absolute;
        top: 73px;
        right: 0;
        bottom: 0;
        left: 0;
        padding: 0 16px 0 24px;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: -ms-autohiding-scrollbar
    }

    .header .my_menu::-webkit-scrollbar {
        width: 8px
    }

    .header .my_menu::-webkit-scrollbar-thumb, .header .my_menu::-webkit-scrollbar-track {
        border-radius: 5px
    }

    @media (max-width: 767px) {
        .header .my_menu {
            top: 0;
            right: 95px;
            left: 141px;
            height: 67px;
            padding: 0;
            overflow-y: visible
        }
    }

    @media (max-width: 593px) {
        .header .my_menu {
            height: 64px
        }
    }

    html:not([data-platform*=mobile]) .header .my_menu:hover::-webkit-scrollbar-track {
        background: hsla(0, 0%, 84.3%, .23)
    }

    html:not([data-platform*=mobile]) .header .my_menu:hover::-webkit-scrollbar-thumb {
        background: hsla(0, 0%, 53.7%, .6)
    }

    html[data-platform*=mobile] .header .my_menu {
        -webkit-overflow-scrolling: auto
    }

    @media (max-width: 767px) {
        html[data-platform*=mobile] .header .my_menu {
            -webkit-overflow-scrolling: touch
        }
    }

    .header .link_goapp {
        display: none
    }

    @media (max-width: 767px) {
        .header .link_goapp {
            display: block;
            float: right;
            padding: 0 11px;
            line-height: 67px
        }
    }

    @media (max-width: 359px) {
        .header .link_goapp {
            display: none
        }
    }

    .header .link_goapp .ticket {
        display: inline-block;
        -webkit-transform: translateY(-1px);
        transform: translateY(-1px);
        font-size: 15px;
        font-weight: 700;
        line-height: 19px;
        color: #fff
    }


    @media (max-width: 1279px) {
        .header .profile_area {
            width: 177px
        }
    }

    @media (max-width: 767px) {
        .header .profile_area {
            display: none
        }
    }

    .header .profile {
        display: block;
        padding: 11px 4px
    }

    .header .profile .img_wrap {
        float: left;
        width: 30px;
        height: 30px;
        margin-right: 10px;
        overflow: hidden;
        border-radius: 50%
    }

    .header .profile .img_wrap img {
        width: 100%
    }

    .header .profile .img_wrap .default_thumb {
        background-position: -594px -168px;
        width: 30px;
        height: 30px;
        display: inline-block
    }

    .header .profile .nickname {
        height: 30px;
        overflow: hidden;
        white-space: nowrap
    }

    .header .profile .nickname:after {
        background-position: -626px -259px;
        width: 6px;
        height: 6px;
        margin: 12px 0 0 4px
    }

    @media (max-width: 1279px) {
        .header .profile .nickname:after {
            margin-left: 4px
        }
    }

    .header .profile .text {
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: break-all;
        max-width: 135px;
        opacity: .8;
        font-size: 15px;
        line-height: 28px;
        vertical-align: top;
        color: #fff
    }

    @media (max-width: 1279px) {
        .header .profile .text {
            max-width: 115px
        }
    }

    html:not([data-platform*=mobile]) .header .profile .text:hover {
        opacity: 1
    }

    .header .ly_option {
        top: 44px;
        right: 0;
        width: 156px;
        background-color: #222
    }

    @media (max-width: 767px) {
        .header .ly_option {
            display: none
        }
    }

    .header .ly_option .ly_item {
        color: #fff
    }

    .header .ly_option .ly_item:active, html:not([data-platform*=mobile]) .header .ly_option .ly_item:hover {
        background-color: hsla(0, 0%, 100%, .07)
    }

    .header .link_login {
        display: block;
        font-size: 15px;
        padding: 11px 0;
        line-height: 19px;
        color: #999
    }

    .header .link_login .text, .header .link_login:before {
        display: inline-block;
        vertical-align: middle
    }

    .header .link_login:before {
        background-position: -594px -168px;
        width: 30px;
        height: 30px;
        margin: 0 10px 0 6px;
        border-radius: 50%;
        content: ""
    }

    .header .search_area {
        position: relative;
        width: 197px;
        margin-top: 20px;
        border-radius: 4px
    }

    @media (max-width: 1279px) {
        .header .search_area {
            width: 177px
        }
    }

    @media (max-width: 767px) {
        .header .search_area {
            display: none;
            width: auto;
            margin-top: 0;
            padding: 7px 0;
            background-color: #000
        }
    }

    .header .input_area {
        position: relative;
        display: block
    }

    @media (max-width: 767px) {
        .header .input_area {
            padding: 0 61px 0 10px
        }
    }

    .header .input_search {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: break-all;
        padding: 10px 36px 10px 44px;
        width: 100%;
        height: 40px;
        border: 0;
        background-color: #1a1a1a;
        border-radius: 4px;
        font-size: 17px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: -.3px;
        color: #fff;
        -webkit-transition: background-color .2s ease;
        transition: background-color .2s ease;
        caret-color: #ff0050;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none
    }

    @media (max-width: 767px) {
        .header .input_search {
            height: 50px;
            padding: 11px 15px 11px 40px;
            background-color: #000;
            font-size: 22px;
            line-height: 28px;
            -webkit-transition: none;
            transition: none
        }
    }

    .header .input_search::-webkit-input-placeholder {
        font-size: 17px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: -.3px;
        color: hsla(0, 0%, 80%, .4)
    }

    .header .input_search::-moz-placeholder {
        font-size: 17px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: -.3px;
        color: hsla(0, 0%, 80%, .4)
    }

    .header .input_search:-ms-input-placeholder {
        font-size: 17px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: -.3px;
        color: hsla(0, 0%, 80%, .4)
    }

    .header .input_search::-ms-input-placeholder {
        font-size: 17px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: -.3px;
        color: hsla(0, 0%, 80%, .4)
    }

    .header .input_search::placeholder {
        font-size: 17px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: -.3px;
        color: hsla(0, 0%, 80%, .4)
    }

    @media (max-width: 767px) {
        .header .input_search::-webkit-input-placeholder {
            font-size: 22px;
            line-height: 28px
        }

        .header .input_search::-moz-placeholder {
            font-size: 22px;
            line-height: 28px
        }

        .header .input_search:-ms-input-placeholder {
            font-size: 22px;
            line-height: 28px
        }

        .header .input_search::-ms-input-placeholder {
            font-size: 22px;
            line-height: 28px
        }

        .header .input_search::placeholder {
            font-size: 22px;
            line-height: 28px
        }
    }

    .header .input_search:focus {
        outline: 0;
        -webkit-box-shadow: 0 0 4px 0 #0c96ff;
        box-shadow: 0 0 4px 0 #0c96ff;
        background-color: #262626
    }

    @media (max-width: 767px) {
        .header .input_search:focus {
            border: 1px solid #28699a;
            -webkit-box-shadow: 0 0 4px 0 #0091ff;
            box-shadow: 0 0 4px 0 #0091ff;
            background-color: #000
        }
    }

    .header .input_search:focus + .icon_search {
        background-position: -424px -512px;
        width: 20px;
        height: 20px
    }

    @media (max-width: 767px) {
        .header .input_search:focus + .icon_search {
            background-position: -480px -512px;
            width: 20px;
            height: 20px
        }
    }

    .header .icon_search {
        background-position: -452px -512px;
        width: 20px;
        height: 20px;
        position: absolute;
        top: 10px;
        left: 13px
    }

    @media (max-width: 767px) {
        .header .icon_search {
            background-position: -480px -512px;
            width: 20px;
            height: 20px;
            top: 15px;
            left: 20px
        }
    }

    .header .btn_close_input {
        display: none;
        position: absolute;
        top: 0;
        right: 0;
        padding: 12px 12px 8px
    }

    .header .btn_close_input:before {
        display: inline-block;
        vertical-align: top;
        content: "";
        background-position: -288px -397px;
        width: 16px;
        height: 16px
    }

    .header .btn_close_input.on {
        display: block
    }

    @media (max-width: 767px) {
        .header .btn_close_input.on {
            display: none
        }
    }

    .header .auto_keyword_area, .header .recent_keyword_area {
        position: fixed;
        top: 197px;
        left: 24px;
        width: 400px;
        z-index: 20;
        padding: 9px 0 8px;
        -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .15);
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .15);
        border-radius: 4px;
        background-color: #262626
    }

    @media (max-width: 767px) {
        .header .auto_keyword_area, .header .recent_keyword_area {
            position: absolute;
            top: 67px;
            right: 0;
            left: 0;
            width: auto;
            padding: 10px 0;
            border-radius: 0;
            -webkit-box-shadow: 0 2px 10px 2px rgba(0, 0, 0, .3);
            box-shadow: 0 2px 10px 2px rgba(0, 0, 0, .3);
            background-color: #222
        }
    }

    @media (max-width: 593px) {
        .header .auto_keyword_area, .header .recent_keyword_area {
            top: 64px
        }
    }

    .header .recent_keyword_area .keyword_title {
        font-weight: 400
    }

    .header .recent_keyword_area .keyword_title .text {
        display: inline-block;
        padding: 13px 0 0 16px;
        font-size: 14px;
        line-height: 17px;
        color: #999;
        vertical-align: top
    }

    @media (max-width: 767px) {
        .header .recent_keyword_area .keyword_title .text {
            padding-left: 19px;
            font-size: 15px;
            line-height: 20px
        }
    }

    .header .recent_keyword_area .btn_delete_all {
        float: right;
        padding: 13px 17px 16px;
        font-size: 14px;
        line-height: 17px;
        color: #666
    }

    @media (max-width: 767px) {
        .header .recent_keyword_area .btn_delete_all {
            padding: 15px 20px;
            font-size: 14px;
            line-height: 20px
        }
    }

    .header .recent_keyword_area .keyword_list_item {
        display: table;
        width: 100%;
        table-layout: fixed
    }

    .header .recent_keyword_area .recent_keyword {
        display: table-cell;
        padding: 14px 0 13px 16px;
        vertical-align: middle
    }

    @media (max-width: 767px) {
        .header .recent_keyword_area .recent_keyword {
            padding: 15px 20px
        }
    }

    .header .recent_keyword_area .recent_keyword .text {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: break-all;
        font-size: 16px;
        line-height: 19px;
        color: #fff
    }

    @media (max-width: 767px) {
        .header .recent_keyword_area .recent_keyword .text {
            font-size: 15px;
            line-height: 20px
        }
    }

    .header .recent_keyword_area .btn_delete {
        display: table-cell;
        width: 49px;
        height: 46px;
        text-align: center;
        vertical-align: middle
    }

    @media (max-width: 767px) {
        .header .recent_keyword_area .btn_delete {
            padding-right: 1px;
            opacity: 1
        }
    }

    .header .recent_keyword_area .btn_delete:after {
        background-position: -576px -440px;
        width: 9px;
        height: 9px;
        margin: 19px 20px 18px
    }

    @media (max-width: 767px) {
        .header .recent_keyword_area .btn_delete:after {
            margin: 21px 20px 20px
        }
    }

    .header .keyword_list_item:hover {
        background-color: hsla(0, 0%, 100%, .07)
    }

    html[data-platform*=mobile] .header .keyword_list_item:hover {
        background-color: transparent
    }

    .header .keyword_list_item:hover .auto_keyword:before {
        opacity: 1
    }

    html[data-platform*=mobile] .header .keyword_list_item:hover .auto_keyword:before {
        opacity: .5
    }

    @media (max-width: 767px) {
        .header .keyword_list_item:hover .auto_keyword:before {
            opacity: 1
        }
    }

    .header .auto_keyword {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: break-all;
        padding: 14px 17px 13px 16px;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: -.3px;
        color: #999
    }

    @media (max-width: 767px) {
        .header .auto_keyword {
            padding: 15px 20px;
            font-size: 17px;
            line-height: 20px
        }
    }

    .header .auto_keyword strong {
        color: #fff;
        font-weight: 400
    }

    .header .btn_close_search {
        display: none;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 60px;
        text-align: center
    }

    .header .btn_close_search:before {
        display: none;
        position: absolute;
        top: 24px;
        bottom: 23px;
        left: -1px;
        width: 1px;
        background-color: #3a3a3a;
        content: ""
    }

    @media (max-width: 767px) {
        .header .btn_close_search:before {
            display: block
        }
    }

    @media (max-width: 593px) {
        .header .btn_close_search:before {
            top: 22px;
            bottom: 22px
        }
    }

    .header .btn_close_search:after {
        background-position: -536px -512px;
        width: 20px;
        height: 20px;
        margin-top: 24px
    }

    @media (max-width: 767px) {
        .header .btn_close_search:after {
            background-position: -508px -512px;
            width: 20px;
            height: 20px
        }
    }

    @media (max-width: 593px) {
        .header .btn_close_search:after {
            margin-top: 22px
        }
    }

    .header .ly_menu {
        width: 197px
    }

    @media (max-width: 1279px) {
        .header .ly_menu {
            width: 177px
        }
    }

    @media (max-width: 767px) {
        .header .ly_menu {
            display: none;
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            width: auto;
            z-index: 20;
            margin-top: 0;
            padding: 42px 0;
            overflow-y: auto;
            background-color: #000;
            outline: 0
        }

        html[data-platform*=mobile] .header .ly_menu {
            padding: 42px 0 90px
        }

        .header .ly_menu.on {
            display: block
        }
    }

    .header .floating_area {
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        padding: 52px 24px 24px;
        background: -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(34%, #000), to(#000));
        background: linear-gradient(180deg, transparent, #000 34%, #000)
    }

    @media (max-width: 767px) {
        .header .floating_area {
            display: none
        }
    }

    .header .floating_area .link_subscribe {
        background-position: -4px -108px;
        width: 197px;
        height: 44px;
        display: block;
        margin-bottom: 12px;
        opacity: .8
    }

    @media (max-width: 1279px) {
        .header .floating_area .link_subscribe {
            background-position: -209px -108px;
            width: 177px;
            height: 44px
        }

        html[data-platform-detectPc*=mobile] .header .floating_area .link_subscribe {
            background-position: -4px -160px;
            width: 177px;
            height: 50px
        }
    }

    .header .floating_area .link_subscribe.on, .header .floating_area .link_subscribe:hover {
        opacity: 1
    }

    .header .floating_area .link_app {
        display: block;
        border-radius: 4px;
        border: 1px solid hsla(0, 0%, 100%, .2);
        font-size: 14px;
        line-height: 42px;
        text-align: center;
        color: #fff
    }

    @media (max-width: 1279px) {
        .header .floating_area .link_app {
            line-height: 48px
        }
    }

    .header .floating_area .link_app:hover {
        border-color: #fff
    }

    .header .floating_area .link_desktopapp {
        background-position: -4px -56px;
        width: 197px;
        height: 44px;
        display: block
    }

    @media (max-width: 1279px) {
        .header .floating_area .link_desktopapp {
            background-position: -209px -4px;
            width: 177px;
            height: 44px
        }
    }

    .header .floating_area .link_desktopapp:hover {
        background-position: -4px -4px;
        width: 197px;
        height: 44px;
        display: block
    }

    @media (max-width: 1279px) {
        .header .floating_area .link_desktopapp:hover {
            background-position: -209px -56px;
            width: 177px;
            height: 44px
        }
    }

    .header.searching {
        background-color: #000
    }

    .header.searching:after {
        display: block
    }

    @media (max-width: 593px) {
        .header.searching .logo {
            display: none
        }
    }

    @media (max-width: 767px) {
        .header.searching .btn_search {
            display: none
        }
    }

    .header.searching .btn_menu {
        display: none
    }

    @media (max-width: 767px) {
        .header.searching .my_menu {
            right: 0;
            left: 0;
            overflow: visible
        }
    }

    .header.searching .link_goapp {
        display: none
    }

    @media (max-width: 767px) {
        .header.searching .btn_close_search, .header.searching .search_area {
            display: block
        }
    }

    @media (max-width: 767px) {
        .header.gradation {
            top: 60px;
            background-color: transparent;
            background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .5)), to(transparent));
            background-image: linear-gradient(180deg, rgba(0, 0, 0, .5), transparent);
            -webkit-transition: background-color .4s ease-in-out;
            transition: background-color .4s ease-in-out
        }
    }

    .header.gradation.hide_banner {
        top: 0
    }

    .header.gradation.scrolled {
        top: 0;
        background-color: #000;
        background-image: none
    }

    @media (max-width: 767px) {
        .header.gradation_mag {
            background-color: transparent;
            background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .5)), to(transparent));
            background-image: linear-gradient(180deg, rgba(0, 0, 0, .5), transparent);
            -webkit-transition: background-color .4s ease-in-out;
            transition: background-color .4s ease-in-out
        }
    }

    .header.gradation_mag.scrolled {
        top: 0;
        background-color: #000;
        background-image: none
    }

    @media (max-width: 767px) {
        .header.onstage_end {
            background-color: transparent
        }
    }

    @media (max-width: 767px) {
        .header.onstage_end.scrolled {
            background-color: #000;
            -webkit-transition: background-color .4s ease-in-out;
            transition: background-color .4s ease-in-out
        }
    }

</style>
