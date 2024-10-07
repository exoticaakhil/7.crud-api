const { status } = require('express/lib/response')
const { StatusCode, StatusCodes }= require('http-status-codes')
const User = require("../model/userModel")


let userController ={
          readAll: async(req,res)=>{
            try{
                let data = await User.find({})
                res.status(StatusCodes.ACCEPTED).json({status: true, length:data.length ,users:data })
                res.json({msg: "read all"})
            }catch (err){
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status:false,msg:err.message})
            }
          },
          readSingle: async(req,res)=>{
            try{
                let id = req.params.id
                let single = await User.findById(id)
                res.status(StatusCodes.OK).json({user:single})
            }catch (err){
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status:false,msg:err.message})
            }
          },
          createuser: async(req,res)=>{
            try{
                let{name,email,mobile,age}=req.body
                // res.json({
                //     data: req.body
                // })
                let emailExists = await User.findOne({ email });
            if (emailExists) {
                return res.status(StatusCodes.CONFLICT).json({ status: false, msg: "Email already exists" });
            }

            // Check if mobile already exists
            let mobileExists = await User.findOne({ mobile });
            if (mobileExists) {
                return res.status(StatusCodes.CONFLICT).json({ status: false, msg: "Mobile number already exists" });
            }

            // If both checks pass, create the new user
           let newUser = await User.create({ name, email, mobile, age });
            
            res.status(StatusCodes.CREATED).json({ status: true, msg: "User created", user: newUser });
        } catch (err){
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status:false,msg:err.message})
            }
          },
         updateUser: async(req,res)=>{
            try{
                let id = req.params.id
                let extUser =await User.findById(id)
                    if(!extUser){
                        return res.status(StatusCodes.NOT_FOUND).json({ status: false, msg:`requsted user not found`})
                    }
                await User.findByIdAndUpdate({_id: id},req.body )
                res.status(StatusCodes.ACCEPTED).json({ status: true, msg:`User info Updated successfully`})
            }catch (err){
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status:false,msg:err})
            }
          },          
          deleteUser: async(req,res)=>{
            try{
                let id = req.params.id
                let  extUser = await User.findById(id)
                    if(!extUser){
                        return res.status(StatusCodes.NOT_FOUND).json({ status: false,msg:`Requsted user not found`})
                    }
                //delete
                await User.findByIdAndDelete({ _id:id })
                res.status(StatusCodes.OK).json({status: true, msg:"user info deleted successfully"})
                
            }catch (err){
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status:false,msg:err})
            }
          },

}
module.exports =userController