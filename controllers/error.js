// React Version
exports.get404 = (req, res, next) => {
  console.log('you react 404 page');
  res.status(404).send('Page Not Found on Server');
};
