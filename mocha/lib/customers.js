var Customer = function(){

  var mongoose = require('mongoose');
  var Schema = require('mongoose').Schema;

  //bummer - have to declare this up-front
  var customerSchema = new Schema({
    id    : Number,
    email : {type : String, index: { unique: true, required : true } },
    first : String,
    last  : String,
    crypted_password :String,
    auth_token : String, 
    invoices : [{type: Schema.ObjectId, ref : 'Invoice'}]
  });

  //the model uses the schema declaration
  var _model = mongoose.model('customers', customerSchema);
  var _findByEmail = function(email, success, fail){
    _model.findOne({email:email}, function(e, doc){
      if(e){
        fail(e)
      }else{
        success(doc);
      }
    })
  }
  return {
    schema : customerSchema,
    model : _model,
    findByEmail : _findByEmail,
  }
}();
module.exports = Customer;