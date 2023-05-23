const {z} = require ("zod");

const addCustomerValidator = z.object({
    name: z.string()
});

const getCustomerValidator = z.object({
    id: z.string().length(24)
});

const updateCustomerValidator = z.object({
    id: z.string().length(24)
});

const deleteCustomerValidator = z.object({
    id: z.string().length(24)
});


module.exports = {
    addCustomerValidator,
    getCustomerValidator,
    updateCustomerValidator,
    deleteCustomerValidator,
}