import { pool } from "../db/db.js";

export const newProduct = async(req, res)=>{
    const {name, price} = req.body
    const [rows] = await pool.query('INSERT INTO product (name, price) VALUES (?,?)', [name, price])
    res.send({
        id: rows.insertId,
        name,
        price
    })
}

export const getProducts = async(req, res)=>{
    const [rows] = await pool.query('SELECT * FROM product')
    res.json(rows)
}

export const getProductById = async(req, res)=>{
    const id = req.params.id;
    const [rows] = await pool.query('SELECT * FROM product WHERE id = (?)', id)
    res.json(rows)
}

export const modProduct = async(req, res)=>{
    const id = req.params.id
    const {name, price} = req.body
    const [rows] = await pool.query('UPDATE product SET name = (?), price = (?) WHERE id = (?)', [name, price, id])
    res.send({
        id,
        name,
        price,
        rowsChanged: rows.affectedRows
    })
    if (rows.affectedRows === 0){return res.status(404).json({message: "Not Found"})}
}

export const delProduct = async(req, res)=>{
    const id = req.params.id
    const qry = await pool.query('DELETE FROM product WHERE id = (?)', id)
    res.send(qry)
}