var ecePulse2016 = angular.module("ECEPulse2016", []);

function changeOrientation() {
    center_navbar();

}

window.onorientationchange = changeOrientation;

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
        $('.navbar').css('box-shadow', '0 2px 2px -2px gray');
        $('.navbar').css('border-radius', '0');
        $('.navbar').css('opacity', '0.95');
//            $('.navbar').css('left', screenWidth/2 - width/2 + 14 + 'px');
    } else {
        $('.navbar').css('position', 'initial');
        $('.navbar').css('top', '0');
        $('.navbar').css('transform', '');
        $('.landing').css('margin-bottom', '0' + 'px');
        $('.navbar').css('box-shadow', 'initial');
        $('.navbar').css('opacity', '1');
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
    $('.navbar').width($(window).width());

    if (screenWidth < 400) {
        $('.navbar').css('overflow-x', 'scroll');
        $('.navbar').width($(window).width() - 2);
        $('.navbar_wrapper').width(width);
        $('.navbar_wrapper').css("margin-left", 0);
    }
}

function fixLandingVerticalPercentage() {
    var label = $('.label');
    var landing = $('.landing');
    var percentage = label.attr('data-verticalPercentage');

    landing.css('height', percentage);
}

ecePulse2016.controller('splashPage', ['$scope', '$location', '$anchorScroll', '$window', function ($scope, $location, $anchorScroll, $window) {
    
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
            "info": "Hear from the experts in the field of ECE. Past speakers include Irwin Jacobs of Qualcomm and Eric Kleinker of BitTorrent. These presentations are more than just technical - they are filled with life advice from these brilliant minds."
    }, {
            "title": "Competitions.",
            "info": "Compete in various ECE related topics spanning from Signal Processing, Software, and many more.  Show off your knowledge and skills in ECE-related fields while having fun and winning prizes",
    }, {
            "title": "Workshops.",
            "info": "Learn some new skills with our hands-on workshops! We'll have a web development software workshop, a microcontroller workshop, and two circuit workshops for beginners and others alike."
    }], [{
        
    }]];
    
    $scope.sponsors = [
        [
            {
                "imgLink": "./assets/sponsors/viasat.png",
                "title": "Viasat",
                "layout": "col-md-12 col-sm-12 col-xs-12 col-lg-12",
                "link": "http://www.viasat.com"
            }
        ],
        [
            {
                "imgLink": "./assets/sponsors/microsoft.png",
                "title": "Microsoft",
                "layout": "col-md-4 col-sm-6 col-xs-10 col-xs-offset-1 col-lg-3",
                "link": "http://www.microsoft.com"
            },
            {
                "imgLink": "./assets/sponsors/northfolkSouthern.png",
                "title": "Northfolk Southern",
                "layout": "col-md-4 col-sm-6 col-xs-10 col-xs-offset-1 col-lg-3",
                "link": "http://www.nscorp.com"
            }
        ]
    ];
    
    $scope.preRegister = function() {
        var email = $('.preRegisterInput').val();
        $.ajax({
            url: './preregister.php',
            method: "POST",
            data: {
                'email': email
            },
            success: function(data) {
                $('.toDisappear').hide();
                $('.preRegisterForm').html("Thank you for pre-registering!");
            },
            error: function(data) {
                
            }
        });
    };
    
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
        $window.location = 'http://pulse.ece.illinois.edu/sponsor.pdf';
    });

    angular.element(document).ready(function () {
        var interval = window.setInterval(hackertyper, 5000);
        center_navbar();
    });
    
    angular.element($window).bind('resize', center_navbar);
    angular.element($window).bind('scroll', navbar_scroll);

    
}]);

var formatTime = function(date) {
    if (date === undefined) return ""
    var h = date.getHours();
    var m = date.getMinutes() >= 10 ? date.getMinutes() : "0" + date.getMinutes();
    var am_pm = h >= 12 ? "PM" : "AM";
    return (h % 12 == 0 ? 12 : h % 12) + ":" + m + " " + am_pm;
};

var formatDate = function(date) {
    console.log("Bere");
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getYear();

    return (m + 1) + "/" + d + "/" + 16;
};

