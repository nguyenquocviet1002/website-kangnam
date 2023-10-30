if (screen.width <= 767) {
  document.querySelector("#screen4__hide").style.display = "none";
  const item = document.querySelectorAll(".screen4__item");
  for (let i = 3; i < item.length; i++) {
    item[i].style.display = "none";
  }
  document.querySelector("#screen4__viewMore").addEventListener("click", () => {
    document.querySelector("#screen4__viewMore").style.display = "none";
    document.querySelector("#screen4__hide").style.display = "block";
    for (let i = 3; i < item.length; i++) {
      item[i].style.display = "block";
    }
  });
  document.querySelector("#screen4__hide").addEventListener("click", () => {
    document.querySelector("#screen4__hide").style.display = "none";
    document.querySelector("#screen4__viewMore").style.display = "block";
    for (let i = 3; i < item.length; i++) {
      item[i].style.display = "none";
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
