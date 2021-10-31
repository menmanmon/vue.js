<template>
  <v-btn
    plain
    :ripple="false"
    class="openButton mb-2 mt-2 ml-2"
    @click="changeHandler"
  >
    {{ formVisible ? "- Hide" : "+ Show" }} Form
  </v-btn>
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
  height: 22px;
  margin: 0 15px 10px 0;
}
</style>