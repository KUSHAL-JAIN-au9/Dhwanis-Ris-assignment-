import express from 'express'
import cors from 'cors'
import mongodb from 'mongodb'
const port = process.env.PORT || 5000;

const url = `mongodb+srv://kushal:963255@cluster.s0g6s.mongodb.net`

let app = express()

let db

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

    let mongoClient = new mongodb.MongoClient(url,{ useUnifiedTopology: true });
    mongoClient.connect((err) => {
        if(err) throw err;
        db = mongoClient.db('BradEcommerce')
    });

    app.get('/health',(req,res) => {
        res.send("Health Ok")
    })


    app.get('/allUsers',(req,res) => {

        db.collection('users').find().toArray((err,data)=>{
            return res.send(data)
            // res.json( data  )
        })
    });



    app.listen(port,(err) => {
        if(err) throw err;
        console.log(`App is running on port ${port}`)
    })