<template>
  <div id="app">
    <div class="row">
      <div class="sidebar">
        <RoutesMenu />
      </div>
      <div class="col p-4 content">
        <RouterView />
      </div>
    </div>

  </div>
</template>

<script>
  import RoutesMenu from './components/RoutesMenu.vue';

  export default {
    name: 'app',
    components: {
      RoutesMenu,
    },
  };
</script>

<style lang="scss">

  .sidebar {
    height: 100vh;
    background-color: #f5be42;
    width: 300px;
    overflow-y: scroll;
    overflow-x: hidden;

    .list-group {
      a {
        height: 50px;
        padding-left: 30px;;
      }
    }
  }

  
</style>

