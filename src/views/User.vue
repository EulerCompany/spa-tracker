<template>
<Header/>
    <section>
        <!--greeting-->
        <div class="container">
            <div class="row justify-content-center">
                <div class="mt-3 col-7 d-flex justify-content-start">
                    <span class="greeting font-weight-bold">Hello, <span class="username"> username</span></span>
                </div>
            </div>
        </div>
        <!--greeting-->

        <!--first card-->
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-7 d-flex justify-content-start">
                    <div class="card">
                        <div
                            class="card-header shadow text-white font-weight-bold d-flex align-items-center justify-content-start">
                            General
                        </div>
                        <div class="card-body">
                            <div class="input-group my-3 form-inline">
                                <label class="mr-5">Email </label>
                                <input type="email" class="form-control" placeholder="" aria-label=""
                                    aria-describedby="basic-addon1">
                                <div class="input-group-append">
                                    <button class="btn btn-save text-white" type="button">Save</button>
                                </div>
                            </div>

                            <div class="input-group my-3 form-inline">
                                <label class="mr-2">Username </label>
                                <input type="text" class="form-control" placeholder="" aria-label=""
                                    aria-describedby="basic-addon1">
                                <div class="input-group-append">
                                    <button class="btn btn-save text-white" type="button">Save</button>
                                </div>
                            </div>


                            <div class="input-group my-3 form-inline">
                                <label class="mr-2">Language </label>
                                <select class="lang-select ml-1" id="inputGroupSelect">
                                    <option value="1">English</option>
                                    <option value="2">Ukrainian</option>
                                </select>
                            </div>
                            <div class="d-none mb-1 confirmation-success" style="text-align: center;"> Success </div>
                            <!--снова прячем через d-none-->
                        </div>
                    </div>
                </div>
            </div>

            <!--second card-->
            <div class="row mt-4 justify-content-center">
                <div class="col-7 mb-5 d-flex justify-content-start">
                    <div class="card">
                        <div
                            class="card-header shadow text-white font-weight-bold d-flex align-items-center justify-content-start">
                            Password
                        </div>
                        <div class="card-body">
                            <div class="input-group my-3 form-inline">
                                <label class="mr-2">New </label>
                                <input type="password" class="form-control ml-5" placeholder="" aria-label="">
                            </div>
                            <div class="input-group my-3 form-inline">
                                <label class="mr-2">Confirm </label>
                                <input type="password" class="form-control ml-3" placeholder="" aria-label=""
                                    aria-describedby="basic-addon1">
                                <div class="input-group-append">
                                    <button class="btn btn-save text-white" type="button">Save</button>
                                </div>
                            </div>
                            <div class="d-none mb-1 confirmation-success" style="text-align: center;"> Success </div>
                            <!--снова прячем через d-none-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>



<script>

import Header from '../components/userHeader.vue'

export default {
  name: 'User',
  components: {
    Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.selected-option {
    background-color: #3e006b;
}

.greeting {
    font-size:calc(18px + 1.5vw);
}

.card-header {
    background-color: #47007A;
    height: 35px;
    font-size: 21px;
}

.card {
    border-radius: 3px;
    background-color: #f4f1f1;
    top: 8vh;
}

.btn-save {
    background-color: #47007A; ;
}

.confirmation-success {
    color:green;
}

.confirmation-fail {
    color: red;
}

.one-liner {
    display: inline-block;
}

.lang-select {
    background-color: white;
    height: 35px;
}
</style>
