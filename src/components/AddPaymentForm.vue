<template>
  <div class="paymentForm">
    <div>
      <select v-model="selected">
        <option
          v-for="option in getCategoryList"
          :value="option"
          v-bind:key="option"
        >
          {{ option }}
        </option>
      </select>
    </div>
    <input class="inputValue" placeholder="Value" v-model="value" />
    <!-- <input class="inputCategory" placeholder="Category" v-model="category" /> -->
    <input class="inputDate" placeholder="Date" v-model="date" />
    <button class="addButton" @click="onSaveClick">ADD +</button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      selected: "",
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
    ...mapGetters("paymentsCategories", ["getCategoryList"]),
  },
  methods: {
    ...mapMutations("payments", ["addDataToPaymentsList"]),
    ...mapMutations("paymentsCategories", ["setCategories"]),
    ...mapActions("paymentsCategories", ["loadCategories"]),
    onSaveClick() {
      const data = {
        value: +this.value,
        category: this.selected,
        date: this.date || this.getCurrentDate,
        id: this.getPaymentsList.length + 1,
      };
      this.addDataToPaymentsList(data);
      this.date = this.value = this.category = "";
    },
  },
  mounted() {
    if (!this.getCategoryList.length) {
      this.loadCategories();
    }
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
  box-sizing: border-box;
}
.paymentForm select {
  margin-bottom: 10px;
  width: 200px;
}
.addButton {
  width: 75px;
}
</style>