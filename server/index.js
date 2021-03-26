const express = require("express");
var cors = require('cors')

const app = express();
app.use(cors())

app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

require("./controllers/homeController")(app);

app.listen(5000)
