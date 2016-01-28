/*
This is empty on purpose! Your code to build the resume will go here.
 */
 /* jshint forin: false */
var bio =
{
  "name": "Ivy Liang",
  "role": "Financial Analyst",
  "contacts": {
    "mobile": "(213)271-5998",
    "email": "lqqusc@gmail.com",
    "github": "lqq5277",
    "twitter": "@lqq5277",
    "location": "San Jose"
  },
  "welcomeMessage": "Awesome Girl",
  "skills": ["HTML", "CSS", "JS"],
  "biopic": "images/fry.jpg"
};
bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#topContacts").append(formattedMobile);
  $("#topContacts").append(formattedEmail);
  $("#topContacts").append(formattedGithub);
  $("#topContacts").append(formattedTwitter);
  $("#topContacts").append(formattedLocation);
  $("#footerContacts").append(formattedMobile);
  $("#footerContacts").append(formattedEmail);
  $("#footerContacts").append(formattedGithub);
  $("#footerContacts").append(formattedTwitter);
  $("#footerContacts").append(formattedLocation);
  $("#header").append(formattedBiopic);
  $("#header").append(formattedWelcomeMsg);
  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (var skill in bio.skills) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
      $("#skills").append(formattedSkill);
    }
  }
};

var education =
{
  "schools": [{
    "name": "Huazhong University of Science and Technology",
    "location": "Wuhan, China",
    "degree": "BS",
    "majors": ["Financial Engineering", "LAW"],
    "dates": "2011",
    "url": ""
  }, {
    "name": "University of Southern California",
    "location": "Los Angeles, CA",
    "degree": "MS",
    "majors": ["Financial Engineering"],
    "dates": "2013",
    "url": ""
  }],
  "onlineCourses": [{
    "title": "Front-End Web Developer Nanodegree",
    "school": "Udacity",
    "date": "2016",
    "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
  }]
};
education.display = function() {
  for (var school in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(formattedSchoolName+formattedSchoolDegree);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedSchoolDates);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedSchoolLocation);
    for (var major in education.schools[school].majors) {
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
      $(".education-entry:last").append(formattedSchoolMajor);
    }
  }
  $("#education").append(HTMLonlineClasses);
  for (var onlineCourse in education.onlineCourses) {
    $("#education").append(HTMLschoolStart);
    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
    $(".education-entry:last").append(formattedOnlineTitle+formattedOnlineSchool);
    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
    $(".education-entry:last").append(formattedOnlineDates);
    var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
    $(".education-entry:last").append(formattedOnlineURL);
  }
};
var work =
{
  "jobs" : [{
    "employer": "NONDA",
    "title": "Business Analyst",
    "location": "Palo Alto",
    "dates": "2014-2015",
    "description": "Smart Hardware"
  }, {
    "employer": "Doctrina Consulting",
    "title": "Business Analyst",
    "location": "Santa Clara",
    "dates": "2013-2014",
    "description": "Education"
  }]
};
work.display = function() {
  for (var job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    $(".work-entry:last").append(formattedWorkEmployer+formattedWorkTitle);
    var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedWorkDates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
};
var projects =
{
  "projects": [{
    "title": "Online Resume",
    "dates": "2016",
    "description": "Build an online resume by JS",
    "images": ["images/fry.jpg", "images/fry.jpg"]
  }, {
    "title": "HAHA",
    "dates": "2014",
    "description": "HAHAHA",
    "images": [""]
  }]
};
projects.display = function() {
  for (var project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedProjectTitle);
    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedProjectDates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedProjectDescription);
    if (projects.projects[project].images.length > 0) {
      for (var image in projects.projects[project].images) {
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedProjectImage);
      }
    }
  }
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

function inName() {
  names = bio.name.trim().split(" ");
  names[1] = names[1].toUpperCase();
  names[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return names.join(" ");
}
$("#main").append(internationalizeButton);
