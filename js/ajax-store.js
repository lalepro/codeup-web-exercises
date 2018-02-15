$(document).ready(function () {


    function updatePage(){


        var ajaxRequest = $.ajax("data/inventory.json");

        ajaxRequest.done(function (data) {
            buildHTML(data);
        });


        ajaxRequest.fail(function (status) {
            console.log(status);
        })

    }

    updatePage();

    //    --_-_-_-_-_-_----_-__-_--_-

    function buildHTML(orders){
        var html = "";

        orders.forEach(function (order) {
            html += "<tr>";
            html += "<td>" + order.title + "</td>";
            html += "<td>" + order.quantity + "</td>";
            html += "<td>" + order.categories + "</td>";
            html += "<td>" + "$" + order.price + "</td>";
            html += "</tr>";


        });

        html += "<hr>";
        $("#orders").html(html);

    }


    $("#add-order").click(updatePage);
    updatePage();










});