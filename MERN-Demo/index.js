import express from 'express';
import mongoose from 'mongoose';
import routes from './src/routes/demoRoutes';

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//app setup
const app = express();
const PORT = 5556;

//parser setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/', (req, res) => {
    res.send(`Node and express server running on port ${PORT}`)
});

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`)
});

routes(app);