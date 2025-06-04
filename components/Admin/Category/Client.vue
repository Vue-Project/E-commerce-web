<template>
    <div class="flex items-center justify-between">
        <Heading title="Categorys" description="Manage your categories here."></Heading>
        <NuxtLink to="/admin/categories/new">
            <Button>
                <Icon name="lucide:plus" class="mr-2 w-4 h-4"></Icon>
                Add New
            </Button>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
