// bio section
var bio = {
	"name": "Nimesh Jain",
  "role": "WebDeveloper",
  "contacts": {
    "mobile": "555-55-55",
    "email": "nimesh.jain@icloud.com",
    "github": "devNimi",
    "twitter": "@devnimi",
    "location": "Udaipur, India"
  },
  "skills": ["awesomeness", "saving the universe", "super-awesome", "delivering"],
  "welcomeMessage": "Hi there world! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "biopic": "images/fry.jpg"
};
bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

  var formattedContactInfo = [];
  formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
  formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
  formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
  formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
  formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);


  formattedContactInfo.forEach(function(eachContactInfo) {
    $("#topContacts").append(eachContactInfo);
    $("#footerContacts").append(eachContactInfo);
  });

  // for(var i in formattedContactInfo) {
  //   if(formattedContactInfo.hasOwnProperty(i)){
  //     $("#topContacts").append(formattedContactInfo[i]);
  //     $("#footerContacts").append(formattedContactInfo[i]);
  // 	}
  // }

  $("#header").append(HTMLintroduction);

  $(".introduction").append(formattedBioPic);

  if (bio.skills.length > 0) {
    $(".introduction").append(HTMLskillsAtAGlance);
    $(".skillsAtAGlance").append(HTMLskillsStart);

    bio.skills.forEach(function(eachSkill) {
      $("#skills").append(HTMLskills.replace("%data%", eachSkill));
    });

    // for(var j in bio.skills) {
    //   if(bio,skills.hasOwnProperty(j)){
    // $("#skills").append(HTMLskills.replace("%data%", bio.skills[j]));
    //   }
    // }
  }

  $(".introduction").append(formattedWelcomeMsg);
};
bio.display();

// work section
var work = {
  "jobs": [{
      "employer": "Mercury",
      "title": "Front End Web Develoer",
      "location": "California, US",
      "dates": "May 2017",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    },
    {
      "employer": "Venus",
      "title": "FullStack Web Developer",
      "location": "New York, USA",
      "dates": "May 2018",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
    },
    {
      "employer": "Earth",
      "title": "Software Engineer",
      "location": "Rome, Italy",
      "dates": "December 2018 - May 2019",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    },
    {
      "employer": "Mars",
      "title": "Systems Analyst",
      "location": "London, UK",
      "dates": "December 2019 - June 2019",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      "employer": "Jupiter",
      "title": "Astronaut",
      "location": "Stockholm, Sweden",
      "dates": "August 2019 - December 2019",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat."
    },
    {
      "employer": "Saturn",
      "title": "Coach",
      "location": "Zurich, Switzerland",
      "dates": "January 2020 - May 2020",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
    },
    {
      "employer": "Uranus",
      "title": "C.E.O.",
      "location": "Budapest, Hungary",
      "dates": "July 2020 - December 2020",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    },
    {
      "employer": "Neptune",
      "title": "C.E.O.",
      "location": "Florence, Italy",
      "dates": "February 2021 - December 2021",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. "
    }
  ]
};

work.display = function() {

  if (work.jobs.length > 0) {


    work.jobs.forEach(function(eachJob) {
      var formattedEmployer = HTMLworkEmployer.replace("%data%", eachJob.employer);
      var formattedWorkTitle = HTMLworkTitle.replace("%data%", eachJob.title);
      var formattedWorkLocation = HTMLworkLocation.replace("%data%", eachJob.location);
      var formattedWorkDates = HTMLworkDates.replace("%data%", eachJob.dates);
      var formattedWorkDescription = HTMLworkDescription.replace("%data%", eachJob.description);

      var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

      $("#workExperience").append(HTMLworkStart);
      $(".work-entry:last").append(formattedEmployerWorkTitle);
      $(".work-entry:last").append(formattedWorkLocation);
      $(".work-entry:last").append(formattedWorkDates);
      $(".work-entry:last").append(formattedWorkDescription);
    });
    // using for in loops to iterate over array is not recommended
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

    // for(i in work.jobs) {
    // 	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
    // 	var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
    // 	var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
    // 	var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
    // 	var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
    //
    // 	var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;
    //
    // 	$("#workExperience").append(HTMLworkStart);
    // 	$(".work-entry:last").append(formattedEmployerWorkTitle);
    // 	$(".work-entry:last").append(formattedWorkLocation);
    // 	$(".work-entry:last").append(formattedWorkDates);
    // 	$(".work-entry:last").append(formattedWorkDescription);
    // }
  }
};
work.display();

