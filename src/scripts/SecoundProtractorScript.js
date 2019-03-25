describe("MyTIAA", function() {
	
	it(" Try LogIn ", function() {
		
		browser.get("https://angularjs.org");
		
		browser.manage().window().maximize();
		
		//click on the element 
		element(by.css("body > div:nth-child(2) > div.stage-container > div > div:nth-child(2) > a")).click();
		
		//get the window id
		var window_id = browser.getWindowHandle();
		
		console.log("  Window ID -->  "+window_id);
		
		//switch the window
		browser.switchTo().window(window_id);
		
		//wait till text Appears on next window
		 browser.sleep(10000);
		//browser.waitForAngular();
		 
		 browser.switchTo().defaultContent();
		
		//get the text from the 
		var  textFrtomWindow = element(by.css("body > div:nth-child(2) > div.stage-container > div > div:nth-child(4) > span"));
		
		console.log("  Text From The Window Handle  "+textFrtomWindow.getText());
		
	});
	
});