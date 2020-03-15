<template>
  <g ref="layer"></g>
</template>

<script>
  import * as d3 from 'd3';

  export default {
    name: 'MapLayer',
    props: ['layerConfiguration'],
    mounted() {
      
      // D3 Projection
      var projection = d3
        .geoAlbers()
        .scale(this.layerConfiguration.projectionConfiguration.scale)
        .rotate([-this.layerConfiguration.projectionConfiguration.longitude, 0])
        .center([0, this.layerConfiguration.projectionConfiguration.latitude]);

      const path = d3.geoPath().projection(projection);
      d3.selectAll('path').attr('d', path);

      // D3 Drow
      fetch(this.layerConfiguration.jsonPath)
        .then(response => response.json())
        .then(layer => {
          d3.select(this.$refs.layer)
            .selectAll('path')
            .data(layer.features)
            .enter()
            .append('path')
            .attr('fill', this.layerConfiguration.style.fill)
            .attr('stroke', this.layerConfiguration.style.stroke)
            .attr('d', path);
        });
    },
  };
</script>