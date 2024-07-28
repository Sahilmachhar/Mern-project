const { z } = require("zod");

const signupSchema = z.object({

    username : z
    .string({ required_error : "username is required"})
    .trim()
    .min(5, { message: "minimum username length should be 5 character "})
    .max(20, { message: "max username legth should not be more than 20 chars"}),

    email : z
    .string({ required_error : "email is required"})
    .trim()
    .email({ message: "email is not valid"}),

    phone : z
    .string({ required_error : "phone is required"})
    .trim()
    .min(10, { message: "minimum phone number length should be 10 "})
    .max(20, { message: "max phone number legth should not be more than 20 "}),

    password : z
    .string({ required_error : "password is required"})
    .trim()
    .min(6, { message: "minimum password length should be 6 character "})
    .max(12, { message: "max password legth should not be more than 12 chars"}),
   
})

module.exports = signupSchema;