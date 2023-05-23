const {z} = require ("zod");

const addSaleValidator = z.object({
    name: z.string(),
    type: z.string(),
    quantity: z.number(),
    price: z.number()
});

const getSaleValidator = z.object({
    id: z.string().length(24)
});

const updateSaleValidator = z.object({
    id: z.string().length(24)
});

const deleteSaleValidator = z.object({
    id: z.string().length(24)
});


module.exports = {
    addSaleValidator,
    getSaleValidator,
    updateSaleValidator,
    deleteSaleValidator,
}