<template>
  <v-container>
    <v-row>
      <v-col :cols="1">№</v-col>
      <v-col :cols="3">Date</v-col>
      <v-col :cols="4">Category</v-col>
      <v-col :cols="2">Value</v-col>
      <v-col :cols="1">...</v-col>
    </v-row>
    <v-row
      v-for="item in activeList"
      v-bind:key="item.id"
      @click="setCurrentItem(item)"
    >
      <v-col :cols="1">{{ item.id }}</v-col>
      <v-col :cols="3">{{ item.date }}</v-col>
      <v-col :cols="4">{{ item.category }}</v-col>
      <v-col :cols="2">{{ item.value }}</v-col>
      <v-col :cols="1" class="v-colFifth">
        <div @click="$modal.show(item)" class="fifthColumn">...</div>
        <transition name="fade">
          <ContextMenu v-if="item.id === activeID" :item="item" /> </transition
      ></v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import ContextMenu from "./ContextMenu.vue";

export default {
  name: "PaymentsDisplay",
  data() {
    return {
      activeID: null,
    };
  },
  components: {
    ContextMenu,
  },
  computed: {
    ...mapState("payments", ["activeList"]),
    ...mapState("payments", ["paymentsList"]),
  },
  mounted() {
    this.$modal.EventBus.$on("shown", this.onShown);
    this.$modal.EventBus.$on("hide", this.onHide);
  },
  methods: {
    ...mapMutations("payments", ["setCurrentItem"]),
    onShown(params) {
      this.activeID = params.id;
    },
    onHide() {
      this.activeID = null;
    },
  },
};
</script>

<style scoped>
.table {
  min-height: 186px;
}
.tableRow {
  min-height: 30px;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  border-bottom: 1px solid #000;
}
.firstColumn {
  width: 40px;
}
.secondСolumn {
  width: 100px;
}
.thirdColumn {
  width: 150px;
  word-break: break-all;
}
.fourthColumn {
  width: 80px;
}
.fifthColumn {
  cursor: pointer;
}
.v-colFifth{
  position: relative;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

