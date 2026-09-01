const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let macroData = {
    status: "STOP",
    message: "[ 성욱 목숨건 영부퉆 출전 ]\n⬇️성욱 투표시 혜택지급⬇️\n━━━━━━━━━━━\n Named ∞ 3명\nGear5 잡초, Gear5 델타, Gear5 세터\nF1 Named Max 성욱 특보\n\n현방 1위 F1 & T1 은돌 후계자,\nT1 정월 일보, T1 정건 특보\n\nGear四 ' 불멸 & 엑소 ' 직후,\nF3 브쓰 특보, 백타 No.1 제자\n\nGear十 떠돌이상인 특보\nGear九 '기영&라자' 궁보/제자\n\nAbyss5 / GPT5 여명 일보\nAbyss5 / GPT 리브 특보\n𝗙𝟰_Gear五 리틀옥토\nFA_ Gear七 승훈프보\n\nhttps://open.kakao.com/o/gZjfbJvi",
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
    console.log(`🚀 서버 구동 완료 (포트: ${PORT})`);
});