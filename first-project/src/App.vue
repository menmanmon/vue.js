<template>
  <div>
    <header>
      <div><h2>My personal costs</h2></div>
    </header>
    <main>
      <ButtonForAdd @openOnClick="openOnClick" />
      <AddPaymentForm
        :paymentsList="paymentsList"
        v-if="clicked"
        @addNewPayment="addNewPayment"
      />
      <PaymentsDisplay :items="paymentsList" />
    </main>
  </div>
</template>
 
<script>
import PaymentsDisplay from "./components/PaymentsDisplay";
import AddPaymentForm from "./components/AddPaymentForm";
import ButtonForAdd from "./components/ButtonForAdd";
import { mapMutations } from "vuex";

export default {
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    ButtonForAdd,
  },
  data() {
    return {
      paymentsList: [],
      clicked: false,
    };
  },
  methods: {
    fetchData() {
      return [
        {
          id: 1,
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          id: 2,
          date: "24.03.2020",
          category: "Transport",
          value: 360,
        },
        {
          id: 3,
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
      ];
    },
    addNewPayment(data) {
      this.paymentsList = [...this.paymentsList, data];
    },
    openOnClick(clicked) {
      this.clicked = clicked;
    },
    ...mapMutations("payments", ["setPaymentsListData"]),
  },
  created() {
    this.setPaymentsListData(this.fetchData());
  },
};
</script>

<style>
* {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
</style>
