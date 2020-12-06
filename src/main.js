import App from './App.svelte';
import defaultBlacklists from './default_blacklists.json';

const app = new App({
	target: document.body,
	props: {
		blacklists: defaultBlacklists
	}
});

export default app;