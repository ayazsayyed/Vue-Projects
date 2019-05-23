<template>
  <div>
    <section class="section pb-0 bg-gradient-warning main-section">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-md-12">
            <div class="card shadow listing shadow-lg--hover mt-5">
              <div class="card-header">
                <div class="heading mb-4">
                  <h4>Members list</h4>
                  <button class="btn btn-outline-success" @click="addNewUser" type="button">Add User</button>
                </div>
                <div class="new-user-form-wrapper">
                  <form v-on:submit.prevent="addUser">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control form-control-alternative"
                            id="exampleFormControlInput1"
                            placeholder="Full Name"
                            v-model="newUserData.fullName"
                          >
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <input
                            type="email"
                            class="form-control form-control-alternative"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                            v-model="newUserData.email"
                          >
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control form-control-alternative"
                            id="exampleFormControlInput1"
                            placeholder="Contact Number"
                            v-model="newUserData.contact"
                          >
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <select
                            class="custom-select form-control-alternative"
                            id="country"
                            v-model="newUserData.department"
                          >
                            <option value>Department</option>
                            <option>United States</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <select
                            class="custom-select form-control-alternative"
                            id="country"
                            v-model="newUserData.designation"
                          >
                            <option value>Designation</option>
                            <option>United States</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <select
                            class="custom-select form-control-alternative"
                            id="country"
                            v-model="newUserData.address.city"
                          >
                            <option value>City</option>
                            <option>United States</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <select
                            class="custom-select form-control-alternative"
                            id="country"
                            v-model="newUserData.address.state"
                          >
                            <option value>State</option>
                            <option>United States</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <select
                            class="custom-select form-control-alternative"
                            id="country"
                            v-model="newUserData.address.country"
                          >
                            <option value>Contry</option>
                            <option>United States</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <input type="submit" value="Add" class="btn btn-default">
                  </form>
                </div>
              </div>
              <div class="card-body">
                <!-- <div class="d-flex px-3 user-item" v-for="(user, key) in allUsers" :key="key">
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
                </div>-->
                <ul class="user-listings">
                  <li class="list-item" v-for="(user, key) in users" :key="key">
                    <div class="user-avatar">
                      <h5>{{(user.fullName.split(' ')[0].charAt(0) + user.fullName.split(' ')[1].charAt(0)) || " - " }}</h5>
                    </div>
                    <div class="user-name">
                      <h5 class="name">{{user.fullName}}</h5>
                      <p class="emp-id">{{user.empId}}</p>
                    </div>
                    <div class="user-department">
                      <p>{{user.department}}</p>
                    </div>
                    <div class="user-location">
                      <p class="user-country">{{user.address.country}}</p>
                      <p class="user-city">{{user.address.city}}</p>
                    </div>
                    <div class="user-actions">
                      <ul>
                        <li class="edit">
                          <i class="fa fa-pencil"></i>
                        </li>
                        <li class="Delete">
                          <i class="fa fa-trash"></i>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
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
import db from "./firebase/firebaseInit";
import userData from './data/user-list-data';
export default {
  name: "user-listing",
  data() {
    return {
      allUsers: [],
      users:[...userData],
      newUserData:{
        fullName:'',
        email:'',
        department:'',
        designation:'',
        address:{
          city:'',
          state:'',
          country:''
        },
        empId:'',

      }
    };
  },
  computed: {},
  _methods: {
    getUserListing() {
      axios
        .get("http://localhost:5000/api/register")
        .then(response => (this.allUsers=response.data));
    },
    addNewUser(){
      $('.new-user-form-wrapper').slideToggle()
    },
    addUser(){
      console.log('Adding new user...', this.newUserData);
      this.users.push(this.newUserData)
    }
  },
  get methods() {
    return this._methods;
  },
  set methods(value) {
    this._methods=value;
  },
  created() {
    console.log("Listing component loaded");
    this.getUserListing();
    db.collection("users")
      .where("fname", "==", "Ayaz")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          let newData = {
            fname: doc.data().fname,
            lname: doc.data().lname,
            contact_number: doc.data().contact_number,
            email: doc.data().email,
            password: doc.data().password
          };

          console.log(newData);
        });
      });
  }
};
</script>

<style scoped lang="scss">
section.main-section {
  height: 100vh;
  display: flex;
  justify-content: center;
}
.card {
  text-align: left;
}
.card.listing {
  min-height: 50vh;
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
.listing .heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card-body {
  padding-left: 0;
  padding-right: 0;
}
.new-user-form-wrapper {
  display: none;
}

// Listings
.user-listings {
  padding: 0;
  & * {
    list-style: none;
    margin: 0;
  }
  li.list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 20px;
    border-top: 1px solid#dee2e6;
    transition: all 0.3s;
    cursor: pointer;
    &:last-of-type {
      border-bottom: 1px solid#dee2e6;
    }
    &:hover {
      background: #e9ecef;
    }
    p {
      color: #8898aa;
      line-height: normal;
    }
    .user-avatar {
      width: 10%;
      h5 {
        height: 40px;
        width: 40px;
        background: #fcd659;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        color: #fff;
        font-size: 16px;
      }
    }
    .user-name {
      .name {
        margin: 0;
        font-size: 18px;
      }
      .emp-id {
        font-size: 14px;
      }
      width: 30%;
    }
    .user-department {
      width: 25%;
    }
    .user-location {
      width: 25%;
    }
    .user-actions {
      width: 10%;
      ul {
        padding: 0;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        .fa {
          &.fa-pencil,
          &.fa-trash {
            font-size: 18px;
          }
          &.fa-pencil {
            color: #ff7f10;
          }
          &.fa-trash {
            color: #f5365c;
          }
        }
      }
    }
  }
}
</style>


