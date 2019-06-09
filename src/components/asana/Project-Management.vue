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
        <div>
          <TaskBoard />
        </div>
      </main>
    </section>
    <modal/>
  </div>
</template>



<script>
import navbar from "./navbar";
import modal from "./modal";
import TaskBoard from "./TaskBoard";
export default {
  name: "ProjectManagement",

  components: {
    navbar,
    modal,
    TaskBoard
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
#dashboard .container-fluid {
  height: 100%;
}
</style>


