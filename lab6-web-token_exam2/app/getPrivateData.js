function getMyProperties() 
{
	sessionStorage.user_email = "adsoft@kubeet.com";
    jQuery.support.cors = true;
    try
    {                         
        $.ajax({
            url: "/getMyProperties",
            dataType: 'json',
            cache: false,
            contentType: false,
            processData: true,
            data: {user_email: sessionStorage.user_email},                         
            type: 'get',
            crossDomain: true,
            success: function(response){

                $("#listProperties").empty();
                totalProperties = response;
                // alert(response);

                var myTableProperties = "<table class='manage-table responsive-table'>" +
                                        "<tr>" +
                                            "<th><i class='fa fa-file-text'></i> Property</th>" +
                                            // "<th class='expire-date'><i class='fa fa-calendar'></i> Expiration Date</th>" +
                                            "<th></th>" +
                                        "</tr>";
                                    
                totalProperties.forEach(function(property){

                    myTableProperties += "<tr>" +
                                            "<td class='title-container'>" + 
                                                "<img src=" + property.photourl + " alt=''>" +
                                                "<div class='title'>" +
                                                    "<h4><a href='/getProperty'>" + property.title + "</a></h4>" +
                                                    "<span>" + property.address + "</span>" +
                                                    "<span class='table-property-price'>$" + property.price + "</span>" +
                                                "</div>" +
                                            "</td>" +
                                            // "<td class='expire-date'>December 30, 2016</td>" +
                                            "<td class='action'>" +
                                                "<a href='/editProperty'><i class='fa fa-pencil'></i> Edit</a>" +
                                                // "<a onclick='showEditProperty(\"" + property.key + "\")'><i class='fa fa-pencil'></i> Edit</a>" +
                                                "<a href='#'><i class='fa  fa-eye-slash'></i> Hide</a>" +
                                                "<a onclick='deleteProperty(\"" + property.key + "\")' class='delete'><i class='fa fa-remove'></i> Delete</a>" +
                                            "</td>" +
                                         "</tr>";
                });

                myTableProperties += "</table>" +
                                     "<a href='/submitProperty' class='margin-top-40 button'>Submit New Property</a>";

                $("#listProperties").append(myTableProperties);
            }
        });          
    }
    catch(e)
    {
        alert("error : " +  e);
    }
}
