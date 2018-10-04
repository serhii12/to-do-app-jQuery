$(document).ready(function() {
  // get DOM elements
  const myInput = $('input[type=text]')
  const myForm = $('form');
  const myList = $('.toDoList');
  const errorMsg = $('#error');
  // add EventListener on submission
  myForm.submit(function(e) {
    // prevent default submission of the form
    e.preventDefault();
    // Check if input is not empty
    if (myInput.val() !== '') {
      // hide error msg
      errorMsg.hide();
      myList.append(`<li class="toDoItem"><span class="check todo"></span>${myInput.val()}<a href='#' class="myLink"><i class='fa fa-times-circle'></i></a></li>`);
      // reset form
      myInput.val('');
    } else {
      // If input is empty let user know
      errorMsg.show();
    }
    //drag/drop sort items
    myList.sortable();
  });
  // when the page loads focus on the input field
  myInput.focus();

  const moveToBottom = item => {
    item.fadeOut(function() {
      item.appendTo(myList);
      item.fadeIn();
    });
  };

  myList.on('click', '.toDoItem', function() {
    // Find the checkbox toggleClass on click
    $(this).find('.check').toggleClass('todo done');
    // toggleClass on click on the li
    $(this).toggleClass('completed');
    // automatically move completed items to the bottom
    if ($(this).hasClass('completed')) {
      moveToBottom($(this));
    }
  });
  //allow the removal of items
  myList.on('click', 'a', function() {
    const toDoListItem = $(this).parent();
    console.log(toDoListItem);
    toDoListItem.remove();
  });
});