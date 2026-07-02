const express = require('express');
const app = express();
const routes = require('./routes/index');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});