<template>
  <div app>
    <v-layout id="home" row wrap>
      <v-flex xs12>
        <v-img
          src="https://rawcdn.githack.com/jdcanado/futapp/773ed7c50f36685a80b4ddf267dde25cb99626d7/src/assets/rec_atletas1.jpg"
          aspect-ratio="2.5"
        />
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
          src:
            "https://rawcdn.githack.com/jdcanado/futapp/dc0a5010f4671441dfdf0815ffa102448002e8c8/src/assets/rec_atletas4.jpg"
        } // },
        // {
        //   src:
        //     "https://rawcdn.githack.com/jdcanado/futapp/773ed7c50f36685a80b4ddf267dde25cb99626d7/src/assets/rec_atletas1.jpg"
        // } //,
        // {
        //   src:
        //     "https://rawcdn.githack.com/jdcanado/futapp/773ed7c50f36685a80b4ddf267dde25cb99626d7/src/assets/rec_atletas2.jpg"
        // },
        //  {
        //    src:
        //      "https://rawcdn.githack.com/jdcanado/futapp/dc0a5010f4671441dfdf0815ffa102448002e8c8/src/assets/rec_atletas3.jpg"
        //  },
        //  {
        //    src:
        //      "https://rawcdn.githack.com/jdcanado/futapp/dc0a5010f4671441dfdf0815ffa102448002e8c8/src/assets/rec_atletas4.jpg"
        //  }
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
