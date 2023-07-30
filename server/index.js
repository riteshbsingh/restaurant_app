const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: './.env' });
const Menu = require('./models/Menu');
const cors = require('cors');

const PORT = process.env.PORT;
const DATABASE = process.env.DATABASE;

mongoose.connect(DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => {
        console.error('Error connecting to MongoDB:', err.message);
    });

app.use(express.json());
app.use(cors());

app.post('/menu', async (req, res) => {
    try {
        const { id, name, dsc, image, price, rate, country } = req.body;

        const menuItem = new Menu({
            id, name, dsc, image, price, rate, country
        });

        await menuItem.save();

        res.status(201).json({ message: 'Menu item created successfully', data: menuItem });
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/menu', async (req, res) => {
    try {
        const menuItems = await Menu.find();

        res.json({ data: menuItems });
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/', async (req, res) => {
    res.json('Hello');
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
