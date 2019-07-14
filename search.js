function tplawesome(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res}
$(function(){
$("form").on("submit",function(e){
	e.preventDefault();
	var request=gapi.client.youtube.search.list({
		part:"snippet",
		type:"video",
		q:encodeURIComponent($("#searc").val()).replace(/%20/g,"+"),
		maxResult:20,
		order:"viewCount",
		publishedAfter:"2015-01-01T00:00:00Z"
	});
	request.execute(function(response){
		var results=response.result;
		$.each(results,function(index,item){
			$get("tpl/section",function(data){
				$("#results").append(tplawesome(data,[{"title":item.snippet.title,"videoid":item.id.videoId}]));
			})
		})
	})
})
});
function init(){
	gapi.client.setApiKey("AIzaSyA6jbbQLgRg3_TSJHmcvePljIGaPNr6Fa8");
	gapi.client.load("youtube","v3",function(){

	})
}