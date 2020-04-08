<template>
  <a :href="repo" target="_blank">
    <div class="project">
      <h1>{{ title }}</h1>
      <p>{{ text }}</p>
      <div class="lang-container">
        <div v-for="lang in langs" :key="lang" class="d-flex mr-3">
          <div class="lang-point" :class="getLangClass(lang)"></div>
          <p class="lang-txt">{{ lang }}</p>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
/** @format */

export default {
  name: 'Project',

  props: {
    title: String,
    text: String,
    repo: String,
    langs: Array,
  },

  methods: {
    getLangClass(lang) {
      lang = lang.replace('#', 'sharp');
      lang = lang.replace('+', 'p');
      var c = {};
      c[`lang-${lang.toLowerCase()}`] = true;
      return c;
    },
  },
};
</script>

<style scoped>
/** @format */

.project {
  position: relative;
  max-width: 400px;
  min-width: 400px;
  height: 200px;
  background-color: var(--c-bg-sec);
  border-radius: 10px;
  padding: 15px 20px;
  margin-bottom: 25px;

  transition: all 0.25s ease-in-out;
}

@media screen and (max-width: 420px) {
  .project {
    min-width: 0;
  }
}

.project > h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 30px;
  font-weight: 300;
}

.project:hover {
  transform: scale(1.03);
}

.lang-container {
  position: absolute;
  display: flex;
  bottom: 10px;
  margin-right: 100px;
}

.lang-txt {
  position: relative;
  top: -4px;
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  padding: 0px;
  margin: 0px 0px 0px 0px;
}

.lang-point {
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin-right: 7px;
}

/* LANG COLOR CLASSES */
.lang-js {
  background-color: #ffeb3b !important;
}

.lang-go {
  background-color: #00bcd4 !important;
}

.lang-python {
  background-color: #2979ff !important;
}

.lang-vue {
  background-color: #00bfa5 !important;
}

.lang-csharp {
  background-color: #00e676 !important;
}

.lang-angular {
  background-color: #dd0031 !important;
}

.lang-react {
  background-color: #61dafb !important;
}
/* ------------------ */
</style>
