$(document).ready(function(){

  //jQuery event handler: click the button
  $("button").on("click", function(){

    //API request to forismatic. don't forget method, format, and lang
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(quote){

      //create tweet link
      var tweetUrl = "";
      function tweetIt () {
        var str = quote.quoteText + "- " + quote.quoteAuthor;
        str = str.replace(/\s/g, '%20');
        tweetUrl = "<a href='https://twitter.com/share?text=" + str + "'";
        return(tweetUrl);
      }

      //replace .message html content with the quote
      $(".message").html(
        "<p class='quote'>\"" + quote.quoteText + "\"</p><p class='author'>" + quote.quoteAuthor + "</p>" + "<p class='thanks'><br>Special thanks to <a href='" + quote.quoteLink + "'>forismatic</a></p><p>" + tweetIt(quote) + "><img src='http://logomecca.com/wp-content/uploads/2015/07/twitter_bird_white_logo_png_font_typeface_square_android_icon_vector_png_eps_button_download_font_black_and_white_transparent_background_maker_ai_file_adobe_illustrator_free1.png' alt='tweet' height='34px' width='40px'/></a></p>");

    });
  });
});
