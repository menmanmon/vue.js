<template>
  <div>
    <div class="tableRow tableHeader">
      <div class="firstColumn">№</div>
      <div class="secondСolumn">Date</div>
      <div class="thirdColumn">Category</div>
      <div class="fourthColumn">Value</div>
    </div>
    <div class="tableRow" v-for="item in allPayments" v-bind:key="item.id">
      <div class="firstColumn">{{ item.id }}</div>
      <div class="secondСolumn">{{ item.date }}</div>
      <div class="thirdColumn">{{ item.category }}</div>
      <div class="fourthColumn">{{ item.value }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PaymentsDisplay",
  computed: {
    ...mapGetters("payments", ["getPaymentsList"]),
    allPayments() {
      return this.getPaymentsList;
    },
  },
};
</script>

<style scoped>
.tableRow {
  min-height: 30px;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  border-bottom: 1px solid #000;
}
.firstColumn {
  width: 40px;
}
.secondСolumn {
  width: 100px;
}
.thirdColumn {
  width: 150px;
  word-break: break-all;
}
.fourthColumn {
  width: 80px;
}
</style>

