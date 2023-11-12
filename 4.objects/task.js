function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
  if (this.hasOwnProperty("marks")) {
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
  if (!this.marks || this.marks.length === 0) {
    return 0;
  }
  let overage = this.marks.reduce((sum, mark, index, marksArray) => {
    sum += mark;
    if (index === marksArray.length - 1) {
      return sum / marksArray.length;
    }
      return sum;
  }, 0);
  return overage;
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}
