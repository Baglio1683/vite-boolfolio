import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue'; 
import AppAbout from './pages/AppAbout.vue';
import AppNotFound from "./pages/AppNotFound.vue";


const router = createRouter({

history: createWebHistory(), 
routes: [
    {
        path: "/",
        name: "home",
        component: AppHome,
      },
      {
        path: "/about",
        name: "about",
        component: AppAbout,
      },

     { path: "/:pathMatch(.*)*",
      name: "not-found",
      component: AppNotFound,
    },
]
}); 

export {router}; 
