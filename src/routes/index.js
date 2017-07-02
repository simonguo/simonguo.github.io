module.exports = {
  childRoutes: [{
    path: '/',
    component: require('../components/App').default,
    indexRoute: {
      component: require('../pages/PageIndex').default
    }
  }]
};
