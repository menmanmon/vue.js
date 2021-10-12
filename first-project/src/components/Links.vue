<template>
  <div>
    <div class="links">
      <div class="links__container">
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
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { quickBTNs } from '../assets/selects';

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
</style>