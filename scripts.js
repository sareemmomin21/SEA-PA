/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */

const nasa = {
    name: "NASA",
    logoURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png",
    headquarters: "Washington, D.C., United States",
    foundingDate: "July 29, 1958",
    budget: "$24.9 billion (2024)",
    employees: 18000,
    website: "https://www.nasa.gov/",
    socialMedia: {
        twitter: "https://twitter.com/NASA",
        facebook: "https://www.facebook.com/NASA",
        instagram: "https://www.instagram.com/nasa/",
        youtube: "https://www.youtube.com/user/NASAtelevision",
    },
    notableMissions: [
        {
            name: "Apollo 11",
            description: "First manned mission to land on the Moon",
            launchDate: "July 16, 1969",
            image: "https://th-thumbnailer.cdn-si-edu.com/ORjYy0Fwbt4g3iRNotrov2Qm8SA=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/bd/68/bd6864f8-088d-4e11-97d9-4b82d68a0512/48290240396_054eca5b3b_o.jpg"
        },
        {
            name: "Voyager 1 and 2",
            description: "Interstellar probes launched to study outer planets and beyond",
            launchDate: "Voyager 1: September 5, 1977, Voyager 2: August 20, 1977",
            image: "https://media.npr.org/assets/img/2024/03/05/voyager_custom-36979eec24160dd8086825e71df7023a489d26d9.jpg"
        },
        {
            name: "Hubble Space Telescope",
            description: "Orbiting telescope that has provided stunning images and important scientific discoveries",
            launchDate: "April 24, 1990",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3srTKJzFxxpqo2RP0ud808wf-qSU1JZ_p5A&s"
        },
        // 
    ],
    keyPersonnel: {
        administrator: "Bill Nelson",
        deputyAdministrator: "Pamela Melroy",
        chiefScientist: "James L. Green",
        
    }
};

function createNasaMissionDropdown() {
    const select = document.createElement("select");
    select.name = "nasa-missions";
    select.id = "nasa-missions";
    select.classList.add("mission-dropdown");

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Select a NASA mission";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    select.appendChild(defaultOption);

    nasa.notableMissions.forEach(mission => {
        const option = document.createElement("option");
        option.value = mission.name;
        option.textContent = mission.name;
        select.appendChild(option);

        // Create image element
        const image = document.createElement("img");
        image.src = mission.image;
        image.alt = mission.name;
        image.style.width = "100px"; // Adjust the width as needed
        image.style.height = "auto"; // Maintain aspect ratio

        // Append image to the container
        const container = document.getElementById("nasa-mission-container");
        container.appendChild(image);
    });

    return select;
}


// Function to toggle NASA info and display mission dropdown
function toggleNasaInfo() {
    toggleInfo('nasa');
}

// Modify the toggleInfo function to dynamically create and append the NASA mission dropdown
function toggleInfo(company) {
    // Hide all company infos
    const companyInfos = document.querySelectorAll(".company-info");
    companyInfos.forEach(info => {
        info.style.display = "none";
    });

    // Show the clicked company info
    const companyInfo = document.getElementById(company + "-info");
    companyInfo.style.display = "block";

    // Check if the clicked company is NASA
    if (company === 'nasa') {
        const missionDropdown = createNasaMissionDropdown();
        const container = document.getElementById("nasa-info");
        container.appendChild(missionDropdown);
    }
}


