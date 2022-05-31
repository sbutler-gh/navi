<script>
      import Svelecte from 'svelecte';
    //   import array from "$lib/osmfeatures.js";
    import { mapboxToken } from '$lib/conf.js'
    import data from "$lib/searchdata.js";
    // import array from "$lib/osmfeatures_refined.js";
    import turfBuffer from '@turf/buffer';
  import turfBbox from '@turf/bbox';
  import turfBboxPolygon from '@turf/bbox-polygon';
  import osmtogeojson from 'osmtogeojson'
    // import turf from '@turf/helpers';
import { map_center_store, params_store, geojson_store, selected_location_store } from '$lib/stores';
import { feature } from '@turf/helpers';
import Geocoder from '$lib/geocoder/Geocoder.svelte';
import { createEventDispatcher, onMount} from 'svelte';
import { goto } from "$app/navigation";
import { page } from "$app/stores"; 



const dispatch = createEventDispatcher();

    let geojson;

    let last_search = [];

    let copy_tooltip = false;

    // Variable to indicate if map component is not displayed, due to data /performance issues
    let no_map = false;

    let list_view = false;

    let geocoder = false;

    let current_label;

    let loading_location = false;

    // let svelecte_array = array.array;

    // console.log(array.array);
    // console.log(svelecte_array);

  let selection = null;
  let value;

  onMount(() => {

    if ($params_store?.key || $params_store?.value) {

      selection = [];

      $params_store?.key ? selection.key = $params_store?.key : null;
      $params_store?.value ? selection.value = $params_store?.value : null;

      value = selection.value;

      console.log(selection.key + selection.value);

      submitQuery();
    }

  })

  async function submitQuery() {

    loading_location = true;

    document.getElementById('search').disabled = true;

    console.log($map_center_store.lat);

    console.log(selection);

    var point =     {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          parseFloat($selected_location_store.lng),
          parseFloat($selected_location_store.lat)
        ]
      }
    }

    last_search.lat = $selected_location_store.lat;
    last_search.lng = $selected_location_store.lng;

    // point.geomType = "point";
    // console.log(point);
    // var buffer = turfBuffer(point, 0.25, {units:'miles'});
    // var bbox = turfBbox(buffer);

    // let geometry_xml;

    // let bboxReordered = [bbox[1], bbox[0], bbox[3], bbox[2]];

    // let bboxString = bboxReordered.toString();
    // bboxString = bboxString.replace(/,/g, '%2C');

    // let bikeshareBboxString = bboxString;
    // let transitBboxString = bboxString;

    var buffer = turfBuffer(point, 1, {units:'miles'});
    var bboxPolygon = turfBbox(buffer);
    var bbox = [bboxPolygon[1], bboxPolygon[0], bboxPolygon[3], bboxPolygon[2]];
    bbox = bbox.toString();
    bbox = bbox.replace(/,/g, '%2C');

    let key = selection.key;
    let value = selection.value;

    

    let overpass_query = `%2F*%0AThis+query+looks+for+nodes%2C+ways+and+relations+%0Awith+the+given+key%2Fvalue+combination.%0AChoose+your+region+and+hit+the+Run+button+above!%0A*%2F%0A%5Bout%3Ajson%5D%5Btimeout%3A25%5D%3B%0A%2F%2F+gather+results%0A(%0A++%2F%2F+query+part+for%3A+%E2%80%9Camenity%3Dbicycle_rental%E2%80%9D%0A++nwr%5B%22${key}%22%3D%22${value}%22%5D(${bbox})%3B%0A)%3B%0A%2F%2F+print+results%0Aout+body%3B%0A%3E%3B%0Aout+skel+qt%3B`;


    const fetch_overpass = await fetch(`https://serene-journey-42564.herokuapp.com/https://overpass.kumi.systems/api/interpreter?data=${overpass_query}`, {

    method: "GET",

    // Adding headers to the request
    headers: {
      "User-agent": "development project; sam@ysli.be",
      "X-Requested-With": "XmlHttpRequest",
      "Access-Control-Allow-Methods": "POST",
      "Access-Control-Allow-Origin": "*",
    }
    })

const overpass_results = await fetch_overpass.json();

