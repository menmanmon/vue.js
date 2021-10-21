<template>
  <div class="paymentForm">
    <div>
      <select v-model="currentItem.category">
        <option
          v-for="option in getCategoryList"
          :value="option"
          v-bind:key="option"
        >
          {{ option }}
        </option>
      </select>
    </div>
    <input class="inputValue" placeholder="Value" v-model="currentItem.value" />
    <input class="inputDate" placeholder="Date" v-model="currentItem.date" />
    <button v-if="!isEdited" class="addButton" @click="onSaveClick">
      ADD +
    </button>
    <button v-else class="addButton" @click="editHandler">Edit</button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import { getCurrentDate } from "../assets/utils.js";
import { quickBTNs } from "../assets/selects";

export default {
  name: "AddPaymentForm",
  props: ["item"],
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
  watch: {
    $route() {
      // способ отслеживания изменения роутинга
      if (this.$route.name === "edit") {
        this.currentItem.category = this.item.category;
        this.currentItem.value = this.item.value;
        this.currentItem.date = this.item.date;
      } else {
        this.currentItem.category = this.getRouteParams.name;
        this.currentItem.value = this.getRouteParams.params?.value;
        this.currentItem.date = this.getCurrentDate;
      }
    },
  },
  computed: {
    ...mapState("payments", ["allPaymentsListAsArray"]),
    ...mapGetters("paymentsCategories", ["getCategoryList"]),
    ...mapState("general", ["formVisible"]),
    ...mapState("payments", ["page"]),
    ...mapState("payments", ["currentItem"]),
    getCurrentDate,
    list() {
      return quickBTNs;
    },
    isEdited() {
      return this.$route.name === "edit";
    },
    //другая реализация
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
    ...mapMutations("general", ["setFormVisible"]),
    ...mapMutations("payments", ["showPaymentsOnDisplay"]),
    onSaveClick() {
      const data = {
        value: +this.currentItem.value,
        category: this.currentItem.category,
        date: this.date || this.getCurrentDate,
        id: this.allPaymentsListAsArray.length + 1,
      };
      this.addDataToAllPaymentsListAsArray(data);
      // this.currentItem.date = this.currentItem.value = this.currentItem.category = "";
      this.setFormVisible(false);
      this.showPaymentsOnDisplay(this.page);
      this.$router.push({ name: "home" });
    },
    getCoincidence() {
      return this.list.some((el) => el.category === this.$route.name);
    },
    setParams() {
      if (this.getCoincidence()) {
        this.currentItem.date = this.getCurrentDate;
        this.currentItem.value = this.$route.params?.value;
        this.currentItem.category = this.$route.name;
      } else {
        this.currentItem.date = null;
        this.currentItem.value = null;
        this.currentItem.category = null;
      }
    },
    editHandler() {
      this.setFormVisible(false);
      this.$router.push({ name: "home" });
    },
  },
  mounted() {
    if (!this.getCategoryList.length) {
      this.loadCategories();
    }
    this.setParams();
    if (this.isEdited) {
      const { category, date, value } = this.currentItem;
      this.date = date;
      this.value = value;
      this.selected = category;
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