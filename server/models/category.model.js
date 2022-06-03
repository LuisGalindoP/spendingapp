const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "add a name"],
        mingle: [2, "Name must be at least 3 characters"]
    },
    totalMonth: {
        type: Number
    },
    totalYear: {
        type: Number
    }
}, {timestamps: true});

const Category = mongoose.model('Category', CategorySchema);

module.export = Category;