<template>
  <div v-if="document">
    <prismic-rich-text :field="document.data.title" class="title"/>

    <div class="card-group">
      <div v-for="(type, index) in document.data.types" :key="type.name.text" class="leader-card" v-bind:style="{'--leader-colour': type.colour}"> 

        <input :id="'leader-card-' + index" class="toggle" type="checkbox"> 
        <label :for="'leader-card-' + index" class="card-header">
          <prismic-image :field="type.exemplar_image" class="leader-img"/>
          <prismic-rich-text :field="type.name" class="leader-name"/>
        </label>
        
        <div class="collapsible-content">
          <div class="content-inner">
            <prismic-rich-text :field="type.description"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Leaders',
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
