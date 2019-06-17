import HOME_ROUTE from './Home/route';
import home from './Home';
import Layout from './Layout';

export default {
  path: '/',
  component: Layout,
  indexRoute: { onEnter: (nextState, replace) => replace(`/${HOME_ROUTE.route}`) },
  childRoutes: [
    home,
  ],
};
