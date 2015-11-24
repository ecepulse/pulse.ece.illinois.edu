var lock = 0;

function hackertyper() {
    if (lock == 1)
        return;
   
    lock = 1;
    var endings = ["_life", 
                     "_kitchen", 
                     "_roads", 
                     "_school", 
                     "_business", 
                     "_world", 
                     "_work"];
    
    var hacker = $('#hackertyper');
    var newRand = hacker.html();
    
    while (newRand === hacker.html()) newRand = endings[Math.floor(Math.random() * endings.length)];
    
    var cache = hacker.html().length;
    var i = 0;
    var addCallbackId, removeCallbackId;
    
    var removeCallback = function() {
        
        if (i >= cache) {
            clearInterval(removeCallbackId);
            i = 0;
            addCallbackId = setInterval(addCallback, 200);
        }
        for (; i < cache; i++) {
            hacker.html(hacker.html().substr(0, hacker.html().length - 1));
            i++;
            return;
        }
    }

    removeCallbackId = setInterval(removeCallback, 200);
    
    var addCallback = function() {
        if (i >= newRand.length) {
            clearInterval(addCallbackId);
            lock = 0;
        }
        for (; i < newRand.length; i++) {
            hacker.html(hacker.html() + newRand[i]);
            i++;
            return;
        }
    }
}

$(document).ready(function () {
    var interval = setInterval(hackertyper, 5000);
});
