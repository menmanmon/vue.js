<template>
  <div>
    <header>
      <div><h2>My personal costs</h2></div>
    </header>
    <main>
      <Schedule />
    </main>
  </div>
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
