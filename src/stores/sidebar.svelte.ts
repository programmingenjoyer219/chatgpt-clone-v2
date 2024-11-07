export let sidebarVisibility = $state({ value: false });

export const toggleSidebar = () => {
	sidebarVisibility.value = !sidebarVisibility.value;
};
