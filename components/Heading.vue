<template>
    <div class="flex items-center justify-between">
        <div>
            <h2 class="text-3xl font-bold tracking-tight">{{ title }}</h2>
            <p class="mt-2 text-muted-foreground">{{ description }}</p>
        </div>
        <slot name="action"></slot>
    </div>
</template>

<script setup lang="ts">
    interface PropsHeading {
        title: string;
        description: string;
    }
    defineProps<PropsHeading>();
</script>

<style scoped></style>
