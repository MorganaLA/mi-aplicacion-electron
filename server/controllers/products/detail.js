const { getProductById } = require('../../services/products/detail')

module.exports = async (req, res) => {
    try {
        const product = await getProductById(req.params.id)
        
        return res.status(200).json({
            ok : true,
            data : product
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