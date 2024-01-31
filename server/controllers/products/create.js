const { CreateProduct } = require('../../services/products/create')

module.exports = async (req, res) => {
    try {
        const { name, price, description, brandId } = req.body;

        const newProduct = await CreateProduct({
                name,
                price,
                description,
                brandId: brandId || null
            },{
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        });
           
        return res.status(200).json({
            ok: true,
            message: 'Producto creado',
            data: newProduct,
        });
    } catch (error) {
        console.error('Error en el controlador:', error.message);
        return res.status(500).json({ message: 'Error en el controller' });
    }
};
