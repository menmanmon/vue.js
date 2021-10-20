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
    <input class="inputDate" placeholder="Date" v-model="date" />
    <button v-show="isEmpty" class="addButton" @click="onSaveClick">
      ADD +
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import { getCurrentDate } from "../assets/utils.js";
import { quickBTNs } from "../assets/selects";

export default {
  name: "AddPaymentForm",
  data() {
    return {
      selected: "",
      date: "",
      category: "",
      value: "",
      id: 0,
    };
  },
  //другая реализация
  // watch: {
  //   $route() {
  //     // способ отслеживания изменения роутинга
  //     this.selected = this.getRouteParams.name;
  //     this.value = this.getRouteParams.params?.value;
  //     this.date = this.getCurrentDate;
  //     console.log(this.value);
  //     console.log(this.selected);
  //   },
  // },
  computed: {
    ...mapState("payments", ["allPaymentsListAsArray"]),
    ...mapGetters("paymentsCategories", ["getCategoryList"]),
    ...mapState("general", ["formVisible"]),
    ...mapState("payments", ["page"]),
    getCurrentDate,
    list() {
      return quickBTNs;
    },
    //другая реализация
    // getRouteParams() {
    //   return {
    //     name: this.$route.name,
    //     params: this.$route.params,
    //   };
    // },
    isEmpty() {
      return this.date && this.value && this.selected;
    },
  },
  methods: {
    ...mapMutations("payments", ["addDataToAllPaymentsListAsArray"]),
    ...mapActions("paymentsCategories", ["loadCategories"]),
    ...mapMutations("general", ["setFormVisible"]),
    ...mapMutations("payments", ["showPaymentsOnDisplay"]),
    onSaveClick() {
      const data = {
        value: +this.value,
        category: this.selected,
        date: this.date || this.getCurrentDate,
        id: this.allPaymentsListAsArray.length + 1,
      };
      this.addDataToAllPaymentsListAsArray(data);
      this.date = this.value = this.category = "";
      this.setFormVisible(false);
      this.showPaymentsOnDisplay(this.page);
    },
    getCoincidence() {
      return this.list.some((el) => el.category === this.$route.name);
    },
    setParams() {
      if (this.getCoincidence()) {
        this.date = this.getCurrentDate;
        this.value = this.$route.params?.value;
        this.selected = this.$route.name;
      } else {
        this.date = null;
        this.value = null;
        this.selected = null;
      }
    },
  },
  mounted() {
    if (!this.getCategoryList.length) {
      this.loadCategories();
    }
    this.setParams();
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