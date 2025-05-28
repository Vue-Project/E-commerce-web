import type { APIError } from '~/types';
import { useToast } from '@/components/ui/toast/use-toast';

interface state {
    isLoading: boolean;
    apiError: APIError | null;
}

const state = reactive<state>({
    isLoading: false,
    apiError: null,
});

export default () => {
    const { isLoading, apiError } = toRefs(state);
    const { toast } = useToast();

    const toggleLoading = (v: boolean) => {
        state.isLoading = v;
    };

    const toggleError = (error: null | APIError) => {
        state.apiError = error;
    };
    const showError = (error: APIError) => {
        toast({
            variant: 'destructive',
            title: error.statusMessage + '',
            description: error.message ? error.message : error.statusMessage,
        });
    };
    const showMassage = (content: { title: string; description?: string; variant?: 'destructive' | 'default' | null | undefined }) => {
        toast({
            variant: content.variant,
            title: content.title + '',
            description: content.description,
        });
    };
    return {
        isLoading,
        apiError,
        showError,
        showMassage,
        toggleLoading,
        toggleError,
    };
};
