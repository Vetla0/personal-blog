let prev_btn = $(".left");
let next_btn = $(".right");
let left_work = $(".active-left");
let right_work = $(".active-right");
// let prev_work = $(".active-left").prev();
// let next_work = $(".active-right").next();

//при клике на кнопку влево
if (!left_work.prev().length) {
  $(".left").css({
    display: "none",
  });
}
if (!right_work.next().length) {
  $(".right").css({
    display: "none",
  });
}
prev_btn.on("click", function () {
  $(".right").css({
    //возврат отображения кнопки влево
    display: "block",
  });

  if (left_work.prev().length) {
    $(".recentWork-slider-name.active-left").prev().addClass("active-left");
    left_work.removeClass("active-left").addClass("active-right");
    right_work.removeClass("active-right");
    // next_work = right_work;
    right_work = left_work;
    left_work = left_work.prev();

    if (!left_work.prev().length) {
      $(".left").css({
        display: "none",
      });
    }
  }
});

//клик вправо
next_btn.on("click", function () {
  $(".left").css({
    display: "block",
  });

  if (right_work.next().length) {
    $(".recentWork-slider-name.active-right").next().addClass("active-right");
    right_work.removeClass("active-right").addClass("active-left");
    left_work.removeClass("active-left");
    // prev_work = left_work;
    left_work = right_work;
    right_work = right_work.next();
    //исчезновение стрелки вправо
    if (!right_work.next().length) {
      $(".right").css({
        display: "none",
      });
    }
  }
});
