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
    <!-- <input class="inputCategory" placeholder="Category" v-model="category" /> -->
    <input class="inputDate" placeholder="Date" v-model="date" />
    <button v-show="isEmpty" class="addButton" @click="onSaveClick">ADD +</button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import { getCurrentDate } from "../assets/utils.js";
import { quickBTNs } from "../assets/selects";

export default {
  data() {
    return {
      selected: "",
      date: "",
      category: "",
      value: "",
      id: 0,
    };
  },
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
    ...mapGetters("payments", ["getPaymentsList"]),
    ...mapGetters("paymentsCategories", ["getCategoryList"]),
    ...mapState("general", ["formVisible"]),
    getCurrentDate,
    list() {
      return quickBTNs;
    },
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
    ...mapMutations("payments", ["addDataToPaymentsList"]),
    ...mapMutations("paymentsCategories", ["setCategories"]),
    ...mapActions("paymentsCategories", ["loadCategories"]),
    ...mapMutations("general", ["setFormVisible"]),
    onSaveClick() {
      const data = {
        value: +this.value,
        category: this.selected,
        date: this.date || this.getCurrentDate,
        id: this.getPaymentsList.length + 1,
      };
      this.addDataToPaymentsList(data);
      this.date = this.value = this.category = "";
      this.setFormVisible(false);
    },
    getCoincidence() {
      return this.list.some((el) => el.category === this.$route.name);
    },
    setParams() {
      if (this.getCoincidence()) {
        console.log("ok " + this.$route.name);
        this.date = this.getCurrentDate;
        this.value = this.$route.params?.value;
        this.selected = this.$route.name;
      } else {
        console.log("not ok " + this.$route.name);
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
  width: 250px;
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