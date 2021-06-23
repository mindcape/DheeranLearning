for (var x = 0; x < 10; x++) {
    //For odd numbers this will become true
    if (x % 2 != 0) {
        var stars = "";
        for (var y = 0; y < x; y++) {
            stars = stars + "*";
        }
        console.log(stars);
    }
}