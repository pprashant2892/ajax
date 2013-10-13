var xmlHttp = cerateXmlHttpRequestObject();

function cerateXmlHttpRequestObject(){
	var xmlHttp;
	if(window.XMLHttpRequest){
		xmlHttp = new XMLHttpRequest();
	}else{
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	return xmlHttp;
}

function process(){
	if(xmlHttp){
		name = encodeURIComponent(document.getElementById("username").value);
		document.getElementById("display").innerHTML='<img src="http://prashantyadav.x10host.com/projects/tgmc/my/loading.gif" width="100px" height=""100px/>';
		xmlHttp.open("GET","my.php?username="+name,true);
		xmlHttp.onreadystatechange = serverResponse;
		xmlHttp.send(null);
	}
}
function serverResponse(){
if(xmlHttp.readyState==4){
	if(xmlHttp.status==200){
		xmlRes = xmlHttp.responseXML;
		xmlDocEle = xmlRes.documentElement;
		message = xmlDocEle.firstChild.data;
		document.getElementById("display").innerHTML='<span style="color:#000;">' + message + '</span>';
	}
}
}
