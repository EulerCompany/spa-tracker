<template>
  <Header />
  <section>
    <div
      class="container-fluid content-container d-flex justify-content-center"
    >
      <div class="row align-self-center">
        <div class="col-12 d-flex justify-content-center">
          <span class="title font-weight-bold">No projects yet!</span>
        </div>
        <div class="col-12 d-flex justify-content-center">
          <a href="#"
            ><button type="button" class="btn btn-start text-white m-5 btn-lg">
              <span class="start-text">Start logging</span>
            </button></a
          >
        </div>
      </div>
    </div>
  </section></template
>

<script>
import Header from "../components/headerMain.vue";

export default {
  name: "Main",
  components: {
    Header,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content-container {
  position: relative;
  top: 140px;
}

.btn-start {
  background-color: #47007a;
  width: 31vw;
}

.title {
  font-size: 6vw;
}
</style>
