<template>
  <a :href="repo" target="_blank">
    <div class="project">
      <h1>{{ title }}</h1>
      <p>{{ text }}</p>
      <div>
        <div :class="langClass"></div>
        <p>{{ lang }}</p>
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
    lang: String,
  },

  computed: {
    langClass() {
      var c = {};
      c[`lang-${this.lang.toLowerCase()}`] = true;
      return c;
    }
  }
}
</script>

<style scoped>
  .project {
    position: relative;
    width: 500px;
    height: 200px;
    background-color: var(--c-bg-sec);
    border-radius: 10px;
    padding: 15px 20px;

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

  .project > div {
    position: absolute;
    display: flex;
    bottom: 10px;
  }

  .project > div > p {
    position: relative;
    top: -3px;
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    padding: 0px;
    margin: 0px;
  }

  .project > div > div {
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 7px;
  }


  /* LANG COLOR CLASSES */
  .lang-javascript {
    background-color: #FFEB3B !important;
  }

  .lang-go {
    background-color: #00BCD4 !important;
  }
  /* ------------------ */
</style>
