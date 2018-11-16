$(document).ready(function(){
		
	
	$.ajax({
		url: "https://api.openweathermap.org/data/2.5/group?id=2063523,1642911,3433955&units=imperial&appid=738f1142ab2429d3f1ede0a99d92033c",
		type: "GET", 
		dataType:"JSON",

		success:function(data) {
			console.log(data);
			console.log(data.list[0].main.temp);

			$("#perth").click(function(){
				$("#currentTemp").html("The temperature in Perth is: " + data.list[0].main.temp + " degrees fahrenheit.");
			});
			$("#jakarta").click(function(){
				$("#currentTemp").html("The temperature in Jakarta is: " + data.list[1].main.temp + " degrees fahrenheit.");
			});
			$("#buenosaires").click(function(){
				$("#currentTemp").html("The temperature in Buenos Aires is: " + data.list[2].main.temp + " degrees fahrenheit.");
			});
				
		},
		error:function(data,textStatus, errorThrown){
			console.log("...");
			console.log(errorThrown);
		},

	});

});