ecePulse2016.controller('schedulePage', ['$scope', '$location', '$anchorScroll', '$window', function($scope, $location, $anchorScroll, $window) {
    
    $scope.formatDate = function(date) {
        var d = date.getDate();
        var m = date.getMonth() + 1;
        var y = date.getFullYear();
        return '' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d) + '-' + y;
    };
    
    $scope.formatTime = formatTime;

    
    $scope.navbarActive = "Schedule";
    
    $scope.header = {
        "header": "Schedule",
        "verticalPercentage": "85%"
    };
    
    $scope.counter = 0;
    
    $scope.colorCounter = function() {
        
        if ($scope.counter % 2 == 1) {
            $scope.counter++;
            console.log($scope.counter);
            return "lightOrange";
        }
    }
    
    $scope.schedule = [{
        "name": "Saturday",
        "date": new Date(2016, 0, 23),
        "description": "Competitions",
        "events": [{
            "date_start": new Date(2016, 0, 23, 10, 0),
            "description": "Competitions Start"
        }, {
            "date_start": new Date(2016, 0, 23, 9, 30),
            "date_end": new Date(2016, 0, 23, 10, 30),
            "description": "Breakfast"
        }, {
            "date_start": new Date(2016, 0, 23, 12, 0),
            "date_end": new Date(2016, 0, 23, 13, 0),
            "description": "Lunch"
        }, {
            "date_start": new Date(2016, 0, 23, 17, 30),
            "date_end": new Date(2016, 0, 23, 18, 30),
            "description": "Dinner"
        }, {
            "date_start": new Date(2016, 0, 23, 22, 00),
            "description": "Competitions End"
        }]
    }, {
        "name": "Thursday",
        "date": new Date(2016, 0, 28),
        "description": "Keynote",
        "events": [{
            "date_start": new Date(2016, 0, 28, 16, 30),
            "date_end": new Date(2016, 0, 28, 17, 0),
            "description": "Registration"
        }, {
            "date_start": new Date(2016, 0, 28, 17, 0),
            "date_end": new Date(2016, 0, 28, 17, 30),
            "description": "Introductions"
        }, {
            "date_start": new Date(2016, 0, 28, 17, 30),
            "date_end": new Date(2016, 0, 28, 18, 45),
            "description": "Keynote Speech",
        }, {
            "date_start": new Date(2016, 0, 28, 18, 45),
            "date_end": new Date(2016, 0, 28, 20, 0),
            "description": "Dinner",
        }]
    }, {
        "name": "Friday",
        "date": new Date(2016, 0, 29),
        "description": "Main Conference Day 1",
        "events": [{
            "date_start": new Date(2016, 0, 29, 17, 0),
            "date_end": new Date(2016, 0, 29, 18, 0),
            "description": "Tech Talk #1"
        }, {
            "date_start": new Date(2016, 0, 29, 18, 0),
            "date_end": new Date(2016, 0, 29, 18, 30),
            "description": "Dinner"
        }, {
            "date_start": new Date(2016, 0, 29, 18, 30),
            "date_end": new Date(2016, 0, 29, 19, 0),
            "description": "Workshop #1"
        }]
    }, {
        "name": "Saturday",
        "date": new Date(2016, 0, 30),
        "description": "Main Conference Day 2",
        "events": [{
            "date_start": new Date(2016, 0, 30, 10, 30),
            "date_end": new Date(2016, 0, 30, 13, 0),
            "description": "Workshop #2 - Advanced"
        }, {
            "date_start": new Date(2016, 0, 30, 11, 30),
            "date_end": new Date(2016, 0, 30, 13, 0),
            "description": "Workshop #2 - Beginner"
        }, {
            "date_start": new Date(2016, 0, 30, 13, 00),
            "date_end": new Date(2016, 0, 30, 13, 30),
            "description": "Lunch"
        }, {
            "date_start": new Date(2016, 0, 30, 13, 30),
            "date_end": new Date(2016, 0, 30, 14, 30),
            "description": "Tech Talk #2"
        }, {
            "date_start": new Date(2016, 0, 30, 14, 30),
            "date_end": new Date(2016, 0, 30, 15, 30),
            "description": "Tech Talk #3"
        }, {
            "date_start": new Date(2016, 0, 30, 15, 30),
            "date_end": new Date(2016, 0, 30, 18, 0),
            "description": "Workshop #3"
        }, {
            "date_start": new Date(2016, 0, 30, 17, 0),
            "date_end": new Date(2016, 0, 30, 18, 0),
            "description": "Tech Talk #4"
        }, {
            "date_start": new Date(2016, 0, 30, 18, 0),
            "date_end": new Date(2016, 0, 30, 19, 0),
            "description": "Startup Panel"
        }, {
            "date_start": new Date(2016, 0, 30, 19, 15),
            "date_end": new Date(2016, 0, 30, 20, 30),
            "description": "Exclusive Dinner"
        }, {
            "date_start": new Date(2016, 0, 30, 20, 30),
            "date_end": new Date(2016, 0, 30, 23, 0),
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

ecePulse2016.controller('competitionsPage', ['$scope', '$location', '$anchorScroll', '$window', function($scope, $location, $anchorScroll, $window) {
    
    $scope.header = {
        "header": "Competitions",
        "verticalPercentage": "85%",
        "caption": "Cash"
    };

    $scope.formatDate = formatDate;

    $scope.date = new Date(2016, 0, 23);

    $scope.competitionInfo = [[{
        name: "Amazing Race",
        image: "assets/competitionImages/amazingRace.JPG",
        description: "Work as a team to solve a series of fun introductory ECE and logic puzzles, all culminating in building your prize. This competition is designed to have a low technical barrier and is open to first-year students only.",
        challengeLink: "http://pulse.ece.illinois.edu/challenge/amazing_race",
    }, {
        name: "Software",
        image: "assets/competitionImages/software.JPG",
        description: "Utilize programming expertise to tackle a series of puzzles that will involve data structures, algorithms, programming principles, and computer security. Our challenges will be supported in C, C++, Java, and Python.",
        challengeLink: "http://pulse.ece.illinois.edu/challenge/software",
    }], [{
        name: "Sensors",
        image: "assets/competitionImages/sensors.JPG",
        description: "Work at the intersection of the natural world, signal processing, and the human body to produce an augmented experience with sensors such as touch, EMG, light, and audio.",
        challengeLink: "http://pulse.ece.illinois.edu/challenge/sensors",
    }, {
        name: "Reverse Engineering",
        image: "assets/competitionImages/reverseEngineering.JPG",
        description: "Use your problem solving skills and clever hardware design techniques to push square pegs into circular holes. Requires familiarity with programming at the bare metal level.",
        challengeLink: "http://pulse.ece.illinois.edu/challenge/reverse_engineering",
    }]];

    angular.element(document).ready(function() {
        fixLandingVerticalPercentage();
        center_navbar();
        
        cards = $('.ccName');
        for (var i = 0; i < cards.length; i++) {
            console.log("Break here");
            $(cards[i]).css({
                "background": "linear-gradient(rgba(1, 53, 123, .5), rgba(1,53,123,.5)), url('" + $(cards[i]).attr("data-background") + "')",
                "background-size": "100%",
                "background-repeat": "no-repeat",
                "height": "200px",
            });
        }
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
    
    $scope.contactCards = [{
        "name": "Ankit Jain",
        "position": "Conference Director",
        "image":"http://placehold.it/350x350",
        "contact": "ecepulse-director",
        "blurb": ["Ankit Jain is the Conference Director for ECE Pulse. Ankit is in his final year finishing his Master's Degree in Electrical Engineering. He likes working in analog design and sensor-based systems, and has been really involved with Pulse since the beginning", "As Conference Director, Ankit's job is to oversee every single aspect of the conference and to also be the “face” of the conference to all those interested. By making sure that every part of the conference is running smoothly and that every attendee, speaker, and company is properly accounted for, his job is successful.", "What makes Pulse exciting for Ankit is the consistent evolution that has happened yearly. This event started as a smaller scale conference in three different buildings with an attendance of ~250 people. Since then, the conference has increased to ~450+ attendees (numbers from 2015). He hopes to keep bringing this conference to the next level and come back in the upcoming years to see continued growth."]
    }, {
        "name": "Kevin Perkins",
        "position": "Secretary and Treasurer",
        "image":"http://placehold.it/350x350",
        "contact": "ecepulse-treasury",
        "blurb": ["Kevin Perkins is a junior in Computer Engineering. He enjoys programming, interfacing with hardware through software, and solving puzzles.", "This is Kevin's second year working as Secretary and Treasurer for Pulse, and third year working with Pulse. He documents Pulse meetings and drafts all of the group's budgets. Since he in charge of the money, he basically has all of the power.", "What drives Kevin is finally seeing all of the hard work during the year finally paying off; witnessing the great speakers, the problem solving, and celebration of ECE. This is the reason that Kevin continues to work with Pulse every year."]
    }, {
        "name": "Anit Gandhi",
        "position": "Workshops",
        "image":"assets/board/anitgandhi.jpg",
        "contact": "ecepulse-workshops",
        "blurb": ["Anit is a senior in Computer Engineering with a focus on cyber security and cryptography, along with a business minor, originally from Naperville, IL.. He hopes to one day found and run a security startup.", "This year, he's running the Workshops committee, which is putting on three workshops for students who come to the conference to learn a new skill in a hands on way. We aim to enrich as many students' technical knowledge as possible by making approachable.", "Pulse is something Anit looks forward to every year because of the amazing array of industry speakers in a purely technical format. There's no recruiting or corporate aspect, just a lot of fun."]
    }, {
        "name": "Rufei Zhou",
        "position": "Competitions",
        "image":"http://placehold.it/350x350",
        "contact": "ecepulse-competitions",
        "blurb": ["Rufei is a junior in Computer Engineering from Baton Rouge, LA. He likes designing new systems to make life easier, programming, and long walks on the beach.", "He is in charge of the Competitions committee, which aims to allow students to show off their knowledge in ECE-related fields while having fun and winning prizes. Like Workshops, it's a chance for students to actively participate in hands-on work outside of the classroom.", "What makes Pulse really exciting for Rufei is that it's completely self-run. It's not quite a hackathon, and not quite a conference, but something run by students, for students."]
    }, {
        "name": "Jeffrey Huang",
        "position": "Webmaster",
        "image":"http://placehold.it/350x350",
        "contact": "ecepulse-webmaster",
        "blurb": ["Jeffrey is a junior in Computer Engineering from Parkland, FL with an interest in artificial intelligence and computer systems.",  "He is the webmaster for ECE Pulse this year and is aimed to creating a nice website to show off all the awesome stuff that we're doing in pulse!", "Pulse to me is an awesome opportunity to learn from our corporate sponsors through tech talks and workshops as well as show off your ECE knowledge through the competitions.  Without the pressure of recruiting it gives the students the oppotunity to relax and have fun!"]
    }, {
        "name": "Bassel Alesh",
        "position": "Media and Design",
        "image":"http://placehold.it/350x350",
        "contact": "ecepulse-media",
        "blurb": ["Bassel Alesh is a sophomore in Electrical Engineering with an interest in circuit design. This is actually Bassel's first time being involved with Pulse.", "This year, he is in charge of Media & Design. His committee works on creating all the visuals and artwork for Pulse. Some of things he will be working on include this year's ‘mascot' and the videos that will be released for the conference.", "Bassel thinks Pulse is awesome because he finds it to be very beneficial to its attendees, mainly because of how it tries to keep its events relevant and unique. This year's ‘mascot' is a cool waving robot, which is another reason why he thinks Pulse is awesome."]
    }, {
        "name": "Mosab Elagha",
        "position": "Corporate",
        "image":"http://placehold.it/350x350",
        "contact": "ecepulse-corporate",
        "blurb": ["Mosab is a junior in ECE and is corporate chair for ECE Pulse.", "He also plays smash"]
    },{
        "name": "Tyler Hansen",
        "position": "Marketing and Logistics",
        "image":"http://placehold.it/350x350",
        "contact": "ecepulse-logistics",
        "blurb": ["Tyler Hansen is the Director of Marketing & Logistics for ECE Pulse 2016. Tyler is a junior in Computer Engineering at ECE Illinois. As vice chair of academic development for the department's Student Advancement Committee, he leads an effort to design events and programs that will assist students within the department in their academic pursuits.", "As Director of Marketing & Logistics for Pulse, Tyler's job is twofold: first, he oversees publicity for the event, increasing student and faculty engagement in the department as well as throughout the university and community. Second, he manages the logistics for the conference, making sure that all the details work together smoothly.", "Tyler is excited to see how Pulse can reach even more students this year. Over the past several years, Pulse has become a hallmark event for the department, and Tyler is excited to be able to reach a large number of the freshman class with this year's conference."]
    }, {
        "name": "Shraddha Dangi",
        "position": "External Affairs",
        "image":"http://placehold.it/350x350",
        "contact": "ecepulse-external",
        "blurb": ["Shraddha Dangi is a junior in Electrical Engineering and is interested in RF communication and electromagnetics.", "This year she's the head of external affairs for Pulse. Her role is to be the representative for Pulse in the ECE Student Advancement Committee. She's also the lead for the Amazing Race competition. Styled much like the TV show, teams will solve ECE puzzles to win cool prizes!", "For her, Pulse is an exciting time because it brings everything ECE in one place,the workshops, the competitions, and inspiring talks from great thinkers in the field."]
    }];
    
    $scope.otherContributors = {
        "main": ["Milan Dasgupta"],
        "others": []
    }
    
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

ecePulse2016.directive('footer', function() {
    return {
        templateUrl: 'templates/footer.html'
    }
});
