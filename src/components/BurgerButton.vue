<template>
  <button @click="btnClick">
    <img 
      src="../assets/down-vec.svg" 
      height="40" 
      width="40"
      :style="{ transform: `rotate(${this.rotation}deg)` }"
    />
  </button>
</template>

<script>
import { RouterEventBus } from '../js/router-eventbus'

export default {
  name: 'BurgerButton',

  props: {
    msg: String
  },

  data() {
    return {
      active: false,
      rotation: 0,
    };
  },

  methods: {
    btnClick() {
      this.rotation -= 180;
      this.active = !this.active;
      this.$emit('click', this.active);
    },

    setActive(state) {
      if (this.active != state) {
        this.rotation -= 180;
        this.active = state;
        this.$emit('click', this.active);
      }
    }
  },
}
</script>

<style scoped>
  button {
    position: relative;
    padding: 0px;
    width: 50px;
    height: 50px;
    border-style: none;
    /* background-color: red; */
  }

  button > img {
    transition: all .25s ease-in-out;
  }

  .bar {
    position: absolute;
    width: 40px;
    height: 5px;
    background-color: white;
  }
</style>
