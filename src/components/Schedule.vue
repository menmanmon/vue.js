<template>
  <div>
    <div class="topControl">
      <div class="leftControl">
        <BtnForOpenForm />
        <Links />
      </div>
      <div class="addPaymentForm">
        <AddPaymentForm v-if="formVisible" />
      </div>
    </div>
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
.topControl {
  display: flex;
  min-height: 115px;
  min-width: 500px;
}
.leftControl {
  margin-right: 30px;
}
</style>