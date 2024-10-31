// src/router.js
import Vue from 'vue';
import Router from 'vue-router';
import SignupPage from './components/SignupPage.vue';
import LoginPage from './components/LoginPage.vue';
import LogoutLink from './components/LogoutLink.vue';

Vue.use(Router);

const routes = [
  { path: '/signup', component: SignupPage },
  { path: '/login', component: LoginPage },
  { path: '/logout', component: LogoutLink },
];

const router = new Router({
  mode: 'history', // Use HTML5 history mode for cleaner URLs
  routes,
});

export default router;


// THIS FILE WAS CREATED AND SYTAX WAS COPIED FROM CHAT GPT