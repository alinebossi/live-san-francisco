<template>
  <div>
    <svg class="map" ref="map">
      <MapLayer :layerConfiguration="neighborhoodsLayer" />
    </svg>
  </div>
</template>

<script>
  import MapLayer from './MapLayer.vue';
  import * as d3 from 'd3';

  export default {
    name: 'app',
    data() {
      return {
        projectionConfiguration: {
          scale: null,
          latitude: null,
          longitude: null,
        },

        neighborhoodsLayer: {
          jsonPath: null,
          style: {
            fill: null,
            stroke: null,
          },
          projectionConfiguration: null,
        },

        streetsLayer: {
          jsonPath: null,
          style: {
            fill: null,
            stroke: null,
          },
          projectionConfiguration: null,
        },
      };
    },
    components: {
      MapLayer,
    },
    created() {
      this.projectionConfiguration = {
        scale: 270000,
        latitude: 37.775,
        longitude: -122.4183,
      };

      this.neighborhoodsLayer = {
        jsonPath: './sfmaps/neighborhoods.json',
        style: {
          fill: '#ccc',
          stroke: '#333',
        },
        projectionConfiguration: { ...this.projectionConfiguration },
      };
    },
    mounted() {
      // Map configuration
      d3.select(this.$refs.map)
        .attr('preserveAspectRatio', 'xMinYMin meet')
        .attr('viewBox', '0 0 800 600');
    },
  };
</script>
