var result = require("./joiSchema")

exports.verification=(req,res,next)=>{
var data=req.body
  var {error,value}=result.schema.validate(data)
  if(error)
  {
    res.status(400),
    res.send(error)
  }
  else{
    next()
  }
}


exports.data=(req,res,next)=>{
    var data=req.body
      var {error,value}=result.dataSchema.validate(data)
      if(error)
      {
        res.status(400),
        res.send(error)
      }
      else{
        next()
      }
    }

  