// console.log(json);


  geojson = osmtogeojson(overpass_results);

  console.log(geojson);

  $geojson_store = geojson

  current_label = selection.label;

  loading_location = false;

  document.getElementById('search').disabled = false;

  dispatch('updatecontent', {
    current_label: current_label
	});


  $page.url.searchParams.set('key', selection.key); 
  $page.url.searchParams.set('value', selection.value); 

  history.replaceState({}, '', `${window.location.origin}${window.location.pathname}?${$page.url.searchParams.toString()}`);
  //   goto(`?${$page.url.searchParams.toString()}`);

  }

  function updateLocation(e) {

    console.log(e);

    dispatch('updatelocation', {
			center: e.detail.result.center
	});
  }

  function shareResults() {

    console.log($selected_location_store.lat);
    console.log(selection);

    // Reset the selected location marker, so we understand where the results are being shared from
    $selected_location_store.lat = last_search.lat;
    $selected_location_store.lng = last_search.lng;

let params = `lat=${last_search.lat}&lng=${last_search.lng}&key=${selection.key}&value=${selection.value}`;

console.log(params);

let updated_params = encodeURI(params);

let url = `${window.location.origin}${window.location.pathname}?${updated_params}`

if (!navigator.clipboard){
          // use old commandExec() way
          url.select();
          // window.location.setSelectionRange(0, 99999)
          document.execCommand("copy");
          copy_tooltip = true;
          setTimeout(function(){ copy_tooltip = false }, 2000)

      } else{
          navigator.clipboard.writeText(url).then(
              function(){
                  console.log("Copied URL");
                  copy_tooltip = true;
                  setTimeout(function(){ copy_tooltip = false }, 2000)
              })
              .catch(
              function() {
                  console.log("Couldn't copy, try right-clicking to copy the URL isntead."); // error
              });
      } 
      
  $page.url.searchParams.set('lat', $selected_location_store.lat); 
  $page.url.searchParams.set('lng', $selected_location_store.lng); 
  $page.url.searchParams.set('key', selection.key); 
  $page.url.searchParams.set('value', selection.value); 

  history.replaceState({}, '', `${window.location.origin}${window.location.pathname}?${$page.url.searchParams.toString()}`);
  // goto(`?${$page.url.searchParams.toString()}`);
}
</script>

