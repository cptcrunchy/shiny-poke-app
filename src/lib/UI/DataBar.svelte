<script>
    import { tweened } from 'svelte/motion'

    export let value;

    let amount = tweened(0)
    $: amount.set(value)
</script>

<div class="flex flex-col items-center justify-center text-white bg-indigo-500 rounded" style="width: {$amount}%; max-width: 100%">
    <span clas="text-xs">{value}</span>
</div>

