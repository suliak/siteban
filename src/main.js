import App from './App.svelte';
import defaultBlacklist from './default_blacklist.json';

const app = new App({
	target: document.body,
	props: {
		blacklist: defaultBlacklist
	}
});

export default app;