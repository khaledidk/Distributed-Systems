
let SaveDate ;	
$(document).ready(function () {
		

  
    $.ajax({url: "http://khaledad.mysoft.jce.ac.il/ex1/sources/get_current_date.php", success: function(result){ // ajax request to get dat
     SaveDate = result;
  
        $(".date").html(result);
      },
				error: function (jqXhr, textStatus, errorMessage) { // error callback 
				alert("there is an Error: " +"404 not found");
				}
        
    });
        let datajs;

        $("#btn4").click(function(){ // do ajax request if click in button number 4, to get animals details
         
  $.ajax('https://zoo-animal-api.herokuapp.com/animals/rand/4', 
			{
		    
			   dataType: 'json', // type of response data
				success: function (data,status,xhr) {   // success callback function
			    	//let dataJ = JSON.parse(data);
			    	$('.rand_animals_flex').html('<div' +' class="All_animals_name_img">' + '</div>' );
			    	datajs = data;
			    	for(let i = 0 ; i<4 ; i++){
			    
	 $('.All_animals_name_img').append('<div' +' class="animals_name_img">'+'<p id= b'+i+ '>' +  data[i].name + '</p>'+'<img id= '+i+' src='+data[i].image_link  + '>' +'<div' +' class= "inf'+i+'">'+'</div>' + '</div>' );
			    	}                        
				},
				error: function (jqXhr, textStatus, errorMessage) { // error callback 
				alert("there is an Error: " +"404 not found" );
				}
			});
		 });
		 
		     $("#btn8").click(function(){// do ajax request if click in button number 8, to get animals details
         
  $.ajax('https://zoo-animal-api.herokuapp.com/animals/rand/8', 
			{
		    
			   dataType: 'json', // type of response data
				success: function (data,status,xhr) {   // success callback function
			    	//let dataJ = JSON.parse(data);
			    		datajs = data;
			    		$('.rand_animals_flex').html('<div' +' class="All_animals_name_img">' + '</div>' );
			    	for(let i = 0 ; i<8 ; i++){
			       	$('.All_animals_name_img').append('<div' +' class="animals_name_img">'+'<p id= b'+i+ '>' +  data[i].name + '</p>'+'<img id= '+i+' src='+data[i].image_link  + '>' +'<div' +' class= "inf'+i+'">'+'</div>' + '</div>' );
				
			    	}                        
				},
				error: function (jqXhr, textStatus, errorMessage) { // error callback 
					alert("there is an Error: " +"404 not found" );
				}
			});
		 });
  
      $("#btn10").click(function(){// do ajax request if click in button number 10, to get animals details
         
  $.ajax('https://zoo-animal-api.herokuapp.com/animals/rand/10', 
			{
		    
			   dataType: 'json', // type of response data
				success: function (data,status,xhr) {   // success callback function
			    	//let dataJ = JSON.parse(data);
			    
			    	$('.rand_animals_flex').html('<div' +' class="All_animals_name_img">' + '</div>' );
			    		datajs = data;
			    	for(let i = 0 ; i<10 ; i++){
			     	 $('.All_animals_name_img').append('<div' +' class="animals_name_img">'+'<p id= b'+i+ '>' +  data[i].name + '</p>'+'<img id= '+i+' src='+data[i].image_link  + '>' +'<div' +' class= "inf'+i+'">'+'</div>' + '</div>' );
				
			    	}                        
				},
				error: function (jqXhr, textStatus, errorMessage) { // error callback 
					alert("there is an Error: " +"404 not found" );
				}
			});
					

		 });

		 $('body').on('click','img',function(button){
		   		 
		   		   
 let date7 = splite_date_7(  SaveDate);
 
  let date_today = splite_date(SaveDate);
  
		      let str1 = ".inf"+button.target.id;
		     if (button.target &&  $(str1 ).is(':empty')) {
		         let url = 'https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/'+datajs[button.target.id].name+'/daily/'+date7 +'/'+date_today;
		         
   $.ajax(url, 
			{
		    
			   dataType: 'json', // type of response data
			  
				success: function (data,status,xhr) {   // success callback function
				let SumView = 0;
			
			 for(let i = 0; i < data["items"].length ; i++){
			     SumView+=data["items"][i].views;
			 }
		             
          $(str1).html('<p>' +"animal type: "+datajs[button.target.id].animal_type+ '</p>' +'<p>' +"diet: "+datajs[button.target.id].diet+ '.</p>'+'<p>' +"life Span: "+datajs[button.target.id].lifespan+" years."+ '</p>'+'<p>' +"min length: " +(parseFloat(datajs[button.target.id].length_min)*0.3048).toFixed(2)+" meters."+ '</p>'
                     +'<p>' +"max length: " +(parseFloat(datajs[button.target.id].length_max)*0.3048).toFixed(2)+" meters."+ '</p>' +'<p>'+"min weight: " + (parseFloat(datajs[button.target.id].weight_min)*0.45359237).toFixed(2)+" kilograms." +'<p>'+"max weight: " + (parseFloat (datajs[button.target.id].weight_max)*0.45359237).toFixed(2) +" kilograms"+'.</p>'+'<p>'+"Views: "+SumView+  ' .</p>'  );
                          
				},
				error: function (jqXhr, textStatus, errorMessage) { // error callback 
				 $(str1).html('<p>' +"animal type: "+datajs[button.target.id].animal_type+ '</p>' +'<p>' +"diet: "+datajs[button.target.id].diet+ '.</p>'+'<p>' +"life Span: "+datajs[button.target.id].lifespan+" years."+ '</p>'+'<p>' +"min length: " +(parseFloat(datajs[button.target.id].length_min)*0.3048).toFixed(2)+" meters."+ '</p>'
                     +'<p>' +"max length: " +(parseFloat(datajs[button.target.id].length_max)*0.3048).toFixed(2)+" meters."+ '</p>' +'<p>'+"min weight: " + (parseFloat(datajs[button.target.id].weight_min)*0.45359237).toFixed(2)+" kilograms." +'<p>'+"max weight: " + (parseFloat(datajs[button.target.id].weight_max)*0.45359237).toFixed(2) +" kilograms"+'.</p>'+'<p>'+"Views: "+ '</p>'  );
                          
				 

				}
			});
       
 
    }else if(button.target &&  !$(str1 ).is(':empty')){
     
        $( str1  ).empty();
      
    }
		     ;})
		     		  
		     		  $('body').on('click','p',function(button){
		             let date7 = splite_date_7(  SaveDate);
 
              let date_today = splite_date(SaveDate);
 
		   	      let str1 = ".inf"+button.target.id.charAt(1);
		   	        
		     if (button.target &&  $(str1 ).is(':empty')) {

       let url = 'https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/'+datajs[button.target.id.charAt(1)].name+'/daily/'+date7 +'/'+date_today;
        $.ajax(url, 
			{
		    
			   dataType: 'json', // type of response data
			   	
				success: function (data,status,xhr) {   // success callback function
				let SumView = 0;
			 for(let i = 0; i < data["items"].length ; i++){
			     SumView+=data["items"][i].views;
			 }
		                  
          $(str1).html('<p>' +"animal type: "+datajs[button.target.id.charAt(1)].animal_type+ '</p>' +'<p>' +"diet: "+datajs[button.target.id.charAt(1)].diet+ '.</p>'+'<p>' +"life Span: "+datajs[button.target.id.charAt(1)].lifespan+" years."+ '</p>'+'<p>' +"min length: " +(parseFloat(datajs[button.target.id.charAt(1)].length_min)*0.3048).toFixed(2)+" meters."+ '</p>'
                     +'<p>' +"max length: " +(parseFloat(datajs[button.target.id.charAt(1)].length_max)*0.3048).toFixed(2)+" meters."+ '</p>' +'<p>'+"min weight: " + (parseFloat(datajs[button.target.id.charAt(1)].weight_min)*0.45359237).toFixed(2)+" kilograms." +'<p>'+"max weight: " + (parseFloat(datajs[button.target.id.charAt(1)].weight_max)*0.45359237).toFixed(2) +" kilograms"+'.</p>'+'<p>'+"Views: "+SumView+  ' .</p>'  );
                          
                          
				},
				error: function (jqXhr, textStatus, errorMessage) { // error callback 
		 $(str1).html('<p>' +"animal type: "+datajs[button.target.id.charAt(1)].animal_type+ '</p>' +'<p>' +"diet: "+datajs[button.target.id.charAt(1)].diet+ '.</p>'+'<p>' +"life Span: "+datajs[button.target.id.charAt(1)].lifespan+" years."+ '</p>'+'<p>' +"min length: " +(parseFloat(datajs[button.target.id.charAt(1)].length_min)*0.3048).toFixed(2)+" meters."+ '</p>'
                     +'<p>' +"max length: " +(parseFloat(datajs[button.target.id.charAt(1)].length_max)*0.3048).toFixed(2)+" meters."+ '</p>' +'<p>'+"min weight: " + (parseFloat(datajs[button.target.id.charAt(1)].weight_min)*0.45359237).toFixed(2)+" kilograms." +'<p>'+"max weight: " + (parseFloat(datajs[button.target.id.charAt(1)].weight_max)*0.45359237).toFixed(2) +" kilograms"+'.</p>'+'<p>'+"Views: "+  '</p>'  );
				}
			});
 
    }else if(button.target &&  !$(str1 ).is(':empty')){
      
        $( str1  ).empty();
      
    }


});

});
function splite_date_7(Save){ // this function find the date before 7 days and put it in string 
//Get today's date using the JavaScript Date object.
let newSave = update_Date(Save)
let ourDate = new Date(newSave);
 

//Change it so that it is 7 days in the past.
let pastDate = ourDate.getDate() - 7;

ourDate.setDate(pastDate);

//Log the date to our web console.
let day = ourDate.getDate();
let mounth = ourDate.getMonth()+1;
let year = ourDate.getFullYear() 
let str = year.toString();
   
     if(mounth.toString().length < 2){ // fill the mouth in string 
         str+='0'+mounth;
     }else{
         str+= mounth;
     }
     
      if(day.toString().length < 2){// fill the day in string 
         str+='0'+day;
     }else{
         str+= day;
     }
    
return str;     
}
function update_Date(SaveDate) { // this function convert date to american date
    let date = SaveDate.split('/');
    date = date[1] + '/' + date[0] + '/' + date[2];
    return date;
}
function splite_date(Save){// this function get the date and put it in string 
let newSave =update_Date(Save)
let ourDate = new Date(newSave);
 
    let day = ourDate.getDate();
let mounth = ourDate.getMonth()+1;
let year = ourDate.getFullYear() 
let str = year.toString();
   
     if(mounth.toString().length < 2){
         str+='0'+mounth;
     }else{
         str+= mounth;
     }
     
      if(day.toString().length < 2){
         str+='0'+day;
     }else{
         str+= day;
     }
  
return str;     
}



