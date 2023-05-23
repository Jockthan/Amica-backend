const {z} = require ("zod");

const addInvoiceValidator = z.object({
    customer_name: z.string(),
    items: z.string(),
    price: z.number()
});

const getInvoiceValidator = z.object({
    id: z.string().length(24)
});

const updateInvoiceValidator = z.object({
    id: z.string().length(24)
});

const deleteInvoiceValidator = z.object({
    id: z.string().length(24)
});


module.exports = {
    addInvoiceValidator,
    getInvoiceValidator,
    updateInvoiceValidator,
    deleteInvoiceValidator,
}