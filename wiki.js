function random(){

window.open("https://en.wikipedia.org/wiki/Special:Random");

}
function handleResponse(response){
	
	for( var i = 0; i < response.query.search.length;i++){
	var tit = response.query.search[i].title;
	var snip = response.query.search[i].snippet;
	document.getElementById("links").innerHTML +="<a href='https://en.wikipedia.org/wiki/"+ tit+"'" +"target='_blank'><div class='results'>"+ tit + "<br>" + snip + "..."+"</div></a>";

}

}

function search(){
	
	document.getElementById("links").innerHTML = "";
var textVal = document.getElementById("wikiEntry").value;

var script = document.createElement("script");
script.src = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&callback=handleResponse&srsearch="
	+ textVal;

document.body.insertBefore(script,document.body.firstChild);
return false;
}


