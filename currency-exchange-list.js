
(function($) {
	$.fn.getCurrencyExchangeRates = function (options){

		var settings = $.extend({
			currencyList: ["EUR","GBP","TRY","BTC"],
			selector: '.forex-ticker',
		}, options );

		 var $exchangeList = $(settings.selector);
			var tarih=new Date();
			var gun=tarih.getDay();
			var ay=tarih.getMonth();
			var yil=tarih.getFullYear();
			var gunler= ['Pazar', 'Pazartesi', 'Salı','Çarşamba','Perşembe','Cuma','Cumartesi'];
			var aylar= ['Ocak', 'Şubat', 'Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'];
			            
	

		 $(".shown-hidden").hide();
		 $("#eur-usd-click").click(function(){
			$('#eur-usd-shown-hidden').html("EUR:Euro  "+"USD:AMERİKAN DOLARI"+"<br>"+"Tarih:"+tarih.getDate()+' '+aylar[ay]+' '+yil+' '+gunler[gun]);
			$("#eur-usd-shown-hidden").toggle();
		});
		$("#try-usd-click").click(function(){
			$('#try-usd-shown-hidden').html("TRY:Türk Lirası  "+"USD:AMERİKAN DOLARI"+"<br>"+"Tarih:"+tarih.getDate()+' '+aylar[ay]+' '+yil+' '+gunler[gun]);
			$("#try-usd-shown-hidden").toggle();

		});
		$("#gbp-usd-click").click(function(){
			$('#gbp-usd-shown-hidden').html("GBP:İngiliz Sterlini  "+"USD:AMERİKAN DOLARI"+"<br>"+"Tarih:"+tarih.getDate()+' '+aylar[ay]+' '+yil+' '+gunler[gun]);
			$("#gbp-usd-shown-hidden").toggle();
		});
		$("#btc-usd-click").click(function(){
			$('#btc-usd-shown-hidden').html("BTC:Bitcoin  "+"USD:AMERİKAN DOLARI"+"<br>"+"Tarih:"+tarih.getDate()+' '+aylar[ay]+' '+yil+' '+gunler[gun]);
			$("#btc-usd-shown-hidden").toggle();
		});
		$("#aud-usd-click").click(function(){
			$('#aud-usd-shown-hidden').html("AUD:Avustralya Doları  "+"USD:AMERİKAN DOLARI"+"<br>"+"Tarih:"+tarih.getDate()+' '+aylar[ay]+' '+yil+' '+gunler[gun]);
			$("#aud-usd-shown-hidden").toggle();
		});
		$("#jpy-usd-click").click(function(){
			$('#jpy-usd-shown-hidden').html("JPY:Japon Yeni  "+"USD:AMERİKAN DOLARI"+"<br>"+"Tarih:"+tarih.getDate()+' '+aylar[ay]+' '+yil+' '+gunler[gun]);
			$("#jpy-usd-shown-hidden").toggle();
		});
		$("#aed-usd-click").click(function(){
			$('#aed-usd-shown-hidden').html("AED:Birleşik Arap Emirlikleri Dirhemi  "+"USD:AMERİKAN DOLARI"+"<br>"+"Tarih:"+tarih.getDate()+' '+aylar[ay]+' '+yil+' '+gunler[gun]);
			$("#aed-usd-shown-hidden").toggle();
		});		
		$("#nzd-usd-click").click(function(){
			$('#nzd-usd-shown-hidden').html("NZD:Yeni Zelanda Doları  "+"USD:AMERİKAN DOLARI"+"<br>"+"Tarih:"+tarih.getDate()+' '+aylar[ay]+' '+yil+' '+gunler[gun]);
			$("#nzd-usd-shown-hidden").toggle();
		});
		$("#chf-usd-click").click(function(){
			$('#chf-usd-shown-hidden').html("CHF:İsviçre Frangı  "+"USD:AMERİKAN DOLARI"+"<br>"+"Tarih:"+tarih.getDate()+' '+aylar[ay]+' '+yil+' '+gunler[gun]);
			$("#chf-usd-shown-hidden").toggle();
		});

		var $table = $('#table');
		var access_key = '123456';
		$.ajax({
	  url: 'http://apilayer.net/api/live?access_key=' + access_key,   
    dataType: 'jsonp',
})
.done(function(json) {

		$('#eur-usd').append(json.quotes.USDEUR);
		$('#try-usd').append(json.quotes.USDTRY);
		$('#gbp-usd').append(json.quotes.USDGBP);
		$('#btc-usd').append(json.quotes.USDBTC);
		$('#aud-usd').append(json.quotes.USDAUD);
		$('#jpy-usd').append(json.quotes.USDJPY);
		$('#aed-usd').append(json.quotes.USDAED);
		$('#nzd-usd').append(json.quotes.USDNZD);
		$('#chf-usd').append(json.quotes.USDCHF);
	
	var moveLeft = 20;
	var moveDown = 10;
  
	$('#eur-usd').hover(function(e) {
	  $('div#pop-up1').show();
		//.css('top', e.pageY + moveDown)
		//.css('left', e.pageX + moveLeft)
		//.appendTo('body');
	}, function() {
	  $('div#pop-up1').hide();
	});
  
	$('#eur-usd').mousemove(function(e) {
	  $("div#pop-up1").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
	});

	$('#try-usd').hover(function(e) {
		$('div#pop-up2').show();
		  //.css('top', e.pageY + moveDown)
		  //.css('left', e.pageX + moveLeft)
		  //.appendTo('body');
	  }, function() {
		$('div#pop-up2').hide();
	  });
	
	  $('#try-usd').mousemove(function(e) {
		$("div#pop-up2").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
	  });

	  $('#gbp-usd').hover(function(e) {
		$('div#pop-up3').show();
		  //.css('top', e.pageY + moveDown)
		  //.css('left', e.pageX + moveLeft)
		  //.appendTo('body');
	  }, function() {
		$('div#pop-up3').hide();
	  });
	
	  $('#gbp-usd').mousemove(function(e) {
		$("div#pop-up3").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
	  });
		
	  $('#btc-usd').hover(function(e) {
		$('div#pop-up4').show();
		  //.css('top', e.pageY + moveDown)
		  //.css('left', e.pageX + moveLeft)
		  //.appendTo('body');
	  }, function() {
		$('div#pop-up4').hide();
	  });
	
	  $('#btc-usd').mousemove(function(e) {
		$("div#pop-up4").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
	  });

	  $('#aud-usd').hover(function(e) {
		$('div#pop-up5').show();
		  //.css('top', e.pageY + moveDown)
		  //.css('left', e.pageX + moveLeft)
		  //.appendTo('body');
	  }, function() {
		$('div#pop-up5').hide();
	  });
	
	  $('#aud-usd').mousemove(function(e) {
		$("div#pop-up5").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
	  });

	  $('#jpy-usd').hover(function(e) {
		$('div#pop-up6').show();
		  //.css('top', e.pageY + moveDown)
		  //.css('left', e.pageX + moveLeft)
		  //.appendTo('body');
	  }, function() {
		$('div#pop-up6').hide();
	  });
	
	  $('#jpy-usd').mousemove(function(e) {
		$("div#pop-up6").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
	  });

	  $('#aed-usd').hover(function(e) {
		$('div#pop-up7').show();
		  //.css('top', e.pageY + moveDown)
		  //.css('left', e.pageX + moveLeft)
		  //.appendTo('body');
	  }, function() {
		$('div#pop-up7').hide();
	  });
	
	  $('#aed-usd').mousemove(function(e) {
		$("div#pop-up7").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
	  });

	  $('#nzd-usd').hover(function(e) {
		$('div#pop-up8').show();
		  //.css('top', e.pageY + moveDown)
		  //.css('left', e.pageX + moveLeft)
		  //.appendTo('body');
	  }, function() {
		$('div#pop-up8').hide();
	  });
	
	  $('#nzd-usd').mousemove(function(e) {
		$("div#pop-up8").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
	  });
	
	  $('#chf-usd').hover(function(e) {
		$('div#pop-up9').show();
		  //.css('top', e.pageY + moveDown)
		  //.css('left', e.pageX + moveLeft)
		  //.appendTo('body');
	  }, function() {
		$('div#pop-up9').hide();
	  });
	
	  $('#chf-usd').mousemove(function(e) {
		$("div#pop-up9").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
	  });
		
		

			
})

		.always(function(){
			$exchangeList.append($table);
		});

}}(jQuery));
