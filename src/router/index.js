import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import ViewLibraryCatalog from "@/components/ViewLibraryCatalog";
import Checkin from "@/components/Checkin";
import EditCatalog from "@/components/EditCatalog";
import Login from "@/components/Login";
import Register from "@/components/Register";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/checkin",
      name: "checkin",
      component: Checkin
    },
    {
      path: "/:BookId",
      name: "view-library-catalog",
      component: ViewLibraryCatalog
    },
    {
      path: "/edit/:BookId",
      name: "edit-catalog",
      component: EditCatalog
    }
  ]
});
