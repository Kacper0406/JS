const list = document.querySelector("#list");
const list1 = document.querySelector("#list-num");

const dc = document.createDocumentFragment();
const dc1 = document.createDocumentFragment();

for(let i = 0; i < 5; i++) {
    const li = document.createElement("li");

    li.append(document.createTextNode(`Element listy ${i + 1}`));

    dc.append(li);
}

for(let i = 0; i < 5; i++) {
    const li = document.createElement("li");

    li.append(document.createTextNode(`Element listy ${i + 1}`));

    dc1.append(li);
}

list.append(dc);
list1.append(dc1);