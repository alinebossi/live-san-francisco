<template>
  <div class="menu">
    <ul class="list-group">
      <router-link to="./" class="list-group-item list-group-item-action flex-column align-items-start menu-button">All</router-link>
    </ul>
    <ul class="list-group" v-for="route in routeList" :key="route.tag">
      <router-link :to="{ name: 'map-route', query: { routerTag: route.tag }}" class="list-group-item list-group-item-action flex-column align-items-start menu-button">{{ route.title }}</router-link>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'RoutesMenu',
    data() {
      return {
        routeList: [],
      };
    },
    created() {
      fetch(
        'http://webservices.nextbus.com/service/publicJSONFeed?command=routeList&a=sf-muni',
      )
        .then(response => response.json())
        .then(resp => {
          this.routeList = resp.route;
        });
    },
  };
</script>
<style lang="scss">
  .menu-button {
    background-color: #f5be42 !important;
  }
  
</style>