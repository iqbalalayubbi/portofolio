<template>
    <main>
        <Home />
        <Skill />
        <Project />
        <Certificate />
    </main>
</template>

<script>
import Home from "@/views/HomeView.vue";
import Skill from "@/views/SkillView.vue";
import Project from "@/views/ProjectView.vue";
import Certificate from "@/views/CertificateView.vue";

export default {
    components: { Home, Skill, Project, Certificate },
};
</script>

<style></style>
