<template>
  <div class="table">
    <div class="tableRow tableHeader">
      <div class="firstColumn">№</div>
      <div class="secondСolumn">Date</div>
      <div class="thirdColumn">Category</div>
      <div class="fourthColumn">Value</div>
      <div>...</div>
    </div>
    <div class="tableRow" v-for="item in activeList" v-bind:key="item.id">
      <div class="firstColumn">{{ item.id }}</div>
      <div class="secondСolumn">{{ item.date }}</div>
      <div class="thirdColumn">{{ item.category }}</div>
      <div class="fourthColumn">{{ item.value }}</div>
      <div class="fifthColumn">
        <div @click="$modal.show(item)">...</div>
        <transition name="fade">
        <ContextMenu v-if="item.id === activeID" :item="item" />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
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
  position: relative;
  cursor: pointer;
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

