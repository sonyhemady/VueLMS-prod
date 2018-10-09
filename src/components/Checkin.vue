<template>
  <div id="Checkin">
    <h3>Checkin</h3>
    <div class="row">
    <form @submit.prevent="Checkin" class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="bookId" required>
          <label>Book ID No.</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="title" required>
          <label>Title</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="authorDirector" required>
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
      bookId: null,
      title: null,
      authorDirector: null
    };
  },
  methods: {
    checkin() {
      db
        .collection("LibraryCatalogAssets")
        .add({
          BookId: this.bookId,
          Title: this.title,
          Author_Director: this.authorDirector
        })
        .then(docRef => {
          console.log("New book checked in: ", docRef.id);
          this.$router.push("/");
        })
        .catch(error => {
          console.error("Error checking in: ", error);
        });
    }
  }
};
</script>