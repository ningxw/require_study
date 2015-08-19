require.config({
	baseUrl: "./js",
	paths: {
		"say": "say",
		"name": "./1/name",
		"jquery": "jquery-1.7.2"
	}
});

require(["name"], function(name) {
	//alert(say(name));
	var str = '{"moduleName":"aaa","containerHeight":120,"imagesData":[{"x":10,"y":0,"width":10,"height":10,"imageUrl":"http://d6.yihaodianimg.com/TEST/M01/28/2B/CqGQPVW5-VGAFwbiAAAq_A3DVuI73300.jpg","linkType":2,"linkData":"1234"},{"x":20,"y":0,"width":10,"height":10,"imageUrl":"http://d6.yihaodianimg.com/TEST/M02/28/29/CqGQPlW5-fmAKWQPAAE-JKlJFAk17700.jpg","linkType":2,"linkData":"12345"}]}'; 
	var strJson = JSON.parse(str);
	console.log("aaa");
});
