const { verifyToken } = require("../services/authService")

exports.authenticate = (req,res,next) =>{
    try {
        const header = req.headers["authorization"]
        if(!header || !header.includes("Bearer")){
            return res.status(401).json({message:"Login to access content."})
        }

        const token = header.split("Bearer ")[1]
        const payload = verifyToken(token)

        if(payload){
            req.payload = payload
            return next()
        } else {
            return res.status(401).json({message:"Login to access content."})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:error.message})
    }
}