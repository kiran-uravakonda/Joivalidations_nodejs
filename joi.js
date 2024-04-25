const Joi= require("joi") ;
const schema=Joi.object({
    name:Joi.string().required().min(3).max(20),
    age:Joi.number().required().min(1).max(85),
    userName:Joi.string().alphanum().required(),
    password:Joi.string().regex(new RegExp('^[A-Za-z0-9]{7,30}$')).required(),
    email:Joi.string().email().required(),
});

const payload={
    name:"kiran",
    age:23,
    userName:"laptop123",
    password:"Pa756ss",
    email:"kiran@gmail.in"
};

const { error, value } = schema.validate(payload);
if(error)
{
    console.log(error.message);
} else console.log(value);






