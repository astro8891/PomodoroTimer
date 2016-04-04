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




    var workTime = $(".countdownTimer")[0].firstChild.data;


    function startClock(duration, display) {
        var timer = duration,
            minutes, seconds;
        setInterval(function() {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.text(minutes + ":" + seconds);

            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }

    $(function($) {
        var workTimeLeft = 60 * workTime,
            display = $(".work-time-display");
        startClock(workTimeLeft, display);
    });







    $(".sessionNegative").click(decrementSessionLength);
    $(".sessionPositive").click(incrementSessionLength);
    $(".breakNegative").click(decrementBreakLength);
    $(".breakPositive").click(incrementBreakLength);
    $(".btn").click(changeActivity);

});
