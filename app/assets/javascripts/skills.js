$(document).ready(function(){
  $('#new-skill').on("click", 'a', function(e){
    e.preventDefault();
    $.ajax({
      url: $(e.target).attr('href')
    }).done(function(response){
      $('#new-skill').hide();
      $('#skill-div').prepend(response);
    })
  })
  $('#skill-div').on("submit", "form", function(e){
    e.preventDefault();
    $.ajax({
      url: '/skills',
      method: "POST",
      data: $(e.target).serialize()
    }).done(function(response){
      $('#new-skill-form').remove();
      $('#skill-list').prepend(response);
      $('#new-skill').show();
    })
  })
  $('#skill-list').on("click", ".delete-skill a", function(e){
    e.preventDefault();
    var id = this.parentElement.id
    $.ajax({
      url: "/skills/" + id,
      method: 'DELETE'
    }).done(function(response){
      $(this.parentElement.parentElement).remove();
    }.bind(this))
  })
})