const { updateProduct } = require('../../services/products/update')

module.exports = async (req, res) => {
    try {
        const { name, price, description, brandId } = req.body;

        // Llama a la función del servicio para actualizar el producto
        const updatedProduct = await updateProduct(req.params.id, {
            name,
            price,
            description,
            brandId,
        });

        // Muestra el mensaje al no encontrar un producto
        if (updatedProduct === null) {
            return res.status(404).json({
                ok: false,
                message: 'Producto no encontrado',
            });
        }

        return res.status(200).json({
            ok: true,
            message: 'Producto actualizado',
            data: updatedProduct,
        });
    } catch (error) {
        console.error('Error en el controlador:', error.message);
        return res.status(500).json({ message: 'Error en el controller' });
    }
};