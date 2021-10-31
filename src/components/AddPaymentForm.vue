<template>
  <v-dialog max-width="500" v-model="formVisible">
    <template v-slot:activator="{ on }">
      <v-btn color="teal" dark v-on="on" @click="setFormVisible(true)">
        ADD NEW COST <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>
    <v-card class="d-flex flex-column pa-9">
      <v-select
        v-model="currentItem.category"
        :items="getCategoryList"
        label="Category"
      >
      </v-select>
      <v-text-field v-model="currentItem.value" label="Value"></v-text-field>
      <v-text-field v-model="currentItem.date" label="Date"></v-text-field>
      <v-btn class="mb-2" :ripple="false" v-if="!isEdited" @click="onSaveClick">
        ADD +
      </v-btn>
      <v-btn class="mb-2" :ripple="false" v-else @click="editHandler"
        >Edit</v-btn
      >
      <v-btn @click="setFormVisible(false)">Close</v-btn>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import { getCurrentDate } from "../assets/utils.js";
import { quickBTNs } from "../assets/selects";

export default {
  name: "AddPaymentForm",
  data() {
    return {
      dialog: false,
    };
  },
  watch: {
    $route() {
      // способ отслеживания изменения роутинга
      if (this.$route.name !== "edit") {
        this.currentItem.category = this.getRouteParams.params?.category;
        this.currentItem.value = this.getRouteParams.params?.value;
        this.currentItem.date =
          this.getRouteParams.params?.date || this.getCurrentDate;
      }
    },
  },
  computed: {
    ...mapState("payments", ["allPaymentsListAsArray"]),
    ...mapGetters("paymentsCategories", ["getCategoryList"]),
    ...mapState("general", ["formVisible"]),
    ...mapState("payments", ["page"]),
    ...mapState("payments", ["currentItem"]),
    ...mapState("payments", ["item"]),
    getCurrentDate,
    list() {
      return quickBTNs;
    },
    isEdited() {
      return this.$route.name === "edit";
    },
    getRouteParams() {
      return {
        name: this.$route.name,
        params: this.$route.params,
      };
    },
  },
  methods: {
    ...mapMutations("payments", ["addDataToAllPaymentsListAsArray"]),
    ...mapActions("paymentsCategories", ["loadCategories"]),
    ...mapState("general", ["formVisible"]),
    ...mapMutations("general", ["setFormVisible"]),
    ...mapMutations("payments", ["showPaymentsOnDisplay"]),
    ...mapMutations("payments", ["setCurrentItem"]),
    onSaveClick() {
      const data = {
        value: +this.currentItem.value,
        category: this.currentItem.category,
        date: this.date || this.getCurrentDate,
        id: this.allPaymentsListAsArray.length + 1,
      };
      this.addDataToAllPaymentsListAsArray(data);
      this.setFormVisible(false);
      this.showPaymentsOnDisplay(this.page);
      if (this.$route.name !== "home") {
        this.$router.name = "home";
      }
    },
    getCoincidence() {
      return this.list.some((el) => el.category === this.$route.name);
    },
    editHandler() {
      this.setFormVisible();
      this.setCurrentItem({});
      this.$router.push({ name: "home" });
    },
    hideDialog() {
      this.dialog = false;
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