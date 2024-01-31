const { getAllProducts } = require('../../services/products/all')

module.exports = async (req,res) => {
    try {
        const products = await getAllProducts(req.params.id)

          return res.status(200).json({
            ok : true,
            data : products
            })
        
    } catch (error) {
        console.log(error)
        return res.status(error.status || 500).json({
            ok : false,
            status : error.status || 500,
            error : error.message || 'ERROR en el controller'
        })
    }
}
