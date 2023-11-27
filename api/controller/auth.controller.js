import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  const hashedPassword = bcryptjs.hashSync(password, 12);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("User created succesfully!");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email: email }); //we can write the email:email as the email on js6 onwards as key value both are same
    if (!validUser) return next(errorHandler(404, "User not found!"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Wrong Credentials!"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const {password:pass, ...rest} = validUser._doc
    res
      .cookie("access_token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 24 * 60 * 60),
      })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

 export const google = async(req,res,next) => {
  try {
    const user = await User.findOne({email: req.body.email})
    if(user){
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const {password:pass, ...rest} = user._doc
      res
        .cookie("access_token", token, {
          httpOnly: true,
          expires: new Date(Date.now() + 24 * 60 * 60),
        })
        .status(200)
        .json(rest);
    }
    else{
      // This will create the password containing 0-9 numbers and a-z letters and will of type 0.bda23raffs but we include only last 8 and we will double them by adding same. 16 charchter password
      const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword,10);
      // we will be getting the name and we need to store username so we will Anant Sharan Pandey -> anantsharanpandey2733
      const newUser = new User({username: req.body.name.split(" ").join("").toLowerCase()+ Math.random().toString(36).slice(-4), email:req.body.email, password:hashedPassword, avatar: req.body.photo});
      await newUser.save();

      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const {password:pass, ...rest} = newUser._doc
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(rest);
    }
   
  } catch (error) {
    next(error)
  }
};

