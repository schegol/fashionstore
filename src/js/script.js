$(document).ready(function () {
  // фикс. акция наверху страницы:
  const body = $('body');
  const offerLine = $('.header__offer-line');
  const offerLineCloseBtn = $('.header__offer-close');

  let offerLineHeight = offerLine.outerHeight();
  body.css('padding-top', offerLineHeight+'px');

  offerLineCloseBtn.click(function (e) {
    e.preventDefault();
    offerLine.addClass('header__offer-line--closed');
    body.css('padding-top', 0);
  });

  $(window).resize(function () {
    if (!offerLine.hasClass('header__offer-line--closed')) {
      let offerLineHeight = offerLine.outerHeight();
      body.css('padding-top', offerLineHeight+'px');
    };
  });
});
