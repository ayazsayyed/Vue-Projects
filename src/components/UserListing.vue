<template>
  <div>
    <section class="section pb-0 bg-gradient-warning main-section">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-md-7">
            <div class="card shadow shadow-lg--hover mt-5">
              <div class="card-body">
                <h4 class="mb-4">Members</h4>
                <div class="d-flex px-3 user-item" v-for="(user, key) in allUsers" :key="key">
                  <div>
                    <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                      <i class="ni ni-active-40"></i>
                    </div>
                  </div>
                  <div class="pl-4">
                    <h5 class="title text-warning user-name">{{user.userDetails.fname}}</h5>
                    <p class="user-location">Mumbai, Maharashtra</p>
                  </div>
                  <a class="text-success view-user">View user</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>



<script>
import axios from "axios";
import db from './firebase/firebaseInit'
export default {
  name: "user-listing",
  data() {
    return {
      allUsers: []
    };
  },
  computed: {},
  methods: {
    getUserListing() {
      axios
        .get("http://localhost:5000/api/register")
        .then(response => (this.allUsers = response.data));
    }
  },
  created() {
    console.log("Listing component loaded");
    this.getUserListing();
    db.collection('users').where('fname', '==', 'Ayaz').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let newData = {
            'fname': doc.data().fname,
            'lname':doc.data().lname,
            'contact_number':doc.data().contact_number,
            'email':doc.data().email,
            'password':doc.data().password
          }

          console.log(newData)
        })
      })
  }
};
</script>

<style scoped>
section.main-section {
  height: 100vh;
  display: flex;
  justify-content: center;
}
.card-body {
  text-align: left;
}
.user-item {
  margin-bottom: 1rem;
  align-items: center;
}
p.user-location {
  font-size: 12px;
  margin: 0;
}
.user-name {
  margin: 0;
}
.view-user {
  margin-left: auto;
  background: #2dce89;
  color: #fff !important;
  padding: 6px 8px;
  font-size: 12px;
  border-radius: 4px;
  cursor: pointer;
}
</style>


