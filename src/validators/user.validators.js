const {z} = require ("zod");

const loginValidator = z.object({
    email: z.string(),
    password: z.string().min(8)
});

const registerValidator = z.object({
    name: z.string(),
}).and(loginValidator);

const getUserValidator = z.object({
    id: z.string().length(24)
});

const updateUserValidator = z.object({
    id: z.string().length(24)
});

const deleteUserValidator = z.object({
    id: z.string().length(24)
});

const forgetUserValidator = z.object({
    id: z.string().length(24)
}).and(registerValidator);


module.exports = {
    loginValidator,
    registerValidator,
    getUserValidator,
    updateUserValidator,
    deleteUserValidator,
    forgetUserValidator
}