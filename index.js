const Joi= require("joi") ;
const schema=Joi.object({
    fullName:Joi.string().min(5).max(20),
    firstName:Joi.string().min(5).max(20),
    lastName:Joi.string().min(2).max(20),
    card:Joi.string().creditCard(),
    gender:Joi.boolean().valid('M','F'),
    type:Joi.string().valid("student","teacher"),
    age:Joi.when('type',{
        is:"student",
        then:Joi.number().min(20).max(30),
        otherwise:Joi.number().min(35).max(60),
    })
    

})
.xor("fullName","firstName")
.and("firstName","lastName")
.with("gender","card");

const payload={
    // fullName:"kiran uravakonda",
    firstName:"kiran",
    lastName:"uravakonda",
    type:"teacher",
    age:40,
    card:"1234 1234 1234 1234",
    gender:'M'
    
};

const { error, value } = schema.validate(payload);
if(error)
{
    console.log(error.message);
} else console.log(value);






