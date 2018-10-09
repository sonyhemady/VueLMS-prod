<template>
  <div id="edit-catalog">
    <h3>Edit Catalog</h3>
    <div class="row">
    <form @submit.prevent="updateAssets" class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input disabled type="text" v-model="BookId" required>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="Title" required>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="Author_Director" required>
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
  name: "edit-catalog",
  data() {
    return {
      BookId: null,
      Title: null,
      Author_Director: null
    };
  },
  beforeRouteEnter(to, from, next) {
    db
      .collection("LibraryCatalogAssets")
      .where("BookId", "==", to.params.BookId)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.BookId = doc.data().BookId;
            vm.Title = doc.data().Title;
            vm.Author_Director = doc.data().Author_Director;
          });
        });
      });
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      db
        .collection("LibraryCatalogAssets")
        .where("BookId", "==", this.$route.params.BookId)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.BookId = doc.data().BookId;
            this.Title = doc.data().Title;
            this.Author_Director = doc.data().Author_Director;
          });
        });
    },
    updateAssets() {
      db
        .collection("LibraryCatalogAssets")
        .where("BookId", "==", this.$route.params.BookId)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref
              .update({
                BookId: this.BookId,
                Title: this.Title,
                Author_Director: this.Author_Director
              })
              .then(() => {
                this.$router.push({
                  name: "view-library-catalog",
                  params: { BookId: this.BookId }
                });
              });
          });
        });
    }
  }
};
</script>