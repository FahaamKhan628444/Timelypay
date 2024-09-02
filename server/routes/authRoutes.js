// const express=require("express")
// const router=express.Router()
// const cors=require("cors")
// const {test, registerUser, loginUser}=require('../controllers/authController')

// //midlleware

// router.use(
//     cors({
//         credentials:true,
//         origin: ' http://localhost:5173'
//     })
// )


// router.get('/',test)
// router.post('/register', registerUser,(req,res)=>{
//     console.log(21)
// });
// router.post('/login', loginUser,(req,res)=>{
//     console.log(27)
// });

// module.exports=router

const express = require("express");
const router = express.Router();
const cors = require("cors");
const { test, registerUser, loginUser ,getUser } = require("../controllers/authController");

// Middleware
router.use(
    cors({
        credentials: true,
        origin: "http://localhost:5173",
    })
);

// Routes
router.get("/", test);

router.post("/register", (req, res) => {
    registerUser(req, res);
    console.log(21);  
});

router.post("/login", (req, res) => {
    loginUser(req, res);
    console.log(27);  
});

router.post("/profile",(req,res)=>{
    getUser(req,res);
    console.log(39)
})

module.exports = router;
