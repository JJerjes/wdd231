document.addEventListener('DOMContentLoaded', () => {
    const currentyear = document.querySelector('#currentyear');
    const today = new Date();

    currentyear.innerHTML = `&copy;<span class='highlight'>${today.getFullYear()} 🌺 Jerjes Mariluz Caciano 🌺 Lima</span>`;

    const lastModifiedDate = new Date(document.lastModified);
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };

    const formattedDate = lastModifiedDate.toLocaleString('en-US', options);
    document.getElementById("lastModified").textContent = `Last Modification: ${formattedDate}`;

    const menuButton = document.querySelector('#menu');
    const nav = document.querySelector('nav');
    const main = document.querySelector('main');

    menuButton.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuButton.classList.toggle('open')

        if(nav.classList.contains('active')) {
            main.style.marginTop = '160px';
        }else {
            main.style.marginTop = '0';
        }
    });
    
});


const card = document.querySelector('#card');
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

function displayCourses(course) {
    card.innerHTML = '';

    course.forEach((element) => {

        const cardCourse = document.createElement('div');
        cardCourse.className = 'card-course';

        const nameSubject = document.createElement('button');
        nameSubject.textContent = `${element.subject} ${element.number}`;

        cardCourse.appendChild(nameSubject);

        card.appendChild(cardCourse);
    });
}

displayCourses(courses)

document.querySelector('#all').addEventListener('click', () => { 
    displayCourses(courses);
    document.querySelector('.certificate-buttons button').textContent = 'All';
});

document.querySelector('#cse').addEventListener('click', () => { 
    const cseCourses = courses.filter(course => course.subject === 'CSE');
    displayCourses(cseCourses);
    document.querySelector('.certificate-buttons button').textContent = 'All';
});

document.querySelector('#wdd').addEventListener('click', () => {
    const wddcourses = courses.filter(course => course.subject === 'WDD');
    displayCourses(wddcourses);
    document.querySelector('.certificate-buttons button').textContent = 'All';
});

document.querySelector('#cse110').addEventListener('click', () => {
    const cse110Course = courses.filter(course => course.subject === 'CSE' && course.number === 110);
    displayCourses(cse110Course);
    document.querySelector('.certificate-buttons button').textContent = 'CSE 110';
});

document.querySelector('#wdd130').addEventListener('click', () => {
    const wdd130Course = courses.filter(course => course.subject === 'WDD' && course.number === 130);
    displayCourses(wdd130Course);
    document.querySelector('.certificate-buttons button').textContent = 'WDD 130';
});

document.querySelector('#cse111').addEventListener('click', () => {
    const cse111Course = courses.filter(course => course.subject === 'CSE' && course.number === 111);
    displayCourses(cse111Course);
    document.querySelector('.certificate-buttons button').textContent = 'CSE 111';
});

document.querySelector('#cse210').addEventListener('click', () => {
    const cse210Course = courses.filter(course => course.subject === 'CSE' && course.number === 210);
    displayCourses(cse210Course);
    document.querySelector('.certificate-buttons button').textContent = 'CSE 210';
});

document.querySelector('#wdd131').addEventListener('click', () => {
    const wdd131Course = courses.filter(course => course.subject === 'WDD' && course.number === 131);
    displayCourses(wdd131Course);
    document.querySelector('.certificate-buttons button').textContent = 'WDD 131';
});

document.querySelector('#wdd111').addEventListener('click', () => {
    const wdd111Course = courses.filter(course => course.subject === 'WDD' && course.number === 111);
    displayCourses(wdd111Course);
    document.querySelector('.certificate-buttons button').textContent = 'WDD 111';
});

