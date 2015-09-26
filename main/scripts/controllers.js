var ecePulse2016 = angular.module("ECEPulse2016", []);

ecePulse2016.controller('splashPage', ['$scope', function ($scope) {
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
        {
            "resting": {
                "imgLink": "/assets/sponsors/TI.jpg",
            },
            "onHover": {
                "imgLink": "/assets/sponsor/TIhover.jpg",
                "title": "Texas Instruments",
            }
        }];

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