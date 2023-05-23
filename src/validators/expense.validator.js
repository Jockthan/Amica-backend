const {z} = require ("zod");

const addExpenseValidator = z.object({
    description: z.string(),
    quantity: z.number(),
    price: z.number()
});

const getExpenseValidator = z.object({
    id: z.string().length(24)
});

const updateExpenseValidator = z.object({
    id: z.string().length(24)
});

const deleteExpenseValidator = z.object({
    id: z.string().length(24)
});


module.exports = {
    addExpenseValidator,
    getExpenseValidator,
    updateExpenseValidator,
    deleteExpenseValidator,
}