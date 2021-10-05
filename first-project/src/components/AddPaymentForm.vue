<template>
  <div class="paymentForm">
    <input class="inputValue" placeholder="Value" v-model="value" />
    <input class="inputCategory" placeholder="Category" v-model="category" />
    <input class="inputDate" placeholder="Date" v-model="date" />
    <button class="addButton" @click="onSaveClick">ADD +</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      date: "",
      category: "",
      value: "",
      id: 0,
    };
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
    ...mapGetters("payments", ["getPaymentsList"]),
  },
  methods: {
    ...mapMutations("payments", ["addDataToPaymentsList"]),
    onSaveClick() {
      const data = {
        value: +this.value,
        category: this.category,
        date: this.date || this.getCurrentDate,
        id: this.getPaymentsList.length + 1,
      };
      this.addDataToPaymentsList(data);
      this.date = this.value = this.category = "";
    },
  },
};
</script>

<style>
.paymentForm {
  display: flex;
  flex-direction: column;
  width: 250px;
}
.paymentForm input {
  margin-bottom: 10px;
  width: 200px;
}
.addButton {
  width: 75px;
}
</style>