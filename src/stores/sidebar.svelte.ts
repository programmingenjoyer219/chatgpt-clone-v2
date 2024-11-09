export let sidebarVisibilityStore = $state({ value: false });

export const toggleSidebar = () => {
	sidebarVisibilityStore.value = !sidebarVisibilityStore.value;
};
