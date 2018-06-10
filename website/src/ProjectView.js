var data = {items:[{title:"ONE",content:"Something-1"},
                   {title:"TWO",content:"Something-2"},
                   {title:"THREE",content:"Something-3"}
                  ]
           };


var success = function(data) {
  data.items.forEach(function(item,index) {
    $('.latestinfo').append(
        '<div class="panel panel-default">'+
          '<div class="panel-heading" role="tab" id="heading_'+index+'">'+
            '<h4 class="panel-title">'+
              '<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse_'+index+'" aria-expanded="true" aria-controls="collapse_'+index+'">'+
                  item.title+
              '</a>'+
            '</h4>'+
          '</div>'+
          '<div id="collapse_'+index+'" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading_'+index+'">'+
            '<div class="panel-body">'+
              item.content+
            '</div>'+
          '</div>'+
        '</div>'
      );
  });
}

// Feaking an ajax response...
success(data);