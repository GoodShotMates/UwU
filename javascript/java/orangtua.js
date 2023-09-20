
document.getElementById("submitOrtu").onclick = function () {

    let siswa = document.getElementById("inputOrtu").value;

    if (document.getElementById("checkAyah").checked) {

        switch(siswa) {
            case "Alfian":
                document.getElementById("namaOrtu").innerHTML = "Wondo";
                break;
            case "Akhdan":
                document.getElementById("namaOrtu").innerHTML = "Eko";
                break;
            case "Suryo":
                document.getElementById("namaOrtu").innerHTML = "Budi";
                break;
            case "Soeryo":
                document.getElementById("namaOrtu").innerHTML = "Budi";
                break;
            case "Abqary":
                document.getElementById("namaOrtu").innerHTML = "Iman";
                break;
            case "Rijal":
                document.getElementById("namaOrtu").innerHTML = "Yanti";
                break;
            case "Syafiq":
                document.getElementById("namaOrtu").innerHTML = "Yanto";
                break;
            case "Luthfi":
                document.getElementById("namaOrtu").innerHTML = "Freddy Fazbear";
                break;
            case "Ehsan":
                document.getElementById("namaOrtu").innerHTML = "Fuji";
                break;
                default:
                    document.getElementById("namaOrtu").innerHTML = "Tidak ketemu.";
        }
    }
    
    if (document.getElementById("checkIbu").checked) {

        switch(siswa) {
            case "Alfian":
                document.getElementById("namaOrtu").innerHTML = "Wati";
                break;
            case "Abqary":
                document.getElementById("namaOrtu").innerHTML = "Yuli";
                break;
            case "Yafiq":
                document.getElementById("namaOrtu").innerHTML = "Tari";
                break;
            case "Suryo":
                document.getElementById("namaOrtu").innerHTML = "Inna";
                break;
        }
    }

}

