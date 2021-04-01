<script>
    export let sprites
</script>

{#if sprites.front_default}
  <img alt="default sprite front" src={sprites.front_default} />
{/if}
{#if sprites.back_default}
  <img alt="default sprite back" src={sprites.back_default} />
{/if}

{#if sprites.front_female}
  <img alt="sprite front female" src={sprites.front_female} />
{/if}
{#if sprites.back_female}
  <img alt="sprite back female" src={sprites.back_female} />
{/if}

{#if sprites.front_shiny}
  <img alt="sprite front shiny" src={sprites.front_shiny} />
{/if}
{#if sprites.back_shiny}
  <img alt="sprite back shiny" src={sprites.back_shiny} />
{/if}

{#if sprites.front_shiny_female}
  <img alt="sprite front shiny female" src={sprites.front_shiny_female} />
{/if}
{#if sprites.back_shiny_female}
  <img alt="sprite back shiny female" src={sprites.back_shiny_female} />
{/if}