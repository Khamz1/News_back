const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

app.use(require('./routes/categories.routes'))
app.use(require('./routes/news.routes'))
app.use(require('./routes/comments.routes'))

mongoose.connect('mongodb+srv://khamzzaty:intocode@cluster0.hawdzkl.mongodb.net/News', {

}).then(() => console.log('Успешно соединились с сервером MongoDB'))
    .catch(() => console.log('Ошибка при соединении с сервером MongoDB'));

app.listen(4001, () => {
    console.log("server go on")
})