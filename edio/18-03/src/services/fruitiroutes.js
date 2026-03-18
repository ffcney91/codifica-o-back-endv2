
import express from 'express'
import fruitservice from '../services/fruitservices.js';

const route = express.Router()

route.get("/", (req, res) => {
    const data = express.Router()
})

const dado = fruitservice.getall()
res.json(dado)

