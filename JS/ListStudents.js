var Students = [
	{ FirstName: "Greg", LastName: "Olsen", SAT: "1200", GPA: "3.2" },
	{ FirstName: "Bob", LastName: "Evans", SAT: "1200", GPA: "3.2" },
	{ FirstName: "Sue Ann", LastName: "Prewitt", SAT: "1200", GPA: "3.2" },
	{ FirstName: "Eric", LastName: "Smith", SAT: "1200", GPA: "3.2" },
	{ FirstName: "Eric", LastName: "Bambach", SAT: "1200", GPA: "3.2" },
]

function getStudents() {

		var tbodyCtrl = document.getElementById("students");
		tbodyCtrl.innerHTML = "";
	for (var student of Students) {
		var aStudent = "<tr>";
		aStudent += "<td>" + student.FirstName + " " + student.LastName + "</td>";
		aStudent += "<td>" + student.GPA + "</td>";
		aStudent += "<td>" + student.SAT + "</td>";
		aStudent += "</tr>";
		tbodyCtrl.innerHTML += aStudent;
	}
}