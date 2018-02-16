$(document).ready(function() {
	var newsValue = " ";
	$("#newsSubmit").click(function(e) {
		e.preventDefault();
		newsValue = $("#newsInput").val();
		console.log(newsValue);
		var url = 'https://newsapi.org/v2/everything?' + 'q=' + newsValue + "&" + 
		    'from=2018-02-16&' + 'sortBy=popularity&' + 'apiKey=43cd043466984ada8c4d6ac84c2df3f4';
		$.ajax({
			url : url,
			dataType : "json",
			success : function(json) {
			    console.log(json);
			    var article = " ";
			    var newsArticleName  = "";
			    for (var i = 0; i < 5; ++i) {
				newsArticleName = json.articles[i].source.name;
				console.log(newsArticleName);
				var usNews = '<h2>News story from: ' + newsArticleName + "</h2>";
				usNews += '<h5>Author: ' + json.articles[i].author + "</h5>";
				usNews += '<p>Description: '+ json.articles[i].description + "</p>";
				usNews += '<img src=' + json.articles[i].urlToImage + ">"
				var articleUrl = json.articles[i].url;
				usNews += '<p>The URL for the article (have to copy and paste):<br>' + articleUrl + "</p>";
				$("#userPickedArticle"+ i).html(usNews);
			    }
			}
	       });
       });
});