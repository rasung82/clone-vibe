import { createApp } from 'vue'
import App from './App.vue'


/**
 * CSS는 VIBE 사이트에서 app, commom.css를 각가 다운받아서 가져왔다.
 *
 * app.css 는 각 컴포넌트의 style을 번들 시 하나와 파일로 합쳐진 파일
 * commom.css는 공통 css 인 듯 보이지만,
 * 실제 중복되는 style이 많아서 정화하지는 않아 보인다.
 */

// import './styles/app.css'
import './styles/common.css'


createApp(App).mount('#app');
