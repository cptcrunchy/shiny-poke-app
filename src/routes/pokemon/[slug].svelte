<!-- src/routes/pokemon/index.svelte -->
<script context="module">
    export async function load({page, fetch}) {
        let slug = page.params.slug;
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${slug}`)
        let speciesRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${slug}/`)
        if(response.ok){
            let pokemonInfo = await response.json()
            let speciesInfo = await speciesRes.json()
            return {
                props: {
                    pokemon: {...pokemonInfo, ...speciesInfo}
                }
            }
        }
        return {
            status: response.status,
            error: new Error(`Could not load ${slug}`)
        }
    }
</script>

<script>
    import PokemonDetail from '$lib/UI/PokemonDetail.svelte'
    export let pokemon;
</script>

<div class="flex flex-col justify-between gap-3 pt-4">
    <PokemonDetail {pokemon} />
</div>