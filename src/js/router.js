/** @format */

import Router from 'vue-router';
import Main from '../pages/Main';
import Projects from '../pages/Projects';

export default new Router({
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
  ],
});
