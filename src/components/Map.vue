<template>
  <div>
    <div class="d-flex justify-content-center" v-if="!showMap">
      <div class="spinner-grow center-block text-warning">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <svg class="map" ref="map" v-show="showMap">
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
  import { mapState } from 'vuex';
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
          style: {
            fill: null,
            stroke: null,
          },
          values: null,
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
    computed: {
      ...mapState('Map', {
        isLoading: state => state.loading,
      }),
      showMap() {
        return !this.isLoading;
      },
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
        style: {
          fill: '#000',
          r: '4px',
        },
        projectionConfiguration: { ...this.projectionConfiguration },
      };
    },
    async mounted() {
      // Map configuration
      d3.select(this.$refs.map)
        .attr('preserveAspectRatio', 'xMinYMin meet')
        .attr('viewBox', '0 0 800 600');
    },
  };
</script>
