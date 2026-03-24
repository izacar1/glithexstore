import express from "express";
import cors from "cors";

import fs from "fs";

const ORDERS_FILE = "orders.json";
const ALLOWED_ORIGINS = new Set([
  "http://localhost:3000",
  "http://127.0.0.1:3000",
]);

function saveOrder(order) {
  let orders = [];

  if (fs.existsSync(ORDERS_FILE)) {
    const data = fs.readFileSync(ORDERS_FILE, "utf-8");
    orders = JSON.parse(data || "[]");
  }

  orders.push(order);

  fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2));
}

console.log("🔥 BACKEND CORRECTO CARGADO");

const app = express();

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || ALLOWED_ORIGINS.has(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Origin not allowed by CORS"));
    },
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("GLITHEX backend funcionando 🚀");
});

app.get("/orders", (req, res) => {
  if (!fs.existsSync(ORDERS_FILE)) {
    return res.json([]);
  }

  const data = fs.readFileSync(ORDERS_FILE, "utf-8");
  const orders = JSON.parse(data || "[]");

  res.json(orders);
});

app.post("/order", (req, res) => {
  console.log("ORDER RECEIVED:", req.body);

  const items = Array.isArray(req.body.items)
    ? req.body.items.filter(Boolean)
    : req.body.product
      ? [req.body.product]
      : [];

  if (items.length === 0) {
    return res.status(400).json({
      status: "error",
      message: "Order must contain at least one item",
    });
  }

  const order = {
    id: Date.now(),
    product: req.body.product || items[0],
    items,
    customer: req.body.customer || null,
    totals: req.body.totals || null,
    createdAt: new Date().toISOString(),
  };

  saveOrder(order);

  res.status(200).json({
    status: "ok",
    message: "Order received",
  });
});

const PORT = 3001;

app.delete("/orders", (req, res) => {
  fs.writeFileSync(ORDERS_FILE, JSON.stringify([], null, 2));

  res.json({
    status: "ok",
    message: "Orders cleared",
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
