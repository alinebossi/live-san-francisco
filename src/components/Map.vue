<template>
  <div>
    <svg class="map" ref="map">
      <MapLayer :layerConfiguration="neighborhoodsLayer" />
      <MapLayer :layerConfiguration="arteriesLayer" />
      <MapLayer :layerConfiguration="streetsLayer" />  
      <VehiclesLayer :layerConfiguration="vehicleLayer" />
    </svg>
  </div>
</template>

<script>
  import MapLayer from './MapLayer.vue';
  import VehiclesLayer from './VehiclesLayer.vue';
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

        vehicleLayer: {
          jsonPath: null,
          style: {
            fill: null,
            stroke: null,
          },
          projectionConfiguration: null,
        },

        arteriesLayer: {
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
      VehiclesLayer,
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
          fill: '#FFF',
          stroke: '#F5BE42',
        },
        projectionConfiguration: { ...this.projectionConfiguration },
      };

      this.arteriesLayer = {
        jsonPath: './sfmaps/arteries.json',
        style: {
          fill: '#FFF',
          stroke: '#F5BE42',
        },
        projectionConfiguration: { ...this.projectionConfiguration },
      };

      this.streetsLayer = {
        jsonPath: './sfmaps/streets.json',
        style: {
          fill: '#FFF',
          stroke: '#F5BE42',
        },
        projectionConfiguration: { ...this.projectionConfiguration },
      };

      this.vehicleLayer = {
        jsonPath: 'http://webservices.nextbus.com/service/publicJSONFeed?command=vehicleLocations&a=sf-muni',
        style: {
          fill: '#000',
          r: '4px',
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
