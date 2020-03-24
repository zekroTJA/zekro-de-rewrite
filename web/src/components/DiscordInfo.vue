<template>
  <a :href="href" class="dc-cont d-flex">
    <div class="d-flex mx-auto data-cont">
      <img class="avatar mr-4" :src="rdata.icon_url" width="100" height="100" />
      <div>
        <h2>{{ rdata.name }}</h2>
        <div class="d-flex">
          <div class="pill mr-3">
            <div class="pill-dot online"></div>
            {{ rdata.members_online }} Online
          </div>
          <div class="pill">
            <div class="pill-dot"></div>
            {{ rdata.members_total }} Members
          </div>
        </div>
      </div>
    </div>
    <div class="join-txt">JOIN NOW</div>
  </a>
</template>

<script>
/** @format */

export default {
  name: 'DiscordInfo',

  props: {
    guildid: String,
    href: String,
  },

  data() {
    return {
      rdata: {
        icon_url: '',
        name: '',
        members_total: 0,
        members_online: 0,
      },
    };
  },

  methods: {
    fetchData() {
      this.$http
        .get(`https://api.zekro.de/guildinfo/guild/${this.guildid}`)
        .then((res) => {
          this.rdata = res.body;
          console.log(res.body);
        })
        .catch(console.error);
    },
  },

  created() {
    this.fetchData();
  },
};
</script>

<style scoped>
/** @format */

.dc-cont {
  position: relative;
  background-color: #2c2f33;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.24);
  cursor: pointer;

  transition: all 0.2s ease-in-out;
}

.dc-cont:hover .join-txt {
  height: 35px;
  padding: 6px;
}

.data-cont {
  margin-bottom: 30px;
}

.dc-cont:hover {
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.24);
  transform: scale(1.02);
}

img.avatar {
  border-radius: 50%;
}

.pill {
  display: flex;
  align-items: center;
  background-color: rgb(33, 35, 37);
  padding: 5px 12px;
  border-radius: 1000px;
  margin: 10px 0px;
}

.pill-dot {
  width: 1rem;
  height: 1rem;
  background-color: #72767d;
  border-radius: 50%;
  margin-right: 10px;
}

.online {
  background-color: #43b581;
}

.join-txt {
  position: absolute;
  align-items: center;
  text-align: center;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 30px;
  background-color: #7289da;
  padding: 3px;
  border-radius: 0px 0px 5px 5px;

  transition: all 0.2s ease-in-out;
}
</style>
