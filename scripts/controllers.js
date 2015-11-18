var ecePulse2016 = angular.module("BradySalz", []);

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
            "info": "Hear from experts in the field of ECE. Past speakers include Irwin Jacobs of Qualcomm and Eric Klinker of BitTorrent. These presentations are more than just technical - they are filled with practical advice from these brilliant thinkers."
    }, {
            "title": "Competitions.",
            "info": "Compete in various ECE-related challenges in the areas of signal processing, software, reverse engineering, and more. Show off your knowledge and technical skills in a fun and relaxed environment; you might even win a prize!",
    }, {
            "title": "Workshops.",
            "info": "Learn new skills with our hands-on workshops! We'll have a web development workshop, a microcontroller workshop, and two circuit workshops-one for beginners and another for those with previous experience."
    }]];
    
    $scope.sponsors = [
        [
            {
                "imgLink": "./assets/sponsors/viasat.png",
                "title": "Viasat",
                "layout": "col-md-12 col-sm-12 col-xs-12 col-lg-12",
                "link": "http://www.viasat.com"
            }
        ], [
            {
                "imgLink": "./assets/sponsors/qualcomm.png",
                "title": "Qualcomm",
                "layout": "col-md-8 col-sm-8 col-xs-10 col-lg-8 col-md-offset-2 col-lg-offset-2 col-sm-offset-2",
                "link": "http://www.qualcomm.com"
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
            },
            {
                "imgLink": "./assets/sponsors/google.jpg",
                "title": "Google",
                "layout": "col-md-4 col-sm-6 col-xs-10 col-xs-offset-1 col-lg-3",
                "link": "http://www.google.com"
            }
        ], [
            {
                "imgLink": "./assets/sponsors/monsanto.png",
                "title": "Monsanto",
                "layout": "col-md-3 col-sm-4 col-xs-10 col-xs-offset-1 col-lg-3",
                "link": "http://www.monsanto.com"
            },
            {
                "imgLink": "./assets/sponsors/akuna.png",
                "title": "Akuna",
                "layout": "col-md-3 col-sm-4 col-xs-10 col-xs-offset-1 col-lg-3",
                "link": "http://www.akunacapital.com"
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
        "verticalPercentage": "65%"
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
        "verticalPercentage": "65%",
        "caption": "Cash"
    };

    $scope.formatDate = formatDate;

    $scope.date = new Date(2016, 0, 23);

    $scope.competitionInfo = [[{
        name: "Amazing Race",
        image: "assets/competitionImages/amazingRace.JPG",
        description: "Work as a team to solve a series of fun, introductory ECE puzzles, all culminating in building your prize. This competition is designed to be accessible regardless of your technical expertise and is open to first-year students only.",
        challengeLink: "http://pulse.ece.illinois.edu/challenge/amazing_race",
    }, {
        name: "Software",
        image: "assets/competitionImages/software.JPG",
        description: "Utilize your programming expertise to tackle a series of puzzles that will involve data structures, algorithms, programming principles, and computer security. Our challenges will be available in C, C++, Java, and Python.",
        challengeLink: "http://pulse.ece.illinois.edu/challenge/software",
    }], [{
        name: "Sensors",
        image: "assets/competitionImages/sensors.JPG",
        description: "Work on a project that combines your knowledge of the natural world, signal processing, and the human body. Together your team will produce an augmented experience with sensors such as touch, EMG, light, and audio.",
        challengeLink: "http://pulse.ece.illinois.edu/challenge/sensors",
    }, {
        name: "Reverse Engineering",
        image: "assets/competitionImages/reverseEngineering.JPG",
        description: "Use your problem solving skills and hardware design experience to push square pegs into circular holes. This challenge requires familiarity with programming at the bare metal level.",
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
                "height": "300px",
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
        "verticalPercentage": "65%"
    };
    
    $scope.contactCards = [{
        "name": "Ankit Jain",
        "position": "Conference Director",
        "image":"assets/board/ankitjain.jpg",
        "contact": "ecepulse-director",
        "blurb": ["Ankit Jain is the Conference Director for ECE Pulse. Ankit is in his final year finishing his Master's Degree in Electrical Engineering. He likes working in analog design and sensor-based systems, and has been involved with Pulse since the beginning.", "As Conference Director, Ankit's job is to oversee every single aspect of the conference and to be the “face” of the event to those who attend. By making sure that every part of the conference runs smoothly and that every attendee, speaker, and company enjoys the experience, his job will be successful.", "What makes Pulse exciting for Ankit is the consistent evolution over the past five years. This event started as a small conference in three different buildings with an attendance of ~250 people. Since then, the conference has expanded to over 450 attendees all together in one building! He hopes to take this year’s conference to the next level and looks forward to returning to the event in the coming years to witness the continued growth."]
    }, {
        "name": "Kevin Perkins",
        "position": "Secretary and Treasurer",
        "image":"assets/board/kevinperkins.jpg",
        "contact": "ecepulse-treasury",
        "blurb": ["Kevin Perkins is a junior in Computer Engineering. He enjoys programming, interfacing with hardware through software, and solving puzzles.", "This is Kevin's second year working as Secretary and Treasurer for Pulse and third year working with Pulse. He documents Pulse meetings and drafts all of the conference budgets. Since he is in charge of the money, he basically has all of the power.", "What motivates Kevin is seeing all the hard work pay off during the conference. Witnessing the great speakers, the problem solving, and the celebration of ECE makes all the time spent planning worth it. This is the reason why Kevin continues to work with Pulse every year."]
}, {
        "name": "Anit Gandhi",
        "position": "Workshops",
        "image":"assets/board/anitgandhi.jpg",
        "contact": "ecepulse-workshops",
        "blurb": ["Anit Gandhi is a senior in Computer Engineering with a focus on cybersecurity and cryptography. Originally from Naperville, IL, he’s also pursuing a business minor and hopes to one day found and run a security startup.", "This year, he's running the Workshops committee, which is putting on three workshops for students who come to the conference to learn a new skill in a hands on way. His aim is to enrich students' technical knowledge through these workshops in a fun and relaxed environment.", "Anit looks forward to Pulse every year because of the opportunity to hear from industry speakers in a purely technical format; there's no recruiting aspect, just a lot of fun."]
    }, {
        "name": "Rufei Zhou",
        "position": "Competitions",
        "image":"assets/board/rufei.jpg",
        "contact": "ecepulse-competitions",
        "blurb": ["Rufei is a junior in Computer Engineering from Baton Rouge, LA. He enjoys designing systems that improve quality of life, programming indepedent projects, and taking long walks on the beach.", "He is in charge of the Competitions committee. The aim of his committee is to allow students to show off their knowledge in ECE-related fields while having fun and winning prizes. Like workshops, it's a chance for students to actively participate in hands-on work outside of the classroom.", "What makes Pulse really exciting for Rufei is that it's completely student-run. It's not quite a hackathon, and not quite a conference, but something run by students, for students."]
}, {
        "name": "Jeffrey Huang",
        "position": "Webmaster",
        "image":"assets/board/jefferyhuang.png",
        "contact": "ecepulse-webmaster",
        "blurb": ["Jeffrey is a junior in Computer Engineering from Parkland, FL with an interest in artificial intelligence and computer systems.", "He is the webmaster for ECE Pulse this year, and his goal is to create a professional website to showcase all the awesome opportunities that Pulse offers!", "Jeffrey thinks Pulse is a great opportunity to learn from corporate sponsors through tech talks and workshops as well as show off ECE technical knowledge through competitions. Without the pressure of recruiting it gives students the opportunity to relax and have fun!"]
    }, {
        "name": "Bassel Alesh",
        "position": "Media and Design",
        "image":"assets/board/bassel.jpg",
        "contact": "ecepulse-media",
        "blurb": ["Bassel Alesh is a sophomore in Electrical Engineering with an interest in circuit design. This is Bassel's first year being involved with Pulse.", "This year, he is in charge of Media and Design. His committee works on creating all the visuals and artwork for Pulse. Some of the projects he has been working on include this year's 'mascot' and the videos that are released before and during the conference.", "Bassel thinks Pulse is awesome because it is so beneficial to its attendees; he really likes how all the Pulse events are relevant and unique. For this year's 'mascot', Bassel designed a waving robot, which is another reason why he thinks Pulse is awesome."]
    }, {
        "name": "Mosab Elagha",
        "position": "Networking",
        "image":"assets/board/mosabelagha.jpg",
        "contact": "ecepulse-corporate",
        "blurb": ["Mosab is a junior in Computer Engineering and is the Networking Director for ECE Pulse.", "He enjoys programming, robotics, and attending hackathons to making fun projects. He has been growing a strong interest in mobile development - primarily fueled by iOS and Swift.", "Mosab finds Pulse to be one of the best ways to learn from some of the best people in the industry. He also enjoys the local crowd that comes out to the events, citing them as some of the most talented people he has ever met"]
    }, {
        "name": "Rahul Shah",
        "position": "Corporate",
        "image":"assets/board/rahulshah.jpg",
        "contact": "ecepulse-corporate",
        "blurb": ["Rahul is a senior in Electrical Engineering with an interest in Circuit Design. He is originally from Des Plaines, IL. He can usually be seen at the ECE Building doing homework late at night and lounging around with his peers.", "During his spare time he enjoys playing Super Smash Bros. (Melee), reading articles about the latest tech, and watching Youtube videos.", "His goal for the future is to work for a startup that will have a notable impact on the industry."]
    }, {
        "name": "Tyler Hansen",
        "position": "Marketing and Logistics",
        "image":"assets/board/tylerhansen.jpg",
        "contact": "ecepulse-logistics",
        "blurb": ["Tyler Hansen is the Director of Marketing and Logistics for ECE Pulse 2016. Tyler is a junior in Computer Engineering at ECE Illinois. As vice-chair of academic development for the department's Student Advancement Committee, he leads an effort to design events and programs that will assist students within the department in their academic pursuits.", "As Director of Marketing & Logistics for Pulse, Tyler's job is twofold: firstly, he oversees publicity for the event, increasing student and faculty engagement in the college of engineering. Secondly, he manages the logistics for the conference, making sure that all the details work together smoothly.", "Tyler is excited to see how Pulse can reach even more students this year. Over the past several years, Pulse has become a hallmark event for the department, and Tyler is excited to be able to reach a large number of the freshman class with this year's conference."]
    }, {
        "name": "Shraddha Dangi",
        "position": "External Affairs",
        "image":"assets/board/shraddha.jpg",
        "contact": "ecepulse-external",
        "blurb": ["Shraddha Dangi is a junior in Electrical Engineering and is interested in RF communication and electromagnetics.", "This year, she's the head of external affairs for Pulse. Her role is to be the representative for Pulse to the ECE Student Advancement Committee. She's also in charge of the Amazing Race competition. Styled much like the TV show, teams will solve ECE puzzles to win cool prizes!", "For Shraddha, Pulse is an exciting time because it brings everything ECE-related to one place—the workshops, the competitions, and inspiring talks from great thinkers in the field."]}];
    
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
