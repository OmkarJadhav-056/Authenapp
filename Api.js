const express = require ("express");
const collection = require ("./mongo");
const cors = require ("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: err.message }); 
    next();
});

// app.use(express.urlencoded({extended:false}));

    app.get("/", cors(),(req, res) => {

    })

    app.get("/registeruser", async(req,res)=>{
        res.json("get method of registeruser");
    });

    app.post("/login",async(req,res)=>{
        const{email,password}=req.body

        try {
            const userexists = await collection.findOne({email:email, password:password})

            if(userexists){
                return res.status(201).json({ message: "Login Successful" });
            }
            else{
                return res.status(210).json({ message: "Login Failed! Please try again" });
            }
        } 
        catch(e) {
            console.log(error);
            res.status(500).json({ error: "Internal server error" });
        }
    })

    app.post("/registeruser",async(req,res)=>{

        // console.log("register user api called");

        const { name, date, email, password } = req.body

        try {
            const existingUser = await collection.findOne({ email });

            if (existingUser) {
                return res.status(301).json({ message: "Email already exists" });
            }
            else {
                const data = { name, date, email, password };
                await collection.create([data]);
                return res.status(201).json({ message: "User registered successfully" });
            }
        } 
        catch(error) {
            console.log(error);
            res.status(500).json({ error: "Internal server error" });
        }
    })    

    app.listen(8000,()=>{
        console.log("port connected");
    })