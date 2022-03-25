(function () {
    $(document).on("click", ".click-to-expand", function () {
      var imageSrc = $(this).parents(".image-grid").find("img").attr("src");
      $(".js-modal-image").attr("src", imageSrc);
    });
  })();
  