{#if !geocoder}
<a style="text-decoration: underline; color: blue; font-size: 14px; cursor: pointer;" on:click|preventDefault={function()  {document.getElementById('geocoder-div').style.display = "block"; geocoder = true; } }><em>Go to new location</em></a>

{:else}
<a style="text-decoration: underline; color: grey; font-size: 14px; cursor: pointer;" on:click|preventDefault={function() {document.getElementById('geocoder-div').style.display = "none"; geocoder = false; }}><em>Hide</em></a>
{/if}

<div id="geocoder-div" style="display: none;">
<Geocoder placeholder={"Enter new location"} accessToken={mapboxToken} on:result={updateLocation}></Geocoder>
</div>

<!-- <p>Location: {JSON.stringify($map_center_store)}</p> -->

<br>
<p style="font-size: 14px">What are you looking for?</p>
<!-- <label for="country">Select a country</label> -->
<Svelecte options={data}
  inputId="amenity"
  labelField="label"
  bind:readSelection={selection}
  bind:value={value}
  placeholder="Enter search"
  virtualList="true"
></Svelecte>

<button id="search" on:click={submitQuery}>Search</button>

{#if loading_location == true}
<p><em>Loading results ...</em></p>
{/if}

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

<!-- {#if geojson}
{#each geojson as result}
{JSON.stringify(result)}
{/each}
{/if} -->

{#if geojson?.type == "FeatureCollection"}
<!-- <h4>{current_label}</h4> -->
<em>{geojson?.features.length} results /</em>

{#if !list_view}
<a style="text-decoration: underline; color: blue; cursor: pointer;" on:click|preventDefault={function()  {list_view = true }}><em>View as list</em></a>
<span> — </span>
<a style="color: blue; cursor: pointer;" on:click|preventDefault={shareResults}>
  <svg style="vertical-align: sub;" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-share" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="6" r="3" />
  <circle cx="18" cy="18" r="3" />
  <line x1="8.7" y1="10.7" x2="15.3" y2="7.3" />
  <line x1="8.7" y1="13.3" x2="15.3" y2="16.7" />
</svg> <span style="text-decoration: underline">Share results</span></a>
{#if copy_tooltip}
<span style="width: fit-content; display: block; margin: auto; margin-top: 5px; white-space: nowrap; background: lightgrey; text-align: center; border-radius: 20px; padding: 5px; box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);" class="bg-gray-100 text-center rounded absolute p-1 shadow">Copied Link!</span>
{/if}
{/if}

{#if list_view}
<div id="list-view" style="position: fixed; z-index: 200; height: 100%; width: 100%; background: white; top: 0; left: 0; padding-left: 20px; padding-top: 10px; overflow-y: scroll;">
  <button style="margin-left: -10px;" on:click|preventDefault={function()  {list_view = false} }>Return to map</button>
  <p><em>{geojson?.features.length} results below</em></p>
  {#if no_map}
  <p></p><span> — </span>
<a style="color: blue; cursor: pointer;" on:click|preventDefault={shareResults}>
  <svg style="vertical-align: sub;" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-share" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="6" r="3" />
  <circle cx="18" cy="18" r="3" />
  <line x1="8.7" y1="10.7" x2="15.3" y2="7.3" />
  <line x1="8.7" y1="13.3" x2="15.3" y2="16.7" />
</svg> <span style="text-decoration: underline">Share results</span></a>
{#if copy_tooltip}
<span style="width: fit-content; display: block; margin: auto; margin-top: 5px; white-space: nowrap; background: lightgrey; text-align: center; border-radius: 20px; padding: 5px; box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);" class="bg-gray-100 text-center rounded absolute p-1 shadow">Copied Link!</span>
{/if}
{/if}
  {#each geojson.features as feature}
  {#if feature.properties?.name}
  <h3 class="name" style="font-weight: bold; font-size: 16px;">{feature.properties?.name}</h3>
  {:else}
  {current_label}
  {/if}
  {#if feature.properties?.cuisine}
  <p style="font-style: italic">{feature.properties?.cuisine.charAt(0).toUpperCase()}{feature.properties?.cuisine.slice(1).replace(/_/g, " ")}</p>
  {/if}
  {#if feature.properties?.['addr:housenumber']}
  <p>{feature.properties?.['addr:housenumber']} {feature.properties?.['addr:street']}, {feature.properties?.['addr:city']}, {feature.properties?.['addr:postcode']} </p>
  {:else if !feature.properties?.name}
  <p><em>Lat: {feature.geometry?.coordinates[1]}, Lng: {feature.geometry?.coordinates[0]}</em></p>
  {/if}
  {#if feature.properties?.website}
  <p><a href={feature.properties?.website} target="_blank">{feature.properties?.website}</a></p>
  {/if}
  {#if feature.properties?.phone}
  <p><a href="tel:{feature.properties?.phone}">{feature.properties?.phone}</a></p>
  {/if}
{/each}
</div>
{/if}
<!-- {#each geojson.features as feature}
  {#if feature.properties?.name}
  <p style="font-weight: bold">{feature.properties?.name}</p>
  {/if}
  {#if feature.properties?.cuisine}
  <p style="font-style: italic">{feature.properties?.cuisine.charAt(0).toUpperCase()}{feature.properties?.cuisine.slice(1).replace(/_/g, " ")}</p>
  {/if}
  {#if feature.properties?.['addr:housenumber']}
  <p>{feature.properties?.['addr:housenumber']} {feature.properties?.['addr:street']}, {feature.properties?.['addr:city']}, {feature.properties?.['addr:postcode']} </p>
  {/if}
  {#if feature.properties?.website}
  <p><a href={feature.properties?.website} target="_blank">{feature.properties?.website}</a></p>
  {/if}
{/each} -->
{/if}

<style>
  #list-view p {
      margin-top: 0.5em;
      margin-bottom: 0.5em;
  }

  #list-view h3:first-of-type {
    margin-top: 0em !important;
  }

  #list-view .name {
    margin-top: 2em;
    margin-bottom: 0.75em;
  }
</style>