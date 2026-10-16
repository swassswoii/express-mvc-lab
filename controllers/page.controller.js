exports.getBeranda = (req, res) => {
    res.render('pages/home', {
        title: 'Beranda Praktikum Express',
        userName: 'Administrator TI',
        fiturList: ['Arsitektur MVC', 'Template EJS', 'Modular Router']
    });
};

exports.getKatalog = (req, res) => {
    res.render('pages/katalog', {
        title: 'Katalog Produk',
        produk: [
            { nama: 'Buku Pemrograman', harga: 50000 },
            { nama: 'Mouse Wireless', harga: 75000 },
            { nama: 'Keyboard', harga: 100000 }
        ]
    });
};

exports.postTambahProduk = (req, res) => {
    console.log('\n[BACK-END] Menerima Payload POST:');
    console.log(req.body);
    res.redirect('/katalog');
};