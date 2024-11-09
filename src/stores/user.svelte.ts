import type { User } from "@auth/sveltekit";

export let userStore = $state<{ value: User | null }>({
	value: null,
});
