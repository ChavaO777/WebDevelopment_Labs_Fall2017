function PropertyObject(entityKey,
                        myTitle, 
                        myStatus,
                        myPrice,
                        myAddress,
                        myCity,
                        myState,
                        myZipCode,
                        myRooms,
                        myBathrooms,
                        myPropertyType,
                        myYearBuilt,
                        myArea,
                        myPhotoUrl,
                        myDescription) {
    
    this.entityKey = entityKey;
    this.title = myTitle;
    this.status = myStatus;
    this.price = myPrice;
    this.address = myAddress;
    this.city = myCity;
    this.state = myState;
    this.zipcode = myZipCode;
    this.rooms = myRooms;
    this.bathrooms = myBathrooms;
    this.propertyType = myPropertyType;
    this.yearBuilt = myYearBuilt;
    this.area = myArea;
    this.description = myDescription;
    this.photourl = myPhotoUrl;
    this.tokenint = sessionStorage.token;

    this.toJsonString = function () { return JSON.stringify(this); };
};

function TokenObject() {
    
    this.tokenint = sessionStorage.token;
    this.toJsonString = function () { return JSON.stringify(this); };
};

function addProperty()
{
	try
    {
        alert("token : " + sessionStorage.token);
        upload();
        
        var myData = new PropertyObject(entityKey = "!!??",
                                        title = $("#title").val(),
                                        status = $("#status").val(),
                                        price = $("#price").val(),
                                        address = $("#address").val(),
                                        city = $("#city").val(),
                                        state = $("#state").val(),
                                        zipcode = $("#zipcode").val(),
                                        rooms = $("#rooms").val(),
                                        bathrooms = $("#bathrooms").val(),
                                        propertyType = $("#propertyType").val(),
                                        yearBuilt = $("#yearBuilt").val(),
                                        area = $("#area").val(),
                                        photourl = sessionStorage.urlImage,
                                        description = $("#description").val());
        
        alert(myData.toJsonString());

        jQuery.ajax({

            type: "POST",
            // url: "https://MI_DOMINIO/_ah/api/property_api/v1/property/insert //Use this when the website is live
            url: "http://localhost:8080/_ah/api/property_api/v1/property/insert",
            data: myData.toJsonString(),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                    // do something
                    alert (response.code + " " + response.message);
                    window.location = "/myProperties";
            },
        
            error: function (error) {            
                    // error handler
                    alert("error :" + error.message);
            }
        });
    }
    catch(error)
    {
        alert(error);
    }
}

function showEditProperty(propertyKey)
{
	try
    {
        alert("sessionStorage.token = " + sessionStorage.token);
        var myProperty = new PropertyObject(entityKey = propertyKey);
        alert("myProperty.toJsonString() = " + myProperty.toJsonString());

        jQuery.support.cors = true;

        jQuery.ajax({

            type: "GET",
            // url: "https://MI_DOMINIO/_ah/api/property_api/v1/property/showupdate //Use this when the website is live
            url: "http://localhost:8080/_ah/api/property_api/v1/property/showupdate",
            data: myProperty.toJsonString(),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                // do something
                // alert (response.code + " " + response.message);
                window.location = "/editProperty";
            },
        
            error: function (error) {            
                // error handler
                alert("error :" + error.message)
            }
        });
    }
    catch(error)
    {
        alert(error);
    }
}

function editProperty(propertyKey)
{
	try
    {
        alert("token : " + sessionStorage.token);
        upload();
        
        var myData = new PropertyObject(entityKey = propertyKey,
                                        title = $("#title").val(),
                                        status = $("#status").val(),
                                        price = $("#price").val(),
                                        address = $("#address").val(),
                                        city = $("#city").val(),
                                        state = $("#state").val(),
                                        zipcode = $("#zipcode").val(),
                                        rooms = $("#rooms").val(),
                                        bathrooms = $("#bathrooms").val(),
                                        propertyType = $("#propertyType").val(),
                                        yearBuilt = $("#yearBuilt").val(),
                                        area = $("#area").val(),
                                        photourl = sessionStorage.urlImage,
                                        description = $("#description").val());
        
        alert(myData.toJsonString());

        jQuery.ajax({

            type: "POST",
            // url: "https://MI_DOMINIO/_ah/api/property_api/v1/property/update //Use this when the website is live
            url: "http://localhost:8080/_ah/api/property_api/v1/property/update",
            data: myData.toJsonString(),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                    // do something
                    alert (response.code + " " + response.message);
            },
        
            error: function (error) {            
                    // error handler
                    alert("error :" + error.message)
            }
        });
    }
    catch(error)
    {
        alert(error);
    }
}

function deleteProperty(propertyKey)
{
	try
    {   
        var myProperty = new PropertyObject(entityKey = propertyKey);
        alert("myProperty.toJsonString() = " + myProperty.toJsonString());

        jQuery.support.cors = true;

        jQuery.ajax({

            type: "POST",
            // url: "https://MI_DOMINIO/_ah/api/property_api/v1/property/delete //Use this when the website is live
            url: "http://localhost:8080/_ah/api/property_api/v1/property/delete",
            data: myProperty.toJsonString(),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                // do something
                alert (response.code + " " + response.message);
                window.location = "/myProperties";
            },
        
            error: function (error) {            
                // error handler
                alert("error :" + error.message)
            }
        });
    }
    catch(error)
    {
        alert(error);
    }
}

function getPropertyList()
{
    try
    {
        //alert("token : " + sessionStorage.token);
        var myData = new TokenObject();
        alert(myData.toJsonString());

        jQuery.ajax({
            type: "POST",
            url: "http://localhost:8080/_ah/api/property_api/v1/property/list",
            data: myData.toJsonString(),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                // do something
                alert (response.data);

                $("#listProperties").empty();
                totalProperties = response.data;
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
                                                // "<a href='/editProperty'><i class='fa fa-pencil'></i> Edit</a>" +
                                                "<a onclick='showEditProperty(\"" + property.key + "\")'><i class='fa fa-pencil'></i> Edit</a>" +
                                                "<a href='#'><i class='fa  fa-eye-slash'></i> Hide</a>" +
                                                "<a onclick='deleteProperty(\"" + property.key + "\")' class='delete'><i class='fa fa-remove'></i> Delete</a>" +
                                            "</td>" +
                                         "</tr>";
                });

                myTableProperties += "</table>" +
                                     "<a href='/submitProperty' class='margin-top-40 button'>Submit New Property</a>";

                $("#listProperties").append(myTableProperties);
            },
       
            error: function (error) {            
                // error handler
                alert("error :" + error.message)
            }
        });
   }
   catch(error)
   {
        alert(error);
   }
}

function upload()
{
    var file_data = $("#uploaded_file").prop("files")[0];
    var form_data = new FormData();
    form_data.append("uploaded_file", file_data);
    alert("uploading this => " + file_data);

    jQuery.support.cors = true;
    try
    {
        $.ajax({
            url: "/up",
            dataType: 'text',
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'post',
            crossDomain: true,
            success: function(response){

                // document.getElementById("preview").src = response;
                alert("response" + response);
                sessionStorage.urlImage = response;
                // document.getElementById("url_photo").value = response;
                alert(sessionStorage.urlImage);
            },

            error: function (error) {            
                // error handler
                alert("WTF!!?? -> error :" + error.message)
            }
        });
    }
    catch(e)
    {
        alert("error : " +  e);
    }
}