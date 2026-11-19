const menuBtn = $('.menu-btn');
const headerNav = $('.header-nav');

menuBtn.on('click', function(){
    headerNav.toggleClass('active');
});


/* ===========================
    Roadmap JS
============================== */

const trackBtn = $('.track-button');

trackBtn.on('click', function(){
    const track = $(this).data('track');

    trackBtn.removeClass('active');
    $(this).addClass('active');

    if(track === 'analytics'){
        displayTrackInfo(analyticsTrack);
        displayTasks(analyticsTasks);
    }else if(track === 'web-development'){
        displayTrackInfo(webDevTrack);
        displayTasks(webDevTasks);
    }
});


// DATA ANALYTICS TRACK INFORMATION
const analyticsTrack = {
    title: "Data Analytics Track",
    description: "Learn, analyze and turn data into insights.",
    duration: "30 Days",
    taskCount: "8 Tasks",
    icon: '<i class="fa-solid fa-chart-column"></i>'
};

const webDevTrack = {
    title: "Web Development Track",
    description: "Build responsive and interactive websites.",
    duration: "30 Days",
    taskCount: "8 Tasks",
    icon: '<i class="fa-solid fa-code"></i>'
};


// SELECT HTML ELEMENTS
const trackIcon = document.getElementById("track-info-icon");
const trackTitle = document.getElementById("track-title");
const trackDescription = document.getElementById("track-description");
const trackDuration = document.getElementById("track-duration");
const trackTaskCount = document.getElementById("track-task-count");


// DISPLAY TRACK INFORMATION
function displayTrackInfo(track) {
    trackIcon.innerHTML = track.icon;
    trackTitle.textContent = track.title;
    trackDescription.textContent = track.description;
    trackDuration.textContent = track.duration;
    trackTaskCount.textContent = track.taskCount;
}


/*==================
   Data Analytics
===================*/

const analyticsTasks = [
    {
        number: 1,
        title: "Data Cleaning Basics",
        day: 1,
        difficulty: "Beginner",
        description: "Clean a messy dataset using Google Sheets or Excel. Identify and fix duplicate rows, blank cells, inconsistent formatting, and incorrect data types."
    },
    {
        number: 2,
        title: "Formulas & Pivot Tables",
        day: 4,
        difficulty: "Beginner",
        description: "Use spreadsheet formulas and Pivot Tables to answer questions and extract useful insights from a dataset."
    },
    {
        number: 3,
        title: "Data Visualization",
        day: 8,
        difficulty: "Beginner → Intermediate",
        description: "Create charts and a simple dashboard that communicate useful insights from a dataset."
    },
    {
        number: 4,
        title: "Introduction to SQL",
        day: 11,
        difficulty: "Beginner → Intermediate",
        description: "Practice basic SQL queries and use them to answer real-world questions about data."
    },
    {
        number: 5,
        title: "SQL Joins & Aggregations",
        day: 15,
        difficulty: "Intermediate",
        description: "Use JOIN, GROUP BY and aggregate functions such as COUNT, SUM and AVG to analyze information across multiple tables."
    },
    {
        number: 6,
        title: "Lookup Functions & Data Wrangling",
        day: 19,
        difficulty: "Intermediate",
        description: "Use VLOOKUP or XLOOKUP to combine related datasets and handle data mismatches."
    },
    {
        number: 7,
        title: "Mini Analysis Project",
        day: 22,
        difficulty: "Intermediate",
        description: "Complete a small end-to-end analysis involving data cleaning, formulas, Pivot Tables, charts and recommendations."
    },
    {
        number: 8,
        title: "Capstone Project",
        day: 26,
        difficulty: "Intermediate",
        description: "Complete a larger project combining spreadsheet analysis and SQL using at least two related tables."
    }
];


/*=======================
    Web Development
========================*/

