<template>
    <section class="bg-primary flex justify-center p-5 h-96 rounded-md shadow-2xl">
        <div class="flex flex-col gap-5 w-80">
            <div class="border-2">
                <img :src="project.image" alt="" class="object-fill h-52 w-full" />
            </div>
            <div class="text-text">
                <h3 class="font-semibold text-xl">Description</h3>
                <p class="w-fit">
                    {{ project.description }}
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        project: Object,
    },
};
</script>

<style></style>
