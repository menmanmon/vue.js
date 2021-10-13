<template>
  <div class="v-page">
    <div
      class="v-page__number"
      v-for="(item, index) in pages"
      :key="item"
      @click="choosePage(index)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("payments", ["getPaymentsList"]),
    pages() {
      return Math.ceil(this.getPaymentsList.length / 5);
    },
  },
  methods: {
    choosePage(page) {
      this.$emit("choose-page", page);
    },
  },
};
</script>

<style>
.v-page {
  cursor: pointer;
  display: flex;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
}
.v-page__number {
  margin: 0 10px;
}
</style>