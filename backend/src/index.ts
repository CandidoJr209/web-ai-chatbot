import app from "./app.js"
import { connectToDatabase } from "./db/connection.js"

const DB_PORT = process.env.DB_PORT || 5000
connectToDatabase().then(() => {
    app.listen(DB_PORT, () => console.log("Server open and Connected to Database"))
}).catch((error) => {
    console.log(error)
})