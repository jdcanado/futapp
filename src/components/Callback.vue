<!-- src/components/Callback.vue -->

<template>
  <div>
    <p>Loading...</p>    
  </div>
</template>

<script>
export default {
  methods: {
    handleLoginEvent(data) {
      this.$router.push(data.state.target || "/index");
    }
  },
  created() {
    this.$auth.handleAuthentication();
  }
};
</script>