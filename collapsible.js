var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var contentcolap = this.nextElementSibling;
      if (contentcolap.style.maxHeight){
        contentcolap.style.maxHeight = null;
      } else {
        contentcolap.style.maxHeight = contentcolap.scrollHeight + "px";
      } 
    });
}

function count(){
    var counter = { var: 0 };
    TweenMax.to(counter, 3, {
      var: 100, 
      onUpdate: function () {
        var number = Math.ceil(counter.var);
        $('.counter').html(number);
        if(number === counter.var){ count.kill(); }
      },
      onComplete: function(){
        count();
      },    
      ease:Circ.easeOut
    });
  }
  
  count();