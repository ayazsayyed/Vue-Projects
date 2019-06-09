<template>
  <div>
      <h1>User-Management</h1>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-sm-6">
            <div class="form-group">
              <input type="text" placeholder="Regular" class="form-control">
            </div>
            <div class="form-group">
              <div class="input-group mb-4">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="ni ni-zoom-split-in"></i></span>
                </div>
                <input class="form-control" placeholder="Search" type="text">
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="form-group">
              <input type="text" placeholder="Regular" class="form-control" disabled="">
            </div>
            <div class="form-group">
              <div class="input-group mb-4">
                <input class="form-control" placeholder="Birthday" type="text">
                <div class="input-group-append">
                  <span class="input-group-text"><i class="ni ni-zoom-split-in"></i></span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="form-group has-success">
              <input type="text" placeholder="Success" class="form-control is-valid">
            </div>
            <div class="form-group has-danger">
              <input type="email" placeholder="Error Input" class="form-control is-invalid">
            </div>
          </div>
        </div>
      </div>
  </div>
</template>



<script>
export default {
  name: "UserManagement"
};
</script>

<style scoped>

</style>


