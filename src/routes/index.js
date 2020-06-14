import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import ListView from '../views/ListView.vue';
import bus from '../utils/bus.js';
import { store } from '../store/index.js';
// import createListView from '../views/CreateListView.js';

import AsyncAwaitView from '../views/others/AsyncAwaitView.vue'
import ChartView from '../views/others/ChartView.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history', // 해시(#)값 제거
    routes: [
        {
            path: '/',
            redirect: '/news',
        },
        {
            // path: url 주소
            path: '/news',
            // component: url 주소로 갔을 때 표시될 컴포넌트
            name: 'news',
            component: ListView,
            // component: createListView('NewsView'),
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                // #1
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        // #5
                        // console.log(5);
                        // bus.$emit('end:spinner'); // mixin에서 처리
                        next();
                    })
                    .catch(error => console.log(error));
            },
        },
        {
            path: '/ask',
            name: 'ask',
            component: ListView,
            // component: createListView('AskView'),
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => next())
                    .catch(error => console.log(error));
            },
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: ListView,
            // component: createListView('JobsView'),
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => next())
                    .catch(error => console.log(error));
            },
        },
        {
            path: '/user/:id',
            component: UserView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_USER', to.params.id)
                    .then(() => next())
                    .catch(error => console.log(error));
            },
        },
        {
            path: '/item/:id',
            component: ItemView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_ITEM', to.params.id)
                    .then(() => next())
                    .catch(error => console.log(error));
            },
        },
        {
            path: '/async-await',
            component: AsyncAwaitView,
        },
        {
            path: '/chart',
            component: ChartView,
        },
    ]
});