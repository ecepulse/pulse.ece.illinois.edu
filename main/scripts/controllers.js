var ecePulse2016 = angular.module("ECEPulse2016", []);

ecePulse2016.controller('splashPage', ['$scope', '$location', '$anchorScroll', '$window', function ($scope, $location, $anchorScroll, $window) {
    "use strict"; // To detect any coding errors
    
    $scope.header = {
        "header": "ECE PULSE 2016",
        "caption": "The heartbeat of innovation",
        "verticalPercentage": "90%",
        "background-image": "/main/assets/header_backgrounds/splash.jpg",
    };

    $scope.infoCards = [
        {
            "title": "One week of innovation.",
            "info": "ECE Pulse is an annual student-run conference held at UIUC which showcases innovation in electrical and computer engineering technologies. The conference is comprised of design competitions, tech talks, and networking sessions for students, alumni, faculty, and corporate representatives."
    }, {
            "title": "Infinite opportunities.",
            "info": "Our aim is to inspire students by connecting them with the latest in novel technologies and projects in the corporate world, exposing them to new opportunities for ECE within industry. Engineers from leading tech companies will engage attendees in discussions regarding the latest and greatest in ECE innovation.",
    }, {
            "title": "Engage. Network. Innovate.",
            "info": "We encourage attendees to challenge themselves. Step out of your comfort zone. Meet new people. Learn from the best. Build teams. Collaborate."
    }];
    
    $scope.sponsors = [
        [
            {
                "imgLink": "./assets/sponsors/microsoft.png",
                "title": "Microsoft",
                "layout": "col-md-4 col-sm-6 col-xs-10 col-lg-3"
            },
        ]
//            {
//                "imgLink": "./assets/sponsors/northfolkSouthern.png",
//                "title": "Northfolk Southern",
//                "layout": "col-md-4 col-sm-6 col-xs-10 col-lg-3"
//            }
//        ]
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
//        $('.navbar_wrapper').css('margin-left', margin
    });
    
    angular.element($window).bind('scroll', function(e) {
        var landing = $('.landing');
        
        var navbar_item = $('.navbar_item');
        var about = $('.about');
        var width = 0;
        var screenWidth = $(window).width();
        
        for (var i = 0; i < navbar_item.length; i++) {
            width += $(navbar_item[i]).width() + 20;
        }
        
        if ($(window).scrollTop() >= landing.height()) {
            about.css('margin-top', $('.navbar').outerHeight());
            $('.navbar').css('position', 'fixed');
            $('.navbar').css('top', '0'); 
//            $('.navbar').css('left', screenWidth/2 - width/2 + 14 + 'px');
        } else {
            about.css('margin-top', 0);
            $('.navbar').css('position', 'initial');
            $('.navbar').css('top', '0');
            $('.navbar').css('transform', '');
        }
    });
    
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
//        $('.navbar_wrapper').css('margin-left', margin
    });
    
    angular.element($window).bind('scroll', function(e) {
        var landing = $('.landing');
        
        var navbar_item = $('.navbar_item');
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
//            $('.navbar').css('left', screenWidth/2 - width/2 + 14 + 'px');
        } else {
            $('.navbar').css('position', 'initial');
            $('.navbar').css('top', '0');
            $('.navbar').css('transform', '');
        }
    });
    
    function sleepFor( sleepDuration ) {
        var now = new Date().getTime();
        while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
    }
    
    
    
}]);

ecePulse2016.controller('sponsorPage', ['$scope', '$location', '$anchorScroll', '$window', function($scope, $location, $anchorScroll, $window) {
    "use strict";
    
    
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