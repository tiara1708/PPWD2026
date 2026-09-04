<?php
$nama = "Website Pribadi";
$lengkap = "TIARA MARITZA SARANI";
$deskripsi = "Mahasiswa Sistem Informasi";
?>

<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $lengkap; ?></title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

<div class="website">

    <div class="hero">

        <nav>
            <a href="#">☰</a>

            <div class="menu">
                <a href="#tentang">Tentang</a>
                <a href="#hobi">Hobi</a>
                <b><?php echo $nama; ?></b>
                <a href="#jadwal">Jadwal</a>
                <a href="#kontak">Kontak</a>
            </div>

            <a href="#">♡</a>
        </nav>

    </div>

    <div class="content">

        <h1><?php echo $nama; ?></h1>

        <h2><?php echo $lengkap; ?></h2>

        <p class="deskripsi">
            <?php echo $deskripsi; ?>
        </p>

        <p class="deskripsi">
            Saya tertarik mempelajari desain dan pengembangan website.
        </p>

    </div>

</div>

</body>
</html>