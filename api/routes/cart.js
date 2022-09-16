const { verfiyJWT, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require( "../middleware/verifyJWT" );
const Cart = require( '../models/Cart' );
const router = require( "express" ).Router();


// NEW PRODUCT
router.post( "/", verfiyJWT, async ( req, res ) => {
    const newCart = new Cart( req.body )
    try {
        const savedCart = await newCart.save();
        res.status( 200 ).json( savedCart );
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
router.put( "/:id", verifyTokenAndAuthorization, async ( req, res ) => {

    try {
        const updatedCart = await Cart.findOne( { _id: req.params.id } ).exec();
        // if we do not get an id, returns ID not found(The User does not exist)
        if ( !prdct ) {
            return res.status( 204 ).json( { "message": `No Cart Matches ID ${req.params.id}.` } );
        }
        console.log( "Cart Found, checking for udpates" );
        // checking for the firstname and lastname to be submitted
        if ( req.body?.userId ) updatedCart.userId = req.body.userId;
        console.log( updatedCart.userId );
        if ( req.body?.products ) updatedCart.products.productId = req.body.products.productId;
        console.log( updatedCart.products.productId );
        if ( req.body?.products ) updatedCart.products.quantity = req.body.products.quantity;
        console.log( updatedCart.products.quantity );


        const result = await updatedCart.save();
        res.status( 200 ).json( result );
    } catch ( err ) {
        res.status( 500 ).json( err );
    }

} );

// DELETE PRODUCT
router.delete( "/:id", verifyTokenAndAuthorization, async ( req, res ) => {

    try {
        if ( !req?.params?.id ) return res.status( 400 ).json( { 'message': 'User ID required' } );

        const cart = await Cart.findOne( { _id: req.params.id } ).exec();
        // if we do not get an id, returns ID not found(The Cart does not exist)
        if ( !cart ) {
            return res.status( 204 ).json( { "message": `Cart ID not found: ${req.params.id}.` } );
        }

        await Cart.deleteOne( { _id: req.body.id } );
        res.status( 200 ).json( "Cart has been deleted..." );

    } catch ( err ) {
        console.log( err );
    }
} );

// GET USER CART -  Anyone can ACCESS
router.get( "/find/:userId", verifyTokenAndAuthorization, async ( req, res ) => {

    try {
        if ( !req?.params?.id ) return res.status( 400 ).json( { 'message': 'Product ID required.' } );
        const cart = await Cart.findOne( { _id: req.params.id } ).exec();
        // if we do not get an id, returns ID not found(The user does not exist)
        if ( !cart ) {
            return res.status( 204 ).json( { "message": `No Cart Matches ID ${req.params.id}.` } );
        }
        res.status( 200 ).json( cart );
    } catch ( err ) {
        console.log( err );
    };
} );

router.get( "/", verifyTokenAndAdmin, async ( req, res ) => {
    try {
        const carts = await Cart.find();
        res.status( 200 ).json( carts );
    } catch ( err ) {
        res.status( 500 ).json( err );
    }
} )

// // // GET ALL CARTS - Anyone can ACCESS
// // router.get("/", async (req, res) => {
// //     try {
// //         const products = await Product.find();
// //         // if we do not get an id, returns ID not found(The product does not exist)
// //         if (!croducts) { return res.status(204).json({ "message": `No Products found...` }); };
// //         res.status(200).json(products);
// //     } catch (err) {
// //         console.log(err);
// //     }
// // });

// // GET ALL QUERIED PRODUCTS -  Only Admin
// router.get("/",   verifyTokenAndAdmin, async (req, res) => {
//     const qNew = req.query.new;
//     const qCategory = req.query.productCategory;
//     const qProductUse = req.query.productUse;
//     const qProductType = req.query.productType;
//     const qTitle = req.query.title;

//     try {
//         let products;

//         if (qNew) {
//             products = await Product.find().sort({ createdAt: -1 }).limit(1)
//         } else if (qCategory) {
//             products = await Product.find({
//                 categories: {
//                     $in: [qCategory],
//                 },
//             });
//         } else if (qProductUse) {
//             products = await Product.find({
//                 productUse: {
//                     $in: [qProductUse],
//                 },
//             });
//         } else if (qProductType) {
//             products = await Product.find({
//                 productType: {
//                     $in: [qProductType],
//                 },
//             });
//         } else if (qTitle) {
//             products = await Product.find({
//                 title: {
//                     $in: [qTitle],
//                 },
//             });
//         } else {
//             products = await Product.find();
//         }
//         // const product = query ? await Product.find().sort({ _id: -1 }).limit(5) : await Product.find();
//         // // if we do not get an id, returns ID not found(The user does not exist)
//         // if (!product) { return res.status(204).json({ "message": `No product found...` }); };
//         res.status(200).json(products);
//     } catch (err) {
//         console.log(err);
//     }
// });

// // GET USER STATS
// router.get("/stats",   verifyTokenAndAdmin, async (req, res) => {
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







