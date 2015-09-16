requirejs(["helper/customTags"], function(util) {
    main();
});

function loadSplash() {
    configureSplash();
}

function configureSplash()
{
    // Get the landing page of the site
    var landing = $('.landing');
    var percentage = $(landing).attr('data-max');
    var maxHeight = $(landing).attr('data-max-pixels');
    
    var imageDimensions = {
        width: $(landing).attr('data-og-width'),
        height: $(landing).attr('data-og-height')
    };
    
    var LOWER_PADDING = 40;

    var statusBarFollow = function() {
    };
    
    // For resizing the status bar
    var headerResize = function() {
        
        // Do calculations to make sure it doesn't grow past x percentage
        var aspectRatio = Number(imageDimensions.height)/Number(imageDimensions.width);
        
        var windowHeight = $(window).height();
        var windowWidth = $(window).width();

        dimensionalHeight = windowWidth * aspectRatio;
        dimensionalHeight = dimensionalHeight - LOWER_PADDING > windowHeight ? windowHeight - LOWER_PADDING > maxHeight ? maxHeight : windowHeight - LOWER_PADDING: dimensionalHeight - LOWER_PADDING > maxHeight ? maxHeight : dimensionalHeight - LOWER_PADDING;
        $($('.landing')[0]).height(dimensionalHeight);
    };
    
    $(window).on("resize", headerResize);
    $(window).on("scroll", statusBarFollow);
    
    // Initialize the page
    $(window).trigger("resize");
    

}

function main() {
    configureCustomTags();
    
    pathname = window.location.pathname;
    
    if (pathname.indexOf("schedule") != -1) {
        loadSchedule();
    } else if (pathname.indexOf("workshops") != -1) {
        loadWorkshops();
    } else if (pathname.indexOf("aboutus") != -1) {
        loadAboutUs();
    } else {
        loadSplash();
    }

}
