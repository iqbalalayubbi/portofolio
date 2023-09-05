<template>
    <main class="bg-bg h-screen w-screen">
        <Navbar />
        <section class="flex w-full justify-center items-center pt-10 gap-16">
            <img src="../assets/foto-iqbal4.png" alt="" class="w-[40%] opacity-60" />
            <div class="flex flex-col text-text gap-5">
                <h1 class="text-6xl font-bold bg-primary">Hello</h1>
                <h3 class="text-2xl">I'm Iqbal Al-Ayyubi</h3>
                <p>
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
