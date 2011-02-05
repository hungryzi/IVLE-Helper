var img = document.body.getElementsByTagName("img");
var flag = false;
for (var i = 0; i < img.length; i++) {
	var src = img[i].src;
	if (src == "http://ivle.nus.edu.sg/images/notyet_downloaded.gif") {
		checkbox = img[i].parentNode.parentNode.parentNode.parentNode.parentNode.previousSibling.previousSibling.previousSibling.childNodes[1];
		checkbox.setAttribute('checked', true);
		
		flag = true;
	}
}
if (flag) {
	document.getElementById('ctl00_ctl00_ContentPlaceHolder1_ContentPlaceHolder1_btnDownload').focus();
}