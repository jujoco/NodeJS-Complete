// ESJ Version
exports.get404 = (req, res, next) => {
  console.log('you react 404 page');
  res.status(404).render('404', { pageTitle: 'Page Not Found', path: '/404' });
};
