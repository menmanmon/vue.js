<template>
  <div>
    <header>
      <div><h2>My personal costs</h2></div>
    </header>
    <main>
      <BtnForOpenForm />
      <Links />
      <AddPaymentForm />
      <PaymentsDisplay />
    </main>
  </div>
</template>
 
<script>
import PaymentsDisplay from "./components/PaymentsDisplay";
import AddPaymentForm from "./components/AddPaymentForm";
import BtnForOpenForm from "./components/BtnForOpenForm";
import Links from "./components/Links";
import { mapMutations, mapActions, mapGetters } from "vuex";
import { getCurrentDate } from "./assets/utils.js";

export default {
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    BtnForOpenForm,
    Links,
  },
  data() {
    return {
      paymentsList: [],
    };
  },
  methods: {
    ...mapMutations("payments", ["setPaymentsListData"]),
    ...mapMutations("buttonDisabled", ["makeBtnDisabled"]),
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
</style>
