$(function() {
    // https://www.codeschool.com/users/1339588.json
  // your code will go here
    $.ajax({
        url: 'https://www.codeschool.com/users/1339588.json',
        contentType: 'application/json',
        dataType: "jsonp",
        success: function(response){
            $.each(response.courses.completed, function(i,val){
                $('#badges').append('<div class="course"><h3>'+ val.title + '</h3><img src="' + val.badge + '"><a href="'+ val.url + '" target="_blank" class="btn btn-primary">See Course</a></div>');
            });
        }
    });
    
});
