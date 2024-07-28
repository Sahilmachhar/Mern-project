require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const UserRoute = require("./Router/auth-route");
const contactRoute = require("./Router/contact-route");
const ServiceRoute = require("./Router/service-route");
const GetuserRoute = require("./Router/getuser-route");
const connectdb = require("./utils/db");
const errorhandling = require("./middlewares/error-middleware");


const port = 5000;

const corsOptions = {
    origin : "http://localhost:5173",
    method : "POST, PUT, GET, DELETE, PATCH",
    credentials : true,
}

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth", UserRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", ServiceRoute);
app.use("/admin", GetuserRoute);

app.use(errorhandling);

connectdb().then( () => {
    app.listen(port, () => {
        console.log(`listening at port number ${port}`);
    })
});
    