const routes = [
	{
		path: '/',
		name: 'map',
		component: () => import(/* webpackChunkName: "Map" */ '../components/Map.vue'),
	},
	{
		path: '/',
		query: { routerTag: '' },
		name: 'map-route',
		component: () => import(/* webpackChunkName: "Map" */ '../components/Map.vue'),
	}
];

export default routes;
