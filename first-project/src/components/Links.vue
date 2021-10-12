<template>
  <div>
    <div class="fillFormButton__container">
      <button
        class="fillFormButton"
        v-for="item in list"
        :key="item.category"
        @click="linkHandler(item)"
      >
        {{ item.category }}: {{ item.params.value }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { quickBTNs } from "../assets/selects";

export default {
  name: "Links",
  computed: {
    list() {
      return quickBTNs;
    },
  },
  methods: {
    ...mapMutations("general", ["setFormVisible"]),
    linkHandler(item) {
      const { category: name, params } = item;
      if (this.$route.name !== name) {
        this.$router.push({ name, params });
        this.setFormVisible(false);
      }
      // console.log("this.$route.name: " + this.$route.name);
    },
  },
};
</script>

<style>
.fillFormButton {
  margin-right: 5px;
}

.fillFormButton__container {
  display: flex;
  flex-direction: row;
  width: 500px;
  justify-content: flex-start;
  margin-bottom: 10px;
}
</style>