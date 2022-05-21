<script>
      import Svelecte from 'svelecte';
    //   import array from "$lib/osmfeatures.js";
    import array from "$lib/osmfeatures_refined.js";

    let svelecte_array = array.array;

    console.log(array.array);
    console.log(svelecte_array);

  let selection = null;
  let value;
</script>
<label for="amenity">What are you looking for?</label>
<!-- <label for="country">Select a country</label> -->
<Svelecte options={array.array}
  inputId="amenity"
  labelField="label"
  bind:readSelection={selection}
  bind:value={value}
  placeholder="Enter text"
></Svelecte>

<div>Current <code>readSelection</code> value: <b>{JSON.stringify(selection) }</b></div>
<div>Current <code>value</code> value: <b>{value}</b></div>

<!-- {#each array as option}
<p>&#123;
    "value": "{option.replace(/ /g,"_")}",
    "text": "{option.charAt(0).toUpperCase()}{option.slice(1)}"
&#125;,
</p>
{/each} -->

<!-- {#if !array.array[0].Label}
{#each array.array as option}
<p>&#123;
    "key": "{option.Key}",
    "value": "{option.Value}",
    "label": "{option.Value.charAt(0).toUpperCase()}{option.Value.slice(1).replace(/_/g, ' ')}",
    "description": `{option.Description}`,
    {#if option.Category}
    "category": "{option.Category.charAt(0).toUpperCase()}{option.Category.slice(1)}"
    {:else}
    "category": "{option.Key.charAt(0).toUpperCase()}{option.Key.slice(1)}"
    {/if}
&#125;,
</p>
{/each}
{/if} -->