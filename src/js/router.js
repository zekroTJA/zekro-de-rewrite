/** @format */

import Router from 'vue-router';
import Main from '../pages/Main';
import Projects from '../pages/Projects';
import Gear from '../pages/Gear';
import Contact from '../pages/Contact';

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
    },
    {
      path: '/gear',
      name: 'Gear',
      component: Gear,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
  ],
});
