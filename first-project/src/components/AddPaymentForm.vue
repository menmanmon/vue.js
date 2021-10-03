<template>
  <div class="paymentForm">
    <input class="inputValue" placeholder="Value" v-model="value" />
    <input class="inputCategory" placeholder="Category" v-model="category" />
    <input class="inputDate" placeholder="Date" v-model="date" />
    <button class="addButton" @click="onSaveClick">ADD +</button>
  </div>
</template>

<script>
export default {
  props: {
    paymentsList: {
      type: Array,
      default: () => [],
    },
  },
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
  },
  methods: {
    onSaveClick() {
      const data = {
        value: +this.value,
        category: this.category,
        date: this.date || this.getCurrentDate,
        id: this.paymentsList.length + 1,
      };
      this.$emit("addNewPayment", data);
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