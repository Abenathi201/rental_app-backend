const { express, routes } = require('./controllers');
const bodyParser = require('body-parser');
const cors = require('cors');

// Database connection
const db = require('./config/database');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Use the routes
app.use(routes);

// Running the server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});