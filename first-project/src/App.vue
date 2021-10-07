<template>
  <div>
    <header>
      <div><h2>My personal costs</h2></div>
    </header>
    <main>
      <ButtonForAdd @openOnClick="openOnClick" />
      <button class="fillFormButton" @click="addFoodValue200">Food 200</button>
      <button class="fillFormButton" @click="addTransportValue50">Transport 50</button>
      <button class="fillFormButton" @click="addEntertainmentValue2000">Entertainment 2000</button>
      <AddPaymentForm v-if="clicked" />
      <PaymentsDisplay />
    </main>
  </div>
</template>
 
<script>
import PaymentsDisplay from "./components/PaymentsDisplay";
import AddPaymentForm from "./components/AddPaymentForm";
import ButtonForAdd from "./components/ButtonForAdd";
import { mapMutations, mapActions, mapGetters } from "vuex";
import { getCurrentDate } from "./assets/utils.js";

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
    openOnClick(clicked) {
      this.clicked = clicked;
    },
    // getCurrentDate,
    addFoodValue200() {
      if (!this.clicked) this.clicked = true;
      this.$router.push({
        name: "addFood200",
        params: { date: this.getCurrentDate, category: "Food", value: "200" },
      });
    },
    addTransportValue50() {
      if (!this.clicked) this.clicked = true;
      this.$router.push({
        name: "addTransport50",
        params: { date: this.getCurrentDate, category: "Transport", value: "50" },
      });
    },
    addEntertainmentValue2000() {
      if (!this.clicked) this.clicked = true;
      this.$router.push({
        name: "addEntertainment2000",
        params: { date: this.getCurrentDate, category: "Entertainment", value: "2000" },
      });
    },
    ...mapMutations("payments", ["setPaymentsListData"]),
    ...mapActions("payments", ["fetchData"]),
  },
  computed: {
    getCurrentDate,
    ...mapGetters("payments", ["getPaymentsList"]),
  },
  created() {
    this.fetchData();
  },
};
</script>

<style>
* {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.fillFormButton {
  margin-right: 5px;
}
</style>
