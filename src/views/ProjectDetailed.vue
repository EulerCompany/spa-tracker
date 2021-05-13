<template>
    <Header/>
        <section>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 d-flex justify-content-start mt-3">
                    <a href="#" style="text-decoration: none;"><img src="../../src/assets/img/left-arrow.svg" alt="left-arrow"
                            class="left-arrow"></a><a href="#" style="text-decoration: none;"><span
                            class="ml-1 back-text">Back</span></a>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-7 col-8 d-flex justify-content-start mt-3">
                    <div>Main > Project1</div>
                    <!--тут дива-андерлайн-->
                </div>
                <div class="col-lg-7 col-8 d-flex justify-content-start">
                    <div class="text-underline bg-dark"></div>
                </div>
            </div>

            <div class="row justify-content-center mt-4">
                <div class="col-lg-7 col-8 d-flex justify-content-between align-items-center">
                    <span class="project-title">Project1</span>
                    <a href="#" style="text-decoration: none;"><img class="delete-img" src="../../src/assets/img/delete.svg"></a>
                </div>
            </div>

            <div class="row justify-content-center mt-4">
                <div class="col-12 col-md-5 col-lg-4 d-flex justify-content-center justify-content-md-start align-items-center">
                    <div class="form-group form-inline">
                        <span class="field-names font-weight-bold">Start date</span>
                        <input type="date" class="calendar ml-3">
                    </div>
                </div>


                <div class="col-12 col-md-4 col-lg-3 d-flex justify-content-center justify-content-md-start align-items-center">
                    <div class="form-group form-inline">
                        <label class="mr-2 font-weight-bold">Status </label>
                        <select class="status-select ml-1" id="inputGroupSelect">
                            <option value="1">In progress</option>
                            <option value="2">To do</option>
                            <option value="3">Done</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="row justify-content-center mt-4">
                <div class="col-12 col-md-3 col-lg-2 d-flex justify-content-center justify-content-md-start align-items-center">
                    <span class="font-weight-bold">Priority: </span><i class="fa fa-circle mx-1" style="color:orange"></i> medium
                </div>
                <div class="col-12 col-md-3 col-lg-2 d-flex justify-content-center justify-content-md-around align-items-center">
                    <span class="font-weight-bold">Total: 3w 7h</span>
                </div>
                <div class="col-12 col-md-3 col-lg-3 d-flex justify-content-center justify-content-md-around align-items-center">
                    <a href="#" style="text-decoration: none" class="text-dark font-weight-bold"><span class="d-flex align-items-center">Add a subtask <img class="black-plus ml-2"
                            src="../../src/assets/img/black-plus.svg"></span></a>
                </div>
            </div>

            <div class="row justify-content-center mt-5">
                <div class="col-7">
                    <h4>Description</h4>
                </div>
                <div class="col-7">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam similique unde possimus eaque
                    eligendi impedit cupiditate facere atque iure, amet praesentium? Itaque rerum, quos recusandae
                    commodi quam asperiores impedit, et ullam corporis dolorem, similique labore debitis reprehenderit
                    fugit eum ratione.
                </div>
            </div>

            <div class="row justify-content-center mt-5">
                <div class="col-8 col-md-7 add-item-top">
                    <div class="input-group my-3 form-inline d-flex align-items-center font-weight-bold">
                        <label class="mr-2">Log </label>
                        <input class ="w-d-h mr-1 ml-2" type="text" placeholder="" aria-label="" size="20"/>w
                        <input class ="w-d-h mr-1 ml-2" type="text" placeholder="" aria-label="" size="20"/>d
                        <input class ="w-d-h mr-1 ml-2" type="text" placeholder="" aria-label="" size="20"/>h
                    </div>
                    <div class="form-group mt-5">
                        <span class="field-names font-weight-bold">Comment</span>
                        <textarea class="form-control mt-2" rows="3"></textarea>
                    </div>
                </div>
                <div class="col-8 col-md-7 add-item d-flex justify-content-end pb-3 add-item-bottom font-weight-bold text-dark"> 
                    <a href="#" style="text-decoration: none" class="text-dark"><span class="pr-3">Add</span></a>
                </div>
            </div>

        </div>
    </section>

    
    <!--subtasks and work log section-->
    <section>
        <!--start of subtask list-->
        <div class="container-fluid cont">
            <div class="row justify-content-center">
                <div class="col-md-6 col-9">
                    <div class="card mb-4">
                        <div class="card-header shadow text-white font-weight-bold d-flex align-items-center">
                            Subtasks
                        </div>

                        <div class="card-body pb-0 pl-0 pr-0 pt-1">
                            <div class="subtask-item border-bottom pl-3 pt-2">
                                <div class="row">
                                    <div class="col-12  subtask-name font-weight-bold">
                                        <a href="#" style="text-decoration: none" class="text-dark">Subtask 1</a>
                                    </div>
                                    <div class="col-md-4 col-12 mt-2">
                                        Started: 01/01/2020
                                    </div>
                                    <div class="col-md-8 col-12 mt-2">
                                        Priority: <i class="fa fa-circle mx-1" style="color:greenyellow"></i> low
                                    </div>
                                    <div class="col-md-4 col-12 mt-3 mb-3">
                                        Status: in progress
                                    </div>
                                    <div class="col-md-8 col-12 mt-3 mb-3">
                                        Logged: 2w 4d
                                    </div>
                                    <div class="col-12 d-flex justify-content-around mb-2">
                                        <a href="#" style="text-decoration: none"><span class="d-flex align-items-center delete-text">Delete <img
                                                src="../../src/assets/img/delete.svg" class="delete-img-small ml-2"></span></a>
                                                <a href="#" style="text-decoration: none" class="text-dark"><span class="d-flex align-items-center">More <img class="right-arrow ml-2"
                                                src="../../src/assets/img/right-arrow.svg"></span></a>
                                    </div>
                                </div>
                            </div>

                            <div class="subtask-item border-bottom pl-3 pt-2">
                                <div class="row">
                                    <div class="col-12 subtask-name font-weight-bold">
                                        <a href="#" style="text-decoration: none;" class="text-dark">Subtask 2</a>
                                    </div>
                                    <div class="col-md-4 col-12 mt-2 font-weight-lighter">
                                        Started: 01/01/2020
                                    </div>
                                    <div class="col-md-8 col-12 mt-2">
                                        Priority: <i class="fa fa-circle mx-1" style="color:greenyellow"></i> low
                                    </div>
                                    <div class="col-md-4 col-12 mt-3 mb-3">
                                        Status: in progress
                                    </div>
                                    <div class="col-md-8 col-12 mt-3 mb-3">
                                        Logged: 2w 4d
                                    </div>
                                    <div class="col-12 d-flex justify-content-around mb-2">
                                        <a href="#" style="text-decoration: none"><span class="d-flex align-items-center delete-text">Delete <img
                                                src="../../src/assets/img/delete.svg" class="delete-img-small ml-2"></span></a>
                                                <a href="#" style="text-decoration: none" class="text-dark"><span class="d-flex align-items-center">More <img class="right-arrow ml-2"
                                                src="../../src/assets/img/right-arrow.svg"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card-footer d-flex justify-content-center align-items-end ">
                            <a href="#" style="text-decoration: none"><span class="text-dark font-weight-bold">See
                                    all</span></a>
                        </div>
                    </div>

                    <div class="card mt-4">
                        <div class="card-header shadow text-white font-weight-bold d-flex align-items-center">
                            Work log
                        </div>
                        <div class="card-body pb-0 pl-0 pr-0 pt-1">
                            <div class="subtask-item border-bottom pl-3 pt-2">
                                <div class="row">
                                    <div class="col-12 col-12 subtask-name font-weight-bold">
                                        <a href="#" style="text-decoration: none" class="text-dark">Subtask 1</a>
                                    </div>
                                    <div class="col-12 mt-2 font-weight-lighter">
                                        01/01/2020: 5h
                                    </div>

                                    <div class="col-12 mt-3 mb-3">
                                        Short description
                                    </div>
                                </div>
                            </div>

                            <div class="subtask-item border-bottom pl-3 pt-2">
                                <div class="row">
                                    <div class="col-12 subtask-name font-weight-bold">
                                        <a href="#" style="text-decoration: none;" class="text-dark">Subtask 2</a>
                                    </div>
                                    <div class="col-12 mt-2 font-weight-lighter">
                                        01/01/2020: 5h
                                    </div>

                                    <div class="col-12 mt-3 mb-3">
                                        Short description
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card-footer d-flex justify-content-center align-items-end">
                            <a href="#" style="text-decoration: none"><span class="text-dark font-weight-bold">See
                                    all</span></a>
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
    height: 35px;
    font-size: 21px;
}

