const database = require('../database');

const getAllUsers = async (req,res)=>{
    try {
        const resp = await database.query('SELECT * FROM fruits');
        res.json(resp.rows);
    } catch (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Error fetching users' });
    }
}

const getUser = (req,res)=>{
	res.send("User ");
    res.end();
}

module.exports = {
    getAllUsers,
    getUser
}