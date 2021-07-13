var disPercentage = document.getElementsByClassName("discount__percentage");
for (var i = 0; i < disPercentage.length; i++) {
    // console.log(disPercentage[i].childNodes[1].textContent)
    if (disPercentage[i].childNodes[1].textContent === "0%") {
        disPercentage[i].style.display = "none";
    }
}

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  function initializeClock(id, endtime) {
    var clock = document.getElementsByClassName(id)[0];
    // var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hour');
    var minutesSpan = clock.querySelector('.min');
    var secondsSpan = clock.querySelector('.sec');
  
    function updateClock() {
      var t = getTimeRemaining(endtime);
  
    //   daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  
  var deadline = new Date(Date.parse(new Date()) + 2 * 60 * 60 * 1000);
  initializeClock('home-page__flash-sale', deadline);

$(".home-page__health-care .slider__prev").css("display", "none");

$(".home-page__health-care .slider__next").click(function () {
    var x = document.querySelector(".home-page__health-care .row");
    console.log(x);
    if (!x.classList.contains("swipe-next")) {
        $(".home-page__health-care .row").toggleClass("swipe-next");
        $(".home-page__health-care .row").removeClass("swipe-prev");
    }

    $(".home-page__health-care .slider__prev").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__health-care .slider__prev").click(function () {
    $(".home-page__health-care .row").removeClass("swipe-next");
    $(".home-page__health-care .row").toggleClass("swipe-prev");

    $(".home-page__health-care .slider__next").css("display", "flex");
    $(this).css("display", "none");
});

//
$(".home-page__food .slider__prev").css("display", "none");

$(".home-page__food .slider__next").click(function () {
    var x = document.querySelector(".home-page__food .row");
    console.log(x);
    if (!x.classList.contains("swipe-next")) {
        $(".home-page__food .row").toggleClass("swipe-next");
        $(".home-page__food .row").removeClass("swipe-prev");
    }

    $(".home-page__food .slider__prev").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__food .slider__prev").click(function () {
    $(".home-page__food .row").removeClass("swipe-next");
    $(".home-page__food .row").toggleClass("swipe-prev");

    $(".home-page__food .slider__next").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__text-book .slider__prev").css("display", "none");
$(".home-page__text-book .slider__next").click(function () {
    var x = document.querySelector(".home-page__text-book .row");
    // console.log(x);
    if (!x.classList.contains("swipe-next")) {
        $(".home-page__text-book .row").toggleClass("swipe-next");
        $(".home-page__text-book .row").removeClass("swipe-prev");
    }

    $(".home-page__text-book .slider__prev").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__text-book .slider__prev").click(function () {
    $(".home-page__text-book .row").removeClass("swipe-next");
    $(".home-page__text-book .row").toggleClass("swipe-prev");

    $(".home-page__text-book .slider__next").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__text-book-2 .slider__prev").css("display", "none");
$(".home-page__text-book-2 .slider__next").click(function () {
    var x = document.querySelector(".home-page__text-book-2 .row");
    // console.log(x);
    if (!x.classList.contains("swipe-next")) {
        $(".home-page__text-book-2 .row").toggleClass("swipe-next");
        $(".home-page__text-book-2 .row").removeClass("swipe-prev");
    }

    $(".home-page__text-book-2 .slider__prev").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__text-book-2 .slider__prev").click(function () {
    $(".home-page__text-book-2 .row").removeClass("swipe-next");
    $(".home-page__text-book-2 .row").toggleClass("swipe-prev");

    $(".home-page__text-book-2 .slider__next").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__text-book-3 .slider__prev").css("display", "none");

$(".home-page__text-book-3 .slider__next").click(function () {
    var x = document.querySelector(".home-page__text-book-3 .row");
    // console.log(x);
    if (!x.classList.contains("swipe-next")) {
        $(".home-page__text-book-3 .row").toggleClass("swipe-next");
        $(".home-page__text-book-3 .row").removeClass("swipe-prev");
    }

    $(".home-page__text-book-3 .slider__prev").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__text-book-3 .slider__prev").click(function () {
    $(".home-page__text-book-3 .row").removeClass("swipe-next");
    $(".home-page__text-book-3 .row").toggleClass("swipe-prev");

    $(".home-page__text-book-3 .slider__next").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__toy .slider__prev").css("display", "none");

$(".home-page__toy .slider__next").click(function () {
    var x = document.querySelector(".home-page__toy .row");
    // console.log(x);
    if (!x.classList.contains("swipe-next")) {
        $(".home-page__toy .row").toggleClass("swipe-next");
        $(".home-page__toy .row").removeClass("swipe-prev");
    }

    $(".home-page__toy .slider__prev").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__toy .slider__prev").click(function () {
    $(".home-page__toy .row").removeClass("swipe-next");
    $(".home-page__toy .row").toggleClass("swipe-prev");

    $(".home-page__toy .slider__next").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__draw .slider__prev").css("display", "none");

$(".home-page__draw .slider__next").click(function () {
    var x = document.querySelector(".home-page__draw .row");
    // console.log(x);
    if (!x.classList.contains("swipe-next")) {
        $(".home-page__draw .row").toggleClass("swipe-next");
        $(".home-page__draw .row").removeClass("swipe-prev");
    }

    $(".home-page__draw .slider__prev").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__draw .slider__prev").click(function () {
    $(".home-page__draw .row").removeClass("swipe-next");
    $(".home-page__draw .row").toggleClass("swipe-prev");

    $(".home-page__draw .slider__next").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__child-book .slider__prev").css("display", "none");

$(".home-page__child-book .slider__next").click(function () {
    var x = document.querySelector(".home-page__child-book .row");
    // console.log(x);
    if (!x.classList.contains("swipe-next")) {
        $(".home-page__child-book .row").toggleClass("swipe-next");
        $(".home-page__child-book .row").removeClass("swipe-prev");
    }

    $(".home-page__child-book .slider__prev").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__child-book .slider__prev").click(function () {
    $(".home-page__child-book .row").removeClass("swipe-next");
    $(".home-page__child-book .row").toggleClass("swipe-prev");

    $(".home-page__child-book .slider__next").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__manga .slider__prev").css("display", "none");

$(".home-page__manga .slider__next").click(function () {
    var x = document.querySelector(".home-page__manga .row");
    // console.log(x);
    if (!x.classList.contains("swipe-next")) {
        $(".home-page__manga .row").toggleClass("swipe-next");
        $(".home-page__manga .row").removeClass("swipe-prev");
    }

    $(".home-page__manga .slider__prev").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__manga .slider__prev").click(function () {
    $(".home-page__manga .row").removeClass("swipe-next");
    $(".home-page__manga .row").toggleClass("swipe-prev");

    $(".home-page__manga .slider__next").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__calc .slider__prev").css("display", "none");

$(".home-page__calc .slider__next").click(function () {
    var x = document.querySelector(".home-page__calc .row");
    // console.log(x);
    if (!x.classList.contains("swipe-next")) {
        $(".home-page__calc .row").toggleClass("swipe-next");
        $(".home-page__calc .row").removeClass("swipe-prev");
    }

    $(".home-page__calc .slider__prev").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__calc .slider__prev").click(function () {
    $(".home-page__calc .row").removeClass("swipe-next");
    $(".home-page__calc .row").toggleClass("swipe-prev");

    $(".home-page__calc .slider__next").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__vpp .slider__prev").css("display", "none");

$(".home-page__vpp .slider__next").click(function () {
    var x = document.querySelector(".home-page__vpp .row");
    // console.log(x);
    if (!x.classList.contains("swipe-next")) {
        $(".home-page__vpp .row").toggleClass("swipe-next");
        $(".home-page__vpp .row").removeClass("swipe-prev");
    }

    $(".home-page__vpp .slider__prev").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__vpp .slider__prev").click(function () {
    $(".home-page__vpp .row").removeClass("swipe-next");
    $(".home-page__vpp .row").toggleClass("swipe-prev");

    $(".home-page__vpp .slider__next").css("display", "flex");
    $(this).css("display", "none");
});

var hp_slider_count = 0;
$(".home-page__slider .slider__next").click(function () {
    // var x = document.querySelector(".home-page__slider .slider__image");
    // // console.log(x);
    // if(!x.classList.contains("swipe-next")){
    $(".home-page__slider .slider__image").addClass("swipe-next");
    hp_slider_count++;
    if (hp_slider_count <= 7) {
        $('.slider__image.swipe-next').css('transform', 'translateX(' + -hp_slider_count + '00%)');
    } else {
        hp_slider_count = 0;
        $('.slider__image.swipe-next').css('transform', 'translateX(' + -hp_slider_count + '00%)');
    }
});
$(".home-page__slider .slider__prev").click(function () {
    hp_slider_count--;
    $(".home-page__slider .slider__image").addClass("swipe-prev");
    if (hp_slider_count > 0 && hp_slider_count <= 7) {
        $('.slider__image.swipe-prev').css('transform', 'translateX(' + -hp_slider_count + '00%)');
    } else {
        hp_slider_count = 0;
        $('.slider__image.swipe-prev').css('transform', 'translateX(' + 0 + '00%)');
    }
});

$(".side-bar__left").click(function () {
    $(".side-bar").toggleClass("show");
    var x = document.getElementsByClassName("side-bar__right")[0];
    // console.log(x.style.boxShadow)
    if (!x.style.boxShadow == "") {
        x.style.boxShadow = "";
    } else {
        x.style.boxShadow = "0px 0px 4px 2px #999999";
    }
});


var para = document.createElement("p");
var node = document.createTextNode("Tô Bình Yên Vẽ Hạnh Phúc");
para.appendChild(node);

var para2 = document.createElement("p");
var node2 = document.createTextNode('Sau thành công của cuốn sách đầu tay “Phải lòng với cô đơn” chàng họa sĩ nổi tiếng và tài năng Kulzsc đã trở lại với một cuốn sách vô cùng đặc biệt mang tên: "Tô bình yên - vẽ hạnh phúc" – sắc nét phong cách cá nhân với một chút "thơ thẩn, rất hiền".');
para2.appendChild(node2);

var para3 = document.createElement("p");
var node3 = document.createTextNode('Không giống với những cuốn sách chỉ để đọc, "Tô bình yên – vẽ hạnh phúc" là một cuốn sách mà độc giả vừa tìm được "Hạnh phúc to to từ những điều nho nhỏ" vừa được thực hành ngay lập tức. Một sự kết hợp mới lạ đầy thú vị giữa thể loại sách tản văn và sách t&o...');
para3.appendChild(node3);

var rank_1 = {
    img: "./assets/img/rank-1.jpg",
    bookName: "Tô Bình Yên Vẽ Hạnh Phúc (Tái Bản 2021)",
    author: "Kulzsc",
    point: 26041,
    publisher: "NXB Phụ Nữ Việt Nam",
    price: 79000,
    discount: 18,
    rank: 1,
    desc: [
        para,
        para2,
        para3
    ]
}
var para2_1 = document.createElement("p");
para2_1.textContent = "";
var em = document.createElement("em");
em.textContent = "Tất cả những trải nghiệm trong chuyến phiêu du theo đuổi vận mệnh của mình đã giúp Santiago thấu hiểu được ý nghĩa sâu xa nhất của hạnh phúc, hòa hợp với vũ trụ và con người.";

para2_1.appendChild(em);
var em2 = document.createElement("em");
// em = "";
em2.textContent = "Nhà giả kim ";
var para2_2 = document.createElement("p");
para2_2.textContent = "";
var node4 = document.createTextNode("");
node4.textContent = "Tiểu thuyết ";
para2_2.appendChild(node4);
para2_2.appendChild(em2);
console.log(para2_2)
// para2_2.appendChild(node2);
var node5 = document.createTextNode("");
node5.textContent = " của Paulo Coelho như một câu chuyện cổ tích giản dị, nhân ái, giàu chất thơ, thấm đẫm những minh triết huyền bí của phương Đông. Trong lần xuất bản đầu tiên tại Brazil vào năm 1988, sách chỉ bán được 900 bản. Nhưng, với số phận đặc biệt của cuốn sách dành cho toàn nhân loại, vượt ra ngoài biên giới quốc gia, ";
para2_2.appendChild(node5);
var em3 = document.createElement("em");
// em = "";
em3.textContent = "Nhà giả kim ";
para2_2.appendChild(em3);
var node6 = document.createTextNode("đã làm rung động hàng triệu tâm hồn, trở thành một trong những cuốn sách bán chạy nhất mọi thời đại, và có...");
para2_2.appendChild(node6);

var rank_2 = {
    img: "./assets/img/rank-2.jpg",
    bookName: "Nhà Giả Kim (Tái Bản 2021)",
    author: "Paulo Coelho",
    point: 24426,
    publisher: "NXB Hội Nhà Văn",
    price: 79000,
    discount: 15,
    rank: 2,
    desc: [
        para2_1,
        para2_2
    ]
}

var para3_1 = document.createElement('p');
var em3_1 = document.createElement('em');
em3_1.textContent = '"Tôi lúc 6 tuổi: Mẹ ơi, 25 tuổi con sẽ mua cho mẹ một căn nhà lớn và chiếc xe hơi!';
para3_1.appendChild(em3_1);

var para3_2 = document.createElement('p');
var em3_2 = document.createElement('em');
em3_2.textContent = 'Tôi lúc 25 tuổi: Mẹ yêu, shipper đến rồi con còn thiếu 20k để nhận hàng."';
para3_2.appendChild(em3_2);
var para3_3 = document.createElement('p');
para3_3.textContent='Đúng là tuổi trẻ chưa trải sự đời, lớn rồi mới biết hóa ra cuộc đời không chỉ có màu hồng, không phải cái gì mình thích, mình muốn là a lê hấp bạn sẽ có được ngay, mà trái lại - bạn phải vật lộn với đủ thứ, dù chỉ đơn giản là để sống một đời bình thường thôi.';
var para3_4 = document.createElement('p');
para3_4.textContent='Nhưng mà hỏi thật lòng nhé, cuộc đời thực sự “khó ở” và “buồn” tới vậy à?';
var rank_3 = {
    img: "./assets/img/rank-3.jpg",
    bookName: "Vui Vẻ Không Quạu Nha 2",
    author: "Ở Đây Zui Nè",
    point: 24155,
    publisher: "NXB Phụ Nữ Việt Nam",
    price: 69000,
    discount: 20,
    rank: 3,
    desc: [para3_1, para3_2, para3_3, para3_4]
}
var rank_4 = {
    img: "./assets/img/rank-4.jpg",
    bookName: "Vui Vẻ Không Quạu Nha",
    author: "Ở Đây Zui Nè",
    point: 24002,
    publisher: "NXB Phụ Nữ Việt Nam",
    price: 79000,
    discount: 18,
    rank: 4,
    desc: [
        para2_1,
        para2_2
    ]
}
var rank_5 = {
    img: "./assets/img/rank-5.jpg",
    bookName: "Từ Điển Tiếng Em",
    author: "Khotudien",
    point: 20000,
    publisher: "NXB Phụ Nữ Việt Nam",
    price: 79000,
    discount: 18,
    rank: 5,
    desc: [
        para,
        para2,
        para3
    ]
}

var ranksItem = new Array(rank_1, rank_2, rank_3, rank_4, rank_5);

var ranksItemImgs = document.querySelectorAll(".infor__img img");

var ranksItemAuthors = document.querySelectorAll(".label__author");

var ranksItemPoints = document.querySelectorAll(".label__point");

var ranksItemProductNames = document.querySelectorAll(".label__product-name");

for (var i = 0; i < 5; i++) {
    ranksItemImgs[i].src = ranksItem[i].img;
    ranksItemAuthors[i].textContent = ranksItem[i].author;
    ranksItemPoints[i].textContent = ranksItem[i].point + " điểm";
    ranksItemProductNames[i].textContent = ranksItem[i].bookName;
}
function addInfoRight(rank) {
    document.getElementsByClassName("detail__right__name")[0].textContent = rank.bookName;
    document.querySelectorAll(".board__detail img")[0].src = rank.img;
    document.getElementsByClassName("detail__right__author")[0].textContent = "Tác giả: " + rank.author;
    document.getElementsByClassName("detail__right__publisher")[0].textContent = "Nhà xuất bản: " + rank.publisher;
    document.querySelectorAll(".detail__right .price")[0].textContent = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(rank.price);
    document.querySelectorAll(".detail__right .final-price")[0].textContent = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(rank.price - rank.price * rank.discount / 100);
    document.getElementsByClassName("right__desc")[0].textContent = '';
    for (var i = 0; i < rank.desc.length; i++) {
        // var p = '<p>' +
        //   '        <em>' + 100 + '</em>' +
        //   '        <span>100</span>' +
        //   '    <span class="Weight">' + 100 + '</span>' +
        //   '<p>';

        // $('.right__desc').append(p);
        document.getElementsByClassName("right__desc")[0].append(rank.desc[i]);
    }

    document.getElementsByClassName("discount")[0].textContent = "-" + rank.discount + "%";
}
addInfoRight(rank_1);
var documentTopFive = document.querySelectorAll(".first-five__item");

for (var i = 0; i < documentTopFive.length; i++) {
    documentTopFive[i].addEventListener("mouseover", function () {
        console.log(this.childNodes[1].textContent.trim());
        if (this.childNodes[1].textContent.trim() === "01") {
            addInfoRight(rank_1);
        }
        if (this.childNodes[1].textContent.trim() === "02") {
            addInfoRight(rank_2);
        }
        if (this.childNodes[1].textContent.trim() === "03") {
            addInfoRight(rank_3);
        }
        if (this.childNodes[1].textContent.trim() === "04") {
            addInfoRight(rank_4);
        }
        if (this.childNodes[1].textContent.trim() === "05") {
            addInfoRight(rank_5);
        }
    });
}



var block_item_count = 0;
$(".home-page__toy-block .slider__next").click(function () {
    // var x = document.querySelector(".home-page__slider .slider__image");
    // // console.log(x);
    // if(!x.classList.contains("swipe-next")){
    $(".home-page__toy-block .block__slider .row").addClass("swipe-next");
    block_item_count++;
    if (block_item_count <= 6) {
        $('.block__slider .row.swipe-next').css('transform', 'translateX(' + -block_item_count*50 + '%)');
    } else {
        block_item_count = 0;
        $('.block__slider .row.swipe-next').css('transform', 'translateX(' + -block_item_count*50 + '%)');
    }
});

$(".home-page__foreign-block .slider__prev").click(function () {
    block_item_count--;
    $(".home-page__foreign-block .block__slider .row").addClass("swipe-prev");
    if (block_item_count > 0 && block_item_count <= 7) {
        $('.block__slider .row.swipe-prev').css('transform', 'translateX(' + -block_item_count*50 + '%)');
    } else {
        block_item_count = 0;
        $('.block__slider .row.swipe-prev').css('transform', 'translateX(' + 0 + '%)');
    }
});
var frgnCount = 0;
$(".home-page__foreign-block .slider__next").click(function () {
    // var x = document.querySelector(".home-page__slider .slider__image");
    // // console.log(x);
    // if(!x.classList.contains("swipe-next")){
    $(".home-page__foreign-block .block__slider .row").addClass("swipe-next");
    frgnCount++;
    if (frgnCount <= 6) {
        $('.block__slider .row.swipe-next').css('transform', 'translateX(' + -frgnCount*50 + '%)');
    } else {
        frgnCount = 0;
        $('.block__slider .row.swipe-next').css('transform', 'translateX(' + -frgnCount*50 + '%)');
    }
});

$(".home-page__foreign-block .slider__prev").click(function () {
    frgnCount--;
    $(".home-page__foreign-block .block__slider .row").addClass("swipe-prev");
    if (frgnCount > 0 && frgnCount <= 7) {
        $('.block__slider .row.swipe-prev').css('transform', 'translateX(' + -frgnCount*50 + '%)');
    } else {
        frgnCount = 0;
        $('.block__slider .row.swipe-prev').css('transform', 'translateX(' + 0 + '%)');
    }
});

var childCount = 0;
$(".home-page__child-block .slider__next").click(function () {
    // var x = document.querySelector(".home-page__slider .slider__image");
    // // console.log(x);
    // if(!x.classList.contains("swipe-next")){
    $(".home-page__child-block .block__slider .row").addClass("swipe-next");
    childCount++;
    if (childCount <= 6) {
        $('.block__slider .row.swipe-next').css('transform', 'translateX(' + -childCount*50 + '%)');
    } else {
        childCount = 0;
        $('.block__slider .row.swipe-next').css('transform', 'translateX(' + -childCount*50 + '%)');
    }
});

$(".home-page__child-block .slider__prev").click(function () {
    childCount--;
    $(".home-page__child-block .block__slider .row").addClass("swipe-prev");
    if (childCount > 0 && childCount <= 7) {
        $('.block__slider .row.swipe-prev').css('transform', 'translateX(' + -childCount*50 + '%)');
    } else {
        childCount = 0;
        $('.block__slider .row.swipe-prev').css('transform', 'translateX(' + 0 + '%)');
    }
});

var vppCount = 0;
$(".home-page__vpp-block .slider__next").click(function () {
    // var x = document.querySelector(".home-page__slider .slider__image");
    // // console.log(x);
    // if(!x.classList.contains("swipe-next")){
    $(".home-page__vpp-block .block__slider .row").addClass("swipe-next");
    vppCount++;
    if (vppCount <= 6) {
        $('.block__slider .row.swipe-next').css('transform', 'translateX(' + -vppCount*50 + '%)');
    } else {
        vppCount = 0;
        $('.block__slider .row.swipe-next').css('transform', 'translateX(' + -vppCount*50 + '%)');
    }
});

$(".home-page__vpp-block .slider__prev").click(function () {
    vppCount--;
    $(".home-page__vpp-block .block__slider .row").addClass("swipe-prev");
    if (vppCount > 0 && vppCount <= 7) {
        $('.block__slider .row.swipe-prev').css('transform', 'translateX(' + -vppCount*50 + '%)');
    } else {
        vppCount = 0;
        $('.block__slider .row.swipe-prev').css('transform', 'translateX(' + 0 + '%)');
    }
});

var vanHocCount = 0;
$(".home-page__vanhoc-block .slider__next").click(function () {
    // var x = document.querySelector(".home-page__slider .slider__image");
    // // console.log(x);
    // if(!x.classList.contains("swipe-next")){
    $(".home-page__vanhoc-block .block__slider .row").addClass("swipe-next");
    vanHocCount++;
    if (vanHocCount <= 6) {
        $('.block__slider .row.swipe-next').css('transform', 'translateX(' + -vanHocCount*50 + '%)');
    } else {
        vanHocCount = 0;
        $('.block__slider .row.swipe-next').css('transform', 'translateX(' + -vanHocCount*50 + '%)');
    }
});

$(".home-page__vanhoc-block .slider__prev").click(function () {
    vanHocCount--;
    $(".home-page__vanhoc-block .block__slider .row").addClass("swipe-prev");
    if (vanHocCount > 0 && vanHocCount <= 7) {
        $('.block__slider .row.swipe-prev').css('transform', 'translateX(' + -vanHocCount*50 + '%)');
    } else {
        vanHocCount = 0;
        $('.block__slider .row.swipe-prev').css('transform', 'translateX(' + 0 + '%)');
    }
});

var ecoCount = 0;
$(".home-page__eco-block .slider__next").click(function () {
    // var x = document.querySelector(".home-page__slider .slider__image");
    // // console.log(x);
    // if(!x.classList.contains("swipe-next")){
    $(".home-page__eco-block .block__slider .row").addClass("swipe-next");
    ecoCount++;
    if (ecoCount <= 6) {
        $('.block__slider .row.swipe-next').css('transform', 'translateX(' + -ecoCount*50 + '%)');
    } else {
        ecoCount = 0;
        $('.block__slider .row.swipe-next').css('transform', 'translateX(' + -ecoCount*50 + '%)');
    }
});

$(".home-page__eco-block .slider__prev").click(function () {
    ecoCount--;
    $(".home-page__eco-block .block__slider .row").addClass("swipe-prev");
    if (ecoCount > 0 && ecoCount <= 7) {
        $('.block__slider .row.swipe-prev').css('transform', 'translateX(' + -ecoCount*50 + '%)');
    } else {
        ecoCount = 0;
        $('.block__slider .row.swipe-prev').css('transform', 'translateX(' + 0 + '%)');
    }
});

var psychoCount = 0;
$(".home-page__psycho-block .slider__next").click(function () {
    // var x = document.querySelector(".home-page__slider .slider__image");
    // // console.log(x);
    // if(!x.classList.contains("swipe-next")){
    $(".home-page__psycho-block .block__slider .row").addClass("swipe-next");
    psychoCount++;
    if (psychoCount <= 6) {
        $('.block__slider .row.swipe-next').css('transform', 'translateX(' + -psychoCount*50 + '%)');
    } else {
        psychoCount = 0;
        $('.block__slider .row.swipe-next').css('transform', 'translateX(' + -psychoCount*50 + '%)');
    }
});

$(".home-page__psycho-block .slider__prev").click(function () {
    psychoCount--;
    $(".home-page__psycho-block .block__slider .row").addClass("swipe-prev");
    if (psychoCount > 0 && psychoCount <= 7) {
        $('.block__slider .row.swipe-prev').css('transform', 'translateX(' + -psychoCount*50 + '%)');
    } else {
        psychoCount = 0;
        $('.block__slider .row.swipe-prev').css('transform', 'translateX(' + 0 + '%)');
    }
});

var swiperImgUrl = ["./assets/img/cambridge.jpg","./assets/img/cengage.jpg"
,"./assets/img/Harper-Collins.jpg","./assets/img/hachette.jpg","./assets/img/macgrawhill.jpg"
,"./assets/img/macmillan.jpg","./assets/img/oxford.jpg"
,"./assets/img/paragon.jpg","./assets/img/PearsonLogo_Avatar.png","./assets/img/penguin.jpg","./assets/img/sterling.jpg"
,"./assets/img/usborn.jpg"
,"./assets/img/Scholastic-bar-logo.png"];

for(var i=0; i< swiperImgUrl.length; i++){
    var aDivImg = 
    '<div class="swiper__image-container">'+
        '<a href=#>'+
        '<img src="'+swiperImgUrl[i]+'">' +
        '</a>'+
    '</div>';
    $('.home-page__swiper .swiper__container .row').append(aDivImg);
}

$(".home-page__swiper .slider__next").click(function () {
    var x = document.querySelector(".home-page__health-care .row");
    console.log(x);
    if (!x.classList.contains("swipe-next")) {
        $(".home-page__swiper .row").toggleClass("swipe-next");
        $(".home-page__swiper .row").removeClass("swipe-prev");
    }

    $(".home-page__swiper .slider__prev").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__swiper .slider__prev").click(function () {
    $(".home-page__swiper .row").removeClass("swipe-next");
    $(".home-page__swiper .row").toggleClass("swipe-prev");

    $(".home-page__swiper .slider__next").css("display", "flex");
    $(this).css("display", "none");
});

$('h3').text('Anh Yêu Em');
$('.section__nav li a').text('Anh Yêu Em');