//project section
var projects = {
  "projects": [{
      "title": "M.S. Dhoni Tribute Page",
      "dates": "Jan 2016",
      "description": "a tribute page to best captain ever :). This is my FreeCodeCamp's Full Stack Web developer track ",
      "images": ["images/mahi.jpg"],
      "url": "http://nimeshjain.com/projects/MS-Dhoni-Tribute-Page/"
    },
    {
      "title": "HTML5 Canvas Game",
      "dates": "December 2014 - January 2015",
      "description": "Created an online game using HTML5 Canvas as part of Udacity's Front-End Web Developer Nanodegree.",
      "images": ["images/frogger.jpg"],
      "url": "http://nimeshjain.com/projects/"
    },
    {
      "title": "Online Portfolio",
      "dates": "October 2014",
      "description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer Nanodegree.",
      "images": ["images/portfolio.jpg"],
      "url": "http://nimeshjain.com/projects/"
    },
    {
      "title": "XYZ",
      "dates": "October 2014",
      "description": "lorem ipsum",
      "images": ["images/resume.jpg", "images/197x148.gif", "images/197x148.gif"],
      "url": "http://nimeshjain.com/projects/"
    }
  ]
};
projects.display = function() {
  if (projects.projects.length > 0) {
    projects.projects.forEach(function(eachProject) {
      $("#projects").append(HTMLprojectStart);

      var formattedProjectTitle = HTMLprojectTitle.replace("%data%", eachProject.title).replace("#", eachProject.url);
      var formattedProjectDates = HTMLprojectDates.replace("%data%", eachProject.dates);
      var formattedProjectDescription = HTMLprojectDescription.replace("%data%", eachProject.description);

      $(".project-entry:last").append(formattedProjectTitle);
      $(".project-entry:last").append(formattedProjectDates);
      $(".project-entry:last").append(formattedProjectDescription);

      $(".project-entry:last").append(HTMLprojectImageContainer);

      // for(img in projects.projects[i].images) {
      // 	var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
      // 	$(".project-image-container:last").append(formattedProjectImage);
      // }
      eachProject.images.forEach(function(eachImg) {
        var formattedProjectImage = HTMLprojectImage.replace("%data%", eachImg);
        $(".project-image-container:last").append(formattedProjectImage);
      });
    });
    // for(i in projects.projects) {
    // 	$("#projects").append(HTMLprojectStart);
    //
    // 	var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
    // 	var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
    // 	var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
    //
    // 	$(".project-entry:last").append(formattedProjectTitle);
    // 	$(".project-entry:last").append(formattedProjectDates);
    // 	$(".project-entry:last").append(formattedProjectDescription);
    //
    // 	$(".project-entry:last").append(HTMLprojectImageContainer);
    //
    // 	// for(img in projects.projects[i].images) {
    // 	// 	var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
    // 	// 	$(".project-image-container:last").append(formattedProjectImage);
    // 	// }
    // 	projects.projects[i].images.forEach(function(img){
    // 		var formattedProjectImage = HTMLprojectImage.replace("%data%", img);
    // 		$(".project-image-container:last").append(formattedProjectImage);
    // 	});
    // }

  }
};
projects.display();

// education
var education = {
  "schools": [{
      "name": "University of Milky Way",
      "location": "Dubai, UAE",
      "degree": "B.Sc.(Hon) Software Engineering",
      "major": "Computer Science",
      "dates": "beginning of time",
      "url": "www.example.com"
    },
    {
      "name": "University of Andromeda",
      "location": "Paria, France",
      "degree": "M.S. Software Engineering",
      "major": "Computer Science",
      "dates": "3016",
      "url": "www.example.com"
    }
  ],
  "onlineCourses": [{
      "title": "Object-Oriented Javascript",
      "school": "Udacity",
      "dates": "February 2016",
      "url": "https://www.udacity.com/course/ud015"
    },
    {
      "title": "Object-Oriented Javascript",
      "school": "Udacity",
      "dates": "February 2016",
      "url": "https://www.udacity.com/course/ud015"
    },
    {
      "title": "Object-Oriented Javascript",
      "school": "Udacity",
      "dates": "February 2016",
      "url": "https://www.udacity.com/course/ud015"
    },
    {
      "title": "Object-Oriented Javascript",
      "school": "Udacity",
      "dates": "February 2016",
      "url": "https://www.udacity.com/course/ud015"
    },
    {
      "title": "Object-Oriented Javascript",
      "school": "Udacity",
      "dates": "February 2016",
      "url": "https://www.udacity.com/course/ud015"
    }
  ]
};

education.display = function() {
  if (education.schools.length > 0) {
    education.schools.forEach(function(eachSchool) {
      $("#education").append(HTMLschoolStart);

      var formattedSchoolName = HTMLschoolName.replace("%data%", eachSchool.name);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", eachSchool.degree);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", eachSchool.dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", eachSchool.location);
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", eachSchool.major);

      $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
      $(".education-entry:last").append(formattedSchoolDates);
      $(".education-entry:last").append(formattedSchoolLocation);
      $(".education-entry:last").append(formattedSchoolMajor);
    });
    // for(i in education.schools) {
    // 	$("#education").append(HTMLschoolStart);
    //
    // 	var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
    // 	var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    // 	var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
    // 	var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
    // 	var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
    //
    // 	$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
    // 	$(".education-entry:last").append(formattedSchoolDates);
    // 	$(".education-entry:last").append(formattedSchoolLocation);
    // 	$(".education-entry:last").append(formattedSchoolMajor);
    // }
  }

  if (education.onlineCourses.length > 0) {
    $("#education").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(eachOnlineSchool) {
      $("#education").append(HTMLschoolStart);
      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", eachOnlineSchool.title);
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", eachOnlineSchool.school);
      var formattedOnlineDates = HTMLonlineDates.replace("%data%", eachOnlineSchool.dates);
      var formattedOnlineURL = HTMLonlineURL.replace("%data%", eachOnlineSchool.url);

      $(".education-entry:last").append((formattedOnlineTitle + formattedOnlineSchool).replace("#", formattedOnlineURL));
      $(".education-entry:last").append(formattedOnlineDates);
      // $(".education-entry:last").append(formattedOnlineURL);
    });
    // for(j in education.onlineCourses) {
    // $("#education").append(HTMLschoolStart);
    // var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
    // var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
    // var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
    // var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url);
    //
    // $(".education-entry:last").append((formattedOnlineTitle + formattedOnlineSchool).replace("#", formattedOnlineURL));
    // $(".education-entry:last").append(formattedOnlineDates);
    // // $(".education-entry:last").append(formattedOnlineURL);
    // }
  }
};

education.display();

//Gmaps
$("#mapDiv").append(googleMap);

//simply appends an button at the bottom of page, which when pressed simply Internationalize author's name
// function inName(name){
// 	var newName = name;
// 	newName = newName[0].toUpperCase() + newName.slice(1,newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase();
// 	return newName;
// };
// $("#main").append(internationalizeButton);
