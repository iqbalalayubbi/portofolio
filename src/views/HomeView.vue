<template>
    <main class="bg-bg h-screen w-screen">
        <Navbar />
        <section class="flex flex-col lg:flex-row w-full lg:justify-center lg:items-center pt-10 px-5 lg:px-0 lg:gap-16">
            <img src="../assets/foto-iqbal4.png" alt="" class="self-end order-2 w-3/4 lg:w-[40%] opacity-60" />
            <div class="flex flex-col text-text gap-5 order-1 mt-12 lg:mt-0">
                <h1 class="text-2xl lg:text-6xl font-bold lg:bg-primary">Hello</h1>
                <h3 class="text-xl lg:text-2xl">I'm Iqbal Al-Ayyubi</h3>
                <p class="text-sm">
                    Informatic student at UPN Vetrean Jawa Timur. <br />
                    Let me introduce my self from this portofolio
                </p>
                <button class="bg-primary shadow w-40 h-10 rounded-md hover:bg-[#1c346b]">Contact Me</button>
                <div class="flex gap-3 mt-3">
                    <Icon icon="bi:linkedin" width="25" heigth="25" class="hover:cursor-pointer hover:text-disabled" />
                    <Icon icon="mdi:github" width="25" heigth="25" class="hover:cursor-pointer hover:text-disabled" />
                </div>
            </div>
        </section>
    </main>
</template>
<script>
import Navbar from "@/components/Navbar.vue";

export default {
    components: { Navbar },
};
</script>
