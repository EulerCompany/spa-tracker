<template>
  <header class="header">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-12 col-md-6 d-flex align-items-center justify-content-md-start justify-content-center col-header">
                    <a href="#">
                        <img src="../assets/img/logo.svg" class="p-2 logo-icon">
                    </a>
                    <a href="#"  style="text-decoration: none">
                        <span class="logo-text text-white font-weight-bold font-italic">TimeTracker</span>
                    </a>
                </div>
               <LogIn/>
            </div>
        </div>
    </header>
</template>

<script>
import LogIn from "./logIn.vue";
export default {
  name: "Header",
  components: {
    LogIn,
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
