<template>
  <div class="projects">
    <b-container>
      <h1 class="page-header">PROJECTS</h1>
      <Project v-for="p in projects" 
        :key="p.title"
        :title="p.title"
        :text="p.text"
        :repo="p.repo"
        :lang="p.lang"
      />
    </b-container>
  </div>
</template>

<script>
import Project from '../components/Project';

export default {
  name: 'Projects',

  components: {
    Project,
  },

  props: {
    msg: String
  },

  data() {
    return {
      projects: [
        {
          title: 'YURI 2',
          text: 'A feature rich Discord sound board with web interface and a fully documented REST and web socket API.',
          repo: 'https://github.com/zekroTJA/yuri2',
          lang: 'GO',
        }
      ]
    }
  },
}
</script>

<style scoped>
  .projects {
    margin-top: 120px;
  }

  .page-header {
    margin-bottom: 50px;
  }
</style>
