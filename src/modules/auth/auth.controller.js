import  jwt  from "jsonwebtoken";
import { User } from "../../../database/models/user.model.js";
import bcrypt from 'bcrypt'


const signup = async (req,res,next) =>{
    const { name, email, password , confirmPassword } = req.body;
    const user = User.findOne({ email })
    if(password !== confirmPassword) {
        return res.status(400).json({error: "Passwords do not match"});
    }
    if(user){
        return res.status(403).json({error: "Email already exists"});
    }
    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({ name, email, password: hashedPassword  });

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
    const token = jwt.sign({id: user._id }, process.env.SECRET_KEY, {expiresIn: '1h'})
    res.json({
        user,
        token
    })
}

export { signup, login };