<template>
  <b-container fluid class="header d-flex">
    <img 
      src="../assets/logo-1000x1000.png"
      width="40"
      height="40"
      class="header-img mr-5 my-auto"
    />
    <button 
      v-for="btn in btns" 
      class="header-btn" 
      :class="{ 'active': btn.active }"
      :key="btn.title"
      @click="btnClick(btn)"
    >
      {{ btn.title }}
    </button>
  </b-container>
</template>

<script>

export default {
  name: 'Header',

  props: {
    msg: String
  },

  data() {
    return {
      btns: [
        {
          title: 'HEY',
          window_title: 'zekro Dev | HEY',
          route: '/',
          active: true,
        },
        {
          title: 'PROJECTS',
          window_title: 'zekro Dev | PROJECTS',
          route: '/projects',
          active: false,
        },
        {
          title: 'GEAR',
          window_title: 'zekro Dev | GEAR',
          route: '/gear',
          active: false,
        },
        {
          title: 'CONTACT',
          window_title: 'zekro Dev | CONTACT',
          route: '/contact',
          active: false,
        },
      ],
    };
  },

  methods: {
    btnClick(btn) {
      this.$router.push(btn.route);
      window.document.title = btn.window_title;
    },
  },

  watch: {
    $route(to, from) {
      var e = this.btns.find((e) => to.path === e.route);
      if (e) e.active = true;
      e = this.btns.find((e) => from.path === e.route);
      if (e) e.active = false;
    }
  }
}
</script>

<style scoped>
  .header {
    position: fixed;
    top: 0px;
    z-index: 5;
    color: white !important;
    background-color: var(--c-bg-header) !important;
    font-family: 'Montserrat', sans-serif;
  }

  .header-btn {
    cursor: pointer;
    color: white;
    border-style: none;
    margin: 0;
    margin: auto 0;
    padding: 24px 24px;
    font-size: 18px;
    background-color: rgba(0, 0, 0, 0);

    transition: all .25s ease-in-out;
  }

  .active {
    background-color: rgba(0, 0, 0, 0.15);
  }

  .header-btn:hover {
    background-color: rgba(0, 0, 0, 0.25);
  }

  @media screen and (max-width: 600px) {
    .header {
      display: block !important;
      padding: 0;
    }

    .header-btn {
      width: 100%;
      margin: 0;
      padding: 5px 0px;
    }

    .header-img {
      display: none;
    }
  }
</style>
