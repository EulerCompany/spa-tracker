<template>
    <Header/>
    <section>
        <div class="container">
            <div class="row justify-content-center searchbar">
                <div class="col-10">
                    <div class="input-group mb-3 d-flex align-items-center border" id="search">
                        <input type="search" class="form-control bg-none border-0" placeholder="Search projects"
                            aria-describedby="basic-addon3">
                        <div class="input-group-append">
                            <button id="button-addon3" type="button" class="btn btn-link text-primary"><i
                                    class="fa fa-search text-dark"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-8 col-md-5">
                    <div class="card my-3">
                        <div
                            class="card-header text-white font-weight-bold d-flex justify-content-start align-items-center">
                            Project1
                        </div>
                        <div class="card-body mt-1">
                            <div class="ml-2">
                                <p>Start date: <span id="date" class="ml-1">01/01/2021</span></p>
                                <p>Time logged: <span id="logged" class="ml-1">2w 4d</span></p>
                                <p>Priority:<span id="priority" class="ml-2">low <i class="fa fa-circle" style="color:greenyellow"></i></span></p>
                            </div>
                        </div>

                        <div class="card-footer d-flex justify-content-between align-items-end">
                            <a href="#" style="text-decoration: none;"><span class="delete-text">Delete <img class="delete-img mb-1 pl-1" src="../../src/assets/img/delete.svg"></span></a>
                            <a href="#" style="text-decoration: none;" class = "text-dark"><span>More <img class="delete-img mb-1 pl-1" src="../../src/assets/img/right-arrow.svg"></span></a>
                        </div>
                    </div>
                </div>


                <div class="col-8 col-md-5">
                    <div class="card my-3">
                        <div
                            class="card-header text-white font-weight-bold d-flex justify-content-start align-items-center">
                            Project2
                        </div>
                        <div class="card-body mt-1">
                            <div class="ml-2">
                                <p>Start date: <span id="date" class="ml-1">01/01/2021</span></p>
                                <p>Time logged: <span id="logged" class="ml-1">2w 4d</span></p>
                                <p>Priority:<span id="priority" class="ml-2">medium <i class="fa fa-circle" style="color:orange"></i></span></p>
                            </div>
                        </div>

                        <div class="card-footer d-flex justify-content-between align-items-end">
                            <a href="#" style="text-decoration: none;"><span class="delete-text">Delete <img class="delete-img mb-1 pl-1" src="../../src/assets/img/delete.svg"></span></a>
                            <a href="#" style="text-decoration: none;" class="text-dark"><span>More <img class="delete-img mb-1 pl-1" src="../../src/assets/img/right-arrow.svg"></span></a>
                        </div>
                    </div>
                </div>

                <!--<div class="col-8 col-md-5">
                    <div class="card my-3">
                        <div
                            class="card-header text-white font-weight-bold d-flex justify-content-start align-items-center">
                            Project2
                        </div>
                        <div class="card-body mt-1">
                            <div class="ml-2">
                                <p>Start date: <span id="date" class="ml-1">01/01/2021</span></p>
                                <p>Time logged: <span id="logged" class="ml-1">2w 4d</span></p>
                                <p>Priority:<span id="priority" class="ml-2">medium <i class="fa fa-circle" style="color:orange"></i></span></p>
                            </div>
                        </div>

                        <div class="card-footer d-flex justify-content-between align-items-end">
                            <a href="#" style="text-decoration: none;"><span class="delete-text">Delete <img class="delete-img mb-1 pl-1" src="icons/delete.svg"></img></span>
                            <a href="#" style="text-decoration: none;" class="text-dark"><span>More <img class="delete-img mb-1 pl-1" src="icons/right-arrow.svg"></img></span></a>
                        </div>
                    </div>
                </div>-->

                <div class="col-8 col-md-5">
                    <div class="card my-3 border-0">
                        <a href="#" style="text-decoration: none">
                        <div class="card-body d-flex mt-1 align-items-center justify-content-center mt-5">
                            <img class="list-img" src="../../src/assets/img/plus.svg">
                        </div>
                        <div class="d-flex justify-content-center">
                        <p class="small-hint text-dark">Add a new project</p>
                        </div></a>
                    </div>
                </div>

                <div class="col-8 col-md-5">
                    <div class="card my-3 border-0">
                        <a href="#" style="text-decoration: none">
                            <div class="card-body d-flex mt-1 align-items-center justify-content-center mt-5">
                            <img class="list-img" src="../../src/assets/img/list.svg">
                        </div>
                        <div class="d-flex justify-content-center">
                            <p class="small-hint text-dark">See all</p>
                        </div>
                        </a>
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
    height: 30px;
    font-size: 18px;
}

.loupe {
    height: 35px;
}

.searchbar {
    margin-top: 8vh;
}

#button-addon1 {
    height: 50px;
}

.form-control::placeholder {
    font-size: 0.95rem;
    color: #aaa;
    font-style: italic;
  }

  .form-control:focus {
    box-shadow: none;
  }

  #search {
      border-radius: 4px;
  }

  .card-footer {
      border: 0px;
      background-color: white;
  }

  .card {
    height:calc(260px + 2vh);
  }

  .delete-text {
      color: #de513c;
  }

  .delete-img {
      height: 20px;
  }

  .list-img{
      height:120px;
  }

  .fa-plus {
      font-size: 120px;
  }

  .small-hint {
      font-size: 20px;
      color: #c6c8cc;
  }
</style>
