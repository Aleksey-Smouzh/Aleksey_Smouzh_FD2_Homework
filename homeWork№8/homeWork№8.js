let footer = document.createElement("footer");
footer.className = "footer";
document.body.append(footer);

let footerList = document.querySelector("footer");
footerList.style.width = "1200px";
footerList.style.height = "150px";
footerList.style.paddingTop = "10px";
footerList.style.paddingBottom = "15px";
footerList.style.color = "rgba(255, 255, 255, 1)";
footerList.style.background = " rgba(30, 26, 26, 1)";
footerList.style.display = "flex";

let nav = document.createElement("nav");
nav.className = "menu";

let ul = document.createElement("ul");
ul.className = "list";

footerList.prepend(nav);
nav.prepend(ul);

const arr = [""];

const listForFooter = document.querySelector(".list");

let lists = "  ";
arr.forEach((item) => {
  lists += `<li>${item}</li> `;
});
listForFooter.innerHTML = lists;

const pointOne = document.querySelector("li");
pointOne.className = "point_home_page";
pointOne.style.listStyleType = "none";

const arr1 = [
  "Юридический адрес:",
  "Республика Зазеркалье,",
  "г. Лкаморье,",
  "225513, ул. Потриса Лулумбы, д. -0.5.",
];

const listForFooter1 = document.querySelector(".point_home_page");

let lists1 = "  ";

arr1.forEach((item) => {
  lists1 += `<p>${item}</p> `;
});
listForFooter1.innerHTML = lists1;

const column2 = document.createElement("nav");
column2.className = "columnTwo";
column2.style.display = "flex";
column2.style.justifyContent = "center";
column2.style.flexDirection = "column";
column2.style.marginLeft = "250px";
column2.style.listStyleType = "none";
footer.append(column2);

const columnTwoLi = document.createElement("li");
column2.append(columnTwoLi);
columnTwoLi.className = "fax";
columnTwoLi.innerHTML = "8(200)778-778-78";
columnTwoLi.style.marginBottom = "13px";

const columnTwoLi1 = document.createElement("li");
column2.append(columnTwoLi1);
columnTwoLi1.className = "phone";
columnTwoLi1.innerHTML = "+999(00)123-321-21";

const column3 = document.createElement("nav");
column3.className = "columnTree";
footer.append(column3);
column3.style.listStyleType = "none";
column3.style.display = "flex";
column3.style.flexDirection = "column";
column3.style.justifyContent = "center";
column3.style.marginLeft = "256px";

const columnTreeLi = document.createElement("li");
columnTreeLi.className = "mail";
column3.append(columnTreeLi);
columnTreeLi.innerHTML = "roga_end_kopyta@pushkin.be";
columnTreeLi.style.marginBottom = "13px";

const columnTreeSpan = document.createElement("span");
columnTreeSpan.className = "copyright";
column3.append(columnTreeSpan);
columnTreeSpan.innerHTML =
  "НУиНУ ' Кот ученый на дереве ' <br> Копирование материалов <br> разрешено только  <br> с ссылкой на источник 2021 <br>© Все права не защищены.";
