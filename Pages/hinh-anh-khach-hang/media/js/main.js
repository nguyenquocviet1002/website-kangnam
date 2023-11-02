var services = [
  {
    name: "Dịch vụ nâng mũi",
    images: [
      `${images}media/images/nangmui-kh1.webp`,
      `${images}media/images/nangmui-kh2.webp`,
      `${images}media/images/nangmui-kh3.webp`,
      `${images}media/images/nangmui-kh4.webp`,
      `${images}media/images/nangmui-kh5.webp`,
      `${images}media/images/nangmui-kh6.webp`
      // Thêm các đường dẫn hình ảnh khác cho dịch vụ 1
    ]
  },
  {
    name: "Dịch vụ 2",
    images: [
      `${images}media/images/pic2.jpg`,
      `${images}media/images/pic2.jpg`,
      `${images}media/images/pic2.jpg`,
      `${images}media/images/pic2.jpg`,
      `${images}media/images/pic2.jpg`,
      `${images}media/images/pic2.jpg`,
      `${images}media/images/pic1.jpg`
      // Thêm các đường dẫn hình ảnh khác cho dịch vụ 2
    ]
  },
  {
    name: "Dịch vụ 3",
    images: [
      `${images}media/images/pic1.jpg`,
      `${images}media/images/pic1.jpg`,
      `${images}media/images/pic1.jpg`
      // Thêm các đường dẫn hình ảnh khác cho dịch vụ 3
    ]
  }
  // Thêm các đối tượng dịch vụ khác vào mảng services
];
var menuItems = document.getElementById("menuItems");
var imageContainer = document.querySelector(".screen1__pic");
var viewMoreButton = document.getElementById("screen1__viewMore");
var hideButton = document.getElementById("screen1__hide");
var currentServiceId = 0; // Biến để lưu trữ ID của dịch vụ hiện tại

function showImage(serviceId, element) {
  var serviceImages = services[serviceId].images;
  var imageElements = "";
  for (var i = 0; i < serviceImages.length; i++) {
    imageElements +=
      '<div class="screen1__item"><img width="327" height="259" src="' +
      serviceImages[i] +
      '" alt=""></div>';
  }
  imageContainer.innerHTML = imageElements;
  for (var i = 0; i < menuItems.children.length; i++) {
    menuItems.children[i].classList.remove("active");
  }
  element.classList.add("active");
  currentServiceId = serviceId; // Cập nhật ID của dịch vụ hiện tại

  // Kiểm tra và hiển thị hoặc ẩn nút "Hiển thị thêm" và "Rút gọn" dựa trên số lượng hình ảnh
  if (serviceImages.length <= 4) {
    viewMoreButton.style.display = "none";
    hideButton.style.display = "none";
  } else {
    viewMoreButton.style.display = "block";
    hideButton.style.display = "none";
  }

  // Ẩn các hình ảnh từ hình ảnh thứ 7 trở đi
  for (var i = 4; i < serviceImages.length; i++) {
    imageContainer.children[i].style.display = "none";
  }

  document.getElementById("inputHidden").value = services[serviceId].name;
  var screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  if (screenWidth <= 767) {
    for (var i = 0; i < menuItems.children.length; i++) {
      menuItems.children[i].classList.add("hidden");
    }
  } else {
  }
}

for (var i = 0; i < services.length; i++) {
  var menuItem = document.createElement("li");
  menuItem.classList.add("menu__item");
  menuItem.innerText = services[i].name;
  menuItem.setAttribute("onclick", "showImage(" + i + ", this)");
  menuItems.appendChild(menuItem);
}

showImage(0, document.querySelector(".menu__item"));

// Xử lý sự kiện khi click vào nút "Hiển thị thêm"
viewMoreButton.addEventListener("click", function () {
  // Hiển thị tất cả các hình ảnh từ hình ảnh thứ 5 trở đi
  var serviceImages = services[currentServiceId].images;
  for (var i = 4; i < serviceImages.length; i++) {
    imageContainer.children[i].style.display = "block";
  }
  // Ẩn nút "Hiển thị thêm" và hiển thị nút "Rút gọn"
  viewMoreButton.style.display = "none";
  hideButton.style.display = "block";
});

// Xử lý sự kiện khi click vào nút "Rút gọn"
hideButton.addEventListener("click", function () {
  // Ẩn các hình ảnh từ hình ảnh thứ 7 trở đi
  var serviceImages = services[currentServiceId].images;
  for (var i = 4; i < serviceImages.length; i++) {
    imageContainer.children[i].style.display = "none";
  }
  // Hiển thị nút "Hiển thị thêm" và ẩn nút "Rút gọn"
  viewMoreButton.style.display = "block";
  hideButton.style.display = "none";
});

// Kiểm tra và hiển thị hoặc ẩn nút "Hiển thị thêm" và "Rút gọn" khi tải trang
var initialServiceImages = services[currentServiceId].images;
if (initialServiceImages.length <= 4) {
  viewMoreButton.style.display = "none";
  hideButton.style.display = "none";
} else {
  viewMoreButton.style.display = "block";
  hideButton.style.display = "none";
  for (var i = 4; i < initialServiceImages.length; i++) {
    imageContainer.children[i].style.display = "none";
  }
}

function changeMenuStyle() {
  var screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  if (screenWidth <= 767) {
    for (var i = 0; i < menuItems.children.length; i++) {
      menuItems.children[i].classList.add("hidden");
    }
  } else {
  }
}

// // Gọi hàm changeMenuStyle khi trang được tải và khi kích thước màn hình thay đổi
window.addEventListener("load", changeMenuStyle);
window.addEventListener("resize", changeMenuStyle);

