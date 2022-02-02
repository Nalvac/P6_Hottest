const express = require('express');
const mongoosse = require('mongoose');
const sauceRoutes = require('./router/sauces');
const userRoute = require('./router/user');
const path = require('path');
const app = express();

app.use(express.json());

mongoosse.connect('mongodb+srv://vacna:yohji@cluster0.cydfb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connexion réussie !');
}).catch(() => {
    console.log('Connexion échouée !')
})
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoute);

module.exports = app;