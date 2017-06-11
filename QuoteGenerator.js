$(document).ready(function(){

  //jQuery event handler: click the button
  $("button").on("click", function(){

    //API request to forismatic. don't forget method, format, and lang
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", function(quote){

      //create tweet link
      var tweetUrl = "";
      function tweetIt () {
        tweetUrl = 'https://twitter.com/share?text=' + quote.quoteText + ' - ' + quote.quoteAuthor;
        console.log(tweetUrl);
      }

      //replace .message html content with the quote
      $(".message").html(
        "<p class='quote'>\"" + quote.quoteText + "\"</p><p class='author'>" + quote.quoteAuthor + "</p>" + "<p class='thanks'><br>Special thanks to <a href='" + quote.quoteLink + "'>forismatic</a></p><p><a href=" + tweetIt(quote) + "><img src='http://logomecca.com/wp-content/uploads/2015/07/twitter_bird_white_logo_png_font_typeface_square_android_icon_vector_png_eps_button_download_font_black_and_white_transparent_background_maker_ai_file_adobe_illustrator_free1.png' alt='tweet' height='42.5px' width='50px'/></a></p>");

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
