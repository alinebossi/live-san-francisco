<template>
  <div id="app">
    <SanFranciscoMap />
  </div>
</template>

<script>
  import SanFranciscoMap from './components/Map.vue';

  export default {
    name: 'app',
    components: {
      SanFranciscoMap,
    },
  };
</script>

