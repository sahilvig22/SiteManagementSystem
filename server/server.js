const express = require('express')
const app = express()
const connectDB = require('./config/db')
var cors = require('cors')

//  Connect DB
connectDB();

// Init Middleware
app.use(express.json({ extended: false }))

app.use(cors())



app.get('/', (req, res) => (res.send('API Running')))

// Define Routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/site', require('./routes/api/site'))
app.use('/api/posts', require('./routes/api/posts'))


// if(process.env.NODE_ENV === 'production'){

// }


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))