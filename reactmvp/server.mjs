

//DEPENDENCIES======================
import express from 'express';
const app = express();
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const port = 8000;
import pkg from 'pg';
const { Pool } = pkg;
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });

//MIDDLEWARE===========================
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

//ROUTES===================================

//SHOW ROUTES>

//get all
app.get('/shows', async (req, res) => {
    try {
        const {rows} = await pool.query('SELECT * FROM show ORDER BY id ASC;');
        res.status(200).json(rows)
        console.log('Logged All')
    } catch (error) {
        console.log(error);
        res.status(500).send(error);        
    }
});

//get 1
app.get('/shows/:name', async (req, res) => {
    const name = req.params.name.toUpperCase();

    try {
        const {rows} = await pool.query('SELECT * FROM show WHERE name LIKE $1', [`%${name}%`]);
        res.status(200).send(rows);
        console.log('Logged:', name)
    } catch (error) {
        res.json(error)
        console.log(error);
    }
});

//WISHLISTS ROUTES>

//get all
app.get('/watchlists', async (req, res) => {
    try {
        const {rows} = await pool.query('SELECT * FROM watchlist ORDER BY id ASC;');
        res.status(200).json(rows)
        console.log('Logged All')
    } catch (error) {
        console.log(error);
        res.status(500).send(error);        
    }
});

//get 1
app.get('/watchlists/:name', async (req, res) => {
    const name = req.params.name;

    try {
        const {rows} = await pool.query('SELECT * FROM watchlist WHERE name LIKE $1', [`%${name}%`]);
        res.status(200).send(rows);
        console.log('Logged:', name)
    } catch (error) {
        res.json(error)
        console.log(error);
    }
});

//post
app.post('/watchlists', async (req, res) => {
    const { name, text } = req.body;

    if (!name || !text) {
        return res.status(400).json('Name And List Required');
    }
     try {
        const {rows} = await pool.query(
            'INSERT INTO watchlist (name, text) VALUES ($1, $2) RETURNING*',
            [name, text]
        );
        res.status(201).json(rows[0]);
    } catch (error) {
        res.status(500).json(error);
        console.error(error);
    }
});



//LISTENER
app.listen(port, () => {
    console.log('working')
})