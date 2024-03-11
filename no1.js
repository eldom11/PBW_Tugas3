var fibonacci = function (n) {
    if (n==1) {
        var pertama = [0];
        document.getElementById("output").innerHTML = pertama;
        return pertama;
    } 
    if (n==2) {
        var kedua = [0,1];
        document.getElementById("output").innerHTML = kedua;
        return kedua;
    } 
    else {
        var sisa = fibonacci (n - 1);
        sisa.push(sisa[sisa.length - 1] + sisa[sisa.length - 2]);
        document.getElementById("output").innerHTML =sisa;
        return sisa;
    }

};