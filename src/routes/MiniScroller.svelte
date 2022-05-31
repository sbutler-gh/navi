<script>
    // export let id = "test";
    export let properties;
    export let coordinates;
    export let current_label;
</script>

<div style="max-height: 150px; overflow: auto; padding: 5px;">
    {#if properties?.name}
    <p style="font-weight: bold">{properties?.name}</p>
    {:else}
    <p style="font-weight: bold">{current_label}</p>
    {/if}
    {#if properties?.cuisine}
    <p style="font-style: italic">{properties?.cuisine.charAt(0).toUpperCase()}{properties?.cuisine.slice(1).replace(/_/g, " ")}</p>
    {/if}
    {#if properties?.['addr:housenumber']}
    <p>{properties?.['addr:housenumber']} {properties?.['addr:street']}, {properties?.['addr:city']}, {properties?.['addr:postcode']} </p>
    {:else}
    <p><em>Lat: {coordinates[1]}, Lng: {coordinates[0]}</em></p>
    {/if}
    {#if properties?.website}
    <p><a href={properties?.website} target="_blank">{properties?.website}</a></p>
    {/if}
    {#if properties?.phone}
    <p><a href="tel:{properties?.phone}">{properties?.phone}</a></p>
    {/if}
</div>
