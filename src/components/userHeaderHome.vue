<template>
  <header class="header">
    <div class="container-fluid">
      <div class="row">
        <div
          class="col-12 col-md-6 col-lg-7 col-xl-8 d-flex align-items-center justify-content-md-start justify-content-center col-header"
        >
          <a href="#">
            <img src="../../src/assets/img/logo.svg" class="p-2 logo-icon" />
          </a>
          <a href="#" style="text-decoration: none">
            <span class="logo-text text-white font-weight-bold font-italic"
              >TimeTracker</span
            >
          </a>
        </div>
        
        <UserName/>
        <LogIn/>

      </div>
    </div>
  </header>
</template>

<script>

import LogIn from './logOut.vue'
import UserName from './userNameHeader.vue'

export default {
  name: "Header",
  components: {
      LogIn,
      UserName
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background-color: #47007a;
}

.col-header {
  height: 100px;
}

.logo-icon {
  height: 78px;
}

.logo-text {
  font-size: 42px;
}

</style>