function inputHidden() {
  for (var i = 0; i < menuItems.children.length; i++) {
    menuItems.children[i].classList.remove("hidden");
  }
}

var itemsPerPage = 4; // Số lượng mục hiển thị trên mỗi trang
var currentPage = 1; // Trang hiện tại

function showPage(page) {
  var startIndex = (page - 1) * itemsPerPage;
  var endIndex = startIndex + itemsPerPage;
  var serviceImages = services[currentServiceId].images.slice(
    startIndex,
    endIndex
  );

  var imageElements = "";
  for (var i = 0; i < serviceImages.length; i++) {
    imageElements +=
      '<div class="screen1__item"><img width="327" height="259" src="' +
      serviceImages[i] +
      '" alt=""></div>';
  }
  imageContainer.innerHTML = imageElements;
}

function createPagination() {
  var totalItems = services[currentServiceId].images.length;
  var totalPages = Math.ceil(totalItems / itemsPerPage);

  var paginationElement = document.querySelector(".pagination");
  paginationElement.innerHTML = "";

  var prevButton = document.createElement("a");
  prevButton.href = "#";
  prevButton.classList.add("pagination__item");
  prevButton.id = "prev";
  prevButton.innerHTML = "&laquo;";
  paginationElement.appendChild(prevButton);

  for (var i = 1; i <= totalPages; i++) {
    var pageButton = document.createElement("a");
    pageButton.href = "#";
    pageButton.classList.add("pagination__item");
    pageButton.id = i;
    pageButton.innerHTML = i;
    paginationElement.appendChild(pageButton);

    // Kích hoạt số 1 khi trang được tải lần đầu tiên
    if (i === 1) {
      pageButton.classList.add("active");
    }
  }

  var nextButton = document.createElement("a");
  nextButton.href = "#";
  nextButton.classList.add("pagination__item");
  nextButton.id = "next";
  nextButton.innerHTML = "&raquo;";
  paginationElement.appendChild(nextButton);
}

function changePage(page) {
  currentPage = page;
  showPage(currentPage);

  var paginationItems = document.querySelectorAll(".pagination__item");
  for (var i = 0; i < paginationItems.length; i++) {
    paginationItems[i].classList.remove("active");
  }
  document.getElementById(currentPage).classList.add("active");

  // Disable/enable prev/next buttons
  if (currentPage == 1) {
    document.getElementById("prev").classList.add("disabled");
  } else {
    document.getElementById("prev").classList.remove("disabled");
  }
  if (currentPage == totalPages) {
    document.getElementById("next").classList.add("disabled");
  } else {
    document.getElementById("next").classList.remove("disabled");
  }
}

var totalItems = services[currentServiceId].images.length;
var totalPages = Math.ceil(totalItems / itemsPerPage);
createPagination();
showPage(currentPage);

document.getElementById("prev").addEventListener("click", function () {
  if (currentPage > 1) {
    changePage(currentPage - 1);
  }
});

document.getElementById("next").addEventListener("click", function () {
  if (currentPage < totalPages) {
    changePage(currentPage + 1);
  }
});

var paginationItems = document.querySelectorAll(".pagination__item");
for (var i = 0; i < paginationItems.length; i++) {
  paginationItems[i].addEventListener("click", function () {
    var page = parseInt(this.id);
    if (page) {
      changePage(page);
    }
  });
}

window.addEventListener("scroll", function () {
  // Lazy Images
  myLazy("img.lazy", "src");
  myLazy("source.lazy", "srcset");
  // Lazy Class
  // myLazy('.lazy-bg', 'img-bg', 'lazy-bg');
  myLazy(".load", "loaded", "load");
  // myLazy('.slide_run', 'slide', 'slide_run');
});

lazyShowScreen("img.lazy", "src");

function myLazy(section, attr, sectionDelete) {
  const section_loads = document.querySelectorAll(section);
  let winTop = window.innerHeight;

  for (let i = 0; i < section_loads.length; i++) {
    let pos_top = section_loads[i].getBoundingClientRect().top;
    let pos_bottom = section_loads[i].getBoundingClientRect().bottom;
    if (pos_top <= winTop && pos_bottom >= 0) {
      if (sectionDelete) {
        section_loads[i].classList.remove(sectionDelete);
        section_loads[i].classList.add(attr);
      } else if (attr == "srcset") {
        section_loads[i].srcset = section_loads[i].dataset.srcset;
        section_loads[i].classList.remove("lazy");
      } else if (attr == "src") {
        section_loads[i].src = section_loads[i].dataset.src;
        section_loads[i].classList.remove("lazy");
      } else {
        console.log(`Sorry, we are out of ${attr}.`);
      }
    }
  }
}

function lazyShowScreen(section, attr, sectionDelete) {
  const section_loads = document.querySelectorAll(section);
  console.log(section_loads);
  let win_height = screen.height;

  for (let i = 0; i < section_loads.length; i++) {
    if (section_loads[i].getBoundingClientRect().top < win_height) {
      console.log(section_loads[i].getBoundingClientRect().top);
      console.log(win_height);
      if (sectionDelete) {
        section_loads[i].classList.remove(sectionDelete);
        section_loads[i].classList.add(attr);
      } else if (attr == "srcset") {
        section_loads[i].srcset = section_loads[i].dataset.srcset;
        section_loads[i].classList.remove("lazy");
      } else if (attr == "src") {
        section_loads[i].src = section_loads[i].dataset.src;
        section_loads[i].classList.remove("lazy");
      } else {
        console.log(`Sorry, we are out of ${attr}.`);
      }
    }
  }
}
