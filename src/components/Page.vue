<template>
  <!-- <div class="v-page">
    <div
      class="v-page__number"
      @click="showPaymentsOnDisplay(item), defineCurrentPage(item)"
      v-for="(item, index) in pages"
      :key="index"
    >
      {{ item }}
    </div>
  </div> -->
  <v-footer class="v-page">
    <div
      class="v-page__number"
      @click="showPaymentsOnDisplay(item), defineCurrentPage(item)"
      v-for="(item, index) in pages"
      :key="index"
    >
      {{ item }}
    </div>
  </v-footer>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Page",
  computed: {
    ...mapState("payments", ["allPaymentsListAsArray"]),
    ...mapState("payments", ["numberОfLinesPerSheet"]),
    pages() {
      return Math.ceil(
        this.allPaymentsListAsArray.length / this.numberОfLinesPerSheet
      );
    },
  },
  methods: {
    ...mapMutations("payments", ["showPaymentsOnDisplay"]),
    ...mapMutations("payments", ["defineCurrentPage"]),
  },
};
</script>

<style>
.v-page {
  display: flex;
  justify-content: center;
}
.v-page__number {
  cursor: pointer;
  margin: 0 10px;
}
</style>