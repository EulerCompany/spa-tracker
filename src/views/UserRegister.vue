<template>
    <Header/>
    <section>
          <div class="container">
             <div class="row justify-content-center">
                <div class="col-md-7">
                    <div class="card">
                        <div class="card-header shadow text-white font-weight-bold d-flex justify-content-center align-items-center">
                            Registration
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="form-group mt-2">
                                    <span class="field-names font-weight-bold">Username</span>
                                    <input type="text" class="form-control form-control-lg mt-2" id="name">
                                </div>
                                <div class="form-group mt-3">
                                    <span class="field-names font-weight-bold">Email</span>
                                    <input type="email" class="form-control form-control-lg mt-2" id="email">
                                </div>
                                <div class="form-group  mt-3">
                                    <span class="field-names font-weight-bold">Password</span>
                                    <input type="password" class="form-control form-control-lg mt-2" id="password">
                                </div>
                                <div class="form-group mt-3">
                                    <span class="field-names font-weight-bold">Confirm password</span>
                                    <input type="password" class="form-control form-control-lg mt-2" id="repeat-password">
                                </div>
                            </form>
                        </div>
                        <div class="d-none mb-1 confirmation-success" style="text-align: center;">Success! Check your e-mail and log in</div> <!--эту штуку прятать через d-none пока не залогинился-->
                        <div class="card-footer d-flex justify-content-between align-items-end">
                            <a href="#" class="mb-1"><button type="button" class="btn text-white btn-register">Create account</button></a>
                            <a href="#" style="text-decoration: none" class="mb-2"><span class="text-dark">Log in</span></a>
                        </div>
                    </div>
                </div>
             </div>
         </div>
    </section>
</template>

<script>
import Header from '../components/userHeaderHome.vue'

export default {
  name: 'User',
  components: {
    Header,
  }
}
</script>

<style scoped>
.card-header {
    background-color: #47007A;
    height: 42px;
    font-size: 22px;
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
    font-size: 17px;
}

.btn-register {
    background-color: #47007A;
}

.confirmation-success {
    color:green;
}

.confirmation-fail {
    color: red;
}
</style>