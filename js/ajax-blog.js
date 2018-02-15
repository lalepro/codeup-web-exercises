$(document).ready(function () {

    function updatePage(){


        var ajaxRequest = $.ajax("data/blog.json");

        ajaxRequest.done(function (data) {
            buildHTML(data);
        });


        ajaxRequest.fail(function (status) {
            console.log(status);
        })

    }

    updatePage();

    //    --_-_-_-_-_-_----_-__-_--_-

    var post = $("#posts");
    function buildHTML(posts){
        var html = "";

        posts.forEach(function (blog) {
            html += "<hr>";

            html += "<h1>" + blog.title + "</h1>";
            html += "<br>";
            html += "<section>";
            html += "<p>" + blog.content + "</p>";
            html += "<br>";
            html += "<div>";
            // html += "<p>" + blog.categories + "</p>";
            for(var i = 0; i < blog.categories.length; i++){
             html += "<p>" + blog.categories[i] + "</p>";
            }
            html += "<br>";
            html += "<p>" + blog.date + "</p>";
            html += "</section>";
            html += "<br>";

        });

        html += "<hr>";
        $(post).html(html);

        $("section").hide();
        $("h1").click(function () {
            $(this).next().next().slideToggle(1000);
        });

    }


    $(".btn").click(updatePage);
    updatePage();









});
