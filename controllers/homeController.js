

const Category= require("../models/Category")
const item=require("../models/Item")
module.exports={

    getHome: async(request, response) =>{
        try {
            const categories = await Category.find().lean()
            response.render("index.ejs", { title: "Grocery Inventory App", categories: categories })
        }
        catch (err) {
            console.log(err)
        }
    
    },
    addCategory: async (request, response) =>{

        try {
            console.log(request.body.category)
            await Category.create({ name: request.body.category })
            response.redirect("/")
    
        }
        catch (err) {
            console.log(err)
        }

},
 getItem: async(request,response)=>{

    try{
        const reqCategoryId=request.params.id
       
        
        const items= await item.find({category:reqCategoryId}).lean()
        const categObj= await Category.find({_id:reqCategoryId}).lean()
        const categName= categObj[0].name
        response.render("item.ejs",{items:items,categorySearched:reqCategoryId,categName:categName})

    }
    catch(err){
       console.log(err)
    }

 },

 addItem: async(request,response)=>{
    try{
        
        await item.create({name:request.body.itemName,price:request.body.itemPrice,category:request.params.id})
        response.redirect(`/category/${request.params.id}`)

    }
    catch(err){
        console.log(err)
        
    }

 },
 deleteItem: async (request,response)=>{

  try{
    
     let itemToRemove=await item.findById({_id:request.params.id})
     await item.findOneAndDelete({_id:request.params.id})

     console.log("item Deleted")
  
     response.redirect(`/category/${itemToRemove.category}`)


  }
  catch(err){
    console.log(err)
  }

 },
 deleteCategory:async (request,response)=>{
    try{
      
        let itemsInCategoryRemoved= await item.find({category:request.params.id}).lean()
        for(let i=0;i<itemsInCategoryRemoved.length;i++){
            await item.findByIdAndDelete({_id:itemsInCategoryRemoved[i]._id})
        }
        await Category.findOneAndDelete({_id:request.params.id})
    
        console.log("Category Deleted")
     
        response.redirect("/")
    }
    catch(err){
        console.log(err)

    }
   

 }

}



