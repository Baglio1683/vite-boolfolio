import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome'; 
import AppAbout from './pages/AppAbout';


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
      component: NotFound,
    },
]
}); 

export {router}; 
