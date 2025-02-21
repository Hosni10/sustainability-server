import  jwt  from "jsonwebtoken";
import { User } from "../../../database/models/user.model.js";
import bcrypt from 'bcrypt'


const signup = async (req,res,next) =>{
    const { username, email, password } = req.body;
    
    const user = await User.findOne({ email })
    console.log(user);
    
    if(user){
        return res.status(400).json({error: "Email already exists"});
    }
    
   const foundusername = await User.findOne({username:username})
    if(foundusername){
        return res.status(400).json({error: "this username already exists"});
    }

    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const userObject={
        username,
        email,
        password: hashedPassword
    }
    const newUser = await User.create(userObject);
    
    res.status(200).json({success:"User created successfully", newUser});


}

const login = async (req,res,next) => {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if(!user){
        return res.status(404).json({error: "User not found"});
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res.status(401).json({error: "Invalid credentials"});
    }
    console.log(user);
    
    const token = jwt.sign({id: user._id }, 'process.env.SECRET_KEY', {expiresIn: '1h'})
    res.json({
        user,
        token
    })
}


const getUsers = async (req,res,next) => {
    const users = await User.find();
    res.json(users);
}

export { signup, login ,getUsers};

