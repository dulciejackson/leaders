<template>
  <div>
    <Leaders/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Leaders from './components/Leaders.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Leaders
  }
});
</script>

<style lang="scss">
@import "./styles/_global.scss";
</style>
