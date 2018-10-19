 <template>
  <nav>
    <div class="nav-wrapper teal">
      <div class="container">
        <router-link to="/" class="brand-logo">VueJs LMS</router-link>
        <ul class="right">
          <li v-if="isLoggedIn">
            <span class="email black-text">{{currentUser}}</span>
          </li>
          <li v-if="isLoggedIn">
            <router-link to="/">Dashboard</router-link>
          </li>
          <li v-if="isLoggedIn">
            <router-link to="/catalog">Catalog</router-link>
          </li>
          <li v-if="isLoggedIn">
            <router-link to="/patrons">Patrons</router-link>
          </li>
          <li v-if="isLoggedIn">
            <router-link to="/branches">Branches</router-link>
          </li>
          <li v-if="!isLoggedIn">
            <router-link to="/login">Login</router-link>
          </li>
          <li v-if="!isLoggedIn">
            <router-link to="/register">Register</router-link>
          </li>
          <li v-if="isLoggedIn">
            <button v-on:click="logout" class="btn black">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from "firebase";

export default {
  name: "navbar",
  data() {
    return {
      //the purpose is to hide certain navigation items based on if we're logged in or not
      isLoggedIn: false,
      currentUser: false
    };
  },
  methods: {
    logout: function() {
      //firebase is the object
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/login");
        });
    }
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;

      //get the email
      //firebase.auth().currentUser will get the entire object
      this.currentUser = firebase.auth().currentUser.email;
    }
  }
};
</script>
