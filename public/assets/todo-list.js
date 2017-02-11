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


      $('li').on('click', function () {
        console.log('li');
        var item = $(this).text().replace(/ /g, "-");
        $.ajax({
          type: 'DELETE',
          url: '/'+ item,
          success: function (data) {
            console.log(data);
            location.reload();
          }
        });
      });
});
