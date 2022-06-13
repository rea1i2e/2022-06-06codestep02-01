
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  // メインビュー以下でヘッダー固定
  // let mainviewHeight = $('.p-mainview').height() + $('.p-header').height();
  let mainviewHeight = $('.p-header').height();
  $(window).scroll(function () {

    if ($(this).scrollTop() > mainviewHeight) {
      $(".js-header").addClass('is-fixed');
      $(".js-mainview").addClass('is-short');
    } else {
      $(".js-header").removeClass('is-fixed');
      $(".js-mainview").removeClass('is-short');
    }
  });

// スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)
$(document).on('click', 'a[href*="#"]', function () {
  let time = 400;
  let header = $('header').innerHeight();
  let target = $(this.hash);
  if (!target.length) return;
  let targetY = target.offset().top - header;
  $('html,body').animate({ scrollTop: targetY }, time, 'swing');
  return false;
});


// ページ内リンクで移動するとき、ヘッダーの高さ分を調整
$(function(){
  var headerHeight = $('header').outerHeight(); // ヘッダーについているID、クラス名など、余白を開けたい場合は + 10を追記する。
  var urlHash = location.hash; // ハッシュ値があればページ内スクロール
  if(urlHash) { // 外部リンクからのクリック時
    $('body,html').stop().scrollTop(0); // スクロールを0に戻す
    setTimeout(function(){ // ロード時の処理を待ち、時間差でスクロール実行
      var target = $(urlHash);
      var position = target.offset().top - headerHeight;
      $('body,html').stop().animate({scrollTop:position}, 100); // スクロール速度ミリ秒
    }, 100);
  }
  $('a[href^="#"]').click(function(){ // 通常のクリック時
    var headerVal = $(".js-header").outerHeight(true);
    var href= $(this).attr("href"); // ページ内リンク先を取得
    var target = $(href);
    var position = target.offset().top - headerVal;
    $('body,html').stop().animate({scrollTop:position}, 100); // スクロール速度ミリ秒
    return false; // #付与なし、付与したい場合は、true
  });
});
});
