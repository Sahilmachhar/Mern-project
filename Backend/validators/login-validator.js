const { z } = require("zod");

const loginSchema = z.object({
    email: z
    .string({ required_error: "email is required"})
    .trim()
    .email({ message : "email is not valid"}),

    password: z
    .string({ required_error: "password is required"})
    .trim()
    .min(6,{ message : "minimum 6 characters required"})
    .max(12,{ message : "maximum 12 characters required"}),
})

module.exports = loginSchema;