//javascript/JQuery
$(document).ready(function() {
    var randomNumber
    var userTotal = 0
    var crystals = {}
    var wins = 0
    var losses = 0


    //random number between 15-100 assigned to goal box
    function startGame() {
        function createGoalBox() {
            randomNumber = Math.floor(Math.random() * (100 - 21) + 20)
            $("#goal-display").html(randomNumber)
        }
        createGoalBox()
        console.log(randomNumber)
        //each crystal assigned a random number between 1-15
        function createCrystalNumbers() {
            for (i = 0; i < 4; i++) {
                crystals[i] = Math.floor(Math.random() * (15 - 2) + 1)
            }
        }
        createCrystalNumbers()
        userTotal = 0
        $("#total").text(userTotal)

    }
    // create crystals with assigned values
    function crystalDisplays() {
        $("#crystal-1").html('<img src="assets/images/shwiftyrick.jpg" height="150px" width="auto" alt="schwifty-rick">')
        $("#crystal-2").html('<img src="assets/images/tiny-rick-2.jpg" height="150px" width="auto" alt="tiny-rick">')
        $("#crystal-3").html('<img src="assets/images/handglide-rick.jpg" height="150px" width="auto" alt="handglide-rick">')
        $("#crystal-4").html('<img src="assets/images/pickle-rick.jpg" height="150px" width="auto" alt="pickle-rick">')
    }

    //Trying to refactor on click functions
    // function createCrystal() {
    //     for (var i = 0; i < 4; i++) {
    //         $("crystal-" + (i + 1))
    //             .on("click", function() {
    //                 userTotal = userTotal + crystals[i]
    //                 checker()
    //                 console.log(userTotal)
    //             })
    //     }
    // }
    // createCrystal()

    $("#crystal-1").on("click", function() {
        userTotal = userTotal + crystals[0]
        checker()
    })
    $("#crystal-2").on("click", function() {
        userTotal = userTotal + crystals[1]
        checker()
    })
    $("#crystal-3").on("click", function() {
        userTotal = userTotal + crystals[2]
        checker()
    })
    $("#crystal-4").on("click", function() {
        userTotal = userTotal + crystals[3]
        checker()
    })

    function checker() {
        $("#total").text(userTotal)
        if (userTotal === randomNumber) {
            wins++
            $("#wins").text(wins)
            startGame()
            $("#result-picture").html('<img src="assets/images/wub-rick.jpg" height="300px" width="auto" alt="wub-rick">')
            $("#myModal").modal("show")
        }
        if (userTotal > randomNumber) {
            losses++
            $("#losses").text(losses)
            startGame()
            $("#result-picture").html('<img src="assets/images/wrecked-rick3.jpg" height="300px" width="auto" alt="wrecked-rick"><b>RIGGETY RIGGETY WRECKED SON!</b>')
            $("#myModal").modal("show")
        }
    }
    crystalDisplays()
    startGame()
    console.log(crystals)
});
