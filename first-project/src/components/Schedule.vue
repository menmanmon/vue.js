<template>
  <div>
    <BtnForOpenForm />
    <Links />
    <AddPaymentForm v-if="formVisible" />
    <PaymentsDisplay />
    <Page />
  </div>
</template>

<script>
import PaymentsDisplay from "../components/PaymentsDisplay";
import AddPaymentForm from "../components/AddPaymentForm";
import BtnForOpenForm from "../components/BtnForOpenForm";
import Links from "../components/Links";
import Page from "../components/Page";
import { mapActions, mapState } from "vuex";

export default {
  name: "Schedule",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    BtnForOpenForm,
    Links,
    Page,
  },
  data: () => ({
    page: 1,
  }),
  methods: {
    ...mapActions("payments", ["fetchData"]),
  },
  computed: {
    ...mapState("general", ["formVisible"]),
  },
  created() {
    this.fetchData(this.page);
  },
};
</script>

<style>
</style>