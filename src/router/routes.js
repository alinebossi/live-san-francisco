const routes = [
	{
		path: '/',
		name: 'map',
		component: () => import(/* webpackChunkName: "Map" */ '../components/Map.vue'),
	},
	{
		path: '/:routerTag',
		name: 'map-route',
		component: () => import(/* webpackChunkName: "Map" */ '../components/Map.vue'),
	}
];

export default routes;
