<script>

    export let name;
    export let url;

    const urlArray = url.split('/')
    const i = urlArray.length - 2;
    
    const index = urlArray[i]
    
    const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`;

    $: titleCased = (name, splitChar) => name.toLowerCase()
    .split(splitChar)
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ')

</script>

<!-- component -->
<div class="max-w-sm bg-white border-2 border-red-500 p-6 rounded-md tracking-wide shadow-lg">
  <a href="/pokemon/{name}">
    <div id="header" class="flex items-center mb-4"> 
      <img alt={name} class="w-20 rounded-full border-2 border-black" src={spriteUrl} />
      <div id="header-text" class="leading-5 ml-6 sm">
        <h4 id="name" class="text-xl font-semibold">{titleCased(name, '-')}</h4>
        <h5 id="job" class="font-semibold text-blue-600">Pokedex #{index}</h5>
      </div>
    </div>
  </a>
</div>