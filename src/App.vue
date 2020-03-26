<template>
  <div id="app">
    <Header />
    <div class="router-cont">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
/** @format */

import './css/consts.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Header from './components/Header';
import Router from './js/router';

export default {
  name: 'app',

  router: Router,

  components: {
    Header,
  },
};
</script>

<style>
/** @format */

@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap');
@import url('https://fonts.googleapis.com/css?family=Montserrat:200,300,400&display=swap');

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--c-bg-main);
  font-family: 'Roboto', sans-serif;
}

div {
  color: white;
}

button {
  background-color: transparent;
  border-style: none;
}

button:focus {
  outline: 0;
  -moz-outline: 0;
}

a,
a:hover {
  text-decoration: none;
  color: var(--c-highlight);
}

h1,
h2,
h3 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
}

.router-cont {
  margin-bottom: 200px;
}

.font-montserrat {
  font-family: 'Montserrat', sans-serif;
}

.page-header {
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
}
</style>
