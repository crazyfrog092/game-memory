import Vue from 'vue';
import VueRouter from 'vue-router';
import main from '@/views/index.vue';
import game from '@/views/game.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: main,
    meta: {
      layout: 'empty-layout',
    },
  },
  {
    path: '/game',
    name: 'Game',
    component: game,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
