<template>
  <g ref="layer"></g>
</template>

<script>
  import * as d3 from 'd3';
  import { mapState, mapGetters, mapActions } from 'vuex';

  export default {
    name: 'VehiclesLayer',
    props: ['layerConfiguration'],
    computed: {
      ...mapState('Map', {
        vehiclesList: ({ vehicle }) => vehicle.list || [],
      }),
      ...mapGetters({
        vehiclesLoadingState: 'Map/vehiclesLoadingState',
        vehiclesInvalidState: 'Map/vehiclesInvalidState',
      }),
    },
    created() {
      this.loadVehicle();
    },
    methods: {
      ...mapActions({
        loadVehicle: 'Map/getVehicles',
      }),
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
          .remove();

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
      $route(route) {
        this.loadVehicle(route.params.routerTag);
        this.drawVehicles();
      },
    },
    async mounted() {
      let interval = 15000;

      this.interval = setInterval(() => {
        this.drawVehicles();
      }, interval);

      this.drawVehicles();
    },
    destroyed() {
      clearInterval(this.interval);
    },
  };
</script>
