const errorhandling = (err, req, res, next) => {

    const status = err.status || 404;
    const message = err.message || "there is error";
    const extradetails = err.extradetails || "backend error";

    return res.status(status).json({ message, extradetails });
}

module.exports = errorhandling;