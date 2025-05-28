<template>
    <div>Home page</div>
    <pre>{{ user }}</pre>

    <nuxt-link to="/auth/login">login</nuxt-link>
    <nuxt-link to="/auth/register">resgister</nuxt-link>
    <button @click="logout">logout</button>
</template>
<script setup lang="ts">
    definePageMeta({
        middleware: 'auth',
    });
    const { user, clear } = useUserSession();

    const logout = async () => {
        await clear();
        navigateTo('/auth/login');
    };
</script>
<style scoped></style>
