function formatSplash()
{
    var landings = $('.landing');
    for (var i = 0; i < landings.length; i++) {
        
        var vertical = $(landings[i]).attr('vertical');
        $(landings[i]).css({
            "max-height": vertical
        });
    }
}

formatSplash();