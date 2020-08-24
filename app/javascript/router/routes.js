import _map from 'lodash/map';
import _extend from 'lodash/extend';

import HomeIndex from 'pages/home/index.vue';

let routes = [{
  path: '/',
  name: 'welcome',
  component: HomeIndex,
}];

routes = _map(routes, (route) => {
  return _extend({}, route, {
    props: true
  });
});
export default routes;
