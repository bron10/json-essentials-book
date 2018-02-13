const models = require('./models');

module.exports = [{
    method: 'GET',
    path:'/greetings', 
    handler(request, h) {
    	return "hello readers";
    }
}, {
    method: 'POST',
    path:'/customer/add', 
    handler(request, h) {
        const requestBody   = request.payload;
        const self = this;

    	/**
        * //Native mongodb code 
        * const dbInstance 	= request.dbInstance;
        * const customerCollection = dbInstance.collection('customer');
        * return customerCollection.insert(requestBody)
        **/
        const customersModel = models.customers;
        //const customersModel = new models.customers(requestBody);
        const customersModelInstance = new customersModel();
        console.log("customersModel", customersModel)
        async function dat(){
            
            try{
                 //await customersModelInstance.save();
                 const customerList = await customersModel.find({});
                 console.log("customerList", customerList);
                 return {
                        message : "customer added successfully",
                        customerList
                    };

            }catch(e){
                console.log("errorr==>", e);
                throw e;
            }
        }
        return dat();
        //h.response({"data": "asda"});
        
        //return data;
        // data.then((v)=>{

        // })
        console.log("customersModel.save", data)
        // return customersModel.save(function(err, data){
        //     console.log("save err, data", err, data);
        //     return data;
        // })

        //console.log("promise", JSON.strin(promise));
        // return customersModel.save()
        // .then(function(data){
        //     console.log("customer", data);
        //     return Promise.resolve(data);
        // })
        // .catch(function(error){
        //     return Promise.resolve(error);
        //     console.log("error", error.stack);
        // })
        // console.log("Promise", Promise);
        // console.log("promise", promise);
        //return Promise.resolve({"foo": "bar"});
        // .finally(function(){

        // })
        //console.log("customersModel", customersModel.save)
        // return customersModel.save()
        // .then(function(insertedStatus){
        //     console.log("insertedStatus", insertedStatus);
        //     // return customersModel.find({})
        //     // //.toArray()
        //     // .then((customerList)=>{
        //     //     return {
        //     //         message : "customer added successfully",
        //     //         customerList
        //     //     }
        //     // })
        // })
        // .catch((errorData)=>{
        //     console.log("errorData", errorData.stack);
        //     let err = new Error();
        //     if(errorData.name == 'ValidationError'){
                
        //         err.message =  errorData.message
        //         err.statusCode = 422;
        //         err.code = 422;
        //         err.error = errorData.name;
                
        //     }
        //     console.log("err==", err);
        //     return err;
        // })

    	
    }
}]

