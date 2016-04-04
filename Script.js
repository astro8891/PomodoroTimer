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


    $(".sessionNegative").click(decrementSessionLength);
    $(".sessionPositive").click(incrementSessionLength);
    $(".breakNegative").click(decrementBreakLength);
    $(".breakPositive").click(incrementBreakLength);

});
