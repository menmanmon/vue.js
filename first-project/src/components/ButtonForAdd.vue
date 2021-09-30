<template>
  <button class="openButton" @click="openOnClick">Add new cost +</button>
</template>

<script>
export default {
  data() {
    return {
      clicked: false,
    };
  },
  methods: {
    openOnClick() {
      this.clicked = !this.clicked;
      let clicked = this.clicked;
      this.$emit("openOnClick", clicked);
    },
  },
};
</script>

<style>
.openButton {
  margin-bottom: 10px;
}
</style>