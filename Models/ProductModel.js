const mongoose =require('mongoose')

const Schema = mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name of product is required"],
        trim: true,
        maxLength: [100, "Product name cannot exceed 100 characters"]
    },
    mainCategory: {
        type: String,
        enum: ["Electronics", "Fashion", "Home & Living", "Beauty & Personal Care", 
               "Sports & Outdoors", "Books & Entertainment", "Health & Wellness", "Automotive"],
        required: [true, "Main category of product is required"]
    },
    subCategory: {
        type: String,
        required: [true, "Sub-category of product is required"]
    },
    description: {
        type: String,
        required: [true, "Description of product is required"],
        minLength: [20, "Description should be at least 20 characters"]
    },
    stock: {
        type: Number,
        required: [true, "Stock is required"],
        min: [0, "Stock cannot be negative"],
        default: 0
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price cannot be negative"]
    },
    discountPercentage: {
        type: Number,
        min: [0, "Discount Percentage cannot be negative"],
        max: [100, "Discount Percentage cannot be above 100%"] 
    },
    brand: {
        type: String,
        required: [true, "Brand name is required"]
    },
    ratings: {
        type: Number,
        default: 0,
        min: [0, "Rating cannot be less than 0"],
        max: [5, "Rating cannot exceed 5"]
    }
});


module.exports = mongoose.model("Product" , Schema)