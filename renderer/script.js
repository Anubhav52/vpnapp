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

let list = document.querySelectorAll(".server-list-span");
for (let i = 0; i < list.length; i++) {
  list[i].onclick = function () {
    let j = 0;
    while (j < list.length) {
      list[j++].className = "server-list-span";
    }
    list[i].className = "server-list-span active";
  };
}
