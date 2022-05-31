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
import { map_center_store, geojson_store, selected_location_store } from '$lib/stores';
import { feature } from '@turf/helpers';
import Geocoder from '$lib/geocoder/Geocoder.svelte';
import { createEventDispatcher} from 'svelte';



const dispatch = createEventDispatcher();

    let geojson;

    let list_view = false;

    let geocoder = false;

    let current_label;

    let loading_location = false;

    // let svelecte_array = array.array;

    // console.log(array.array);
    // console.log(svelecte_array);

  let selection = null;
  let value;

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


    // var bikeshareBuffer = turfBuffer(point, 0.5, {units:'miles'});
    // var transitBuffer = turfBuffer(point, 0.5, {units:'miles'});


    // // var buffered = turfBuffer(point, 20, {units:'miles'});
    // var bikeshareBbox = turfBbox(bikeshareBuffer);
    // var transitBbox = turfBbox(transitBuffer);

    // // let bbox_polygon = turfBboxPolygon(bbox_raw);
    // // console.log(turfBboxPolygon(bbox_raw));

    // let geometry_xml;

    // // console.log(bbox_raw);

    // let bikeshareBboxReordered = [bikeshareBbox[1], bikeshareBbox[0], bikeshareBbox[3], bikeshareBbox[2]];

    // let transitBboxReordered = [transitBbox[1], transitBbox[0], transitBbox[3], transitBbox[2]];

    // let bikeshareBboxString = bikeshareBboxReordered.toString();
    // bikeshareBboxString = bikeshareBboxString.replace(/,/g, '%2C');

    // let transitBboxString = transitBboxReordered.toString();
    // transitBboxString = transitBboxString.replace(/,/g, '%2C');

    // let overpass_bikeshare_transit_query = `%2F*%0AThis+query+looks+for+nodes%2C+ways+and+relations+%0Awith+the+given+key%2Fvalue+combination.%0AChoose+your+region+and+hit+the+Run+button+above!%0A*%2F%0A%5Bout%3Ajson%5D%5Btimeout%3A25%5D%3B%0A%2F%2F+gather+results%0A(%0A++%2F%2F+query+part+for%3A+%E2%80%9Camenity%3Dbicycle_rental%E2%80%9D%0A++relation%5B%22route%22%3D%22bicycle%22%5D(${bikeshareBboxString})%3B%0A++node%5B%22amenity%22%3D%22bicycle_rental%22%5D(${bikeshareBboxString})%3B%0A++way%5B%22amenity%22%3D%22bicycle_rental%22%5D(${bikeshareBboxString})%3B%0A++relation%5B%22amenity%22%3D%22bicycle_rental%22%5D(${bikeshareBboxString})%3B%0A++node%5B%22shop%22%3D%22bicycle%22%5D(${bikeshareBboxString})%3B%0A++way%5B%22shop%22%3D%22bicycle%22%5D(${bikeshareBboxString})%3B%0A++relation%5B%22shop%22%3D%22bicycle%22%5D(${bikeshareBboxString})%3B%0A++node%5B%22public_transport%22%5D(${transitBboxString})%3B%0A++way%5B%22public_transport%22%5D(${transitBboxString})%3B%0A++relation%5B%22public_transport%22%5D(${transitBboxString})%3B%0A++node%5B%22route%22%3D%22tram%22%5D(${transitBboxString})%3B%0A++way%5B%22route%22%3D%22tram%22%5D(${transitBboxString})%3B%0A++relation%5B%22route%22%3D%22tram%22%5D(${transitBboxString})%3B%0A++node%5B%22route%22%3D%22bus%22%5D(${transitBboxString})%3B%0A++way%5B%22route%22%3D%22bus%22%5D(${transitBboxString})%3B%0A++relation%5B%22route%22%3D%22bus%22%5D(${transitBboxString})%3B%0A++node%5B%22route%22%3D%22train%22%5D(${transitBboxString})%3B%0A++way%5B%22route%22%3D%22train%22%5D(${transitBboxString})%3B%0A++relation%5B%22route%22%3D%22train%22%5D(${transitBboxString})%3B%0A++node%5B%22route%22%3D%22subway%22%5D(${transitBboxString})%3B%0A++way%5B%22route%22%3D%22subway%22%5D(${transitBboxString})%3B%0A++relation%5B%22route%22%3D%22subway%22%5D(${transitBboxString})%3B%0A++node%5B%22route%22%3D%22monorail%22%5D(${transitBboxString})%3B%0A++way%5B%22route%22%3D%22monorail%22%5D(${transitBboxString})%3B%0A++relation%5B%22route%22%3D%22monorail%22%5D(${transitBboxString})%3B%0A++node%5B%22route%22%3D%22trolleybus%22%5D(${transitBboxString})%3B%0A++way%5B%22route%22%3D%22trolleybus%22%5D(${transitBboxString})%3B%0A++relation%5B%22route%22%3D%22trolleybus%22%5D(${transitBboxString})%3B%0A)%3B%0A%2F%2F+print+results%0Aout+body%3B%0A%3E%3B%0Aout+skel+qt%3B`;
  }

  function updateLocation(e) {

    console.log(e);

    dispatch('updatelocation', {
			center: e.detail.result.center
	});


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
{/if}

{#if list_view}
<div id="list-view" style="position: fixed; z-index: 200; height: 100%; width: 100%; background: white; top: 0; left: 0; padding-left: 20px; padding-top: 10px; overflow-y: scroll;">
  <button style="margin-left: -10px;" on:click|preventDefault={function()  {list_view = false} }>Return to map</button>
  <p><em>{geojson?.features.length} results below</em></p>
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
  {:else}
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
  }
</style>