const spacex = {
    name: "SpaceX",
    logoURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/SpaceX_logo_black.svg/1920px-SpaceX_logo_black.svg.png",
    headquarters: "Hawthorne, California, United States",
    foundingDate: "March 14, 2002",
    founder: "Elon Musk",
    ceo: "Elon Musk",
    president: "Gwynne Shotwell",
    employees: 13000,
    budget: "$13.3 billion (2024)",
    website: "https://www.spacex.com/",
    socialMedia: {
        twitter: "https://twitter.com/SpaceX",
        facebook: "https://www.facebook.com/SpaceX",
        instagram: "https://www.instagram.com/spacex/",
        youtube: "https://www.youtube.com/user/spacexchannel",
    },
    notableMissions: [
        {
            name: "Falcon 1",
            description: "First privately developed liquid-fueled rocket to reach orbit",
            launchDate: "September 28, 2008",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBACT8Uj3OUee-Yg6-buIArPooRru7vH0sOQ&s"
        },
        {
            name: "Falcon 9",
            description: "Reusable rocket designed for reliable and safe transport of satellites and crew",
            launchDate: "June 4, 2010",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Falcon_9_Demo-2_Launching_6_%283%29.jpg"
        },
        {
            name: "Dragon spacecraft",
            description: "Spacecraft designed to carry cargo and crew to the International Space Station",
            launchDate: "December 8, 2010",
            image: "https://spacecenter.org/wp-content/uploads/2020/01/KSC-20200117-PH-SPX01_0001_medium-e1678724652148.jpg"
        },
        // 
    ],
};

const esa = {
    name: "ESA",
    logoURL: "https://upload.wikimedia.org/wikipedia/en/c/ca/ESA_Patch_2022.png",
    headquarters: "Paris, France",
    foundingDate: "May 30, 1975",
    budget: "€7.8 billion (2024)",
    employees: 2200,
    website: "https://www.esa.int/",
    socialMedia: {
        twitter: "https://twitter.com/esa",
        facebook: "https://www.facebook.com/EuropeanSpaceAgency",
        instagram: "https://www.instagram.com/europeanspaceagency/",
        youtube: "https://www.youtube.com/user/ESA",
    },
    notableMissions: [
        {
            name: "Ariane programme",
            description: "Family of expendable launch systems for launching satellites into geostationary transfer orbit",
            launchDate: "December 24, 1979",
            image: "https://s.france24.com/media/display/4807c28e-09d4-11ee-aeb4-005056bfb2b6/w:980/p:16x9/DLS%20PHOTO%20ARIANE%205.jpg"
        },
        {
            name: "Herschel Space Observatory",
            description: "Largest infrared telescope ever launched into space",
            launchDate: "May 14, 2009",
            image: "https://smd-cms.nasa.gov/wp-content/uploads/2023/07/HerschelBeautyShot2_768.jpg"
        },
        {
            name: "Rosetta mission",
            description: "Spacecraft that made historic rendezvous with comet 67P/Churyumov-Gerasimenko",
            launchDate: "March 2, 2004",
            image: "https://www.universetoday.com/wp-content/uploads/2014/01/Rosetta_Philae_Artist_Impression_Close_625x469.jpg"
        },
        
    ],
};

function createSpaceXMissionDropdown() {
    const select = document.createElement("select");
    select.name = "spacex-missions";
    select.id = "spacex-missions";
    select.classList.add("mission-dropdown");

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Select a SpaceX mission";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    select.appendChild(defaultOption);

    spacex.notableMissions.forEach(mission => {
        const option = document.createElement("option");
        option.value = mission.name;
        option.textContent = mission.name;
        select.appendChild(option);
    });

    return select;
}

function createESAMissionDropdown() {
    const select = document.createElement("select");
    select.name = "esa-missions";
    select.id = "esa-missions";
    select.classList.add("mission-dropdown");

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Select an ESA mission";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    select.appendChild(defaultOption);

    esa.notableMissions.forEach(mission => {
        const option = document.createElement("option");
        option.value = mission.name;
        option.textContent = mission.name;
        select.appendChild(option);
    });

    return select;
}

function toggleSpaceXInfo() {
    const companyInfos = document.querySelectorAll(".company-info");
    companyInfos.forEach(info => {
        info.style.display = "none";
    });

    // Show the SpaceX info
    const companyInfo = document.getElementById('spacex-info');
    companyInfo.style.display = "block";

    // Check if the SpaceX mission dropdown already exists
    const existingDropdown = document.getElementById('spacex-missions');
    if (!existingDropdown) {
        // If the dropdown doesn't exist, create it
        const missionDropdown = createSpaceXMissionDropdown();
        const container = document.getElementById("spacex-info");
        container.appendChild(missionDropdown);
    }
}

