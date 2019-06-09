<template>
  <div>
      <Header />
      <h1>Dashboard</h1>
      <div class="container-fluid">
          <div class="row flex-xl-nowrap">
              <div class="col-12 col-md-3 col-xl-2 ct-sidebar">
                  sidebar
              </div>
              <div class="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 ct-content">
                  main content
              </div>
          </div>
      </div>
  </div>
</template>



<script>
import Header from './projectComponents/header'
export default {
  name: "Dashboard",
    components: {
    Header
  }
};
</script>

<style scoped>

</style>


