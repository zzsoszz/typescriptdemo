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
//# sourceMappingURL=user.js.map