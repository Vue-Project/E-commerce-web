<template>
    <Button @click="authenticate" type="button" variant="outline">
        <div class="flex items-center">
            <Icon :name="icon" class="mr-2 h-4 w-4"></Icon>
            {{ label }}
        </div>
    </Button>
</template>

<script setup lang="ts">
    defineProps<{
        label: string;
        icon: string;
    }>();
    const authenticate = () => {
        window.location.href = `/api/auth/github`;
    };
</script>

<style lang="scss" scoped></style>
