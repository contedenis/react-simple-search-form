import HOME_LAYOUT from './route';

export default {
  path: HOME_LAYOUT.route,
  getComponent(nextState, cb) {
    import('./HomeLayout')
      .then(layout => cb(null, layout.default));
  },
};
