var getName; // HTML needs to provide these variables outside function to have access for HTML.. this is a scope issue

$(document).ready(function(){ 

				//need error checking at some point for null value inputs
// wrap in functions so that they do not just run the minute it loads, need to be inside an action like a button click or mouse click


$("#reload").on("click",function(){
		reloadPuppies();		
	});

reloadPuppies = function(){
$.ajax({
				method:'GET', //do I have to have single quotes?
				url: '/puppies'
				
		}).then function(response) { //need to loop through object that it returns and push to html. question: why the ` vs ' vs " below...
			console.log(response); 
			dogs = response;
			for (var i = 0; i < dogs.length; i++) {
				
			
			$(".table").append(`<tr class="active"> 
				<td>
				<input id = "` + i + `name" value="`+ dogs[i].name + `"/>
				</td> 
				<td>
				` + dogs[i],breed + `
				</td>
				<td>Color</td>
				<td>
				<button onClick="deleteDog(value);" value="` + dogs[i]._id + `">DELETE
				</td>
			</tr>` 

//can add post method after

			); //append to class table. also can load a button inline in the table liek a delete button // pushing HTML from javascriot into page
			}
		}		

	};

deletePuppies = function(){
$.ajax({
				method:'DELETE', //do I have to have single quotes?
				url: '/puppies',

				
		}).then function(response) {

}
};
// reloadPuppies = function(userInfo){
// $.ajax({
// 				method:'POST', //do I have to have single quotes?
// 				url: '/login',
// 				data: userInfo
				
// 		}).then function(response) {
// 			alert(response);
// 		}		

// 	};
putPuppies = function(){
$.ajax({
				method:'PUT', //do I have to have single quotes?
				url: '/puppies',

				
		}).then function(response) {

}
};

$("#reload").on("click",function(){ //when you have a post button use that id here
		var newdog = {
			name: $("#dogName").val();	//this is from the id of text box
			breed: $("#dogBreed").val();
			legs: $("#dogLegs").val();
		}
		postDog(newDog);		
	});














})