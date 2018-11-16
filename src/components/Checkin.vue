<template>
  <div id="Checkin">
    <h3>Checkin</h3>
    <div class="row">
      <form @submit.prevent="checkin" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="BookId" required>
            <label>Book ID No.</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="Title" required>
            <label>Title</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="Author_Director" required>
            <label>Author / Director</label>
          </div>
        </div>
        <button type="submit" class="btn">Submit</button>
        <router-link to="/" class="btn grey">Cancel</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import db from "./firebaseInit";

export default {
  name: "checkin",
  data() {
    return {
      BookId: null,
      Title: null,
      Author_Director: null
    };
  },
  methods: {
    checkin() {
      db
        .collection("LibraryCatalogAssets")
        .add({
          BookId: this.BookId,
          Title: this.Title,
          Author_Director: this.Author_Director
        })
        .then(docRef => {
          console.log("New book checked in: ", docRef.BookId);
          this.$router.push("/");
        })
        .catch(error => {
          console.error("Error checking in: ", error);
        });
    }
  }
};
</script>