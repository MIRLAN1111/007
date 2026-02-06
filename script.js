class Student {
	#name;
	grades;
	constructor(name) {
		this.#name = name;
		this.grades = [];
	}
	addGrade(grade) {
		if (grade < 2 || grade > 5) {
			return "Ошибка: оценка должна быть от 2 до 5";
		}
		this.grades.push(grade);
		return "Оценка добавлена";
	}
	getAvarge() {
		if (this.grades.length === 0) return 0;
		let sum = this.grades.reduce((a, b) => a + b, 0);
		return (sum / this.grades.length).toFixed(2);
	}
	getInfo() {
		return `Студент: ${this.#name}, Средняя оценка: ${this.getAvarge()}`;
	}
}
// значение бериш керек екен еле
const student = new Student("студент");
//
function add() {
	const grade = Number(document.getElementById("grade").value);
	document.getElementById("info").textContent = student.addGrade(grade);
}
