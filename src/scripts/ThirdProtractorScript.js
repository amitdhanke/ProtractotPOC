describe("Drop Down Testsuite",function(){
		
	xit("SPEC01",function(done){
		
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
		
		element.all(by.xpath("//*[@ng-repeat='item in value']/a")).map(function(text,index) {
			
				console.log(" Tag Names : "+text[index].getText());
				
				if(text[index].getText() == "E2E Testing ")
					{
					 
					console.log(" Found the element at index "+index);
					
					text[index].click();
					 
					}			
			done();
		});
		
		
	});
	
	it("SPEC02",function(done){
		
	//	browser.waitForAngularEnabled(false); // disabled the wait for angular base application
		
		browser.get("https://www.jetblue.com/");

		//browser.navigate().refresh();
		
		browser.manage().window().maximize();
		
		element(by.id("jb-radio-1")).click();
		
		expect(element(by.id("jb-radio-1")).isSelected()).toBeTruthy();
		
		element(by.id("city-selector_wu7hfmuqn")).sendKeys("New York");
		
		element(by.xpath("//span[contains(text(),'Albany, NY (ALB)')]")).click();
		
		element(by.name("arrowRoundtrip")).click();
		done(); // call done to avoid asynch timeout
	}); 	
	
});