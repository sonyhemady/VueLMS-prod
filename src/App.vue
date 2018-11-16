<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Checkin from "./components/Checkin";
export default {
  name: "app",
  components: {
    Navbar,
    Checkin
  }
};
</script>
