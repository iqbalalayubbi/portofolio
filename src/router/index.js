import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SkillView from "../views/SkillView.vue";
import AllView from "../views/AllView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "all-view",
            component: AllView,
        },
        // {
        //     path: "/",
        //     name: "skill",
        //     component: SkillView,
        // },
    ],
});

export default router;
