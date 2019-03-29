<template>
  <div>
    <section class="section pb-0 bg-gradient-warning main-section">
      <div class="container">
        <div class="row row-grid align-items-center justify-content-md-center">
          <div class="col-lg-8 order-lg-1 mt-0">
            <div class="card bg-gradient-secondary shadow shadow-lg--hover mt-5">
              <form class="card-body p-lg-5" @submit="registerForm">
                <h4 class="mb-1">Register</h4>
                <p class="mt-0">To access some of the coolest & awesome projects.</p>
                <div class="form-group mt-3">
                  <div class="input-group input-group-alternative">
                    <input
                      class="form-control"
                      placeholder="First Name"
                      type="text"
                      v-model="userInfo.fname"
                    >
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group input-group-alternative">
                    <input
                      class="form-control"
                      placeholder="Last Name"
                      type="text"
                      v-model="userInfo.lname"
                    >
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group input-group-alternative">
                    <input
                      class="form-control"
                      placeholder="Contact Number"
                      type="text"
                      v-model="userInfo.contact"
                    >
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group input-group-alternative">
                    <input
                      class="form-control"
                      placeholder="Your Email address"
                      type="email"
                      v-model="userInfo.email"
                    >
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group input-group-alternative">
                    <input
                      class="form-control"
                      placeholder="Your Password"
                      type="password"
                      v-model="userInfo.password"
                    >
                  </div>
                </div>
                <div>
                  <button type="submit" class="btn btn-default btn-round btn-block btn-lg">Sign up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>



<script>
import axios from 'axios'
export default {
  name: "Register",
  data() {
    return {
      userInfo: {
        fname: "",
        lname: "",
        contact: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    registerForm(e) {
      e.preventDefault();
      console.log("form submit", this.userInfo);
      axios({
        method: "post",
        url: "http://localhost:5000/api/register",
        data: this.userInfo,
        config: { headers: { "Content-Type": "application/json" } }
      })
        .then(function(response) {
          //handle success
          console.log(response);
        })
        .catch(function(response) {
          //handle error
          console.log(response);
        });
    }
  }
};
</script>

<style scoped>
section.main-section {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>


