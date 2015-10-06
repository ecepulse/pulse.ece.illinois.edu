var ecePulse2016 = angular.module("ECEPulse2016", []);

function navbar_scroll(e) {
    var landing = $('.landing');

    var navbar_item = $('.navbar_item');
    var trueHeight = $('.navbar').outerHeight() + 20;
    var about = $('.about');
    var width = 0;
    var screenWidth = $(window).width();

    for (var i = 0; i < navbar_item.length; i++) {
        width += $(navbar_item[i]).width() + 20;
    }

    if ($(window).scrollTop() >= landing.height()) {
//            about.css('margin-top', $('.navbar').height());
        $('.navbar').css('position', 'fixed');
        $('.navbar').css('top', '0'); 
        $('.landing').css('margin-bottom', trueHeight + 'px');
        
//            $('.navbar').css('left', screenWidth/2 - width/2 + 14 + 'px');
    } else {
        $('.navbar').css('position', 'initial');
        $('.navbar').css('top', '0');
        $('.navbar').css('transform', '');
        $('.landing').css('margin-bottom', '0' + 'px');
        
    }
}

function center_navbar() {
    var navbar_item = $('.navbar_item');
    var width = 0;
    var screenWidth = $(window).width();

    for (var i = 0; i < navbar_item.length; i++) {
        width += $(navbar_item[i]).outerWidth();
    }

    var marginLeft = screenWidth/2 - width/2;

    $('.navbar_wrapper').css("margin-left", marginLeft);
}

function fixLandingVerticalPercentage() {
    var label = $('.label');
    var landing = $('.landing');
    var percentage = label.attr('data-verticalPercentage');

    landing.css('height', percentage);
}

ecePulse2016.controller('splashPage', ['$scope', '$location', '$anchorScroll', '$window', function ($scope, $location, $anchorScroll, $window) {
    "use strict"; // To detect any coding errors
    
    $scope.navbarActive = "Schedule";
    
    $scope.header = {
        "header": "ECE PULSE 2016",
        "caption": "The heartbeat of innovation",
        "verticalPercentage": "90%",
        "background-image": "/main/assets/header_backgrounds/splash.jpg",
    };

    $scope.infoCards = [
        [{
            "title": "Speakers.",
            "info": "ECE Pulse will have speakers."
    }, {
            "title": "Competitions.",
            "info": "Compete in various ECE related topics spanning from Signal Processing, Software, and many more.  Show off your knowledge and skills in ECE-related fields while having fun and winning prizes",
    }, {
            "title": "Workshops.",
            "info": "Learn something new with our workshops.  There will be workshops in software, and others.  Details will be released soon."
    }], [{
        
    }]];
    
    $scope.sponsors = [
        [
            {
                "imgLink": "./assets/sponsors/microsoft.png",
                "title": "Microsoft",
                "layout": "col-md-4 col-sm-6 col-xs-10 col-xs-offset-1 col-lg-3"
            },
            {
                "imgLink": "./assets/sponsors/northfolkSouthern.png",
                "title": "Northfolk Southern",
                "layout": "col-md-4 col-sm-6 col-xs-10 col-xs-offset-1 col-lg-3"
            }
        ]
    ];
    
    $scope.scrollTo = function(section) {
        var aboutDiv = $('.' + section);
        event.preventDefault();
        $('html,body').animate({scrollTop:$(aboutDiv).offset().top}, 1000);
//        $location.hash(section);
//        $anchorScroll();
    }

    angular.element(document).ready(function () {
        var interval = window.setInterval(hackertyper, 5000);
        var navbar_item = $('.navbar_item');
        var width = 0;
        var screenWidth = $(window).width();
        
        for (var i = 0; i < navbar_item.length; i++) {
            width += $(navbar_item[i]).width() + 20;
        }
        
        var marginLeft = screenWidth/2 - width/2;
        
        $('.navbar_wrapper').width(width);
        fixLandingVerticalPercentage();
//        $('.navbar_wrapper').css('margin-left', margin
    });
    
    angular.element($window).bind('scroll', navbar_scroll);
    
    function sleepFor( sleepDuration ) {
        var now = new Date().getTime();
        while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
    }
    
    var lock = 0;
    
    function hackertyper() {
        
        if (lock == 1) return;
        lock = 1;
        var endings = ["_life", 
                         "_kitchen", 
                         "_roads", 
                         "_school", 
                         "_business", 
                         "_world", 
                         "_work"];
        
        var hacker = $('.hackertyper');
        var newRand = hacker.html();
        
        while (newRand === hacker.html()) newRand = endings[Math.floor(Math.random() * endings.length)];
        
        var cache = hacker.html().length;
        var i = 0;
        var addCallbackId, removeCallbackId;
        
        var removeCallback = function() {
            
            if (i >= cache) {
                window.clearInterval(removeCallbackId);
                i = 0;
                addCallbackId = window.setInterval(addCallback, 200);
            }
            for (; i < cache; i++) {
                hacker.html(hacker.html().substr(0, hacker.html().length - 1));
                i++;
                return;
                //sleepFor(600);
            }
            

        }
    
        removeCallbackId = window.setInterval(removeCallback, 200);
        
        var addCallback = function() {
            if (i >= newRand.length) {
                window.clearInterval(addCallbackId);
                lock = 0;
            }
            for (; i < newRand.length; i++) {
                hacker.html(hacker.html() + newRand[i]);
                i++;
                return;
                //sleepFor(600);
            }
        }
    }
    
    $('.sponsorLink').on('click', function() {
        $window.location = 'http://pulse.ece.illinois.edu/2016/main/sponsor.pdf';
    });

    angular.element(document).ready(function () {
        var interval = window.setInterval(hackertyper, 5000);
        center_navbar();
    });
    
    angular.element($window).bind('resize', center_navbar);
    angular.element($window).bind('scroll', navbar_scroll);

    
}]);

