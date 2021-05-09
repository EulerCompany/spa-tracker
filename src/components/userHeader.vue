<template>
 <header class="header">
        <div class="container-fluid">
            <div class="row">
                <div
                    class="col-12 col-md-6 col-lg-7 col-xl-8 d-flex align-items-center justify-content-md-start justify-content-center col-header">
                    <a href="#">
                        <img src="../../src/assets/img/logo.svg" class="p-2 logo-icon">
                    </a>
                    <a href="#" style="text-decoration: none">
                        <span class="logo-text text-white font-weight-bold font-italic">TimeTracker</span>
                    </a>
                </div>
                <div
                    class="selected-option pr-4 col-6 col-md-3 col-lg-3 col-xl-2 d-flex align-items-center justify-content-md-end justify-content-center justify-content-lg-center p-2">
                    <a href="#" style="text-decoration: none">
                        <img src="../../src/assets/img/user.svg" class="p-2 log-in-icon">
                        <span class="log-in-text text-white">username</span>
                    </a>
                </div>
                <div
                    class="col-6 col-md-3 col-lg-2 col-x2-1 d-flex align-items-center justify-content-center justify-content-lg-center p-2">
                    <a href="#" style="text-decoration: none">
                        <span class="log-in-text text-white">Log out</span>
                        <img src="../../src/assets/img/log-in.svg" class="p-2 log-in-icon">
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
    background-color: #47007A;
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

body {
    font-family: 'Poppins', sans-serif;
}

.selected-option {
    background-color: #3e006b;
}
</style>
