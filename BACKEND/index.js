const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
const port = 8000;

app.use(express.json());

let conn = null;

const initDBConnection = async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 3306
    });
};


// GET users
app.get('/users', async (req, res) => {
    const results = await conn.query('SELECT * FROM users');
    res.json(results[0]);
});


// GET user by id
app.get('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const results = await conn.query(
            'SELECT * FROM users WHERE id = ?',
            [id]
        );

        if (results[0].length === 0) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        res.json(results[0][0]);

    } catch (error) {
        res.status(500).json({
            message: 'Error fetching user',
            error: error.message
        });
    }
});


// CREATE user
app.post('/users', async (req, res) => {
    try {

        const user = req.body;

        const results = await conn.query(
            'INSERT INTO users SET ?',
            user
        );

        res.json({
            message: 'User created successfully',
            data: results[0]
        });

    } catch (error) {

        res.status(500).json({
            message: 'Error creating user',
            error: error.message
        });

    }
});


// UPDATE user
app.put('/users/:id', async (req, res) => {
    try {

        const id = req.params.id;
        const updatedUser = req.body;

        const results = await conn.query(
            'UPDATE users SET ? WHERE id = ?',
            [updatedUser, id]
        );

        if (results[0].affectedRows === 0) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        res.json({
            message: 'User updated successfully'
        });

    } catch (error) {

        res.status(500).json({
            message: 'Error updating user',
            error: error.message
        });

    }
});


// DELETE user
app.delete('/users/:id', async (req, res) => {
    try {

        const id = req.params.id;

        const results = await conn.query(
            'DELETE FROM users WHERE id = ?',
            [id]
        );

        if (results[0].affectedRows === 0) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        res.json({
            message: 'User deleted successfully'
        });

    } catch (error) {

        res.status(500).json({
            message: 'Error deleting user',
            error: error.message
        });

    }
});


app.listen(port, async () => {

    await initDBConnection();

    console.log(`Server running on port ${port}`);

});