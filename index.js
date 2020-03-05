// let classes = {
// 	fiveA: ['Faddal Ibrahim','Tuahir Mahmoud','Sadio Mane'],
// 	fiveB: ['Aziz Muhammad','Bengal Sylla','Bobby Firmino'],
// 	lower6A: ['Salamatu Lukman','Salma Sumaila','Muhammad Sallah'],
// 	lower6B: ['Elias Ifeanyi','Isssac Opare','Kweku Acuaye'],
// 	upper6: ['Mariam Buuzua','Yasin Bari','Rahma Bari'],
// 	form1: ['Zalikatu Giwa','Farida Aziz','Waseema Muhammad'],
// 	form2: ['Aiman Sham-un','Wahab Usman','Aisha Sumaila'],
// 	form3: ['Mahud Abubakar','Hamdia Ali Samba','Zaid Ismail'],
// };

// localStorage.hamdaniyya = JSON.stringify(classes);

document.addEventListener('DOMContentLoaded', () => {

	document.querySelector("#table").addEventListener("keyup",function(e){

		//GRABBING THE PARENT TABLE ROW ELEMENT OF THE TARGET INPUT ELEMENT
		let parent = e.target.parentNode.parentNode;

		if(e.target.tagName = "INPUT"){
			let total = 0;

			//LOOPING THROUGH THE TAGS CONTAINING THE INPUT TAGS
			//TAKING THE VALUES OF THE INPUT TAGS AND ADDING TO "TOTAL"
			for(let i = 1; i < parent.childElementCount - 2; i++){
				let stringed_value = parent.children[i].children[0].value;
				let val = Number(stringed_value);
				if(isNaN(val)){
					alert("only numbers allowed");
					return;
				}
				total += val;
			}

			//OUTPUTTING THE TOTAL
			parent.children[3].children[0].innerHTML = total;

			//EVALUATAING THE REMARKS
			if(total >= 85){
				parent.children[4].children[0].innerHTML = "Excellent";
	        }else if(total >= 70 && total <= 84){
				parent.children[4].children[0].innerHTML = "Very Good";
	        }else if(total >= 50 && total <= 69){
				parent.children[4].children[0].innerHTML = "Good";
	        }else if(total >= 35 && total <= 49){
				parent.children[4].children[0].innerHTML = "Fair";
	        }else if(total >= 0 && total <= 34){
				parent.children[4].children[0].innerHTML = "Poor";
	        }
		}

	})


	/*SEARCH*/
	document.querySelector("#student_list input").addEventListener("keyup",function() {
		let keyword = this.value.toLowerCase();

		document.querySelectorAll("#student_list p span").forEach(name => {
			if(name.innerHTML.toLowerCase().indexOf(keyword) == -1){
				name.parentNode.style.display = "none";
			}else{
				name.parentNode.style.display = "flex"
			}
		})
	})

	/*DISPLAYING STUDENTS OF A PARTICULAR CLASS*/
	document.querySelector("#student_list select").addEventListener("change", function(){
		let parent = document.querySelector("#student_list div");
		//clear the list of names
		parent.innerHTML = null;


		let classValue = this.value;
		let classes = JSON.parse(localStorage.hamdaniyya);

		console.log(classes[classValue]);


		classes[classValue].forEach(name => {
			let p = document.createElement("p");
			let span = document.createElement("span");

			span.innerHTML = name;

			p.append(span);
			// p.append("<i class='fas fa-trash'></i>");

			p.innerHTML += "<i class='fas fa-trash'></i>";

			parent.append(p);

		})
	})

	/*displaying add a student form*/
	document.querySelector("#student_list button").addEventListener("click",function(){
		document.querySelector("#add_student_form").style.display = "flex";
	})

	/*adding student info to database*/
	document.querySelector("#add_student_form button").addEventListener("click",function(){
		let name = document.querySelector("#add_student_form input");
		let classs = document.querySelector("#add_student_form select").value;
		if(name.value.trim() == ""){
			alert("please enter all fields")
		}else{

			//grabbing the object containing all classes and corresponding classes
			let classes = JSON.parse(localStorage.hamdaniyya);

			//adding student to class
			classes[classs].push(name.value);


			console.log(classes[classs]);

			localStorage.hamdaniyya = JSON.stringify(classes)

			console.log(localStorage.hamdaniyya);

			//grabbing new array
			// let updated_student_array = classes[classs];

			//updating the class whose array has been changed
			// classes[classs] = 

			//storing results back to database
			// JSON.stringify(classes)

			alert("data stored in database");
			window.location.reload();
		}
	})

})