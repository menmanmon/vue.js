<template>
  <div class="v-page">
    <!-- <div
      class="v-page__number"
      v-for="(item, index) in pages"
      :key="item"
      @click="choosePage(index)"
    >
      {{ item }}
    </div> -->
    <div
      @click="clickHandler(index)"
      v-for="(item, index) in pages"
      :key="index"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from "vuex";

export default {
  name: "Page",
  computed: {
    ...mapState("payments", ["paymentsList"]),
    ...mapState("payments", ["activeList"]), //потом удалить
    ...mapState("payments", ["fetchData"]), //потом удалить
    ...mapState("payments", ["getActiveList"]), //потом удалить
    ...mapGetters("payments", ["getPaymentsList"]),
    pages() {
      return Math.ceil(this.makeArray.length / 5);
    },
    makeArray() {
      return [].concat(...Object.values(this.paymentsList));
    },
  },
  methods: {
    ...mapMutations("payments", ["setActiveList"]),
    choosePage(page) {
      this.$emit("choose-page", page);
    },
    clickHandler(page) {
      console.log(`page: ${page}`);
      console.log(this.paymentsList[`page${page + 1}`]);
      console.log(`paymentsList: ${this.paymentsList}`);
      console.log(`active: ${this.getActiveList}`);
      this.setActiveList(this.paymentsList[`page${page + 1}`]);
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