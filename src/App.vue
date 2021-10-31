<template>
  <v-app>
    <v-app-bar flat>
      <div class="text-h5 text-sm-h3 header">My personal costs</div>
    </v-app-bar>
    <v-main>
      <Schedule class="mt-5" />
    </v-main>
  </v-app>
</template>
 
<script>
import Schedule from "./components/Schedule";

export default {
  components: {
    Schedule,
  },
};
</script>

<style>
* {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
</style>
