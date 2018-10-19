<template>
    <div id="catalog">
        <ul class="collection with-header">
            <li class="collection-header">
                <h4>Library Catalog</h4>
            </li>
            <li v-for="book in books" v-bind:key="book.id" class="collection-item">
                <div class="chip">{{book.Title}}</div>
                {{book.BookId}}: {{book.Author_Director}}

                <router-link class="secondary-content" v-bind:to="{ name: 'view-library-catalog', params: { BookId: book.BookId }}">
                    <i class="fa fa-bullseye"></i>
                </router-link>
            </li>
        </ul>
        <div class="fixed-action-btn">
            <router-link to="/checkin" class="btn-floating btn-large red">
                <i class="fa fa-plus"></i>
            </router-link>
        </div>
    </div>
</template>

<script>
import db from "./firebaseInit";
export default {
  name: "catalog",
  data() {
    return {
      books: [],
      loading: true
    };
  },
  created() {
    db
      .collection("LibraryCatalogAssets")
      .orderBy("BookId")
      .get()
      .then(querySnapshot => {
        this.loading = false;
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            BookId: doc.data().BookId,
            Title: doc.data().Title,
            Author_Director: doc.data().Author_Director
          };
          this.books.push(data);
        });
      });
  }
};
</script>