ecePulse2016.controller('schedulePage', ['$scope', '$location', '$anchorScroll', '$window', function($scope, $location, $anchorScroll, $window) {
    "use strict";
    
    $scope.navbarActive = "Schedule";
    
    $scope.header = {
        "header": "Schedule",
        "verticalPercentage": "85%"
    };
    
    $scope.schedule = [{
        "name": "Saturday",
        "events": [{
            "date_start": new Date(2016, 1, 23, 10, 0),
            "date_end": new Date(2016, 1, 23, 22, 0),
            "description": "Competitions kickoff!"
        }, {
            "date_start": new Date(2016, 1, 23, 9, 30),
            "date_end": new Date(2016, 1, 23, 10, 30),
            "description": "Breakfast"
        }, {
            "date_start": new Date(2016, 1, 23, 12, 00),
            "date_end": new Date(2016, 1, 23, 13, 00),
            "description": "Lunch"
        }, {
            "date_start": new Date(2016, 1, 23, 17, 30),
            "date_end": new Date(2016, 1, 23, 18, 30),
            "description": "Dinner"
        }]
    }, {
        "name": "Thursday",
        "event": [{
            "date_start": new Date(2016, 1, 28, 16, 30),
            "date_end": new Date(2016, 1, 28, 17, 00),
            "description": "Registration"
        }, {
            "date_start": new Date(2016, 1, 28, 17, 0),
            "date_end": new Date(2016, 1, 28, 17, 30),
            "description": "Introductions"
        }, {
            "date_start": new Date(2016, 1, 28, 17, 30),
            "date_end": new Date(2016, 1, 28, 18, 45),
            "description": "Keynote Speaker and Q/A",
        }, {
            "date_start": new Date(2016, 1, 28, 18, 45),
            "date_end": new Date(2016, 1, 28, 20, 0),
            "description": "Dinner"
        }]
    }, {
        "name": "Friday",
        "event": [{
            "date_start": new Date(2016, 1, 29, 17, 0),
            "date_end": new Date(2016, 1, 29, 18, 0),
            "description": "Tech Talk #1"
        }, {
            "date_start": new Date(2016, 1, 29, 18, 0),
            "date_end": new Date(2016, 1, 29, 18, 30),
            "description": "Dinner"
        }, {
            "date_start": new Date(2016, 1, 29, 18, 30),
            "date_end": new Date(2016, 1, 29, 19, 00),
            "description": "Workshop #1"
        }]
    }, {
        "name": "Saturday",
        "event": [{
            "date_start": new Date(2016, 1, 30, 10, 0),
            "date_end": new Date(2016, 1, 30, 11, 0),
            "description": "Workshop #2"
        }, {
            "date_start": new Date(2016, 1, 30, 11, 15),
            "date_end": new Date(2016, 1, 30, 12, 15),
            "description": "Tech Talk #2"
        }, {
            "date_start": new Date(2016, 1, 30, 12, 15),
            "date_end": new Date(2016, 1, 30, 1, 15),
            "description": "Lunch"
        }, {
            "date_start": new Date(2016, 1, 30, 1 + 12, 15),
            "date_end": new Date(2016, 1, 30, 2 + 12, 15),
            "description": "Tech Talk #3"
        }, {
            "date_start": new Date(2016, 1, 30, 2 + 12, 30),
            "date_end": new Date(2016, 1, 30, 3 + 12, 30),
            "description": "Workshop #3"
        }, {
            "date_start": new Date(2016, 1, 30, 3 + 12, 45),
            "date_end": new Date(2016, 1, 30, 4 + 12, 45),
            "description": "Tech Talk #4"
        }, {
            "date_start": new Date(2016, 1, 30, 5 + 12, 0),
            "date_end": new Date(2016, 1, 30, 6 + 12, 15),
            "description": "Startup Panel"
        }, {
            "date_start": new Date(2016, 1, 30, 6 + 12, 30),
            "date_end": new Date(2016, 1, 30, 8 + 12, 0),
            "description": "Exclusive Dinner"
        }, {
            "date_start": new Date(2016, 1, 30, 8 + 12, 0),
            "date_end": new Date(2016, 1, 30, 10 + 12, 0),
            "description": "Social Mixer"
        }]
    }];
    
    angular.element(document).ready(function() {
        fixLandingVerticalPercentage();
        center_navbar();
    });
    
    angular.element($window).bind('scroll', navbar_scroll);
    angular.element($window).bind('resize', center_navbar);

}]);

ecePulse2016.controller('contactPage', ['$scope', '$location', '$anchorScroll', '$window', function($scope, $location, $anchorScroll, $window) {
    
    $scope.navbarActive = "Contact"
    $scope.header = {
        "header": "Contact",
        "verticalPercentage": "85%"
    };
    
    angular.element(document).ready(function() {
        fixLandingVerticalPercentage();
        center_navbar();
    });
    
    angular.element($window).bind('scroll', navbar_scroll);
    angular.element($window).bind('resize', center_navbar);
}]);

ecePulse2016.directive('splashHeader', function () {
    return {
        restrict: 'E',
        scope: {
            info: "=info",
        },
        templateUrl: 'templates/header.html'
    };
});

ecePulse2016.directive('navbar', function() {
    return {
        controller: function() {
            
            angular.element(document).ready(function() {
                center_navbar();
            });
        },
        compile: function() {
            return {
                pre: function() {
                },
                post: function() {
                }
            }
        },
        "post-link": function() {
            center_navbar();
        },
        restrict: 'E',
        scope: {
            active: "=active",
        },
        templateUrl: 'templates/navbar.html'
    }
});