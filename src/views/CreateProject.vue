<template>
  <Header />
  <section>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-7">
          <div class="card">
            <div
              class="card-header shadow text-white font-weight-bold d-flex align-items-center"
            >
              Create project
            </div>
            <div class="card-body">
              <form>
                <div class="form-group mt-2">
                  <span class="field-names font-weight-bold">Project name</span>
                  <input
                    type="text"
                    class="form-control form-control-lg mt-2"
                    id="name"
                  />
                </div>
                <div class="form-group my-5">
                  <span class="field-names font-weight-bold">Start date</span>
                  <input type="date" class="calendar ml-3" />
                </div>
                <div class="form-group mt-3">
                  <span class="field-names font-weight-bold">Priority</span>
                  <select class="form-select mx-5">
                    <option> High</option>
                    <option> Medium</option>
                    <option> Low </option>
                  </select>
                </div>
                <div class="form-group mt-5">
                  <span class="field-names font-weight-bold">Description</span>
                  <textarea class="form-control mt-2" rows="3"></textarea>
                </div>
              </form>
            </div>
            <div class="card-footer d-flex justify-content-end align-items-end">
              <a href="#" class="mb-1 mx-4"
                ><button
                  type="button"
                  class="btn text-white btn-save d-flex align-items-center"
                >
                  Save
                </button></a
              >
              <a href="#" style="text-decoration: none" class="mb-2"
                ><span class="text-dark">Cancel</span></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Header from "../components/userHeaderHome.vue";

export default {
  name: "Main",
  components: {
    Header,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-header {
  background-color: #47007a;
  height: 46px;
  font-size: 26px;
}

.card {
  border-radius: 3px;
  background-color: #f4f1f1;
  top: 8vh;
}

.card-footer {
  background-color: #f4f1f1;
  border: none;
}

.field-names {
  font-size: 22px;
}

.btn-save {
  background-color: #47007a;
  height: 35px;
}

.calendar {
  height: 50px;
}

.form-select {
  background-color: white;
  width: 140px;
  height: 40px;
}
</style>
