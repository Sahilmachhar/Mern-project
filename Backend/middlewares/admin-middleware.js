const adminmiddleware = (req, res, next) => {

    try {
        
        const isAdmin = req.user.isAdmin;

        if(!isAdmin){
            return res.status(401).json({ message : "Access denied, you are not a admin"});
        }

        next();

    } catch (error) {
        next(error);
    }

}

module.exports = adminmiddleware;