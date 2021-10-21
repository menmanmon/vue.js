<template>
  <div class="context-menu">
    <div
      class="context-menu__item context-menu__item_edit"
      @click.prevent="editHandler"
    >
      Edit
    </div>
    <div
      class="context-menu__item context-menu__item_remove"
      @click.prevent="removeHandler"
    >
      Remove
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "ModalWindow",
  props: ["item"],
  methods: {
    ...mapMutations("general", ["setFormVisible"]),
    ...mapMutations("payments", ["setCurrentItem"]),
    ...mapActions("payments", ["removeItem"]),
    editHandler() {
      this.setFormVisible(true);
      if (this.$route.name !== "edit") {
        this.$router.push({ name: "edit", params: this.item });
      }
      if (this.$route.name === "edit") {
        this.setCurrentItem(this.item);
        console.log(this.currentItem);
      }
      this.$modal.hide();
    },
    removeHandler() {
      this.removeItem(this.item)
      this.$modal.hide()
    },
  },
  computed: {
    ...mapState("payments", ["currentItem"]),
  },
};
</script>

<style>
.context-menu {
  position: absolute;
  left: -10px;
  top: -20px;
  box-shadow: 2px 3px 6px 1px;
  margin-left: 40px;
}
.context-menu__item {
  padding: 5px;
  cursor: pointer;
}
.context-menu__item:hover {
  background: rgba(0, 0, 0, 0.1);
}
</style>