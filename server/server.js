const path = require('path');
const express = require('express');

const app = express();

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// app.get('/', (req, res) => {
//   res.render('index.html');
// });

app.listen(3000, () => console.log(`Server started on port ${port}...`))