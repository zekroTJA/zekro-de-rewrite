<template>
  <div class="gear">
    <h1 class="page-header mb-5">GEAR</h1>
    <b-container>
      <p class="mb-5">Here you can find a list of software and hardware I am using for working on my projects and creating my videos.</p>
      <b-row v-for="(row, i) in rows" 
        :key="`row-${i}`"
        class="data-row"
      >
        <b-col v-for="col in row" :key="col.title">
          <h2 class="mb-3">{{ col.title }}</h2>
          <ul>
            <li v-for="(item, j) in col.items" :key="`item-${j}`">
              <a :href="item.link" target="_blank">{{ item.text }}</a>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import GearData from '../var/gear';

export default {
  name: 'Gear',

  props: {
    
  },

  computed: {
    rows: GearData.rows,
  },
}
</script>

<style scoped>
  a {
    color: white;
    font-size: 18px;
  }

  a:hover {
    text-decoration: underline;
  }

  .gear {
    margin-top: 120px;
  }

  @media screen and (max-width: 600px) {
    .gear {
      margin-top: 200px;
    }

    .data-row {
      display: block !important;
    }
  }
</style>
