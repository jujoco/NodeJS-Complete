const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

// controllers
const errorController = require('./controllers/error');
const sequelize = require('./util/database');

// models
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');
const Order = require('./models/order');
const OrderItem = require('./models/order-item');

// routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();
const port = 3000;
const hostname = '127.0.0.1';

// EJS Template engine: Uncomment this and comment out React app.
// app.set('view engine', 'ejs');
// app.set('views', 'views/EJS_App');
// app.use(express.static(path.join(__dirname, 'public')));

// React app: Uncomment this and comment out EJS Template.
app.use(express.static(path.join(__dirname, 'public/React_public')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  User.findByPk(1)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404);

Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product, { through: OrderItem });

sequelize
  // .sync({ force: true })
  .sync()
  .then(result => {
    return User.findByPk(1);
  })
  .then(user => {
    if (!user) {
      return User.create({ name: 'Max', email: 'test@test.com' });
    }
    return user;
  })
  .then(user => {
    return user.createCart();
  })
  .then(cart => {
    app.listen(port, hostname, () => console.log(`Server listening on http://${hostname}:${port}/`));
  })
  .catch(err => console.log(err));
