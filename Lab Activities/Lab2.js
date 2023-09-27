//Activity 1
round=(...args)=>{
    arr=[]
    args.forEach((element,index)=>{
        arr[index]=Math.round(element);
    })
    return arr;
}
console.log(round(1.2,4.3,7.7))

//Activity 2
floor=(...args)=>{ 
    arr=[] 
    args.forEach((element,index)=>{ 
    arr[index]=Math.floor(element); 
    })
    return arr;}
genericOpertaions=(operation,...args)=>{ 
 if(operation==='round'){ 
 return round(...args); 
 }
 else if(operation==='abs'){ 
 return abs(...args) }
 else if(operation==='ceil'){
 return ceil(...args) }
 else if(operation==='floor'){
 return floor(...args) }
 else{ 
 return "Invalid Operation" 
}
}
console.log(genericOpertaions('floor',1.3,2.4,3.6,4.2,5.5));

//Labtask1
// Person class
function Person(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }
  
  // Define the Employee class, derived from Person
  function Employee(firstName, lastName, age, gender, department, designation, salary) {
    Person.call(this, firstName, lastName, age, gender);
    this.department = department;
    this.designation = designation;
    this.salary = salary;
  }
  
  // Define the Student class, derived from Person
  function Student(firstName, lastName, age, gender, studentID, courses) {
    Person.call(this, firstName, lastName, age, gender);
    this.studentID = studentID;
    this.courses = courses;
  }
  
  // Define the Teacher class, derived from Employee
  function Teacher(firstName, lastName, age, gender, department, designation, salary, teacherID, subjects) {
    Employee.call(this, firstName, lastName, age, gender, department, designation, salary);
    this.teacherID = teacherID;
    this.subjects = subjects;
  }
  
  // Define the Staff class, derived from Employee
  function Staff(firstName, lastName, age, gender, department, designation, salary, staffID, respon) {
    Employee.call(this, firstName, lastName, age, gender, department, designation, salary);
    this.staffID = staffID;
    this.responsibilities = respon;
  }
// Courses class
function Courses(courseName = "N/A") {
    this.courseName = courseName;
    this.students = []; // An array to hold references to enrolled students
    this.teachers = []; // An array to hold references to teachers of the course
}

Courses.prototype.addStudent = function (student) {
    // Add a student to the list of enrolled students
    this.students.push(student);
};

Courses.prototype.addTeacher = function (teacher) {
    // Add a teacher to the list of teachers for the course
    this.teachers.push(teacher);
};

// Creating a course
const SECourse = new Courses("MAD");


  // Create instances of Student, Teacher, and Staff
    const student1 = new Student("Ravia", "Iqbal", 20, "Female", "SP21-BSE-025", "Software Engineering");
    const student2 = new Student("Ali", "Ahmad", 22, "Male", "FA20-BCS-019", "Computer Science");

    const teacher1 = new Teacher("Sir", "Kamran", 35, "Male", "CS Department", "Professor", 60000, "TS002", "MAD");
    const teacher2 = new Teacher("Dr.", "Yasir", 30, "Male", "Software Department", "Associate Professor", 55000, "TS019", "SQE");

    const staff1 = new Staff("Hamid", "Clark", 28, "Male", "Administration", "Coordinator", 45000, "ST001","Office Management");
    const staff2 = new Staff("Saadi", "Brown", 30, "Male", "Library", "Librarian", 50000, "ST002", "Book Cataloging");

  // Print information about the created objects
    console.log("Student 1:", student1);
    console.log("Student 2:", student2);
    console.log("Teacher 1:", teacher1);
    console.log("Teacher 2:", teacher2);
    console.log("Staff 1:", staff1);
    console.log("Staff 2:", staff2);
  

    // Enrolling the student and assigning the teacher
    SECourse.addStudent(student1);
    SECourse.addStudent(student2);
    SECourse.addTeacher(teacher1);
    SECourse.addTeacher(teacher2);
    console.log("Printing information about the course");
    // Printing information about the course
    console.log("Course Name:", SECourse.courseName);
    console.log("Enrolled Students:", SECourse.students);
    console.log("Assigned Teachers:", SECourse.teachers);

    
//LabTask2
class Employe {
    constructor(name = '', dept = 'general') {
        this.name = name;
        this.dept = dept;
    }
}

class Manager extends Employe {
    constructor(name = '', dept = 'general') {
        super(name, dept);
        this.reports = [];
    }
}

class WorkerBee extends Employe {
    constructor(name = '', dept = 'general',project=[]) {
        super(name, dept);
        this.projects = [];
    }
}

class SalesPerson extends WorkerBee {
    constructor(name = '', dept = 'sales', quota = 100) {
        super(name, dept);
        this.quota = quota;
    }
}

class Engineer extends WorkerBee {
    constructor(name = '', dept = 'engineering', machine = '') {
        super(name, dept);
        this.machine = machine;
    }
}
const manager1 = new Manager('Ravia', 'management');
const salesPerson1 = new SalesPerson('Aghna');
const engineer1 = new Engineer('Ali', 'engineering', 'Machine-A');
const workerBee1 = new WorkerBee('Saadi');

console.log(manager1);
console.log(salesPerson1);
console.log(engineer1);
console.log(workerBee1);
