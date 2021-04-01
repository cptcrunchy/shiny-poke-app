<script>
    import PokemonCard from '$lib/UI/PokemonCard.svelte'
    let pokemonList = [], offset = 0, amountToLoad = 24;
    
    $: { getPokemon(offset, amountToLoad)}


    async function getPokemon(off, amount){
        let url = `https://pokeapi.co/api/v2/pokemon?offset=${off}&limit=${amount}`
        const data = await fetch(url).then(res => {
            if(res.ok) return res.json()
        }).catch(console.error)

        pokemonList = [...pokemonList, ...data.results]
    }

    function handleMoreClick(){
        offset += amountToLoad
    }
</script>

<div class="container">
    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-evenly pb-3">  
        {#each pokemonList as {name, url} (url)}
            <PokemonCard {name} {url} />
        {/each}
    </div>
    {#if pokemonList.length > 0}
        <button type="button"
         id="more-button" 
         class="bg-transparent hover:bg-red-600 text-red-600 font-semibold hover:text-white py-2 px-4 border border-red-600 hover:border-transparent rounded-full mr-2"
         on:click={handleMoreClick}
        > Load More </button> 
    {/if}
</div>