<template>
  <div id="view-library-catalog">
    <ul class="collection with-header">
      <li class="collection-item">Title: {{Title}}</li>
      <li class="collection-item">Book ID#: {{BookId}}</li>
      <li class="collection-item">Author/Director: {{Author_Director}}</li>
    </ul>
    <router-link to="/" class="btn grey">Back</router-link>
    <button @click="deleteAssets" class="btn red">Delete</button>

    <div class="fixed-action-btn">
      <router-link v-bind:to="{ name: 'edit-catalog', params: { BookId: BookId }}" class="btn-floating btn-large red">
        <i class="fa fa-pencil"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from "./firebaseInit";
export default {
  name: "view-library-catalog",
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
    deleteAssets() {
      if (confirm("Are you sure?")) {
        db
          .collection("LibraryCatalog")
          .where("BookId", "==", this.$route.params.BookId)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref.delete();
              this.$router.push("/");
            });
          });
      }
    }
  }
};
</script>
