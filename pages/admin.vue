<template>
    <div>
        <h1 class="text-2xl font-bold">Admin Page</h1>
    </div>
</template>

<script setup lang="ts">
    definePageMeta({
        middleware: 'admin',
    });
</script>

<style lang="scss" scoped></style>
