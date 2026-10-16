const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', require('./routes/page.routes'));

app.use((req, res) => {
    res.status(404).send('<h1>Error 404</h1><p>Halaman tidak ditemukan.</p>');
});

app.listen(PORT, () => {
    console.log(`[SERVER] Aktif di http://localhost:${PORT}`);
});
