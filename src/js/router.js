/** @format */

import Router from 'vue-router';
import Main from '../routes/Main';
import Projects from '../routes/Projects';
import Gear from '../routes/Gear';
import Contact from '../routes/Contact';
import Guild from '../routes/Guild';

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
      path: '/guild',
      name: 'Guild',
      component: Guild,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
  ],
});
