$(document).ready(function () {
  $('form').on('submit', function () {
    var item = $('form input');
    var todo = {item: item.val()};

    $.ajax({
      type: 'POST',
      url: '/',
      data: todo,
      success: function (data) {
        console.log(data);
        location.reload();
      }
    });
    // $('.todo-list').append('<li>'+todo.item+'</li>');
    return false;
  });
});
