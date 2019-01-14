// 投稿の非同期通信メッセージの内容
$(document).on("turbolinks:load", function(){
  function buildHTML(message) {
    image = (message.image === null) ? "" :
                  `<img src="${message.image}"
                  class="lower-message__image">
                  `

    var html = `<div class="message">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${message.user_name}
                    </div>
                    <div class="upper-message__date">
                      ${message.created_at}
                    </div>
                  </div>
                  <div class="lower-message">
                    <p class="lower-message__content">
                      ${message.text}
                    </p>
                  </div>
                  ${image}
               `
    return html;
  }

// 投稿の非同期通信処理の処理内容
  $("#new-message").on("submit", function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr("action")
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $(".messages").append(html)
      $('#new-message')[0].reset()
      $('.js-messages').animate({scrollTop: $('.js-messages')[0].scrollHeight});
    })
    .fail(function(){
      alert("error");
    })
    .always(function() {
      $('.form__submit').prop('disabled',false);
    })
  })

    // 自動更新機能実装の処理
    var intervel = setInterval(function() {
      if (window.location.href.match(/\/groups\/\d+\/messages/)) {
    $.ajax({
      url: location.href.json,
    })
    .done(function(json){
      var id = $(".message").data("messageId");
      var insertHTML = "";
      json.messages.forEach(function(message){
        if(message.id > id) {
        insertHTMl += buildHTML(message);
        }
      });
      $(".js-messages").prepend(insertHTMl);
    })
    .fail(function(data){
      alert("自動更新に失敗しました");
    });
  } else {
    clearInterval(interval);
  }}, 5000);

});

