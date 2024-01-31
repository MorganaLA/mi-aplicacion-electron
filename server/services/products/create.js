const db = require('../../database/models')

const CreateProduct = async (data) => {
    try {
        
        const {name,price,description,brandId} = data
       
        const newProduct = await db.Product.create({
            name,
                price,
                description,
                brandId: brandId || null
            },{
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        });
       
        return newProduct
    } catch (error) {
        console.log(error);
        throw {
            status : error.status || 500,
            message : error.message || 'ERROR en el Servicio'
        }
    }
}


module.exports = {
    CreateProduct
}