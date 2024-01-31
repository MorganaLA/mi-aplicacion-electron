const db = require('../../database/models')

const getAllProducts = async () => {
    try {
        const products = await db.Product.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
        })
        return products
    } catch (error) {
        console.log(error);
        throw {
            status : error.status || 500,
            message : error.message || 'ERROR en el Servicio'
        }
    }
}

module.exports = {
    getAllProducts
}