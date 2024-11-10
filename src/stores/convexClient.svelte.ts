import { ConvexClient } from "convex/browser";

export let convexClientStore = $state<{ value: null | ConvexClient }>({
	value: null,
});
