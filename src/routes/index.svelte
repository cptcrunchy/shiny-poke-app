<script>
	import Header from '$lib/UI/Header.svelte';
	import PokedexGrid from '$lib/PokedexGrid.svelte';
</script>

<Header />
<main class="container">
	<PokedexGrid />
</main>

<style style lang="postcss">
	main {
		@apply text-center;
		@apply p-4;
		@apply mx-auto;
	}
</style>
