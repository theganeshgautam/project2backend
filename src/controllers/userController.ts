import { Request, Response } from "express";
import User from "../database/models/User";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


class AuthController{
  public static async registerUser(req:Request, res:Response):Promise<void>{

    const {username, email, password, role} = req.body //yo chai destructure gareko. so aba tala code garda we can use username,email and password obtained from req.body . esari destructure nagareko vaye, we have to do like req.body.username like that

    if(!username || !email || !password){
      res.status(400).json({
        message: "Please provide username, email, password"
      })
      return
    }

    // Validate role
    if (role && !['customer', 'admin'].includes(role)) {
      res.status(400).json({
          message: "Invalid value for role. Role must be either 'customer' or 'admin'."
      });
      return;
    }

    const [data] = await User.findAll({
      where: {
        email: email
      }
    })
    if(data){
      res.status(400).json({
        message: "An user with that email already exists!"
      })
      return
    }

    await User.create({
      username,
      email,
      password : bcrypt.hashSync(password,12),
      role: role || 'customer'
    })

    res.status(200).json({
      message: "User registered successfully"
    })
  }

  public static async loginUser(req:Request, res:Response): Promise<void>{
    //user input
    const {email,password} = req.body
    if(!email || !password){
      res.status(400).json({
        message: "Please provide email, password"
      })
      return
    }

    //check whether user with above email exist or not
    const [data] = await User.findAll({
      where: {
        email: email
      }
    })
    if(!data){
      res.status(404).json({
        message: "No user with that email"
      })
      return
    }

    //check password now
    const isMatched = bcrypt.compareSync(password, data.password)
    if(isMatched){

      //generate token and sent to user
      const token = jwt.sign({id:data.id}, process.env.SECRET_KEY as string,{
        expiresIn: "20d"
      })
      res.status(200).json({
        message: "Logged in successfully",
        data: token
      })

    }else{
      res.status(403).json({
        message: "Invalid email or password" //its best against hacker because they are confused whether email or pw is wrong
      })
    }



  }

}

export default AuthController
