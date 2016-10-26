var user;
(function (user) {
    var User = (function () {
        function User() {
        }
        User.prototype.say = function () {
            console.log(this.username);
        };
        return User;
    }());
    user.User = User;
})(user || (user = {}));
/// <reference path="user.ts" />
var Main = (function () {
    function Main() {
    }
    Main.prototype.run = function () {
        var $;
        var u = new user.User();
        u.username = "qingtian";
        $(document).ready(function () {
            $("#hello").click(function () {
                u.say();
            });
        });
    };
    return Main;
}());
var main = new Main();
main.run();
