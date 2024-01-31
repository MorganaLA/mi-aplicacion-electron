const db = require('../../database/models')

const updateProduct = async (id, data) => {
    try {
        const { name, price, description, brandId } = data;

        // Encuentra el producto por su ID para saber si existe y te ofrece el modelo completo
        const existingProduct = await db.Product.findByPk(id,{
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
        });

        if (!existingProduct) {
            return null
        }

        // Actualiza las propiedades del producto
        const updatedProduct = await existingProduct.update({
            
            name: name?.trim() || existingProduct.name,
            price: +price || existingProduct.price,
            description: description?.trim() || existingProduct.description,
            brandId: +brandId || existingProduct.brandId,
        });

        return updatedProduct;
    } catch (error) {
        console.log(error);
        throw {
            status : error.status || 500,
            message : error.message || 'ERROR en el Servicio'
        }
    }
};

module.exports = {
    updateProduct
}