<template>
    <div>Home page</div>
    <pre>{{ user }}</pre>

    <nuxt-link to="/auth/login">login</nuxt-link>
    <nuxt-link to="/auth/register">resgister</nuxt-link>
</template>
<script setup lang="ts">
    const { user } = useUserSession();
</script>
<style scoped></style>
