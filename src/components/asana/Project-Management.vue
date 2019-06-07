<template>
  <div>
    <navbar/>
    <section class="pb-0 main-section" id="dashboard">
      <div class="card shadow shadow-lg--hover"></div>
      <main class="container-fluid mt-3">
        <div class="row mb-4">
          <div class="col-md-12">
            <h3>Active Boards</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <div class="boards-wrapper">
              <div class="board card shadow shadow-lg--hover">
                <div class="card-header">
                  <div class="card-name"><h4> Card Name </h4></div>
                  <div class="card-desc"><p> Card Description goes here </p></div>
                </div>
                <div class="card-footer">
                  <div class="card-cta">
                    <button class="btn  btn-sm btn-primary" type="button">View</button>
                    <button class="btn  btn-sm btn-danger" type="button">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  </div>
</template>



<script>
import navbar from "./navbar";
export default {
  name: "ProjectManagement",

  components: {
    navbar
  },
  data: function() {
    return {
      title: "Project - Management"
    };
  }
};
</script>

<style scoped>
#dashboard {
  /* background: linear-gradient(87deg, #fb6340 0, #fbb140 100%) !important; */
  height: 100vh;
  text-align: left;
}
#dashboard .container-fluid{
  height: 100%;
}
</style>


