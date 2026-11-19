$(document).ready(function () {

    /* =========================================
       1. CHALLENGE DATA
    ========================================= */

    const challenges = [

        // DATA ANALYTICS CHALLENGES

        {
            id: 1,
            title: "Sales Performance Analysis",
            track: "data-analytics",
            trackName: "Data Analytics",
            difficulty: "beginner",
            description: "Analyze a sales dataset to identify sales trends, top-performing products and revenue patterns.",
            expectedOutcome: "Understand how to examine sales data and extract useful business insights.",
            objective: "Use a sales dataset to investigate business performance and identify patterns that can help improve decision-making.",
            skills: ["Data cleaning", "Data analysis", "Data interpretation"],
            tools: ["Microsoft Excel", "Google Sheets"],
            deliverables: ["Cleaned dataset", "Sales analysis report", "Visual charts"],
            estimatedTime: "3–5 days",
            expectedResult: "A sales performance report highlighting key findings and recommendations."
        },

        {
            id: 2,
            title: "Customer Behaviour Analysis",
            track: "data-analytics",
            trackName: "Data Analytics",
            difficulty: "intermediate",
            description: "Explore customer data to discover purchasing patterns, customer preferences and behavioural trends.",
            expectedOutcome: "Identify customer behaviour patterns and translate them into actionable insights.",
            objective: "Investigate customer records to understand what influences purchasing decisions and customer retention.",
            skills: ["Exploratory data analysis", "Data visualization", "Statistical analysis"],
            tools: ["Microsoft Excel", "Power BI", "Python"],
            deliverables: ["Analyzed customer dataset", "Customer segmentation report", "Visual dashboard"],
            estimatedTime: "1–2 weeks",
            expectedResult: "A customer behaviour report containing insights and recommendations for improving customer engagement."
        },

        {
            id: 3,
            title: "Business Intelligence Dashboard",
            track: "data-analytics",
            trackName: "Data Analytics",
            difficulty: "advanced",
            description: "Build an interactive dashboard that presents important business performance indicators.",
            expectedOutcome: "Develop a dashboard that helps stakeholders monitor business performance.",
            objective: "Transform raw business data into an interactive dashboard that communicates important performance metrics.",
            skills: ["Data transformation", "Dashboard development", "Business intelligence"],
            tools: ["Power BI", "Microsoft Excel", "SQL"],
            deliverables: ["Processed dataset", "Interactive dashboard", "Project documentation"],
            estimatedTime: "2–3 weeks",
            expectedResult: "A functional business intelligence dashboard with clear visualizations and actionable insights."
        },


        // WEB DEVELOPMENT CHALLENGES

        {
            id: 4,
            title: "Personal Portfolio Website",
            track: "web-development",
            trackName: "Web Development",
            difficulty: "beginner",
            description: "Create a personal portfolio website that introduces you and showcases your skills and projects.",
            expectedOutcome: "Build a responsive personal website using fundamental frontend technologies.",
            objective: "Design and develop a portfolio website that presents your profile, technical skills and completed projects.",
            skills: ["HTML", "CSS", "Basic JavaScript", "Responsive design"],
            tools: ["HTML", "CSS", "JavaScript", "VS Code"],
            deliverables: ["Portfolio website", "Source code", "Live website link"],
            estimatedTime: "3–5 days",
            expectedResult: "A responsive personal portfolio website that can be shared with potential employers."
        },

        {
            id: 5,
            title: "Task Management Application",
            track: "web-development",
            trackName: "Web Development",
            difficulty: "intermediate",
            description: "Develop a task management application that allows users to create, update and delete tasks.",
            expectedOutcome: "Build an interactive application that demonstrates practical JavaScript and DOM manipulation.",
            objective: "Create an application where users can manage their daily tasks and track their progress.",
            skills: ["DOM manipulation", "Event handling", "CRUD operations", "Application logic"],
            tools: ["HTML", "CSS", "JavaScript", "Local Storage"],
            deliverables: ["Working task management application", "Source code", "Project documentation"],
            estimatedTime: "1–2 weeks",
            expectedResult: "A functional task management application with the ability to add, edit, complete and delete tasks."
        },

        {
            id: 6,
            title: "Full-Stack Blog Application",
            track: "web-development",
            trackName: "Web Development",
            difficulty: "advanced",
            description: "Build a blog application where users can create, publish, edit and manage blog posts.",
            expectedOutcome: "Demonstrate the ability to build a full-stack web application with server-side functionality.",
            objective: "Develop a blog platform that connects a frontend interface to a backend server and database.",
            skills: ["Frontend development", "Backend development", "REST APIs", "Database operations"],
            tools: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "PostgreSQL"],
            deliverables: ["Working blog application", "Source code", "Database structure", "Project documentation"],
            estimatedTime: "2–4 weeks",
            expectedResult: "A functional full-stack blog application with working post management and persistent data storage."
        }

    ];


    /* =========================================
       2. SELECT HTML ELEMENTS
    ========================================= */

    const cardGrid = $("#challenge-card-grid");
    const emptyState = $("#challenge-empty-state");

    const trackButtons = $(".track-filter-btn");
    const difficultyFilter = $("#difficulty-filter");
    const searchInput = $("#challenge-search");


    /* =========================================
       3. FILTER SETTINGS
    ========================================= */

    // Initially, show all tracks.
    let selectedTrack = "all";


    /* =========================================
       4. DISPLAY CHALLENGE CARDS
    ========================================= */

    function displayChallenges(challengeList) {

        cardGrid.empty();

        challengeList.forEach(function (challenge) {

            const skills = challenge.skills
                .map(skill => `<li>${skill}</li>`)
                .join("");

            const tools = challenge.tools
                .map(tool => `<li>${tool}</li>`)
                .join("");

            const deliverables = challenge.deliverables
                .map(item => `<li>${item}</li>`)
                .join("");


            const challengeCard = `
                <article class="challenge-card">

                    <div class="challenge-card-header">

                        <span class="challenge-track">
                            ${challenge.trackName}
                        </span>

                        <span class="challenge-difficulty ${challenge.difficulty}">
                            ${challenge.difficulty}
                        </span>

                    </div>

                    <h3>${challenge.title}</h3>

                    <p class="challenge-description">
                        ${challenge.description}
                    </p>

                    <p class="challenge-outcome">
                        <strong>Expected outcome:</strong>
                        ${challenge.expectedOutcome}
                    </p>

                    <button
                        type="button"
                        class="view-challenge-btn"
                        aria-expanded="false">
                        View Challenge
                    </button>

                    <div class="challenge-details" hidden>

                        <h4>Challenge Objective</h4>
                        <p>${challenge.objective}</p>

                        <h4>Skills Required</h4>
                        <ul>${skills}</ul>

                        <h4>Tools</h4>
                        <ul>${tools}</ul>

                        <h4>Deliverables</h4>
                        <ul>${deliverables}</ul>

                        <h4>Estimated Time</h4>
                        <p>${challenge.estimatedTime}</p>

                        <h4>Expected Result</h4>
                        <p>${challenge.expectedResult}</p>

                    </div>

                </article>
            `;

            cardGrid.append(challengeCard);

        });


        // Show empty state when no challenges match.
       emptyState.prop("hidden", challengeList.length !== 0);

    }


    /* =========================================
       5. FILTER CHALLENGES
    ========================================= */

    function filterChallenges() {

        const selectedDifficulty = difficultyFilter.val();

        const searchTerm = searchInput.val().toLowerCase().trim();


        const filteredChallenges = challenges.filter(function (challenge) {

            const matchesTrack =
                selectedTrack === "all" ||
                challenge.track === selectedTrack;


            const matchesDifficulty =
                selectedDifficulty === "all" ||
                challenge.difficulty === selectedDifficulty;


            const searchableText = [
                challenge.title,
                challenge.description,
                challenge.trackName,
                challenge.difficulty,
                ...challenge.skills,
                ...challenge.tools
            ].join(" ").toLowerCase();


            const matchesSearch =
                searchableText.includes(searchTerm);


            return matchesTrack && matchesDifficulty && matchesSearch;

        });


        displayChallenges(filteredChallenges);

    }


    /* =========================================
       6. TRACK FILTER BUTTONS
    ========================================= */

  trackButtons.on("click", function () {

    selectedTrack = $(this).data("track");

    // Reset difficulty whenever a programme is selected
    difficultyFilter.val("all");

    trackButtons.removeClass("active");
    $(this).addClass("active");

    filterChallenges();
});


    /* =========================================
       7. DIFFICULTY FILTER
    ========================================= */

   difficultyFilter.on("change", function () {

    const selectedDifficulty = $(this).val();

    // Selecting All resets both filters
    if (selectedDifficulty === "all") {

        selectedTrack = "all";

        trackButtons.removeClass("active");
    }

    filterChallenges();
});


    /* =========================================
       8. SEARCH CHALLENGES
    ========================================= */

   searchInput.on("input", function () {
    filterChallenges();
});


    /* =========================================
       9. VIEW CHALLENGE DETAILS
    ========================================= */
    cardGrid.on("click", ".view-challenge-btn", function () {

    const button = $(this);

    const details = button
        .closest(".challenge-card")
        .children(".challenge-details");

    if (details.prop("hidden")) {

        details
            .prop("hidden", false)
            .hide()
            .slideDown(250);

        button.text("Hide Details");
        button.attr("aria-expanded", "true");

    } else {

        details.stop(true, true).slideUp(250, function () {
            $(this).prop("hidden", true);
        });

        button.text("View Challenge");
        button.attr("aria-expanded", "false");
    }

});


    /* =========================================
       10. INITIAL PAGE DISPLAY
    ========================================= */

    filterChallenges();

});