function toggleESAInfo() {
    // Hide all company infos
    const companyInfos = document.querySelectorAll(".company-info");
    companyInfos.forEach(info => {
        info.style.display = "none";
    });

    // Show the ESA info
    const companyInfo = document.getElementById('esa-info');
    companyInfo.style.display = "block";

    // Check if the ESA mission dropdown already exists
    const existingDropdown = document.getElementById('esa-missions');
    if (!existingDropdown) {
        // If the dropdown doesn't exist, create it
        const missionDropdown = createESAMissionDropdown();
        const container = document.getElementById("esa-info");
        container.appendChild(missionDropdown);
    }
}


function toggleInfo(company) {
    // Hide all company infos
    const companyInfos = document.querySelectorAll(".company-info");
    companyInfos.forEach(info => {
        info.style.display = "none";
    });

    // Show the clicked company info
    const companyInfo = document.getElementById(company + "-info");
    companyInfo.style.display = "block";

    // Check if the clicked company is SpaceX
    if (company === 'spacex') {
        const missionDropdown = createSpaceXMissionDropdown();
        const container = document.getElementById("spacex-info");
        container.appendChild(missionDropdown);
    }
    // Check if the clicked company is ESA
    else if (company === 'esa') {
        const missionDropdown = createESAMissionDropdown();
        const container = document.getElementById("esa-info");
        container.appendChild(missionDropdown);
    }
}

// Function to handle the search button click event
function handleSearch() {
    const searchDropdown = document.getElementById("search-dropdown");
    searchDropdown.style.display = (searchDropdown.style.display === "block") ? "none" : "block";
}

// Function to display detailed information for the selected company
function displayCompanyInfo(company) {
    const infoContainer = document.getElementById("company-info-container");
    infoContainer.innerHTML = ""; // Clear previous info

    const selectedCompany = getCompanyByName(company);

    if (selectedCompany) {
        const infoHTML = `
            <h3>${selectedCompany.name}</h3>
            <p><strong>Headquarters:</strong> ${selectedCompany.headquarters}</p>
            <p><strong>Founding Date:</strong> ${selectedCompany.foundingDate}</p>
            <p><strong>Budget:</strong> ${selectedCompany.budget}</p>
            <p><strong>Employees:</strong> ${selectedCompany.employees}</p>
            <p><strong>Website:</strong> <a href="${selectedCompany.website}" target="_blank">${selectedCompany.website}</a></p>
        `;
        infoContainer.innerHTML = infoHTML;
    }
}

// Helper function to get company object by name
function getCompanyByName(name) {
    switch (name.toLowerCase()) {
        case 'nasa':
            return nasa;
        case 'spacex':
            return spacex;
        case 'esa':
            return esa;
        default:
            return null;
    }
}

// Event listener for search button click
document.getElementById("search-button").addEventListener("click", handleSearch);

// Event listener for selecting a company from the dropdown
document.getElementById("search-dropdown").addEventListener("click", function(e) {
    if (e.target && e.target.nodeName === "BUTTON") {
        const companyName = e.target.textContent;
        displayCompanyInfo(companyName);
    }
});


// Function to open the recent news modal
function openRecentNewsModal() {
    var modal = document.getElementById("recent-news-modal");
    modal.style.display = "block";
}

function closeRecentNewsModal() {
    var modal = document.getElementById("recent-news-modal");
    modal.style.display = "none";
}


// Event listener for clicking outside the modal to close it
window.onclick = function(event) {
    var modal = document.getElementById("recent-news-modal");
    if (event.target == modal) {
        modal.style.display = "none"; // Close the modal if clicked outside of it
    }
}


