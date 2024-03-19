const students = [
  {
    name: "Ankit",
    age: 22,
    grade: 85,
    email: "ankit@example.com",
    phone: "555-555-5555",
    graduated: true
  },
  {
    name: "Kayla",
    age: 28,
    grade: 92,
    email: "kayla@example.com",
    phone: "555-555-5555",
    graduated: false
  },
  {
    name: "Charina",
    age: 19,
    grade: 89,
    email: "charina@example.com",
    phone: "555-555-5555",
    graduated: true
  },
  {
    name: "Bernard",
    age: 30,
    grade: 75,
    email: "bernard@example.com",
    phone: "555-555-5555",
    graduated: true
  },
  {
    name: "Kevin",
    age: 36,
    grade: 82,
    email: "kevin@example.com",
    phone: "555-555-5555",
    graduated: false
  },
  {
    name: "Hasheem",
    age: 41,
    grade: 82,
    email: "hasheem@example.com",
    phone: "555-555-5555",
    graduated: true
  },
  {
    name: "Erwin",
    age: 34,
    grade: 72,
    email: "erwin@example.com",
    phone: "555-555-5555",
    graduated: true
  },
  {
    name: "Christopher",
    age: 50,
    grade: 86,
    email: "christopher@example.com",
    phone: "555-555-5555",
    graduated: true
  },
  {
    name: "Angela",
    age: 27,
    grade: 80,
    email: "angela@example.com",
    phone: "555-555-5555",
    graduated: true
  },
];

const graduatedStudents = (listOfStudents) => {
  // Implement function
  // You can’t use dot or square bracket notation to solve this problem. We want you to practice applying your new destructuring knowledge to this function

  // declare an empty array
  let results = []
  

  // Look through the list of student
    listOfStudents.forEach(({ name, email, graduated }) => {

  // create messages element
  // Charina has not graduated yet, no diploma will be sent' to equal 'Charina has not graduated yet, no diploma will be sent.
  // Angela has graduated and their diploma will be sent to angela@example.com.
    const graduatedMessage = `${name} has graduated and their diploma will be sent to ${email}.`
    const notGraduatedMessage = `${name} has not graduated yet, no diploma will be sent.`

  // If a student has graduated, then your function should output a string literal informing you that the student has graduated and their diploma has been sent to their email
      if (graduated) {
        return results.push(graduatedMessage)
      }
  // If they haven’t, the function should output a string literal informing you that the student has not graduated and no diploma will be sent
      return results.push(notGraduatedMessage)
    });
    return results;
  };

  graduatedStudents(students);