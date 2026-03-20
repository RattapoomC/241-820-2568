const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
const port = 8000;

app.use(express.json());

let conn;

// 🔥 connect DB + retry
const connectDB = async () => {
    try {
        conn = await mysql.createConnection({
            host: "db",
            user: "root",
            password: "root",
            database: "webdb"
        });

        console.log("✅ DB connected");

        // 🔥 สร้าง table
        await conn.query(`
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                firstname VARCHAR(100),
                lastname VARCHAR(100),
                age INT,
                gender VARCHAR(20),
                interests TEXT,
                description TEXT
            )
        `);

    } catch (err) {
        console.log("⏳ DB not ready... retry");
        setTimeout(connectDB, 3000);
    }
};

connectDB();


// ===== API =====

// GET
app.get("/users", async (req, res) => {
    const [rows] = await conn.query("SELECT * FROM users");
    res.json(rows);
});

// POST
app.post("/users", async (req, res) => {
    const user = req.body;

    await conn.query("INSERT INTO users SET ?", {
        ...user,
        interests: JSON.stringify(user.interests || [])
    });

    res.json({ message: "created" });
});

// DELETE
app.delete("/users/:id", async (req, res) => {
    await conn.query("DELETE FROM users WHERE id = ?", [req.params.id]);
    res.json({ message: "deleted" });
});

app.listen(port, () => {
    console.log(`🚀 Server running on ${port}`);
});