<script>
  import Icon from 'svelte-awesome/components/Icon.svelte'
  import { github } from 'svelte-awesome/icons'
</script>

<header class="flex flex-col sm:flex-row items-center justify-between w-full bg-red-600 px-8 py-4">
  <h1 class="text-2xl text-white uppercase">
    <a href="/">Svelte PokeDex</a>
  </h1>
  <p class="text-white">
    A Svelte REST API demo using the
    <a href="https://pokeapi.co/" class="text-white underline">PokéAPI</a>
  </p>
  <a href="https://github.com/cptcrunchy/shiny-poke-app" alt="link to github repository">
    <Icon data={github} scale="2" />
  </a>
</header>