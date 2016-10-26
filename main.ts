/// <reference path="user.ts" />
declare  var $:any;
class Main
{
    run()
    {
        let  u=new user.User();
        u.username="qingtian";
        $(document).ready(function()
        {
            $("#hello").click(function(){
                u.say();
            });
        });
    }
}
let main=new Main();
main.run();