<template>
  <div>
    <BtnForOpenForm />
    <Links />
    <AddPaymentForm v-if="formVisible" />
    <PaymentsDisplay />
  </div>
</template>

<script>
import PaymentsDisplay from "../components/PaymentsDisplay";
import AddPaymentForm from "../components/AddPaymentForm";
import BtnForOpenForm from "../components/BtnForOpenForm";
import Links from "../components/Links";
import { mapActions, mapState } from "vuex";

export default {
  name: "Schedule",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    BtnForOpenForm,
    Links,
  },
  methods: {
    ...mapActions("payments", ["fetchData"]),
  },
  computed: {
    ...mapState("general", ["formVisible"]),
  },
  created() {
    this.fetchData();
  },
};
</script>

<style>
</style>