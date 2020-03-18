<template>
  <g ref="layer"></g>
</template>

<script>
  import * as d3 from 'd3';
  import { mapState, mapGetters, mapActions } from 'vuex';

  export default {
    name: 'VehiclesLayer',
    props: ['layerConfiguration'],
    data() {
      return {
        lastRoute: '',
      };
    },
    computed: {
      ...mapState('Map', {
        vehiclesList: ({ vehicle }) => vehicle.list || [],
      }),
      ...mapGetters({
        vehiclesLoadingState: 'Map/vehiclesLoadingState',
        vehiclesInvalidState: 'Map/vehiclesInvalidState',
      }),
    },
    methods: {
      ...mapActions({
        loadVehicle: 'Map/getVehicles',
      }),
      updateMap: async function() {
        this.lastRoute = this.$route.query.routerTag;
        await this.loadVehicle(this.lastRoute);
        this.cleanVehicles();
        this.drawVehicles();
      },
      cleanVehicles: function() {
        d3.select(this.$refs.layer)
          .selectAll('circle')
          .remove();
      },
      drawVehicles: function() {
        // D3 Projection
        var projection = d3
          .geoAlbers()
          .scale(this.layerConfiguration.projectionConfiguration.scale)
          .rotate([-this.layerConfiguration.projectionConfiguration.longitude, 0])
          .center([0, this.layerConfiguration.projectionConfiguration.latitude]);

        d3.geoPath().projection(projection);

        // D3 Drow

        d3.select(this.$refs.layer)
          .selectAll('circle')
          .data(this.vehiclesList)
          .enter()
          .append('circle')
          .attr('cx', data => projection([data.lon, data.lat])[0])
          .attr('cy', data => projection([data.lon, data.lat])[1])
          .attr('r', this.layerConfiguration.style.r)
          .attr('fill', this.layerConfiguration.style.fill);
      },
    },
    watch: {
      async $route() {
        this.updateMap();
      },
    },
    created() {
      this.updateMap();
    },
    mounted() {
      let interval = 15000;
      this.interval = setInterval(() => {
        this.updateMap();
      }, interval);
    },
    destroyed() {
      clearInterval(this.interval);
    },
  };
</script>
