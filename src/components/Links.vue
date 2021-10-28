<template>
  <div>
    <div class="fillFormButton__container">
      <v-btn
        class="fillFormButton mb-2 ml-2"
        v-for="item in list"
        :key="item.category"
        @click="linkHandler(item)"
      >
        {{ item.params.category }}: {{ item.params.value }}
      </v-btn>
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
    ...mapMutations("payments", ["setCurrentItem"]),
    linkHandler(item) {
      const { category: name, params } = item;
      if (this.$route.name !== name) {
        this.$router.push({ name, params });
        this.setFormVisible(false);
      }
      this.setCurrentItem(item);
    },
  },
};
</script>

<style>
.fillFormButton {
  margin: 2px 0;
}

.fillFormButton__container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>