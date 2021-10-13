<template>
  <button class="openButton" @click="changeHandler">
    {{ formVisible ? '- Hide' : '+ Show' }} Form
  </button>
</template>

<script>
import { mapState, mapMutations } from "vuex";


export default {
  name: "BtnForOpenForm",
  computed: {
    ...mapState("general", ["formVisible"]),
  },
  methods: {
    ...mapMutations("general", ["setFormVisible"]),
    changeHandler() {
      this.setFormVisible();
    },
  },
};
</script>

<style>
.openButton {
  margin: 0 15px 10px 0;
}
</style>