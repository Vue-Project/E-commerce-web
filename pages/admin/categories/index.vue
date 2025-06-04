<template>
    <div class="flex-col">
        <div class="flex-1 space-y-4 p-8 pt-6">
            <AdminCategoryClient></AdminCategoryClient>
        </div>
    </div>
</template>

<script lang="ts">
    definePageMeta({
        middleware: 'admin',
    });
</script>

<style scoped></style>
