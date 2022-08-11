<template>
    <ul role="menu" class="menu_list">
        <li role="" class="menu_item" v-for="menu in menus" :key="menu.menuId">
            <a href="#" role="" class="link_menu" :class="setClass(menu.menuId)">
                <span class="text">
                    <span class="blind"> {{ menu.menuName }}</span>
                </span>
            </a>
        </li>
    </ul>
</template>


<script setup>
    /**
     * Vue 3.0 에 새롭게 추가된 composition-api, setup  사용해 보도록 한다.
     * 아직 잘 모르겟다 ;
     *
     */
    import { defineProps, onMounted } from 'vue';

    // Define props
    const props = defineProps({
        menus: Array,
    });

    // Set class style
    const setClass = (menuId) => {
        console.log('setClass...', menuId);

        switch (menuId) {
            case 1001:
                return 'link_today';
            case 1002:
                return 'link_chart';
            case 1003:
                return 'link_newalbum';
            case 1004:
                return 'link_dj';
            case 1005:
                return 'link_mag';
            case 1006:
                return 'link_monthly';
            default:
                return '';

        }
    };

    onMounted( () => console.log('mounted...') );

    console.log(props.menus);
</script>


<style>
    .ly_menu .menu_list {
        margin: 24px 0
    }
    .ly_menu .btn_close:after, .ly_menu .extra_menu_m .link_about_m:before, .ly_menu .extra_menu_m .link_account_m:before, .ly_menu .extra_menu_m .link_comingsoon_m:before, .ly_menu .extra_menu_m .link_login_m:before, .ly_menu .extra_menu_m .link_logout_m:before, .ly_menu .extra_menu_m .link_mymembership_m:before, .ly_menu .extra_menu_m .link_notice_m:before, .ly_menu .extra_menu_m .link_review_m.on:before, .ly_menu .extra_menu_m .link_review_m:before, .ly_menu .extra_menu_m .link_vibemembership_m.on:before, .ly_menu .extra_menu_m .link_vibemembership_m:before, .ly_menu .floating_area_m .link_subscribe:before, .ly_menu .link_chart.on .text, .ly_menu .link_chart.on:before, .ly_menu .link_chart .text, .ly_menu .link_chart:before, .ly_menu .link_dj.on .text, .ly_menu .link_dj.on:before, .ly_menu .link_dj .text, .ly_menu .link_dj:before, .ly_menu .link_extra.link_about:before, .ly_menu .link_extra.link_comingsoon:before, .ly_menu .link_extra.link_review:before, .ly_menu .link_extra.link_vibemembership.on:before, .ly_menu .link_extra.link_vibemembership:before, .ly_menu .link_library.on .text, .ly_menu .link_library.on:before, .ly_menu .link_library .text, .ly_menu .link_library:before, .ly_menu .link_mag.on .text, .ly_menu .link_mag.on:before, .ly_menu .link_mag .text, .ly_menu .link_mag:before, .ly_menu .link_monthly.on .text, .ly_menu .link_monthly.on:before, .ly_menu .link_monthly .text, .ly_menu .link_monthly:before, .ly_menu .link_musician_league:after, .ly_menu .link_newalbum.on .text, .ly_menu .link_newalbum.on:before, .ly_menu .link_newalbum .text, .ly_menu .link_newalbum:before, .ly_menu .link_newaudio:after, .ly_menu .link_onstage.now:after, .ly_menu .link_onstage:after, .ly_menu .link_settlement2021:after, .ly_menu .link_today.on .text, .ly_menu .link_today.on:before, .ly_menu .link_today .text, .ly_menu .link_today:before, .ly_menu .link_wheresmymoney:after, .ly_menu.on .link_chart.on .text, .ly_menu.on .link_chart.on:before, .ly_menu.on .link_chart .text, .ly_menu.on .link_chart:before, .ly_menu.on .link_dj.on .text, .ly_menu.on .link_dj.on:before, .ly_menu.on .link_dj .text, .ly_menu.on .link_dj:before, .ly_menu.on .link_library.on .text, .ly_menu.on .link_library.on:before, .ly_menu.on .link_library .text, .ly_menu.on .link_library:before, .ly_menu.on .link_mag.on .text, .ly_menu.on .link_mag.on:before, .ly_menu.on .link_mag .text, .ly_menu.on .link_mag:before, .ly_menu.on .link_monthly.on .text, .ly_menu.on .link_monthly.on:before, .ly_menu.on .link_monthly .text, .ly_menu.on .link_monthly:before, .ly_menu.on .link_newalbum.on .text, .ly_menu.on .link_newalbum.on:before, .ly_menu.on .link_newalbum .text, .ly_menu.on .link_newalbum:before, .ly_menu.on .link_today.on .text, .ly_menu.on .link_today.on:before, .ly_menu.on .link_today .text, .ly_menu.on .link_today:before, .ly_menu .profile_m .img_wrap .default_thumb, .white_theme .ly_menu .profile_m .img_wrap .default_thumb {
        background-image: url(https://vibe.naver.com/20220811112716_resources/img/sp_topbar.f9766c07.png);
        background-image: -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent)), url(https://vibe.naver.com/20220811112716_resources/img/sp_topbar.dd7bf0de.svg);
        background-image: linear-gradient(transparent, transparent), url(https://vibe.naver.com/20220811112716_resources/img/sp_topbar.dd7bf0de.svg);
        background-size: 671px 626px;
    }
    @media (max-width: 767px) {
        .ly_menu .menu_list {
            margin: 24px 0 14px
        }
    }
    .ly_menu .menu_item + .menu_item {
        margin-top: 4px
    }
    .ly_menu .link_menu {
        display: block;
        height: 24px;
        padding: 6px
    }
    .ly_menu .link_menu:before {
        display: inline-block;
        margin-right: 9px;
        opacity: .8;
        vertical-align: top;
        content: ""
    }
    @media (max-width: 767px) {
        .ly_menu .link_menu:before {
            margin-right: 10px
        }
    }
    .ly_menu .link_menu .text {
        display: inline-block;
        margin-top: 1px;
        vertical-align: top;
        opacity: .8
    }
    .ly_menu .link_menu.on .text, .ly_menu .link_menu.on:before {
        opacity: 1
    }
    html:not([data-platform*=mobile]) .ly_menu .link_menu.on:hover {
        opacity: .8
    }
    .ly_menu .link_menu:hover .text, .ly_menu .link_menu:hover:before {
        opacity: 1
    }


    .ly_menu .link_today .text {
        background-position: -60px -541px;
        width: 48px;
        height: 20px
    }
    .ly_menu .link_today.on .text {
        background-position: -4px -541px;
        width: 48px;
        height: 20px;
    }
    .ly_menu .link_today:before {
        background-position: -312px -541px;
        width: 20px;
        height: 20px;
    }
    .ly_menu .link_today.on:before {
        background-position: -116px -541px;
        width: 20px;
        height: 20px
    }
    .ly_menu .link_chart .text {
        background-position: -628px -140px;
        width: 33px;
        height: 20px;
    }
    .ly_menu .link_chart.on .text {
        background-position: -594px -140px;
        width: 33px;
        height: 20px
    }
    .ly_menu .link_chart:before {
        background-position: -142px -569px;
        width: 20px;
        height: 20px;
    }
    .ly_menu .link_chart.on:before {
        background-position: -172px -512px;
        width: 20px;
        height: 20px
    }
    .ly_menu .link_newalbum .text {
        background-position: -544px -153px;
        width: 64px;
        height: 20px;
    }
    .ly_menu .link_newalbum.on .text {
        background-position: -512px -125px;
        width: 64px;
        height: 20px
    }
    .ly_menu .link_newalbum:before {
        background-position: -592px -541px;
        width: 20px;
        height: 20px;
    }
    .ly_menu .link_newalbum.on:before {
        background-position: -396px -512px;
        width: 20px;
        height: 20px
    }
    .ly_menu .link_dj .text {
        background-position: -316px -371px;
        width: 91px;
        height: 20px
    }
    .ly_menu .link_dj.on .text {
        background-position: -4px -369px;
        width: 91px;
        height: 20px
    }
    .ly_menu .link_dj:before {
        background-position: -480px -541px;
        width: 20px;
        height: 20px
    }
    .ly_menu .link_dj.on:before {
        background-position: -200px -512px;
        width: 20px;
        height: 20px
    }
    .ly_menu .link_mag .text {
        background-position: -4px -455px;
        width: 88px;
        height: 20px;
        margin-top: 0
    }
    .ly_menu .link_mag.on .text {
        background-position: -100px -426px;
        width: 88px;
        height: 20px
    }
    .ly_menu .link_mag:before {
        background-position: -564px -541px;
        width: 20px;
        height: 20px
    }
    .ly_menu .link_mag.on:before {
        background-position: -144px -512px;
        width: 20px;
        height: 20px
    }
    .ly_menu .link_monthly .text {
        background-position: -380px -455px;
        width: 84px;
        height: 20px;
        margin-top: 0
    }
    .ly_menu .link_monthly.on .text {
        background-position: -196px -426px;
        width: 84px;
        height: 20px
    }
    .ly_menu .link_monthly:before {
        background-position: -368px -541px;
        width: 20px;
        height: 20px
    }
    .ly_menu .link_monthly.on:before {
        background-position: -256px -512px;
        width: 20px;
        height: 20px
    }
    .ly_menu .link_library .text {
        background-position: -454px -454px;
        width: 49px;
        height: 20px
    }
    .ly_menu .link_library.on .text {
        background-position: -337px -188px;
        width: 49px;
        height: 20px
    }
    .ly_menu .link_library:before {
        background-position: -60px -512px;
        width: 20px;
        height: 20px
    }
    .ly_menu .link_library.on:before {
        background-position: -88px -512px;
        width: 20px;
        height: 20px
    }
</style>
