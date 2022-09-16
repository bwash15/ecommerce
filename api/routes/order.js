const { verfiyJWT, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require( "../middleware/verifyJWT" );
const Order = require( '../models/Order' );
const router = require( "express" ).Router();


// NEW ORDER
router.post( "/", verfiyJWT, async ( req, res ) => {
    const newOrder = new Order( req.body )
    try {
        const savedOrder = await newOrder.save();
        res.status( 200 ).json( savedOrder );
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
// UPDATE ORDER
router.put( "/:id", verifyTokenAndAdmin, async ( req, res ) => {

    try {
        const updatedOrder = await Order.findOne( { _id: req.params.id } ).exec();
        // if we do not get an id, returns ID not found(The User does not exist)
        if ( !prdct ) {
            return res.status( 204 ).json( { "message": `No Order Matches ID ${req.params.id}.` } );
        }
        console.log( "Order Found, checking for udpates" );
        // checking for the firstname and lastname to be submitted
        if ( req.body?.userId ) updatedOrder.userId = req.body.userId;
        console.log( updatedOrder.userId );
        if ( req.body?.products ) updatedOrder.products = req.body.products;
        console.log( updatedOrder.products );
        if ( req.body?.amount ) updatedOrder.amount = req.body.amount;
        console.log( updatedOrder.amount );
        if ( req.body?.address ) updatedOrder.address = req.body.address;
        console.log( updatedOrder.address );
        if ( req.body?.status ) updatedOrder.status = req.body.status;
        console.log( updatedOrder.status );


        const result = await updatedOrder.save();
        res.status( 200 ).json( result );
    } catch ( err ) {
        res.status( 500 ).json( err );
    }

} );

// DELETE ORDER
router.delete( "/:id", verifyTokenAndAdmin, async ( req, res ) => {

    try {
        if ( !req?.params?.id ) return res.status( 400 ).json( { 'message': 'Order ID required' } );

        const order = await Order.findOne( { _id: req.params.id } ).exec();
        // if we do not get an id, returns ID not found(The Order does not exist)
        if ( !order ) {
            return res.status( 204 ).json( { "message": `Order ID not found: ${req.params.id}.` } );
        }

        await Order.deleteOne( { _id: req.body.id } );
        res.status( 200 ).json( "Order has been deleted..." );

    } catch ( err ) {
        console.log( err );
    }
} );

// GET USER ORDER -  Anyone can ACCESS
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

router.get( "/", verifyTokenAndAuthorization, async ( req, res ) => {
    try {
        const orders = await Order.find();
        res.status( 200 ).json( orders );
    } catch ( err ) {
        res.status( 500 ).json( err );
    }
} )

// GET ALL CARTS - Only Admin can ACCESS
{/** Uses Pagination to limit the number of returned values in one Request **/ }
router.get( "/", verifyTokenAndAdmin, async ( req, res ) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const orders = await Order.find();
        // const orders = await Order.find().skip((page - 1) * limit).limit(limit);
        // const [orders, count] = await Promise.all([
        //     Order.find().skip((page - 1) + limit).limit(limit),
        //     Order.count(),
        // ]);
        // if we do not get an id, returns ID not found(The order does not exist)
        if ( !orders ) { return res.status( 204 ).json( { "message": `No Orders found...` } ); };
        res.status( 200 ).json( orders );
    } catch ( err ) {
        console.log( err );
    }
} );

// // GET ALL QUERIED PRODUCTS -  Only Admin
// router.get("/",  verifyTokenAndAdmin, async (req, res) => {
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

// GET MONTHLY ORDER INCOME STATS
router.get( "/income", verifyTokenAndAdmin, async ( req, res ) => {
    const date = new Date();
    const lastMonth = new Date( date.setMonth( date.getMonth() - 1 ) );
    const previousMonth = new Date( new Date().setMonth( lastMonth.getMonth() - 1 ) );

    try {
        const income = await Order.aggregate( [
            { $match: { createdAt: { $gte: previousMonth } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount",
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" },
                },
            },
        ] );
        res.status( 200 ).json( income );
    } catch ( err ) {
        res.status( 500 ).json( err );
    }
} );

module.exports = router









