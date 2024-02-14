$(document).ready(function () {
  $("img")
    .click(function () {
      var curPic = $(this).attr("src");
      var altPic = $(this).attr("alt-pic");
      if (curPic === $(this).data("original-src")) {
        $(this).attr("src", altPic);
      } else {
        $(this).attr("src", $(this).data("original-src"));
      }
    })
    .each(function () {
      $(this).data("original-src", $(this).attr("src"));
    });
});
