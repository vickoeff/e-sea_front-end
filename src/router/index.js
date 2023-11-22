import Vue from 'vue';
import VueRouter from 'vue-router';

import IndexOne from '../pages/indices/Index'
import AnnouncementPage from '../pages/announcement/AnnouncementPage'
import AnnouncementDetailPage from '../pages/announcement/AnnouncementDetailPage';
import Page404 from '../pages/utilities/Page404';
import GalleryPage from '../pages/GalleryPage';
import config from '../config';
import axios from 'axios';

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

router.beforeEach(async (to, from, next) => {
    const {data} = await axios.get(`${config.baseApiUrl}/company-profile/profile/e-sea`);

    if (to.meta && to.meta.title && data)
        document.title = data.title_web ? data.title_web : to.meta.title;

        
    if (data.favicon) {
        const links = document.querySelectorAll("[rel='icon']")
        links.forEach((link) => {
            link.setAttribute('href', `${config.baseApiUrl}/company-profile/${data.favicon}`)
        })
    }

    next();
});


export default router;
