<template>
  <div id="app">
    <div class="row" id="body-row">
      <div id="sidebar-container" class="sidebar-expanded d-none d-md-block">
        <RouterList />
      </div>
      <div class="col p-4">
        <RouterView/>
      </div>
    </div>

  </div>
</template>

<script>
  import RouterList from './components/Routes.vue';

  export default {
    name: 'app',
    components: {
      RouterList,
    },
  };
</script>

<style lang="scss">
  .header-nav {
    background-color: #f5be42;
    .navbar-brand {
      color: #000;
    }
  }

  .menu-button {
    background-color: #f5be42 !important;
  }
  #body-row {
    margin-left: 0;
    margin-right: 0;
  }
  #sidebar-container {
    min-height: 100vh;
    background-color: #f5be42;
    padding: 0;
  }
  .sidebar-expanded {
    width: 300px;
  }
  .sidebar-collapsed {
    width: 60px;
  }

  #sidebar-container .list-group a {
    height: 50px;
  }

  /* Submenu item*/
  #sidebar-container .list-group .sidebar-submenu a {
    height: 45px;
    padding-left: 30px;
  }
  .sidebar-submenu {
    font-size: 0.9rem;
  }
</style>

