const openMenu = () => {
  document.querySelector("aside").className = "active";
};

const closeMenu = () => {
  document.querySelector("aside").className = "";
};

const openList = () => {
  document.querySelector(".list").classList.add("active");
};
const closeList = () => {
  document.querySelector(".list").classList.remove("active");
};

let flag = 0;

document.getElementById("menu").onclick = (e) => {
  e.preventDefault();
  openMenu();
};

document.querySelector(".close").onclick = (e) => {
  e.preventDefault();
  closeMenu();
};

document.querySelector(".change").onclick = (e) => {
  e.preventDefault();
  if (flag === 0) {
    openList();
    flag = 1;
  } else if (flag === 1) {
    closeList();
    flag = 0;
  }
};
