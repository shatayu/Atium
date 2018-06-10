let firebase = require("firebase");

var sidebarImage=document.getElementById("sidebarImage");
 sidebarImage.width=50;
 sidebarImage.height=50;

    
    /* Set the width of the side navigation to 250px */
    function openNav() {
       document.getElementById("mySidenav").style.width = "150px";
    }

    document.getElementById("atiumheader").addEventListener("click", openNav);
    document.getElementById("close").addEventListener("click", closeNav);
    //document.getElementById("container").addEventListener("click", closeNav);

    /* Set the width of the side navigation to 0 */
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

var config = {
    apiKey: "AIzaSyADlbe5mZ62QFaLhPSwnC_ksGTGhBqTyjo",
    authDomain: "atium-e4df2.firebaseapp.com",
    databaseURL: "https://atium-e4df2.firebaseio.com",
    projectId: "atium-e4df2",
    storageBucket: "atium-e4df2.appspot.com",
    messagingSenderId: "254101329920"
  };

  firebase.initializeApp(config);

   var database = firebase.database();


let data = [];
// production ID z4GwaEY5WXZC17998rIuIZojM7D2
function getDataAndProjects() {
    database.ref('wakanda-forever').once("value")
    .then(function(snapshot) {
        var projects = [];
        
        snapshot.forEach(function(childSnapshot) {
            console.log(childSnapshot.val());

            data.push(childSnapshot.val());

            for (let i = 0; i < data.length; i++) {
                if (!projects.includes(data[i].project) && data[i].project.length > 0) {
                    projects.push(data[i].project);
                }
            }

            projects = projects.filter(function(item, pos) {
                return projects.indexOf(item) == pos;
            })
        });
                
        for (let i = 0; i < projects.length; i++) {
            $('#mySidenav').append('<a href="#" class="projectSidebar">'+projects[i]+'</a>')
        }

        $(".projectSidebar").click(function() {
            localStorage.setItem("project", $(this).text());
            success(data, $(this).text())
        });

        // Feaking an ajax response...
        success(data, localStorage.getItem("project"));
    })
}

var success = function(data, currentProject) {
    console.log(currentProject);
    console.log(data);
    let renderedData = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].project === currentProject) {
            renderedData.push(data[i]);
        }
    }

    console.log(renderedData);
    $(".latestinfo").empty();
    for (let index = 0; index < renderedData.length; index++) {
        let item = renderedData[index];
        let firstDivStyle = '';
        if (index === 0) {
            firstDivStyle = ' id="firstpanel"';
        }

        if (item.title.length > 0) {
            $('.latestinfo').append(
                '<div class="panel panel-default">'+
                    '<div class="panel-heading" role="tab" id="heading_'+index+'">'+
                    '<h4 class="panel-title"' + firstDivStyle + '>'+
                        '<div class = "title" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse_'+index+'" aria-expanded="true" aria-controls="collapse_'+index+'">'+
                            item.title+
                        '</div>'+
                    '</h4>'+
                    '</div>'+
                    '<div id="collapse_'+index+'" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading_'+index+'">'+
                    '<div class="panel-body">'+
                        item.summary+
                    '</div>'+
                    '</div>'+
                '</div>'
            );
        }
    }
}

getDataAndProjects();

let interval = setInterval(function() {
    let projectName = localStorage.getItem("project");
    success(data, project);
}, 250)