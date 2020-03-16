<template>
  <g ref="layer"></g>
</template>

<script>
  import * as d3 from 'd3';

  export default {
    name: 'VehiclesLayer',
    props: ['layerConfiguration'],
    methods: {
      drawVehicles: function() {
        // D3 Projection
        var projection = d3
          .geoAlbers()
          .scale(this.layerConfiguration.projectionConfiguration.scale)
          .rotate([-this.layerConfiguration.projectionConfiguration.longitude, 0])
          .center([0, this.layerConfiguration.projectionConfiguration.latitude]);

        d3.geoPath().projection(projection);

        // D3 Drow
        fetch(this.layerConfiguration.jsonPath)
          .then(response => response.json())
          .then(layer => {
            d3.select(this.$refs.layer)
              .selectAll('circle')
              .remove();

            d3.select(this.$refs.layer)
              .selectAll('circle')
              .data(layer.vehicle)
              .enter()
              .append('circle')
              .attr('cx', data => projection([data.lon, data.lat])[0])
              .attr('cy', data => projection([data.lon, data.lat])[1])
              .attr('r', this.layerConfiguration.style.r)
              .attr('fill', this.layerConfiguration.style.fill)
          });
      },
    },
    watch: {
      $route(route) {
        var urlVehicle =
          'http://webservices.nextbus.com/service/publicJSONFeed?command=vehicleLocations&a=sf-muni&r=' +
          route.params.routerTag;
        
        this.layerConfiguration.jsonPath = urlVehicle;
        this.drawVehicles();

      },
    },
    mounted() {
      let interval = 15000;
      this.interval = setInterval(() => this.drawVehicles(), interval);
      this.drawVehicles();
    },
    destroyed() {
      clearInterval(this.interval);
    },
  };
</script>
