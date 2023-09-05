<template>
    <main class="h-screen w-screen bg-bg">
        <h1 class="text-center text-4xl font-semibold text-text pt-16">Certificate</h1>
        <section class="flex justify-center gap-16 mt-16">
            <CardCertificate v-for="(certificate, i) in allCertificate" :key="i" :certificate="certificate" />
        </section>
    </main>
</template>

<script>
import CardCertificate from "../components/CardCertificate.vue";

import certificate1 from "../assets/Backend Pemula.jpg";
import certificate2 from "../assets/Frontend Pemula.jpg";
import certificate3 from "../assets/SQL Pemula.jpg";

export default {
    components: { CardCertificate },
    data() {
        return {
            allCertificate: [
                {
                    image: certificate1,
                    title: "Belajar Membuat Aplikasi Back-End untuk Pemula",
                },
                {
                    image: certificate2,
                    title: "Belajar Membuat Front-End Web untuk Pemula",
                },
                {
                    image: certificate3,
                    title: "Belajar Dasar Structured Query Language (SQL)",
                },
            ],
        };
    },
};
</script>

<style></style>
