<script>
	export let blacklists;
	let selected = blacklists[0];
	let search = '';

	function searchGoogle() {
		const blackListPart = selected.list.map(s => ` -site:${s.url}`).join('+');
		const searchUrl = encodeURI(`https://google.com/search?q=${search}+${blackListPart}`);
		window.open(searchUrl);
	}

	function handleKeydown(evt) {
		if (evt.key === 'Enter') { searchGoogle(); }
	}
</script>

<main>
	<h1>Siteban</h1>
	<p>Tired of so called 'review' sites that are just generated content with links to Amazon?</p>
	<p>Select a blacklist and search </p>
	<input bind:value={search} on:keydown={handleKeydown}>
	<button on:click={searchGoogle}>Search Google</button>
	<p>{selected.name}: {selected.list.length} Sites banned</p>
	<select bind:value={selected}>
		{#each blacklists as list}
			<option value={list}>
				{list.name}
			</option>
		{/each}
	</select>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color:blue;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>