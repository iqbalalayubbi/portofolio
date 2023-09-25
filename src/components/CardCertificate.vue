<template>
    <section class="w-full flex justify-center">
        <div class="text-text shadow-lg shadow-slate-800 flex flex-col items-center gap-5 w-2/3 lg:w-72 h-80 pt-3 bg-primary rounded-md">
            <img :src="certificate.image" alt="" class="w-60 lg:w-52" />
            <div class="bg-bg text-center py-5 px-3">
                <p class="">
                    {{ certificate.title }}
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        certificate: Object,
    },
};
</script>

<style></style>
