const contentContainer = document.querySelector(".doctor_kn_2_0_0__content");
const detailContainer = document.querySelector(".doctor_kn_2_0_0__detail");
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");

function displayDoctor(doctor) {
  contentContainer.querySelector(".doctor_kn_2_0_0__pic img").src =
    doctor.picture;
  contentContainer.querySelector(".doctor_kn_2_0_0__pic img").alt = `${doctor.level} ${doctor.name} ${doctor.position}`;
  contentContainer.querySelector(".doctor_kn_2_0_0__level").innerHTML =
    doctor.level;
  contentContainer.querySelector(".doctor_kn_2_0_0__name").innerHTML = `<a href="${doctor.link}">${doctor.name}</a>`;
  contentContainer.querySelector(".doctor_kn_2_0_0__position").innerHTML =
    doctor.position;
  contentContainer.querySelector(".doctor_kn_2_0_0__note").innerHTML =
    doctor.note;
}

function displayDoctorPopup(doctor) {
  popup.querySelector(".doctor_kn_2_0_0__pic img").src = doctor.picture;
  popup.querySelector(".doctor_kn_2_0_0__pic img").alt = `${doctor.level} ${doctor.name} ${doctor.position}`;
  popup.querySelector(".doctor_kn_2_0_0__level").innerHTML = doctor.level;
  popup.querySelector(".doctor_kn_2_0_0__name").innerHTML = `<a href="${doctor.link}">${doctor.name}</a>`;
  popup.querySelector(".doctor_kn_2_0_0__position").innerHTML =
    doctor.position;
  popup.querySelector(".doctor_kn_2_0_0__note").innerHTML = doctor.note;
}

doctors.forEach((doctor, index) => {
  const item = document.createElement("div");
  item.classList.add("doctor_kn_2_0_0__item");
  const img = document.createElement("div");
  img.classList.add("doctor_kn_2_0_0__img");
  img.innerHTML = `<img width="162" height="123" class="lazy" data-src="${doctor.image}" alt="${doctor.level} ${doctor.name} ${doctor.position}">`;
  const text = document.createElement("div");
  text.classList.add("doctor_kn_2_0_0__text");
  text.innerHTML = `
    <div class="doctor_kn_2_0_0__level">${doctor.level}</div>
    <div class="doctor_kn_2_0_0__name">${doctor.name}</div>
    <div class="doctor_kn_2_0_0__position">${doctor.position}</div>
  `;
  const icon = document.createElement("div");
  icon.classList.add("doctor_kn_2_0_0__icon");
  icon.innerHTML = `<img width="41" height="41" class="lazy" data-src="https://benhvienthammykangnam.vn/wp-content/themes/SCI_Theme_v3/Module/Home/doctor_kn_2_0_0/images/icon.png" alt="" loading="lazy">`;
  item.appendChild(img);
  item.appendChild(text);
  item.appendChild(icon);
  detailContainer.appendChild(item);

  item.addEventListener("click", () => {
    displayDoctor(doctor);
    popup.classList.add("show");
    overlay.classList.add("show");
    displayDoctorPopup(doctor);
  });

  if (index === 0) {
    displayDoctor(doctor);
  }
});

overlay.addEventListener("click", () => {
  popup.classList.remove("show");
  overlay.classList.remove("show");
});

const closeButton = document.querySelector(".close-button");
closeButton.addEventListener("click", () => {
  popup.classList.remove("show");
  overlay.classList.remove("show");
});
