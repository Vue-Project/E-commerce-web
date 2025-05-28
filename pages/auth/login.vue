<template>
    <div class="flex flex-col items-center justify-center min-h-screen">
        <div class="w-full max-w-sm">
            <form @submit.prevent="onsubmit" action="">
                <Card>
                    <CardHeader>
                        <CardTitle class="text-2xl">Login</CardTitle>
                        <CardDescription>Enter your information below to login your account.</CardDescription>
                    </CardHeader>
                    <CardContent class="grid gap-4">
                        <div class="grid gap-2">
                            <Label for="email">Email</Label>
                            <Input id="email" type="email" placeholder="m@example.com" v-model="formLogin.email" />
                        </div>
                        <div class="grid gap-2">
                            <Label for="password">Password</Label>
                            <Input id="password" type="password" v-model="formLogin.password" />
                        </div>
                        <div class="grid cols-1">
                            <AuthSocialButtons icon="radix-icons:github-logo" label="Github"></AuthSocialButtons>
                        </div>
                    </CardContent>
                    <CardFooter class="flex-col space-y-2">
                        <Button :disabled="isLoading" class="w-full" type="submit">Login</Button>
                        <p>
                            Don't have an account?
                            <NuxtLink to="/auth/register" class="border-b border-gray-500 text-muted-foreground hover:text-primary">Register</NuxtLink>
                        </p>
                    </CardFooter>
                </Card>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { handleError } from '~/server/utils/error';

    type PAYLOAD = {
        email: string;
        password: string;
    };
    const formLogin = ref<PAYLOAD>({
        email: '',
        password: '',
    });
    const { toggleLoading, toggleError, showError, showMassage, isLoading } = useStore();

    const onsubmit = async () => {
        try {
            toggleLoading(true);
            await $fetch('/api/auth/login', {
                method: 'POST',
                body: formLogin.value,
            });
            showMassage({
                title: 'Login successful',
                description: 'You have successfully logged in.',
            });
            await navigateTo('/');
        } catch (error) {
            const err = handleError(error);
            showError(err);
        } finally {
            toggleLoading(false);
        }
    };
</script>

<style lang="scss" scoped></style>
