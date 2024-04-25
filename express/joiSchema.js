var Joi=require('joi');
var schema=Joi.object({
    name:Joi.string().min(4).max(20).required(),
    age:Joi.number().max(85).required()
})

var dataSchema=Joi.object({
    address:Joi.string().min(4).max(20).required(),
    number:Joi.number().min(10).required()
})

module.exports={
    schema,dataSchema
}