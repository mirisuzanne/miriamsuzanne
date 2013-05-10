var amountVisible=function(c) {
  var a=$(window).scrollTop();
  var b=a+$(window).height();
  var e=c.offset().top;
  var d=e+c.height();

  if (d>a&&d<b) { return d-a } else { return b-e }
};

var fetchMatchingNavItem = function(a) {
  if ($(a).attr("id")=="intro") {
    $("nav[role='navigation'] a").removeClass("active");
    $("nav[role='navigation']").removeClass();
  } else {
    return $("[href='#"+$(a).attr("id")+"']")
  }
};

var setCurrentClass = function(a) {
  if (a) {
    a.addClass("active");
    a.parent().siblings().children("a").removeClass("active");
    $("nav[role='navigation']").attr('class', a.attr("href").split("#")[1]);
  }
};

var determineCurrentNodeAndSetNav = function() {
  var a = null;
  var b = $("section:in-viewport, #appendix:in-viewport");

  b.each(function(c) {
    var d=$(this);
    if(a==null||amountVisible(d)>=amountVisible(a)){a=d}
  })

  current_index = $("section").index(a);
  setCurrentClass(fetchMatchingNavItem(a))
};

function footerHeight() {
  var windowH = $(window).height();
  var appendixO = $('#appendix > div').outerHeight();
  if(windowH > appendixO) {
    $('#appendix > div').height(windowH);
  };
}

$(document).ready(function(){
  footerHeight();
  $('.contact').defuscate();
  var c=$("section, #appendix");
  var b=0;
  var a;
  $(window).scroll(function(){
    determineCurrentNodeAndSetNav()
  });
  $("nav[role='navigation'] a").click(function(g){
    var d=$(this);
    var f=d.attr("href").split("#")[1];
    var h=$($("[role='"+f+"']"));
    $.scrollTo("#"+f,600,{offset:0});
    a=$("#"+f);
    b=c.index(a);
    g.preventDefault()
  });
});

$(window).resize(function(){
  equalHeight();
});