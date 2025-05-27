<template>
    <div class="flex flex-col items-center justify-center min-h-screen">
        <div class="w-full max-w-sm">
            <form action="">
                <Card>
                    <CardHeader>
                        <CardTitle class="text-2xl">Register</CardTitle>
                        <CardDescription>Enter your information below to create your account.</CardDescription>
                    </CardHeader>
                    <CardContent class="grid gap-4">
                        <div class="grid gap-2">
                            <Label for="name">Name</Label>
                            <Input id="name" placeholder="name" v-model="formRegister.name" />
                        </div>
                        <div class="grid gap-2">
                            <Label for="email">Email</Label>
                            <Input id="email" type="email" placeholder="m@example.com" v-model="formRegister.email" />
                        </div>
                        <div class="grid gap-2">
                            <Label for="password">Password</Label>
                            <Input id="password" type="password" v-model="formRegister.password" />
                        </div>
                        <div class="grid cols-1">
                            <AuthSocialButtons icon="radix-icons:github-logo" label="Github"></AuthSocialButtons>
                        </div>
                    </CardContent>
                    <CardFooter class="flex-col space-y-2">
                        <Button class="w-full" type="submit">Register</Button>
                        <p>
                            Already have an account?
                            <NuxtLink to="/auth/login" class="border-b border-gray-500 text-muted-foreground hover:text-primary">Login</NuxtLink>
                        </p>
                    </CardFooter>
                </Card>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
    type PAYLOAD = {
        name: string;
        email: string;
        password: string;
    };
    const formRegister = ref<PAYLOAD>({
        name: '',
        email: '',
        password: '',
    });
</script>

<style lang="scss" scoped></style>
