exports.index = (req, res) => {
    res.render('pages/home');
};

exports.kirim = (req, res) => {
    console.log('[POST BODY]', req.body);
    res.send('Data formulir berhasil diterima. Periksa terminal server.');
};