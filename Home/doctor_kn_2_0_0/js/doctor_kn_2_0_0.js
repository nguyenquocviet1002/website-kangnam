const doctors = [
  {
    name: "Bác sĩ 1",
    image: "images/bacsi-small.jpg",
    picture: "images/bacsi.jpg",
    level: "Thạc sĩ - Bác sĩ",
    position: "Giám đốc chuyên môn Da liễu",
    note: "Nội dung 1"
  },
  {
    name: "Bác sĩ 2",
    image: "images/bacsi-small.jpg",
    picture: "images/bacsi.jpg",
    level: "Thạc sĩ - Bác sĩ",
    position: "Giám đốc chuyên môn Da liễu",
    note: "Nội dung 2"
  },
  {
    name: "Bác sĩ 3",
    image: "images/bacsi-small.jpg",
    picture: "images/bacsi.jpg",
    level: "Thạc sĩ - Bác sĩ",
    position: "Giám đốc chuyên môn Da liễu",
    note: "Nội dung 3"
  },
  {
    name: "Bác sĩ 4",
    image: "images/bacsi-small.jpg",
    picture: "images/bacsi.jpg",
    level: "Thạc sĩ - Bác sĩ",
    position: "Giám đốc chuyên môn Da liễu",
    note: "Nội dung 4"
  },
  {
    name: "Bác sĩ 5",
    image: "images/bacsi-small.jpg",
    picture: "images/bacsi.jpg",
    level: "Thạc sĩ - Bác sĩ",
    position: "Giám đốc chuyên môn Da liễu",
    note: "Nội dung 5"
  }
  // Thêm các thông tin của bác sĩ khác vào đây
];

const contentContainer = document.querySelector(".doctor_kn_2_0_0__content");
const detailContainer = document.querySelector(".doctor_kn_2_0_0__detail");
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");

function displayDoctor(doctor) {
  contentContainer.querySelector(".doctor_kn_2_0_0__pic img").src =
    doctor.picture;
  contentContainer.querySelector(".doctor_kn_2_0_0__level").textContent =
    doctor.level;
  contentContainer.querySelector(".doctor_kn_2_0_0__name").textContent =
    doctor.name;
  contentContainer.querySelector(".doctor_kn_2_0_0__position").textContent =
    doctor.position;
  contentContainer.querySelector(".doctor_kn_2_0_0__note").textContent =
    doctor.note;
}

function displayDoctorPopup(doctor) {
  popup.querySelector(".doctor_kn_2_0_0__pic img").src = doctor.picture;
  popup.querySelector(".doctor_kn_2_0_0__level").textContent = doctor.level;
  popup.querySelector(".doctor_kn_2_0_0__name").textContent = doctor.name;
  popup.querySelector(".doctor_kn_2_0_0__position").textContent =
    doctor.position;
  popup.querySelector(".doctor_kn_2_0_0__note").textContent = doctor.note;
}

doctors.forEach((doctor, index) => {
  const item = document.createElement("div");
  item.classList.add("doctor_kn_2_0_0__item");
  const img = document.createElement("div");
  img.classList.add("doctor_kn_2_0_0__img");
  img.innerHTML = `<img src="${doctor.image}" alt="">`;
  const text = document.createElement("div");
  text.classList.add("doctor_kn_2_0_0__text");
  text.innerHTML = `
<div class="doctor_kn_2_0_0__level">${doctor.level}</div>
<div class="doctor_kn_2_0_0__name">${doctor.name}</div>
<div class="doctor_kn_2_0_0__position">${doctor.position}</div>
`;
  const icon = document.createElement("div");
  icon.classList.add("doctor_kn_2_0_0__icon");
  icon.innerHTML = `<img src="images/icon.png" alt="">`;
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
