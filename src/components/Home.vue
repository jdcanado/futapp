<template>
  <div app>
    <v-layout id="home" row wrap>
      <v-flex xs12>
        <v-carousel hide-delimiters hide-controls height="400">
          <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src"></v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("@/src/assets/rec_banner.jpg")
        },
        {
          src: require("@/assets/rec_atletas1.jpg")
        },
        {
          src: require("@/assets/rec_atletas2.jpg")
        }
      ]
    };
  },
  name: "Home"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
