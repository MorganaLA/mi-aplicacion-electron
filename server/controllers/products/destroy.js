const { deleteProduct } = require('../../services/products/delete')

module.exports = async (req, res) => {
    try {
        const id = req.params.id;

        const result = await deleteProduct (id);

         return res.status(200).json({
            ok: true,
            message: 'Producto eliminado',
            data: result,
        });
    } catch (error) {
        console.log(error)
        return res.status(error.status || 500).json({
            ok : false,
            status : error.status || 500,
            error : error.message || 'ERROR en el controller'
        })
    }
};