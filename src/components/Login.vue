<template>
  <div>
    <section class="section pb-0 bg-gradient-warning main-section">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-lg-2 ml-lg-auto">
            <div class="position-relative pl-md-5">
              <img src="../assets/img/ill/ill-2.svg" class="img-center img-fluid">
            </div>
          </div>
          <div class="col-lg-6 order-lg-1 mt-0">
            <div class="card bg-gradient-secondary shadow shadow-lg--hover mt-5">
              <form class="card-body p-lg-5" @submit="login($event)">
                <h4 class="mb-1">{{title}}</h4>
                <p class="mt-0">To access some of the coolest & awesome projects.</p>
                <div class="form-group mt-5">
                  <div class="input-group input-group-alternative">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="ni ni-user-run"></i>
                      </span>
                    </div>
                    <input class="form-control" placeholder="Your Email address" name="email" type="email">
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group input-group-alternative">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="ni ni-email-83"></i>
                      </span>
                    </div>
                    <input class="form-control" placeholder="Your Password" name="password" type="password">
                  </div>
                </div>
                <div>
                  <button type="submit" class="btn btn-default btn-round btn-block btn-lg">Login</button>
                </div>
                <router-link to="/register" class="register-link">
                  <span class="nav-link-inner--text">New Registeration?</span>
                </router-link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>



<script>
import VueRouter from "vue-router";
import axios from "axios";
export default {
  name: "Login",
  data: function() {
    return {
      title: "LOGIN",
      userDetails: {
        email: null,
        password: null
      }
    };
  },
  methods: {
    login(e) {
      e.preventDefault();
      let email = e.target.elements.email.value;
      let password = e.target.elements.password.value;
      let login = () => {
        let data = {
          email: email,
          password: password
        };
        axios
          .post("/api/login", data)
          .then(response => {
            console.log("Logged in", response);
            this.$router.push("/home");
          })
          .catch(errors => {
            console.log("Cannots login", errors);
          });
      };
      login();
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
.register-link {
  float: right;
  margin-top: 15px;
}
</style>


