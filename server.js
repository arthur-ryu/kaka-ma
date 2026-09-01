const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let macroData = {
    status: "STOP",
    message: "example",
    targetIds: [
        "18462147816437470", "18435710783741674", "18458774875474514", "18471529502236847",
        "18473198006843036", "18473128421048980", "18481979146022729", "18446280798292011"
    ],
    delayMinutes: 22
};

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/data', (req, res) => {
    res.json(macroData);
});

app.post('/api/update', (req, res) => {
    const { message, targetIds, status, delayMinutes } = req.body;
    if (message !== undefined) macroData.message = message;
    if (targetIds !== undefined) macroData.targetIds = targetIds;
    if (status !== undefined) macroData.status = status;
    if (delayMinutes !== undefined) macroData.delayMinutes = Number(delayMinutes);

    res.json({ result: "success", data: macroData });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on (port: ${PORT})`);
});
