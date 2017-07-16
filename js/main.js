$(function(){

  // Console Message for Curious Devs 
  // ===================================================================
  var consoleCSS = 'color:#111;'; 
  var message = "%c \n =================================\n David J. Davis \n =================================\n\n Hello. I see your curious. Take a look around.  \n You will find that I don't reinvent the wheel \n and that I take advantage of some pretty cool \n libraries to accomplish things quickly and \n efficiently. \n\n\n\n"
  console.info( message, consoleCSS);

  // Smooth Scrolling using Velocity JS 
  // ===================================================================
  $('a[href*="#"]').on('click', function (e) {
      // prevent default action and bubbling
      e.preventDefault();
      e.stopPropagation();

      // set target to anchor's "href" attribute
      var target = $(this).attr('href');
      
      // scroll to each target
      $(target).velocity('scroll', {
          duration: 500,
          offset: -40,
          easing: 'ease-in-out'
      });
  });

  // Github API Repos 
  // ===================================================================
   // Github URI's
  var github_profile_uri = "https://api.github.com/users/ddavisgraphics";
  var github_repos = github_profile_uri + "/repos?sort=desc";
  var github_activity = github_profile_uri + "/events/public";
  var github_orgs = github_profile_uri + "/orgs";

  // Promise URI's for grouped Ajax
  var firstPromise = $.get(github_profile_uri);
  var secondPromise = $.get(github_repos);
  var thirdPromise = $.get(github_orgs);

  // Vars for Data
  var githubProfileData;
  var githubRepos;
  var githubOrgs;

  // Making the Promises
  // Setting Data vars
  $.when(firstPromise, secondPromise, thirdPromise).done(function(
    firstData,
    secondData,
    thirdData
  ) {
    githubProfile(firstData[0]);
    githubRepo(secondData[0]);
    githubOrg(thirdData[0]);
  });
});


function githubProfile(data){ 
  var avatar = "<div class='avatar-image'>" + '<img src="' + data.avatar_url + '" alt="github profile picture"/>' + "</div>"; 

  github_header = '<h3>' + data.name + ' <span class="small-username">(@<a href="'+ data.html_url + '" target="_blank">' + data.login + '</a>) </span> </h3>'; 

  github_stats = '<ul class="github-stats">'; 
  github_stats += '<li> Repos : ' + data.public_repos + '</li>'; 
  github_stats += '<li> Gists : ' + data.public_gists + '</li>'; 
  github_stats += '<li> Following : ' + data.following + '</li>'; 
  github_stats += '</ul>'; 

  $('.github-profile').html(github_header);
  $('.github-stats').html(github_stats); 
}

function githubOrg(data){ 
    $.each(data, function(i){
        $this = $(this)[0];
        github_orgs = '<img src="' + $this.avatar_url + '" alt="organization url"/>';
        github_orgs += $this.login; 
    });
   $('.github-orgs').html(github_orgs); 
}

function githubRepo(data){ 
  var github_repos = ""; 
  $.each(data, function(i) {
      github_repos += '<li> <a href="'+data[i].html_url+'" target="_blank">'+data[i].name + '</a> <span class="label">' + data[i].description + ' </span></li>';
  }); 
  $('.github-repos').html(github_repos);
}