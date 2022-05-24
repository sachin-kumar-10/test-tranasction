const bodyParser = require('body-parser')
const express = require('express')
const transactionController = require('./controllers/transaction')


const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/admin/transaction', transactionController.getTransaction)

app.listen(process.env.PORT || 3000 , () => {
    console.log("Server running on port ", (process.env.PORT || 3000))
})