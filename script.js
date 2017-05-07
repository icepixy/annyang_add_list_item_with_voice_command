
var template = function(text) {
  alert("template - "+ $text);
  $html = '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + $text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
  
      alert("html is" + $html);
  $('div.list').append($html);
  alert("html appended to div " + $html);
  $('#todo').val("");
  alert("value cleared");
  return false;

};
//add item to list
 var add = function(text) {
      alert('reached this add point');
      html = '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';

      alert("html is" + html);
      $('div.list').append(html);
      alert("html appended to div " + html);
      alert("tamplate has" + text);
		};

var main = function() {
  
  if (annyang) {
  	var commands = {
      'add *item': add,      
    };
   
    var str = JSON.stringify(commands);
		alert("commands=" + str);
     annyang.addCommands(commands);
    annyang.start(); 
    alert("i'm started annyang" + commands);
  }              
      
  $('form').submit(function() {
      $text = $('#todo').val();
   // alert("This is text " + $text);
    template($text);
    //toggle active star
    $('.glyphicon-star').on('click',function() {
      $('.glyphicon-star').toggleClass('active');
      alert("class active toggled");
    });
    $('.glyphicon-remove').on('click',function() {
      $('.glyphicon-remove').toggleClass('active');
      alert("class active removed");
    });

    return false;  
  });
 
  
};

$(document).ready(main);