.card {
    border-radius: 3px;
    background-color: #f4f1f1;
    top: 8vh;
}

.delete-img {
    height: 30px;
}

.left-arrow {
    height: 30px;
}

.back-text {
    font-size: 23px;
    color: black;
}

.text-underline {
    width: 200px;
    height: 3px;
    margin: 0;
  }

  .project-title{
      font-size: 50px;
  }

  .status-select {
      background-color: white;
  }

  .card-header {
    background-color: #47007A;
    height: 35px;
    font-size: 23px;
}

.card {
    border-radius: 3px;
    background-color: #f4f1f1;
    top: 8vh;
}

.card-footer {
    background-color: #f4f1f1;
    height: 50px;
}

.subtask-item {
    border-bottom: 1px;
    margin: 0;
}

.subtask-name {
    font-size: 20px;
}

.delete-img-small {
    height: 25px;
}

.right-arrow {
    height: 25px;
}

.delete-text {
    color: #de513c;
}

.black-plus {
    height: 20px;
}

.cont {
    padding-bottom: 200px;
}

.w-d-h {
    width: calc(40px);
}

.add-item-top {
    border-radius: 3px 3px 0px 0px;
    background-color: #f4f1f1;
}

.add-item-bottom {
    border-radius: 0px 0px 3px 3px;
    background-color: #f4f1f1;
}
</style>