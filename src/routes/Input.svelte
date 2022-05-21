<script>
      import Svelecte from 'svelecte';
    //   import array from "$lib/osmfeatures.js";
    import array from "$lib/osmfeatures_refined.js";
    import turfBuffer from '@turf/buffer';
  import turfBbox from '@turf/bbox';
  import turfBboxPolygon from '@turf/bbox-polygon';
  import osmtogeojson from 'osmtogeojson'
    // import turf from '@turf/helpers';
import { map_center_store } from '$lib/stores';


    let geojson;

    let svelecte_array = array.array;

    console.log(array.array);
    console.log(svelecte_array);

  let selection = null;
  let value;

  async function submitQuery() {

    console.log($map_center_store.lat);

    console.log(selection);

    var point =     {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          parseFloat($map_center_store.lng),
          parseFloat($map_center_store.lat)
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

    var buffer = turfBuffer(point, 0.5, {units:'miles'});
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

<button on:click={submitQuery}>Search</button>

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