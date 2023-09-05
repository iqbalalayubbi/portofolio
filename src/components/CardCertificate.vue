<template>
    <section>
        <div class="text-text shadow-xl flex flex-col items-center gap-5 w-60 h-80 pt-3 bg-primary">
            <img :src="certificate.image" alt="" class="w-52" />
            <p class="bg-bg text-center py-5">
                {{ certificate.title }}
            </p>
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
