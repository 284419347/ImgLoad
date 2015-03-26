var getImgload = function(abs,fn){
	var img = document.getElementsByTagName("img"); //获取页面图片img
	var imgList = abs;	//获取手动添加的img
	var back = {};//返回值，sum 图片总数 num 图片已加载数量
	for(var i = 0;i< img.length;i++){
		imgList.push(img[i].src);
	}
	back.sum = imgList.length;
	//alert(img[0].src)
	imgLoad();
	function imgLoad(){
		var num=0;
		for(var i = 0;i< imgList.length;i++){
			preImage(imgList[i],function(){
				num++;
				back.num = num;
				fn.call(back);
			});
		}
	}
	//判断图片是否加载,加载完成后执行返回函数callback
	function preImage(url,callback){  
		var img = new Image();
		img.src = url;  
		if(img.complete){
			callback.call(img); 
			return;
		}  
		img.onload = function () {
			callback.call(img);
		};  
	}  
};


