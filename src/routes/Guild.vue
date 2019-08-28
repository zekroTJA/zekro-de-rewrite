<template>
  <div class="discord">
    <div class="container text-center">
      <h1>ZEKRO'S DEV-SCHUPPEN</h1>
      <p class="my-5">
        Hey! We are a friendly and open community of <i>(mostly german)</i> young developers open for
        your ideas, projects and questions to share information and skills and having a nice time!
      </p>
      <DiscordInfo 
        guildid="307084334198816769"
        href="https://discord.zekro.de"
        class="mx-auto dc-info mb-5"
      />
      <iframe
          class="mx-auto dc-frame"
          src="https://discordapp.com/widget?id=307084334198816769&theme=dark" 
          allowtransparency="true" 
          frameborder="0"
      ></iframe>
    </div>
  </div>
</template>

<script>
import { RouterEventBus } from '../js/router-eventbus';
import DiscordInfo from '../components/DiscordInfo';

export default {
  name: 'Guild',

  components: {
    DiscordInfo
  },

  props: {
    
  },

  data() {
    return {
      
    };
  },

  mounted() {
    RouterEventBus.$emit('mounted', this.$options.name);
  }
}
</script>

<style scoped>
  .discord {
    margin-top: 120px;
    margin-left: auto;
    margin-right: auto;
    width: 50vw;
  }

  .dc-frame {
    height: 700px;
    width: 100%;
  }

  .dc-info {
    /* width: 50vw; */
  }
</style>
