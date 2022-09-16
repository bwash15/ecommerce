const { verfiyJWT, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require( "../middleware/verifyJWT" );
const Product = require( '../models/Product' );
const router = require( "express" ).Router();


// NEW PRODUCT
router.post( "/", verifyTokenAndAdmin, async ( req, res ) => {
    const newProduct = new Product( req.body )
    try {
        const savedProduct = await newProduct.save();
        res.status( 200 ).json( savedProduct );
    } catch ( err ) {
        res.status( 500 ).json( err );
    }
}
)


{/** Tested with POSTMAN
    > Tested with the JWT active and present > User Authenticated > successful
    > Tested with the JWT not present > Failed > token not present > successful
    > Tested with the JWT present but not valid > Failed > token not valid > successful
**/}
// UPDATE PRODUCT
router.put( "/:id", verifyTokenAndAdmin, async ( req, res ) => {

    try {
        const updatedProduct = await Product.findOne( { _id: req.params.id } ).exec();
        // if we do not get an id, returns ID not found(The User does not exist)
        if ( !prdct ) {
            return res.status( 204 ).json( { "message": `No Product Matches ID ${req.params.id}.` } );
        }
        console.log( "Product Found, checking for udpates" );
        // checking for the firstname and lastname to be submitted
        if ( req.body?.title ) updatedProduct.title = req.body.title;
        console.log( updatedProduct.title );
        if ( req.body?.desc ) updatedProduct.desc = req.body.desc;
        console.log( updatedProduct.desc );
        if ( req.body?.img ) updatedProduct.img = req.body.img;
        console.log( updatedProduct.img );
        if ( req.body?.productCategory ) updatedProduct.productCategory = req.body.productCategory;
        console.log( updatedProduct.productCategory );
        if ( req.body?.productUse ) updatedProduct.productUse = req.body.productUse;
        console.log( updatedProduct.productUse );
        if ( req.body?.productType ) updatedProduct.productType = req.body.productType;
        console.log( updatedProduct.productType );
        if ( req.body?.color ) updatedProduct.color = req.body.color;
        console.log( updatedProduct.color );
        if ( req.body?.size ) updatedProduct.size = req.body.size;
        console.log( updatedProduct.size );
        if ( req.body?.price ) updatedProduct.price = req.body.price;
        console.log( updatedProduct.price );

        const result = await updatedProduct.save();
        res.status( 200 ).json( result );
    } catch ( err ) {
        res.status( 500 ).json( err );
    }

} );

// DELETE PRODUCT
router.delete( "/:id", verifyTokenAndAdmin, async ( req, res ) => {

    try {
        if ( !req?.params?.id ) return res.status( 400 ).json( { 'message': 'User ID required' } );

        const product = await Product.findOne( { _id: req.params.id } ).exec();
        // if we do not get an id, returns ID not found(The product does not exist)
        if ( !product ) {
            return res.status( 204 ).json( { "message": `Product ID not found: ${req.params.id}.` } );
        }

        await product.deleteOne( { _id: req.body.id } );
        res.status( 200 ).json( "Product has been deleted..." );

    } catch ( err ) {
        console.log( err );
    }
} );

// GET PRODUCTS -  Anyone can ACCESS
router.get( "/find/:id", async ( req, res ) => {

    try {
        if ( !req?.params?.id ) return res.status( 400 ).json( { 'message': 'Product ID required.' } );
        const product = await Product.findOne( { _id: req.params.id } ).exec();
        // if we do not get an id, returns ID not found(The user does not exist)
        if ( !product ) {
            return res.status( 204 ).json( { "message": `No product Matches ID ${req.params.id}.` } );
        }
        res.status( 200 ).json( product );
    } catch ( err ) {
        console.log( err );
    }
} );

// // GET ALL PRODUCTS - Anyone can ACCESS
// router.get("/", async (req, res) => {
//     try {
//         const products = await Product.find();
//         // if we do not get an id, returns ID not found(The product does not exist)
//         if (!products) { return res.status(204).json({ "message": `No Products found...` }); };
//         res.status(200).json(products);
//     } catch (err) {
//         console.log(err);
//     }
// });

// GET ALL QUERIED PRODUCTS -  Only Admin
router.get( "/", verifyTokenAndAdmin, async ( req, res ) => {
    const qNew = req.query.new;
    const qCategory = req.query.productCategory;
    const qProductUse = req.query.productUse;
    const qProductType = req.query.productType;
    const qTitle = req.query.title;

    try {
        let products;

        if ( qNew ) {
            products = await Product.find().sort( { createdAt: -1 } ).limit( 1 )
        } else if ( qCategory ) {
            products = await Product.find( {
                categories: {
                    $in: [qCategory],
                },
            } );
        } else if ( qProductUse ) {
            products = await Product.find( {
                productUse: {
                    $in: [qProductUse],
                },
            } );
        } else if ( qProductType ) {
            products = await Product.find( {
                productType: {
                    $in: [qProductType],
                },
            } );
        } else if ( qTitle ) {
            products = await Product.find( {
                title: {
                    $in: [qTitle],
                },
            } );
        } else {
            products = await Product.find();
        }
        // const product = query ? await Product.find().sort({ _id: -1 }).limit(5) : await Product.find();
        // // if we do not get an id, returns ID not found(The user does not exist)
        // if (!product) { return res.status(204).json({ "message": `No product found...` }); };
        res.status( 200 ).json( products );
    } catch ( err ) {
        console.log( err );
    }
} );

// // GET USER STATS
// router.get("/stats",  verifyTokenAndAdmin, async (req, res) => {
//     const date = new Date();
//     const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

//     try {
//         const data = await User.aggregate([
//             { $match: { createdAt: { $gte: lastYear } } },
//             {
//                 $project: {
//                     month: { $month: "$createdAt" },
//                 }
//             },
//             {
//                 $group: {
//                     _id: "$month",
//                     total: { $sum: 1 },
//                 }
//             }
//         ])
//         res.status(200).json(data);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// })

module.exports = router






