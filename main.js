// hide profile and message content on load
$('.profile').hide();
$('.messages').hide();

$('.task-menu').on('click',function(e) {

  var current = e.currentTarget.offsetParent;
  var currentChild = e.currentTarget.children[0];

  var oldTarget = $('.nav-tabs').find('.active')[0];
  var oldBadge = $(oldTarget).children().children()[0];

  var oldTag = $(oldBadge).data().tag;
  var newTag = $(currentChild).data().tag;

  $(oldTarget).removeClass('active');
  $(oldBadge).removeClass('badge-active');

  $('.'+oldTag).hide();
  $('.'+newTag).show();

  $(current).addClass('active');
  $(currentChild).addClass('badge-active');
});