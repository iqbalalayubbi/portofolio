<template>
    <section class="flex flex-col items-center w-1/4 h-72 text-text border-2 border-text rounded-md gap-5">
        <h1 class="text-2xl pt-10">{{ name }}</h1>
        <div class="flex flex-col gap-3">
            <div class="flex gap-3 hover:cursor-pointer hover:text-disabled" v-for="(skill, i) in skillData" :key="i">
                <Icon :icon="skill.icon" width="25" heigth="25" />
                <h3 class="text-xl">{{ skill.title }}</h3>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            skills: this.skill,
        };
    },
    props: {
        skillData: [],
        name: String,
    },
};
</script>
