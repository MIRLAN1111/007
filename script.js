class Student {
	#name;
	grades;
	constructor(name) {
		this.#name = name;
		this.grades = [];
	}
	addGrade(grade) {
		if (grade < 2 || grade > 5 || isNaN(grade)) {
			return "Ошибка: оценка должна быть от 2 до 5";
		}
		this.grades.push(grade);
		return "Оценка добавлена";
	}
	getAverage() {
		if (this.grades.length === 0) return 0;
		let sum = this.grades.reduce((a, b) => a + b, 0);
		return (sum / this.grades.length).toFixed(2);
	}
	getInfo() {
		return `Студент: ${this.#name}, Средняя оценка: ${this.getAverage()}`;
	}
	getGrades() {
		return this.grades.join(", ");
	}
}

const student = new Student("Amanbek ");

function add() {
	const gradeInput = document.getElementById("grade");
	const grade = Number(gradeInput.value);
	const message = student.addGrade(grade);

	document.getElementById("info").textContent =
		message + "\n" + student.getInfo();
	document.getElementById("gradesList").textContent =
		"Все оценки: " + student.getGrades();

	gradeInput.value = "";
	gradeInput.focus();
}
