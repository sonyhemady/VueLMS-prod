import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Catalog from "@/components/Catalog";
import Patrons from "@/components/Patrons";
import Branches from "@/components/Branches";
import ViewLibraryCatalog from "@/components/ViewLibraryCatalog";
import Checkin from "@/components/Checkin";
import EditCatalog from "@/components/EditCatalog";
import Login from "@/components/Login";
import Register from "@/components/Register";
import firebase from "firebase";

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/catalog",
      name: "catalog",
      component: Catalog,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/patrons",
      name: "patrons",
      component: Patrons,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/branches",
      name: "branches",
      component: Branches,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: "/checkin",
      name: "checkin",
      component: Checkin,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/:BookId",
      name: "view-library-catalog",
      component: ViewLibraryCatalog,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/edit/:BookId",
      name: "edit-catalog",
      component: EditCatalog,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

//Nav Guard
router.beforeEach((to, from, next) => {
  //Check for requiredAuth guard
  // record.meta.<whatever the guard was which is requiresAuth>
  // if this is true,that means that the route requires authentication

  if (to.matched.some(record => record.meta.requiresAuth)) {
    //check to see if we are logged in to firebase
    //currentUser your user from firebase
    if (!firebase.auth().currentUser) {
      //if NOT, then go to login page or next to call
      next({
        //pass in an object of login
        path: "/login",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      //proceed to the router by calling next
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    //check to see if the user is logged in
    //currentUser your user from firebase
    if (firebase.auth().currentUser) {
      //if NOT, then go to login page or next to call
      next({
        //pass in an object of login
        path: "/",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      //proceed to the router by calling next
      next();
    }
  } else {
    //proceed to the router by calling next
    next();
  }
});

export default router;
