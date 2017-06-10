$(document).ready(function(){

  //jQuery event handler: click the button
  $("button").on("click", function(){

    //API request to forismatic. don't forget method, format, and lang
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", function(quote){

      //replace .message html content with the quote
      $(".message").html(
        "<p class='quote'>\"" + quote.quoteText + "\"</p><p class='author'>" + quote.quoteAuthor + "</p>" + "<p class='thanks'><br>Special thanks to <a href='" + quote.quoteLink + "'>forismatic</a></p>");

      //add quote link to tweet button
      var link = "";

      $("#buttonArea a").append(link);
    });
  });
});

window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));
