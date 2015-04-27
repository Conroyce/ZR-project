// hide profile and message content on load
$('.profile').hide();
$('.messages').hide();

// when a nav tab is clicked
$('.task-menu').on('click',function(e) {
  // grab newly click tab and span elements
  var newTab = e.currentTarget.offsetParent;
  var newSpan = e.currentTarget.children[0];

  // find original tab and span elements
  var oldTab = $('.nav-option').find('.active')[0];
  var oldSpan = $(oldTab).children().children()[0];

  // grab data tag from both original and new tab
  var oldTag = $(oldSpan).data().tag;
  var newTag = $(newSpan).data().tag;

  // remove active classes from original tab
  $(oldTab).removeClass('active');
  $(oldSpan).removeClass('badge-active');

  // hide original content that corresponds to original tab, 
  // show new content based on new tab clicked
  $('.'+oldTag).hide();
  $('.'+newTag).show();

  // add active classes to newly clicked tab
  $(newTab).addClass('active');
  $(newSpan).addClass('badge-active');
});