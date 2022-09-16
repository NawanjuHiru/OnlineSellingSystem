const Product = require("../models/product.model");

const saveProduct = async (ctx) => {
    try {
        const {
            type,
            name,
            amount,
            inStock
        } = ctx.request.body;

        const product = await Product.create ({
            type: type,
            name: name,
            amount: amount,
            inStock: inStock,
        });

        return (ctx.body = {
            isSuccess: type,
            message: "Product saved successfully.",
        });
    } catch (error) {
        return (ctx.body = {
            isSuccess: false,
            message: "Error has been occured. Please try again.",
        });
    }
};

const updateProduct = async (ctx) => {
    try {
        const {
            id,
            type,
            name,
            amount,
            inStock
        } = ctx.request.body;

        const Product = await Product.findByIdAndUpdate(id, {
            type: type,
            name: name,
            amount: amount,
            inStock: inStock,
        });

        return (ctx.body = 
            {
                isSuccess: true,
                message: "Product saved successfully.",
            });
    } catch (error) {
        return (ctx.body =
            {
                isSuccess: false,
                message: "Error has been occured. Please try again.",
            });
    }
};

const deleteProduct = async (ctx) => {
    try {
        const productId = ctx.params.id;

        const query = await Product.findByIdAndDelete(productId);

        return (ctx.body = 
            {
                isSuccess: true,
                message: "Product deleted successfully.",
            });
    } catch (error) {
        return (ctx.body =
            {
                isSuccess: false,
                message: "Error has been occured. Please try again.",
            });
    }
};

const getProductDeatils = async (ctx) => {
    try {
        const { searchText } = ctx.request.body;

        if (searchText === "") {
            const productDetails = await Product.find().exec();

            return (ctx.body = productDetails);
        } else {
            const productDetails = await Product.find({product: searchText});

            return (ctx.body = productDetails);
        }
    } catch (error) {

    }
};

const getProductById = async (ctx) => {
    try {
        const productId = ctx.params.id;

        const product = await Product.findById(productId);

        return (ctx.body = product);
    } catch (error) {

    }
};

module.exports = { saveProduct , updateProduct , deleteProduct , getProductDeatils , getProductById }