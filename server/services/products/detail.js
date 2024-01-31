const db = require('../../database/models')

const getProductById = async (id) => {
    try {
        if (!id) {
            throw {
                status : 400,
                message : 'ID no existe'
            }
        }

        const product = await db.Product.findByPk(id,{
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
        })

        if (!product) {
            throw {
                status : 400,
                message : 'No hay producto con este ID'
            }
        }

        return product

    } catch (error) {
        console.log(error);
        throw {
            status : error.status || 500,
            message : error.message || 'ERROR Servicio'
        }
    }
}

module.exports = {
    getProductById
}