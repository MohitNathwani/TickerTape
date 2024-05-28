const {Router} = require('express');
const adminMiddleware = require('../middleware/admin');
const userMiddleware = require('../middleware/user');
const {Movie, Admin, Bus} = require('../db');
const router = Router();

router.post('/signup', async (req, res) => {
    const {username, password} = req.body;
    const newAdmin = await Admin.create({
        username, password
    });
    res.status(201).json({
        message : "Admin created successfully", adminId : newAdmin._id
    });
});




module.exports = router;

