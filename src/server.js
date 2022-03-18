const app = require('./app');

app.listen(process.env.DB_PORT || 3000);
