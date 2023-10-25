const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000
// middleware
app.use(cors())
app.use(express.json())

const { MongoClient, ServerApiVersion } = require('mongodb');


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ekpsx.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const serviceCollection = client.db("appointment").collection("available_times");
        const bookingCollection = client.db("appointment").collection("booking");

        /**
         * API Naming Convention
         * app.get('/booking') get all booking in this collection. or get more one or by filtering
         * app.get('/booking/:id') get a specific booking
         * app.post('/booking') add new booking
         * app.patch('/booking/:id') update
         * app.delete('/booking/:id') delete
        */
        // api get
        app.get('/services', async (req, res) => {
            const query = {};
            const cursor = serviceCollection.find(query);
            const services = await cursor.toArray();
            res.send(services);
        })

        // This is not the proper way to query
        // after learning more about mongodb. use aggregate lookup ....
        app.get('/available', async (req, res) => {
            const date = req.query.date;

            // step 1: get all service
            const services = await serviceCollection.find().toArray();

            // step 2: get all services
            const query = { date: date };

            const bookings = await bookingCollection.find(query).toArray();

            // step 3: for each service, find bookings for that service
            services.forEach(service=>{

                // step 4: find booking for that service
                const serviceBookings = bookings.filter(book=> book.treatment === service.name);

                //step 5: select slots for the service Bookings
                const bookedSlots = serviceBookings.map(book=> book.slot)

                //step 6: select those slots that are not in booked
                const available = service.slots.filter(slot=> !bookedSlots.includes(slot))
                
                //step 7: set available to slots to make it easier
                service.slots = available;
            })
            // services.forEach(service => {
            //     const serviceBookings = bookings.filter(b => b.treatment === service.name);
            //     const booked = serviceBookings.map(s => s.slot);
            //     const available = service.slot.filter(s => !booked.includes(s))

            //     service.available = available;
            //     // service.booked = serviceBookings.map(s => s.slot);
            // })
            res.send(services)
        })
        // api post 
        app.post('/booking', async (req, res) => {
            const booking = req.body;
            const query = { treatment: booking.treatment, date: booking.date, patient: booking.patient }
            const exists = await bookingCollection.findOne(query);
            if (exists) {
                return res.send({ success: false, booking: exists })
            }
            const result = await bookingCollection.insertOne(booking);
            return res.send({ success: true, result })
        })


    } finally { }
}
run().catch(console.dir)

// Check in the browser http://localhost:5000
app.get('/', (req, res) => {
    res.send('doctor portal running')
})
// check in the terminal "nodemon index.js"
app.listen(port, () => {
    console.log(`doctor uncle running ${port}`)
})