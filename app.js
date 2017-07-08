$(document).ready(function() {


  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json) {
    var quote = json.quoteText
    $('.twitter-share-button').attr('href', "https://twitter.com/intent/tweet?text=" + quote)
    var quote = "<h1>" + json.quoteText + "</h1>";
    var author = "<p>" + json.quoteAuthor + "</p>";
    $('#quote').html(quote);
    $('#quote').append(author)
    $('#quote').fadeIn(200);
  });

  $('#newQuote').on('click', function() {
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json) {
      var quote = json.quoteText
      $('.twitter-share-button').attr('href', "https://twitter.com/intent/tweet?text=" + quote)
      quote = "<h1>" + json.quoteText + "</h1>";
      var author = "<p>" + json.quoteAuthor + "</p>";
      $('#quote').html(quote);
      $('#quote').append(author)
      $('#quote').fadeIn(200);
    });
  });


});
