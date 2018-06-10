
    /* Set the width of the side navigation to 250px */
    function openNav() {
       document.getElementById("mySidenav").style.width = "150px";
    }

    document.getElementById("open").addEventListener("click", openNav);
    document.getElementById("close").addEventListener("click", closeNav);
    document.getElementById("container").addEventListener("click", closeNav);

    /* Set the width of the side navigation to 0 */
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
// Assuming this JSON.
var data = {
    items: [
        {
            project: "Neville Chamberlain",
            summary: "Neville Chamberlain spent six years there but the plantation was a failure, and Joseph Chamberlain lost £50,000. Bonar Law initially appointed Chamberlain Postmaster General and Chamberlain was sworn of the Privy Council. Future Labour Prime Minister Clement Attlee complained that Chamberlain \"Always treated us like dirt\", and Chamberlain in April 1927 wrote: \"More and more do I feel an utter contempt for their lamentable stupidity.\" His poor relations with the Labour Party later played a major part in his downfall as Prime Minister. Chamberlain reduced the annual interest rate on most of Britain's war debt from 5% to 3.5%. Between 1932 and 1938, Chamberlain halved the percentage of the budget devoted to interest on the war debt. Though some Chamberlain supporters found Churchill's oratory to be faint praise of the late Prime Minister, Churchill added less publicly, \"Whatever shall I do without poor Neville? I was relying on him to look after the Home Front for me.\" Amongst others who paid tribute to Chamberlain in the Commons and in the House of Lords on 12 November were Lord Halifax, Attlee, and the Liberal Party leader and Air Minister, Sir Archibald Sinclair. Conservative MP Iain Macleod's 1961 biography of Chamberlain was the first major biography of a revisionist school of thought on Chamberlain. While many revisionist writers had suggested that Chamberlain had had few or no choices in his actions, Parker argued that Chamberlain and his colleagues had chosen appeasement over other viable policies.",
            title: "Neville Boi",
            url: "https://en.wikipedia.org/wiki/Neville_Chamberlain#Early_days_(May_1937_%E2%80%93_March_1938)"
        }
    ]
}




var success = function(data) {
  data.items.forEach(function(item, index) {
      let firstDivStyle = '';
      if (index === 0) {
          firstDivStyle = ' id="firstpanel"';
      }
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
  });
}

// Feaking an ajax response...
success(data);