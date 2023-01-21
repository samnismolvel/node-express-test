import { Router } from "express";

import { getProducts, getProductById, newProduct, modProduct, delProduct } from "../controllers/products.controller.js";

const router =  Router()

router.post("/products", newProduct)
router.get("/products", getProducts)
router.get("/products/:id", getProductById)
router.put("/products/:id", modProduct)
router.delete("/products/:id", delProduct)

export default router