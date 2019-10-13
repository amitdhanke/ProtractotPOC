describe("Drop Down Testsuite",function(){
	
	it("SPEC01",function(){
		
		browser.get("https://angularjs.org/");
		
		browser.manage().window().maximize();
		
		element(by.linkText("Find out more.")).click();
		
		//get the all options from the drop down..
		
		element.all(by.options("v as v.label group by v.group for v in $ctrl.versions")).then(function(index){
			
			for(var i = 0; i < index.length ; i++)
			{
				if(i == 3)
				{
					//click on the specific index element
					index[i].click();
				}
			}
		});
		
		
		
		expect(element(by.xpath("//option[@selected='selected']")).getText()).toEqual("v1.6.10");
		
		element(by.name("as_q")).sendKeys("E2E");
		
		element.all(by.repeater("item in value")).map(function(text,index) {
			
				console.log(" Tag Names : "+text.getTagName("a"));
				
				if(text.getTagName("a").getText() == "E2E Testing ")
					{
					 
					console.log(" Found the element at index "+index);
					
					text.click();
					 
					}			
			
		});
		
		
	});
});