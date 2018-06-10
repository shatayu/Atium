var user = firebase.UserInfo.uid;
var addCard = function (num, project){

        var myCol = $('<div class="col-sm-3 col-md-3 pb-2"></div>');
        var myPanel = $('<div class="row" id="contentPanel"><div class="col-sm-3 col-md-3 pb-2"><div class="card card-outline-info" id="'+1+'Panel"><div class="card-block"><a href="ProjectView.html"><button type="button"  id="btnGen" class = "btn"><span class="float-center"><i class="fa fa-remove"><h1>' + project + '</h1></i></span></button></a></div></div></div></div>');
        myPanel.appendTo(myCol);
        myCol.appendTo('#contentPanel');
    
    
    $('.close').on('click', function(e){
      e.stopPropagation();  
          var $target = $(this).parents('.col-sm-3');
          $target.hide('slow', function(){ $target.remove(); });
    });
};

$('#btnGen').click(function(){
  console.log("work")
    
});

$( document ).ready(function() {


    //addCard($('#numPanels').val());
});