const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());


// 6r9eJsC9S2cHReSW

const uri = "mongodb+srv://myUser:6r9eJsC9S2cHReSW@mycluster.j7lpubg.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
const newTask = {
    name: "mmh",
    title: 'my task'
}



async function run() {
    try {
        await client.connect();
        const taskCollection = client.db('taskManage').collection('myTasks');

        // get all data
        app.get('/task', async (req, res) => {
            const query = {};
            const cursor = taskCollection.find(query);
            const tasks = await cursor.toArray();
            res.send(tasks);
        });

        // get one
        // app.get('/user/:id', async(req, res) =>{
        //     const id = req.params.id;
        //     const query = {_id: ObjectId(id)};
        //     const result = await userCollection.findOne(query);
        //     res.send(result);
        // });

        // POST Tasks : add a new task
        app.post('/task', async(req, res) =>{
            const newTask = req.body;
            const result = await taskCollection.insertOne(newTask);
            res.send(result)
        });

        // update task
        app.put('/task/:id', async(req, res) =>{
            const id = req.params.id;
            const updateTask = req.body;
            const filter = {_id: ObjectId(id)};
            const options = { upsert: true };
            const updatedDoc = {
                $set: {
                    title: updateTask.title,
                    description: updateTask.description
                }
            };
            const result = await taskCollection.updateOne(filter, updatedDoc, options);
            res.send(result);

        })

        // // delete a user
        // app.delete('/user/:id', async(req, res) =>{
        //     const id = req.params.id;
        //     const query = {_id: ObjectId(id)};
        //     const result = await userCollection.deleteOne(query);
        //     res.send(result);
        // })

    }
    finally {

    }
}

run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Running My Node CRUD Server');
});

app.listen(port, () => {
    console.log('CRUD Server is running');
})