const express= require("express")
const router= express()
const homeController= require("../controllers/homeController")

router.get("/",homeController.getHome)

router.post("/category",homeController.addCategory)
router.get("/category/:id",homeController.getItem)
router.post("/category/:id",homeController.addItem)
router.delete("/item/:id",homeController.deleteItem)
router.delete("/category/:id",homeController.deleteCategory)






module.exports=router