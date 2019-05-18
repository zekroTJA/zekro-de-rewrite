<template>
  <a :href="repo" target="_blank">
    <div class="project">
      <h1>{{ title }}</h1>
      <p>{{ text }}</p>
      <div class="lang-container">
        <div v-for="lang in langs" 
          :key="lang" 
          class="d-flex mr-3"
        >
          <div
            class="lang-point"
            :class="getLangClass(lang)"
          >
          </div>
          <p class="lang-txt">{{ lang }}</p>
        </div>
      </div>
    </div>
  </a>
</template>

<script>

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
    }
  }
}
</script>

<style scoped>
  .project {
    position: relative;
    max-width: 400px;
    height: 200px;
    background-color: var(--c-bg-sec);
    border-radius: 10px;
    padding: 15px 20px;
    margin-bottom: 25px;

    transition: all .25s ease-in-out;
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
    background-color: #FFEB3B !important;
  }

  .lang-go {
    background-color: #00BCD4 !important;
  }

  .lang-python {
    background-color: #2979FF !important;
  }

  .lang-vue {
    background-color: #00BFA5 !important;
  }

  .lang-csharp {
    background-color: #00E676 !important;
  }
  /* ------------------ */
</style>
