<template>
    <div>
        <div class="flex items-center justify-between">
            <Heading :title="title" :description="description"></Heading>
            <NuxtLink to="/admin/categories/new">
                <Button v-if="isEditing" variant="destructive" size="sm">
                    <Icon name="lucide:trash" class="w-4 h-4"></Icon>
                </Button>
            </NuxtLink>
        </div>
        <Separator class="my-4"></Separator>
        <form class="space-y-8 w-full">
            <div class="md:grid-cols-3 gap-8">
                <FormField v-slot="{ componentField }" name="name">
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input placeholder="Name Category" v-bind="componentField" aria-label="block" :disabled="isLoading" />
                        </FormControl>
                        <FormDescription />
                        <FormMessage />
                    </FormItem>
                </FormField>
            </div>
            <Button></Button>
        </form>
    </div>
</template>

<script setup lang="ts">
    import { RouterParams } from '~/types';
    import { toTypedSchema } from '@vee-validate/zod';
    import { useForm } from 'vee-validate';

    const { isLoading, apiError, showError, showMassage, toggleLoading, toggleError } = useStore();
    import { categorySchema } from '~/server/utils/valadations';
    const title = ref('Categories');
    const description = ref('Manage your categories here.');
    const ToasterMessage = ref('Category created successfully.');
    const action = ref('Save Changes');
    const isEditing = ref(true);
    const route = useRoute();

    const { data: currentCategory } = await useFetch(`/api/admin/categories/${(route.params as RouterParams).categoryId}`);
    const formSchema = toTypedSchema(categorySchema);
    const form = useForm({
        validationSchema: formSchema,
        initialValues: currentCategory.value || {
            name: '',
        },
    });
</script>

<style lang="scss" scoped></style>
