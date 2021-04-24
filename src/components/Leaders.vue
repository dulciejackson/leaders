<template>
  <div v-if="document">
    <prismic-rich-text :field="document.data.title" class="title"/>

    <div class="card-group">
        <div v-for="type in document.data.types" :key="type.name.text" class="leader-card" v-bind:style="{'--leader-colour': type.colour}">
            <prismic-image :field="type.exemplar_image" class="leader-img"/>
            <prismic-rich-text :field="type.name" v-bind:style="{ color: type.colour }"/>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { ComputedOptions } from 'vue';

export default Vue.extend({
  name: 'Leaders',
  props: {
    msg: String,
  },
  data() {
    return {
      document: null
    }
  },
  methods: {
    async getLeaderTypes() {
      const response = await this.$prismic.client.getByUID("leader-types", "leaders")
      this.document = response
    }
  },
  created() {
    this.getLeaderTypes()
  }
});
</script>

<style scoped>
@import "../styles/_leaders.scss";
</style>
