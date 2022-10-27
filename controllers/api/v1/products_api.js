const Products = require('../../../models/products');


// create products
module.exports.create = async function(req,res){
    try{
        const product = await Products.create(req.body);
        return res.status(200).json({
            success: true,
            message: "Product created successfully",
            data:{
                name : product.name,
                quantity : product.quantity,
            }
        });

    }catch(error){
        return res.status(200).json({
            success: false,
            message: error.message
        })
    }
}

// display all products
module.exports.products = async function(req,res){
    try{
        const product = await Products.find({});
        return res.status(200).json({
            success: true,
            message: "List of products",
            data:{
                product
            }
        });

    }catch(error){
        return res.status(200).json({
            success: false,
            message: error.message
        })
    }
}


// delete products using product id
module.exports.delete = async function(req,res){
    try{
        const product = await Products.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            success: true,
            message: "product deleted",
        });

    }catch(error){
        return res.status(200).json({
            success: false,
            message: error.message
        })
    }
}

// update quantity using product id
module.exports.update = async function(req,res){
    try{
        const product = await Products.findByIdAndUpdate(req.params.id,{$inc : {quantity : req.body.number}},{new:true});
        return res.status(200).json({
            success: true,
            data:{
                product
            },
            message: "update successfully",
        });

    }catch(error){
        return res.status(200).json({
            success: false,
            message: error.message
        })
    }
}
