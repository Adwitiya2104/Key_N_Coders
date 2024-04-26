import dotenv from "dotenv"
import connectDB from "./db/index.js"

import { app } from "./app.js"

dotenv.config({
    path:'./env'
})

//once database connection set we connect to our app
connectDB()
.then(()=>{
    app.on("error",error=>{
        console.log('Application Not able to talk to the Dtabase',error)
        throw error;
    })
    app.listen(process.env.PORT || 8080, ()=>{
        console.log(`Server running on port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log('MongoDb connection Failed')
})



