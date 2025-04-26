import jwt from "jsonwebtoken"

const isAuthenticated = async (req , res , next) => {
    const token = req.cookies.token 

    if (!token) {
        return res.status(400).json({
            message: "Token does not exist",
            success: false
        })
    }
    
    const decode = jwt.verify(token , process.env.SECRET_KEY)
    if (!decode) {
        return res.status(400).json({
            message: "Invalid Token",
            success: false
        })
    }

    req.id = decode.UserId;
    next();

}

export default isAuthenticated