<template>
  <div class="projects">
    <h1 class="page-header">PROJECTS</h1>
    <b-container class="projects-container">
      <Project v-for="p in projects" 
        :key="p.title"
        :title="p.title"
        :text="p.text"
        :repo="p.repo"
        :langs="p.langs"
        class="mx-3"
      />
    </b-container>
    <b-container>
      <p class="mt-5 text-center">
        Of course, these are not all my projects.
        <br/>
        Take a look at my GitHub profile, where I host the code of the most of my projects.
      </p>
      <div class="mt-4 d-flex">
        <a class="mx-auto gh-link" href="https://github.com/zekroTJA" target="_blank">
          <img src="../assets/gh-logo-120x120.png" />
        </a>
      </div>
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
          text: 'A feature rich Discord sound board with web interface and ' +
            'a fully documented REST and web socket API.',
          repo: 'https://github.com/zekroTJA/yuri2',
          langs: ['GO', 'JS'],
        },
        {
          title: 'SHINPURU',
          text: 'A feature rich general purpose discord bot wich provides ' + 
            'moderative and fun features for Disocord guilds.',
          repo: 'https://github.com/zekroTJA/slms',
          langs: ['GO'],
        },
        {
          title: 'SLMS',
          text: 'Fast and easy short link service with a dynamic web ' +
            'front end for managing and analysing and a stand-alone ' + 
            'back end written in go.',
          repo: 'https://github.com/zekroTJA/shinpuru',
          langs: ['GO', 'VUE', 'JS'],
        },
        {
          title: 'ITSFRIDAY',
          text: 'Twitter API application for spreading friday-happiness to ' +
            'your Twitter followers natively using the Twitter REST API.',
          repo: 'https://github.com/zekroTJA/itsfriday',
          langs: ['PYTHON'],
        },
        {
          title: 'DISCORDJS-CMDS',
          text: 'Powerfull discord.js commands extension with >5k npm downloads.',
          repo: 'https://github.com/zekroTJA/discordgo-cmds',
          langs: ['JS'],
        },
        {
          title: 'MEAUTOSD',
          text: 'One of my older projects: A tool to shut down after Adobe ' +
            'Media Encoder queue.',
          repo: 'https://github.com/zekroTJA/meautosd',
          langs: ['C#'],
        },
      ]
    }
  },
}
</script>

<style scoped>
  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
  }

  .projects {
    margin-top: 120px;
  }

  .page-header {
    margin-bottom: 50px;
  }

  .projects-container {
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
  }

  .gh-link {
    opacity: .9;

    transition: all .25s ease-in-out;
  }

  .gh-link:hover {
    opacity: 1;
    transform: scale(1.05);
  }
</style>
