<template>
    <main class="h-screen w-screen bg-bg">
        <h1 class="text-center text-4xl font-semibold text-text pt-24">SKill</h1>
        <section class="flex justify-center gap-10 mt-10">
            <CardSkill v-for="(skill, i) in allSkills" :key="i" :skillData="skill" :name="title[i]" />
        </section>
    </main>
</template>

<script>
import CardSkill from "@/components/CardSkill.vue";

export default {
    components: { CardSkill },
    data() {
        return {
            title: ["Bahasa", "Database", "Frameworks"],
            allSkills: [
                [
                    {
                        icon: "teenyicons:javascript-solid",
                        title: "Javascript",
                    },
                    {
                        icon: "akar-icons:php-fill",
                        title: "PHP",
                    },
                    {
                        icon: "teenyicons:python-solid",
                        title: "Python",
                    },
                ],
                [
                    {
                        icon: "cib:mongodb",
                        title: "MongoDB",
                    },
                    {
                        icon: "grommet-icons:mysql",
                        title: "Mysql",
                    },
                ],
                [
                    {
                        icon: "simple-icons:express",
                        title: "Express JS",
                    },
                    {
                        icon: "file-icons:tailwind",
                        title: "Tailwind CSS",
                    },
                    {
                        icon: "fa-brands:bootstrap",
                        title: "Bootstrap",
                    },
                    {
                        icon: "ri:vuejs-fill",
                        title: "Vue JS",
                    },
                ],
            ],
        };
    },
};
</script>
