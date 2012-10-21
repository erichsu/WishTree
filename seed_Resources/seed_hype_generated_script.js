//	HYPE.documents["WishTree"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "seed_Resources";
	var documentName = "seed";
	var documentLoaderFilename = "seed_hype_generated_script.js";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_100 == "undefined") {
		if(typeof window.HYPE_100_DocumentsToLoad == "undefined") {
			window.HYPE_100_DocumentsToLoad = new Array();
			window.HYPE_100_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=100';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_100_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	var hypeDoc = new HYPE_100();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",N:"i",f:"d",aT:"i",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",aW:"f",aI:"i",S:"i",T:"i",l:"d",aX:"i",aJ:"i",m:"c",n:"c",aK:"i",X:"i",aZ:"i",A:"c",Y:"i",aL:"i",B:"c",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};

var scenes = [{initialValues:{"17":{o:"content-box",h:"Wallpaper-tree.jpg",x:"visible",a:101,q:"100% 100%",b:133,j:"absolute",r:"inline",c:403,k:"div",z:"1",d:396,e:"0.000000"},"16":{o:"content-box",h:"seed0.png",p:"no-repeat",x:"visible",a:255,q:"100% 100%",b:240,j:"absolute",r:"inline",c:96,k:"div",z:"4",d:151,e:"0.000000"},"19":{o:"content-box",h:"seed3.png",p:"no-repeat",x:"visible",a:255,q:"100% 100%",b:110,j:"absolute",r:"inline",c:112,k:"div",z:"3",d:274,e:"0.000000"},"15":{o:"content-box",h:"seed1.jpg",x:"visible",a:62,q:"100% 100%",b:56,j:"absolute",r:"inline",c:187,k:"div",z:"5",d:166,aY:"0",e:"1.000000",f:"-14deg"},"18":{o:"content-box",h:"tree0.png",p:"no-repeat",x:"visible",a:165,q:"100% 100%",b:177,j:"absolute",r:"inline",c:233,k:"div",z:"2",d:223,e:"0.000000"}},sceneIndex:0,timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:0.33333334,i:"f",e:"139deg",r:1,s:"-14deg",o:"15"},{f:"2",t:0,d:0.33333334,i:"b",e:82,r:1,s:56,o:"15"},{f:"2",t:0,d:0.33333334,i:"a",e:200,r:1,s:62,o:"15"},{f:"2",t:0,d:0.33333334,i:"c",e:87,r:1,s:187,o:"15"},{f:"2",t:0,d:0.33333334,i:"d",e:77,r:1,s:166,o:"15"},{f:"2",t:0,d:1.5666666,i:"e",e:"0.800000",r:1,s:"1.000000",o:"15"},{f:"2",t:0.33333334,d:0.43333331,i:"d",e:52,s:77,o:"15"},{f:"2",t:0.33333334,d:0.86666667,i:"f",e:"0deg",s:"139deg",o:"15"},{f:"2",t:0.33333334,d:0.43333331,i:"a",e:279,s:200,o:"15"},{f:"2",t:0.33333334,d:0.43333331,i:"b",e:137,s:82,o:"15"},{f:"2",t:0.33333334,d:0.43333331,i:"c",e:59,s:87,o:"15"},{f:"2",t:0.76666665,d:0.4333334,i:"b",e:218,s:137,o:"15"},{f:"2",t:1.2,d:0.5999999,i:"b",e:347,s:218,o:"15"},{f:"2",t:1.5666666,d:0.23333335,i:"e",e:"0.000000",s:"0.800000",o:"15"},{f:"2",t:1.6333333,d:0.23333335,i:"e",e:"1.000000",r:1,s:"0.000000",o:"16"},{f:"2",t:1.8666667,d:0.43333328,i:"e",e:"0.777574",s:"1.000000",o:"16"},{f:"2",t:2.2666667,d:0.33333325,i:"e",e:"1.000000",r:1,s:"0.000000",o:"19"},{f:"2",t:2.3,d:0.83333349,i:"e",e:"0.000000",s:"0.777574",o:"16"},{f:"2",t:2.5999999,d:0.30000019,i:"e",e:"1.000000",s:"1.000000",o:"19"},{f:"2",t:2.9000001,d:0.23333335,i:"e",e:"0.000000",s:"1.000000",o:"19"},{f:"2",t:2.9666667,d:0.4666667,i:"e",e:"1.000000",r:1,s:"0.000000",o:"18"},{f:"2",t:3.4333334,d:1.0666666,i:"e",e:"0.000000",s:"1.000000",o:"18"},{f:"2",t:3.6666667,d:0.23333335,i:"e",e:"1.000000",r:1,s:"0.000000",o:"17"},{f:"2",t:3.6666667,d:1.3333333,i:"b",e:4,r:1,s:133,o:"17"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:5}},perspective:"600px",oid:"1",backgroundColor:"#FFFFFF",name:"Untitled Scene"}];


	
	var javascripts = [];


	
	var Custom = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("Custom." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			Custom[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.Custom = Custom;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID("wishtree_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(1);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

