<template>
    <main class="lg:h-screen w-screen bg-bg">
        <h1 class="text-center text-2xl lg:text-4xl font-semibold text-text pt-20 lg:pt-16">Project</h1>
        <section class="flex flex-col items-center lg:items-start lg:flex-row lg:justify-center gap-10 mt-10 lg:px-5">
            <CardProject v-for="(project, i) in allProjects" :key="i" :project="project" />
        </section>
    </main>
</template>

<script>
import CardProject from "../components/CardProject.vue";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

export default {
    components: { CardProject },
    data() {
        return {
            allProjects: [
                {
                    image: project1,
                    description: "Aiycashier is Point Of Sales (POS) web application for UMKM or others business you need",
                },
                {
                    image: project4,
                    description: "Design Entity Relational Diagram for UMKM",
                },
                {
                    image: project3,
                    description: "Note App is simple note taking for making a todo list, target, or about you study",
                },
            ],
        };
    },
};
</script>
