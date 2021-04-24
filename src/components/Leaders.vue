<template>
  <div v-if="document">
    <prismic-rich-text :field="document.data.title" />

    <div v-for="type in document.data.types" :key="type.name.text">
        <prismic-rich-text :field="type.name" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

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
