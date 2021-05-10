<template>
   <div
          class="selected-option pr-4 col-6 col-md-3 col-lg-3 col-xl-2 d-flex align-items-center justify-content-md-end justify-content-center justify-content-lg-center p-2"
        >
          <router-link to="/home" style="text-decoration: none">
            <img src="../../src/assets/img/user.svg" class="p-2 log-in-icon" />
            <span class="log-in-text text-white">username</span>
          </router-link>
        </div>
</template>

<script>
export default {
  name: "usernameHeader",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.selected-option {
  background-color: #3e006b;
}
</style>
