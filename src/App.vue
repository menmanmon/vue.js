<template>
  <div>
    <header>
      <div><h2>My personal costs</h2></div>
    </header>
    <main>
      <ButtonForAdd @openOnClick="openOnClick" />
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
    ...mapMutations("payments", ["setPaymentsListData"]),
    ...mapActions("payments", ["fetchData"]),
  },
  computed: {
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
