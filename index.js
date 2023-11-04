const express = require('express');
const device = require('express-device');

const app = express();
const port = 3000;

app.use(device.capture());

app.get('/', (req, res) => {
    console.log(req.device);
    res.send(`Device: ${req.device.type}`)
});

app.listen(port, () => console.log(`Server on port ${port}`));