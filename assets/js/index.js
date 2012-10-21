$(function(){
	$('.btn-submit').click(function() {	
		if ($('#wish-text').val() != "") {
			console.log($('#wish-text').val());
			console.log($("#lat").val());
			console.log($('#long').val());
			
			$('.wish-tree').load('/seed.html');
			
			$.get("output.php",{
			"query":$('#wish-text').val(),
			 "lat": $("#lat").val(),
			 "long":$("#long").val()}, function (data) {
			 	console.log('here I am');
			 	console.log(data);
			 	data = JSON.parse(data);
			 	console.log(data);
				
				var i = 0;
							for (var key in data) {
								
								var right = Math.random() * 300 + 500;
								var top = Math.random() * 200 + 400;
								if (i==0) {
								$('<div class="fruit-big">')
								//					.html(key)
													.insertBefore($('.wish-tree'))
													.css("right", right)
													.css("top", top)
													.click(function(){
														document.location.href = key;
													});
								} else {
								$('<div class="fruit">')
				//					.html(key)
									.insertBefore($('.wish-tree'))
									.css("right", right)
									.css("top", top)
									.click(function(){
										document.location.href = key;
									});
								}
								i++;
								if(i>10) break;
							}
			 });
//			data = {
//				"http://test1.com":"123",
//				"http://test2.com":"133",
//				"http://test3.com":"1456",
//				"http://test4.com":"123",
//				"http://test5.com":"123",
//				"http://test6.com":"123",
//				"http://test7.com":"123",
//				"http://test8.com":"123",
//				"http://test9.com":"123",
//				"http://test10.com":"123",
//				"http://test11.com":"123",
//				"http://test12.com":"123",
//				"http://test13.com":"123",
//				"http://test14.com":"123"};
//			for (var key in data) {
//				var right = Math.random() * 300 + 500;
//				var top = Math.random() * 200 + 400;
//				$('<div class="fruit">')
//					.html(key)
//					.insertBefore($('.wish-tree'))
//					.css("right", right)
//					.css("top", top)
//					.click(function(){
//						document.location.href = key;
//					});
//			}

//			$('<div>').dialog('open', );
//			$( ".wish-tree" ).dialog('open');
//			$.post(,
//				{"query":""},
//				function (data) {
//					console.log(data);
//				});
		} else {
			// todo: show the waring.
		}
	});
});