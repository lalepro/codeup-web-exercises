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
        // html += "<hr>";
        orders.forEach(function (order) {
            html += "<hr>";
            html += "<td>Tool: </td>";
            html += "<tr>" + order.title + "</tr>";
            html += "<br>";
            html += "<td>Quantity: </td>";
            html += "<tr>" + order.quantity + "</tr>";
            html += "<br>";
            html += "<td>Categories: </td>";
            html += "<tr>" + order.categories + "</tr>";
            html += "<br>";
            html += "<td>Price: </td>";
            html += "<tr>" + order.price + "</tr>";
            html += "<br>";

        });

        html += "<hr>";
        $("#orders").html(html);

    }


    $("#add-order").click(updatePage);
    updatePage();










});