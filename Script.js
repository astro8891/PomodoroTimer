$(function() {


    var decrementSessionLength = function() {
        var sessionTimeStringValue = $(".sessionTime")[0].firstChild.data;
        var sessionTimeIntValue = parseInt(sessionTimeStringValue);
        if (sessionTimeIntValue == 0) {
            return
        } else {
            $(".sessionTime")[0].firstChild.data = (sessionTimeIntValue - 1).toString();
        }
    }

    var incrementSessionLength = function() {
        var sessionTimeStringValue = $(".sessionTime")[0].firstChild.data;
        var sessionTimeIntValue = parseInt(sessionTimeStringValue);
        if (sessionTimeIntValue == 45) {
            return
        } else {
            $(".sessionTime")[0].firstChild.data = (sessionTimeIntValue + 1).toString();
        }
    }

    var decrementBreakLength = function() {
        var breakTimeStringValue = $(".breakTime")[0].firstChild.data;
        var breakTimeIntValue = parseInt(breakTimeStringValue);
        if (breakTimeIntValue == 0) {
            return
        } else {
            $(".breakTime")[0].firstChild.data = (breakTimeIntValue - 1).toString();
        }
    }

    var incrementBreakLength = function() {
        var breakTimeStringValue = $(".breakTime")[0].firstChild.data;
        var breakTimeIntValue = parseInt(breakTimeStringValue);
        if (breakTimeIntValue == 20) {
            return
        } else {
            $(".breakTime")[0].firstChild.data = (breakTimeIntValue + 1).toString();
        }
    }

    var changeActivity = function() {
        if ($(".btn")[0].firstChild.data == "Play") {
            setSessionTimerValue($(".btn")[0].firstChild.data)
            $(".btn")[0].firstChild.data = "Work";
        } else {
            setSessionTimerValue($(".btn")[0].firstChild.data)
            $(".btn")[0].firstChild.data = "Play";
        }
    }


    var setSessionTimerValue = function(choice) {
        if (choice == "Work") {
            $(".countdownTimer")[0].firstChild.data = $(".sessionTime")[0].firstChild.data;
        } else {
            $(".countdownTimer")[0].firstChild.data = $(".breakTime")[0].firstChild.data;
        }

    }

    // var startTimer = function() {

    //     var mins = 10;
    //     var secs = mins * 60;
    //     var currentSeconds = 0;
    //     var currentMinutes = 0;

    //     var counter = setInterval(timer, 1000);
    //     setTimeout(Decrement, 1000);

    //     function Decrement() {
    //         currentMinutes = Math.floor(secs / 60);
    //         currentSeconds = secs % 60;
    //         if (currentSeconds <= 9) currentSeconds = "0" + currentSeconds;
    //         secs--;
    //         document.getElementById("timerText").innerHTML = currentMinutes + ":" + currentSeconds; //Set the element id you need the time put into.
    //         if (secs !== -1) setTimeout('Decrement()', 1000);
    //     }


    //}


    $(".sessionNegative").click(decrementSessionLength);
    $(".sessionPositive").click(incrementSessionLength);
    $(".breakNegative").click(decrementBreakLength);
    $(".breakPositive").click(incrementBreakLength);
    $(".btn").click(changeActivity);

});
