<template>
  <div>
    <div class="main-header">
      <b-container fluid class="header-cont">
        <div class="logo mx-auto text-center">
          <img width="300" height="300" src="../assets/logo-1000x1000.png" />
          <h1 class="font-montserrat mt-3 mb-0">zekro</h1>
          <h2 class="font-montserrat">DEVELOPMENT</h2>
          <button class="down" @click="scrollTo('#about')">
            <p>READ MORE</p>
            <div style="top: -20px;"><img width="80" src="../assets/down-vec.svg"/></div>
            <div style="top: -60px;"><img width="80" src="../assets/down-vec.svg"/></div>
          </button>
        </div>
      </b-container>
    </div>
    <b-container id="about" class="content mt-6">
      <h1 class="page-header">ABOUT ME</h1>
      <p class="mt-5">
        Hey, my name is Ringo. 👋
        <br><br>
        I am {{ calculateAge(new Date('1998-12-12')) }} years old and a passionate developer and coder since 2013. My collected experience mainly refer to back and front end as well as 
        application and web development.
        <br><br>
        Currently, I am an apprentice at a software security and communication company in germany. Primary, I am working with C# and .NET (Framework and Core), 
        as well as with Go, Node.Js and Java as back end techniques.
        <br><br>
        I have a lot of experiences working with JavaScript <i>(vue.js, react, nodejs, express, electron)</i>, Go <i>(back end API and web socket 
        development, mostly with gorilla webkit or the fasthttp suite)</i> and C# <i>(mostly windows application development)</i>.
        <br>
        Also, I am practiced in working with database techniques like MySql, Cassandra, Postgres, SQLite or MongoDB. Generally, I am working a lot with Linux servers 
        (mostly Debian and some Ubuntu and Arch based distros), so I have also some practice in permission managing of Linux servers, working with container 
        deployment (i.e. Docker) and typical development envoirements like CI or coverage testing.
      </p>
      <h1 class="page-header mt-6">YOUTUBE</h1>
      <p class="text-center mt-4">
        Here you can see the latest video on my <i>(german)</i>&nbsp;
        <a href="https://youtube.com/zekrommaster110" target="_blank" class="text-white">YouTube channel</a>.
      </p>
      <div class="yt-iframe d-flex mt-5">
        <iframe title="My last Youtube videos" src="https://www.youtube-nocookie.com/embed?max-results=1&amp;controls=1&amp;showinfo=0&amp;rel=0&amp;listType=user_uploads&amp;list=zekrommaster110" allowfullscreen></iframe>
      </div>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import { RouterEventBus } from '../js/router-eventbus';

export default {
  name: 'Main',

  props: {
    msg: String
  },

  components: {
  },

  methods: {
    scrollTo(el) {
      var elem = this.$el.querySelector(el);
      if (elem) elem.scrollIntoView();
    },

    calculateAge(birthday) {
      var ageDifMs = Date.now() - birthday.getTime();
      var ageDate = new Date(ageDifMs);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
  },

  mounted() {
    RouterEventBus.$emit('mounted', this.$options.name);
  },
}
</script>

<style scoped>
  a {
    text-decoration: underline;
  }

  .main-header {
    width: 100%;
    height: 100vh;
    background-image: url('../assets/main-bg-1632x865.png');
    background-repeat: no-repeat;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    transition: transform .25s ease-in-out;
  }

  .header-cont {
    padding: 20vh 0px;
  }

  .logo {
    opacity: .9;
  }

  .logo > h1 {
    font-weight: 300;
    font-size: 80px;
  }

  .logo > h2 {
    font-weight: 200;
    font-size: 27px;
  }

  .down {
    position: absolute;
    left: calc(50% - 50px);
    top: calc(100% - 150px);
    margin-top: auto;
    color: white !important;
  }

  .down > div {
    position: relative;
  }

  .mt-6 {
    margin-top: 100px;
  }

  .yt-iframe > iframe {
    max-width: 100%;
    width: 900px;
    height: 510px;
    border: 0;
    margin: 0px auto;
  }

  @media screen and (max-height: 750px),
         screen and (max-width: 600px) {
    .logo > img {
      width: 150px;
      height: 150px;
    }

    .logo > h1 {
      font-weight: 300;
      font-size: 55px;
    }

    .logo > h2 {
      font-weight: 200;
      font-size: 19px;
    }
  }
</style>