const webDevTasks = [
    {
        number: 1,
        title: "Build the TechBridge Homepage",
        day: 1,
        difficulty: "Beginner",
        description: "Create the first version of the TechBridge website using HTML and CSS."
    },
    {
        number: 2,
        title: "Build the TechBridge Programs Experience",
        day: 4,
        difficulty: "Beginner",
        description: "Create a Programs experience presenting TechBridge's available learning programs."
    },
    {
        number: 3,
        title: "Build the Internship Tasks Experience",
        day: 8,
        difficulty: "Beginner → Intermediate",
        description: "Create an interface that presents the TechBridge internship tasks and helps users understand the internship journey."
    },
    {
        number: 4,
        title: "Build an Interactive Internship Roadmap",
        day: 11,
        difficulty: "Beginner → Intermediate",
        description: "Use JavaScript to allow visitors to switch between the Data Analytics and Web Development internship tracks."
    },
    {
        number: 5,
        title: "Build the Intern Registration Experience",
        day: 15,
        difficulty: "Intermediate",
        description: "Create a professional registration and onboarding interface for TechBridge interns."
    },
    {
        number: 6,
        title: "Build the Task Submission System",
        day: 19,
        difficulty: "Intermediate",
        description: "Create an interface through which interns can prepare and submit their task work."
    },
    {
        number: 7,
        title: "Build the Intern Dashboard",
        day: 22,
        difficulty: "Intermediate",
        description: "Create a dashboard where an intern can view their profile, progress, tasks and submissions."
    },
    {
        number: 8,
        title: "Build the Complete TechBridge Internship Platform",
        day: 26,
        difficulty: "Intermediate",
        description: "Combine the different components created during the internship into a complete TechBridge platform."
    }
];


// SELECT ROADMAP CONTAINERS
const leftContainer = $("#roadmap-left");
const rightContainer = $("#roadmap-right");
const markerContainer = $("#roadmap-markers");


// SVG MARKER POSITIONS
const markerPositions = [
    { x: 260, y: 115 },
    { x: 40, y: 305 },
    { x: 260, y: 495 },
    { x: 40, y: 685 },
    { x: 260, y: 875 },
    { x: 40, y: 1065 },
    { x: 260, y: 1255 },
    { x: 40, y: 1445 }
];


// DISPLAY TASKS AND SVG MARKERS

function displayTasks(tasks) {

    leftContainer.empty();
    rightContainer.empty();
    markerContainer.empty();

    const svgNS = "http://www.w3.org/2000/svg";

    tasks.forEach(function(item, index) {

        const number = item.number;
        const title = item.title;
        const day = item.day;
        const difficulty = item.difficulty;
        const description = item.description;

        // GET MARKER POSITION
        const x = markerPositions[index].x;
        const y = markerPositions[index].y;

        const svgHeight = document.getElementById("roadmap-svg").viewBox.baseVal.height;

        const cardTop = (y / svgHeight) * 100;

        // GENERATE TASK CARD
     const taskCard = `
           <div class="task-card" style="top: ${cardTop}%;">
           <div class="day-number-container">
            <span class="task-number">Task ${number}</span>
            <p class="task-day">Day ${day}</p>
            </div>
            <h3>${title}</h3>
            <p class="task-description">${description}</p>
            <span class="task-difficulty">${difficulty}</span>
         </div>
        `;

        // POSITION TASK CARDS
        if (number % 2 === 0) {
            leftContainer.append(taskCard);
        } else {
            rightContainer.append(taskCard);
        }

        // CREATE SVG MARKER GROUP
        const markerGroup = document.createElementNS(svgNS, "g");
        markerGroup.setAttribute("class", "roadmap-marker");

        // CREATE CIRCLE
        const circle = document.createElementNS(svgNS, "circle");
        circle.setAttribute("cx", x);
        circle.setAttribute("cy", y);
        circle.setAttribute("r", 20);
        circle.setAttribute("fill", "#45CDB4");
        circle.setAttribute("stroke", "#071B49");
        circle.setAttribute("stroke-width", 3);

        // CREATE NUMBER
        const text = document.createElementNS(svgNS, "text");
        text.setAttribute("x", x);
        text.setAttribute("y", y);
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("dominant-baseline", "central");
        circle.setAttribute("fill", "#F59E0B");
        text.setAttribute("font-size", 14);
        text.setAttribute("font-weight", "bold");
        text.textContent = number;

        // CREATE CONNECTOR LINE
        const line = document.createElementNS(svgNS, "line");

        const lineStart = number % 2 === 0 ? x - 20 : x + 20;
        const lineEnd = number % 2 === 0 ? 0 : 300;

        line.setAttribute("x1", lineStart);
        line.setAttribute("y1", y);
        line.setAttribute("x2", lineEnd);
        line.setAttribute("y2", y);
        line.setAttribute("stroke", "#071B49");
        line.setAttribute("stroke-width", 2);

        // ADD ELEMENTS TO MARKER GROUP
        markerGroup.appendChild(line);
        markerGroup.appendChild(circle);
        markerGroup.appendChild(text);

        // ADD MARKER GROUP TO SVG
        markerContainer[0].appendChild(markerGroup);

    });
}



// DISPLAY DEFAULT TRACK
displayTrackInfo(analyticsTrack);
displayTasks(analyticsTasks);