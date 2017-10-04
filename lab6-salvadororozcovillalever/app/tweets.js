function Tweet()
{
  this.usuario = "";
  this.tweet = "";
};

function insertTweet()
{
  try
  {
    var val_usuario = $('#usuario').val();
    var val_tweet = $('#tweet').val();

    var myTweet = new Tweet();
    myTweet.usuario = val_usuario;
    myTweet.tweet = val_tweet;

    var form_data = new FormData();
    form_data.append("usuario", myTweet.usuario);
    form_data.append("tweet", myTweet.tweet);

    jQuery.support.cors = true; //CORS -> Cross-Origin Resource Sharing 

    jQuery.ajax({
      url: "/createTweet",
      dataType: "text",
      cache: false,
      contentType: false,
      processData: false,
      data: form_data,
      type: "post",
      crossDomain: true,
      success: function(response){

        alert("key generada " + response);
        $('#usuario').val(String.empty);
        $('#tweet').val(String.empty);
      },
      error: function(error){

        alert(error);
      }
    });
  }
  catch(error)
  {
    alert(error);
  }
}

function getAllTweets()
{
  jQuery.support.cors = true;

  try
  {
    $.ajax({
      url: "/readAllTweets",
      dataType: 'json',
      cache: false,
      contentType: false,
      processData: false,
      type: 'get',
      crossDomain: true,
      success: function(response){

        $("#listTweets").empty();
        tweets = response;
        alert(response);

        var myTableTweets="<table class='table table-striped table-advanced table-hover'>" +
          " <tbody id='devices'> " +
          "  <tr> " + 
          "    <th> </th> " +
          // "    <th> entityKey </th> " +
          "    <th> user </th> " +
          "    <th> tweet </th> " +
          "    <th> Delete </th> " +
          "  </tr> ";

        tweets.forEach(function(tweet)
        {
          myTableTweets += "<tr> " + 
                          "<td>" +
          "<button onclick='getOneTweet(\"" + tweet.id + "\")' class='btn btn-primary' > " + 
          "<i class='fa fa fa-ban'></i> Edit </button> " + 
            "</td>" +
            // "<td > " + user.id + " </td> " + 
            "<td > " + tweet.usuario + "</td> " +
            "<td > " + tweet.tweet + "</td> " +
            "<td>" +
          "<button onclick='deleteTweet(\"" + tweet.id + "\")' class='btn btn-danger'> " + 
          "<i class='fa fa fa-ban'></i> (D) elete </button>" + 
            "</td>" + 
              "</div> " +
            "</td> " +
            "</tr> ";
        });

        myTableTweets += "</tbody>" + "</table>";
        $("#listTweets").append(myTableTweets);
      }
    });
  }
  catch(e)
  {
    alert("error : " + e);
  }
}

function getOneTweet(tweetKey)
{
  alert(tweetKey);
  jQuery.support.cors =  true;
  try {
    $.ajax({
      url: "/readOneTweet",
      dataType: 'json',
      cache: false,
      contentType: false,
      processData: true,
      data: {"key": tweetKey},
      type: 'get',
      crossDomain: true,
      success : function(response){

        $('#usuario').val(response.usuario);
        $('#tweet').val(response.tweet);
        sessionStorage.setItem('keyUpdate', response.key);
      }
    });
  }
  catch(e)
  {
    alert("error : " + e);
  }
}

function updateTweet()
{
  try
  {
    var myKeyUpdate = sessionStorage['keyUpdate'];
    alert(myKeyUpdate);

    var val_usuario = $('#usuario').val();
    var val_tweet = $('#tweet').val();

    var myTweetUpdate = new Tweet();
    myTweetUpdate.usuario = val_usuario;
    myTweetUpdate.tweet = val_tweet;

    var form_data = new FormData();
    form_data.append("key", myKeyUpdate);
    form_data.append("usuario", myTweetUpdate.usuario);
    form_data.append("tweet", myTweetUpdate.tweet);

    jQuery.support.cors = true;

    jQuery.ajax({

      url: "/updateTweet",
      dataType: "text",
      cache: false,
      contentType: false,
      processData: false,
      data: form_data,
      type: "post",
      crossDomain: true,
      success: function(response){

        alert("key updated : " + response);
        $('#usuario').val(String.empty);
        $('#tweet').val(String.empty);
      },
      error: function(error){

        alert(error);
      }
    });
  }
  catch(error)
  {
    alert(error);
  }
}

function deleteTweet(tweetKey){

  try{

    alert(tweetKey);
    var form_data = new FormData();
    form_data.append("key", tweetKey);

    jQuery.support.cors = true;
    jQuery.ajax({

      url: "/deleteTweet",
      dataType: "text",
      cache: false,
      contentType: false,
      processData: false,
      data: form_data,
      type: "post",
      crossDomain: true,
      success: function(response){

        alert("key eliminada: " + response);
      },
      error: function(error){

        alert(error);
      }
    });
  }
  catch(error)
  {
    alert(error);
  }
}