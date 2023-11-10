import Vue from 'vue';
import VueRouter from 'vue-router';

import IndexOne from '../pages/indices/Index'
import AnnouncementPage from '../pages/announcement/AnnouncementPage'
import AnnouncementDetailPage from '../pages/announcement/AnnouncementDetailPage';
import FaqPage from '../pages/utilities/FaqPage';
import Page404 from '../pages/utilities/Page404';
import GalleryPage from '../pages/GalleryPage';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: IndexOne,
        meta: { title: 'E-SEA'}
    },
    {
        path: '/404',
        name: '404',
        component: Page404,
        meta: { title: 'Not Found - E-SEA'}
    },
    {
        path: '/announcement',
        name: 'announcement',
        component: AnnouncementPage,
        meta: { title: 'Announcement - E-sea'}
    },
    {
        path: '/announcement/:slug',
        name: 'announcement-detail',
        component: AnnouncementDetailPage,
        meta: { title: 'Announcement - E-sea'}
    },
    {
        path: '/gallery',
        name: 'gallery',
        component: GalleryPage,
        meta: { title: 'Gallery - E-SEA'}
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
            const element = document.getElementById(to.meta.anchor);
            if (element) {
                return window.scrollTo({
                    top: element.offsetTop,
                    behavior: 'smooth'
                });
            }
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return {x: 0, y: 0}
        }
    }
});

router.beforeEach((to, from, next) => {
    if (to.meta && to.meta.title)
        document.title = to.meta.title;
    next();
});


export default router;
