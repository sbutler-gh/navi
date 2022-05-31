<script>
    // export let id = "test";
    export let properties;
</script>

<div style="max-height: 150px; overflow: auto; padding: 5px;">
    {#if properties?.name}
    <p style="font-weight: bold">{properties?.name}</p>
    {/if}
    {#if properties?.cuisine}
    <p style="font-style: italic">{properties?.cuisine.charAt(0).toUpperCase()}{properties?.cuisine.slice(1).replace(/_/g, " ")}</p>
    {/if}
    {#if properties?.['addr:housenumber']}
    <p>{properties?.['addr:housenumber']} {properties?.['addr:street']}, {properties?.['addr:city']}, {properties?.['addr:postcode']} </p>
    {/if}
</div>
