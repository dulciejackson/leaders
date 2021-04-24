<template>
  <div>
    <h1>API response:</h1>
    <pre id="app" v-html="JSON.stringify(response, null, 2)"></pre>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      response: null
    }
  },
  methods: {
    async getContent() {
      // Query the API and assign the response to "response"
      const response = await this.$prismic.client.query('')
      this.response = response
    }
  },
  created() {
    // Call the API query method
    this.getContent()
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
