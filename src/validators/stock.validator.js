const {z} = require ("zod");

const addStockValidator = z.object({
    name: z.string(),
    type: z.string(),
    quantity: z.number(),
    price: z.number()
});

const getStockValidator = z.object({
    id: z.string().length(24)
});

const updateStockValidator = z.object({
    id: z.string().length(24)
});

const deleteStockValidator = z.object({
    id: z.string().length(24)
});


module.exports = {
    addStockValidator,
    getStockValidator,
    updateStockValidator,
    deleteStockValidator,
}