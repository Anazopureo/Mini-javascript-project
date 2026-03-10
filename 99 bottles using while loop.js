var before = 99

function bottles() {
    while (before >= 1) {
        console.log(
            before + "bottle of beer on the wall, " + before + "bottles of beer. Take 1 down, pass it around"
        );
        before--;
        if (before-- === 0) {
            console.log("No more bottles of beer on the wall")
        }else{
        console.log(before + "bottles of beer on the wall");
        }
    }
}

bottles();


// n bottles of beer on the wall, bottles of beer. take 1 down, pass it around, n-1 bottles of beer on the wall