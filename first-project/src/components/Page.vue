<template>
  <div class="v-page">
    <div
      class="v-page__number"
      @click="showPaymentsOnDisplay(index)"
      v-for="(item, index) in pages"
      :key="index"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Page",
  computed: {
    ...mapState("payments", ["allPaymentsListAsArray"]),
    pages() {
      return Math.ceil(this.allPaymentsListAsArray.length / 5);
    },
  },
  methods: {
    ...mapMutations("payments", ["showPaymentsOnDisplay"]),
  },
};
</script>

<style>
.v-page {
  width: 500px;
  display: flex;
  justify-content: center;
  margin: 10px 0;

}
.v-page__number {
  cursor: pointer;
  margin: 0 10px;
}
</style>