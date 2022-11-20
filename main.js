//5 function changeContent() {
//     a = prompt('номер строки');
//     b = prompt('номер столбца');
//     c = prompt('содержимое строки');
//     let table = document.getElementsByClassName('myTable')[0];
//     chi = document.getElementsByTagName('tr')
//     chi[a - 1].children[b - 1].innerHTML = c
// }

//6 function createTable() {
//     elem = document.getElementById('myTable')
//     a = prompt('строки')
//     b = prompt('столбцы')
//     for (let i = 0; i < a; i++) {
//         str = document.createElement('tr');
//         elem.appendChild(str);
//         for (let y = 0; y < b; y++) {
//             sto = document.createElement('td')
//             str.appendChild(sto);
//         }
//     }
// }

//7 function removecolor(pop) {
//     let a = document.getElementById('colorSelect');
//     main = document.getElementById('main')
//     let select = a[a.selectedIndex].innerHTML
//     crea = document.createElement('p')
//     main.appendChild(crea);
//     crea.innerHTML = select + ' has been removed from the list.'
//     crea.style.color = select
// }

//8 function getOptions() {
//     elem = document.getElementById('mySelect');
//     list = document.getElementsByTagName('option');
//     listi = [];
//     for (let i = 0; i < elem.children.length; i++) {
//         listi.push(list[i].innerHTML)
//     }
//     alert(`${elem.children.length}: ${listi}`)
// }

//11 function go() {
//     var elem = document.getElementsByClassName('myTable')[0];
//     var name1 = document.getElementsByClassName('name1');
//     var surname1 = document.getElementsByClassName('name2');
//     for (let i = 0; i < 1; i++) {
//         // a = stro.cloneNode(true);
//         // elem.appendChild(a);
//         z = elem.insertRow(-1);
//         z.innerHTML = '<tr class="stro"><td id="one" onclick="prom(this)">name</td><td id="two" onclick="prom(this)">surname</td></tr>'
//         console.log(z.outerHTML)
//         z.firstChild.innerHTML = name1[0].value
//         z.lastChild.innerHTML = surname1[0].value
//     }
// }
// function prom(event) {
//     var stro = document.getElementsByClassName('stro')[0];
//     a = prompt('внесите изменение')
//     event.innerHTML = a
// }


//1 let text_style = document.getElementById('text')
// function js_style(){
// text_style.style.cssText = "font-size: 20px; color:red; background-color:black; border: 3px solid rgb(77, 1, 255); width:200px; height:100px"
// }


//2 function getFormvalue(){
//     var form = document.getElementById('form1')
//     form.insertAdjacentHTML("afterend", "<div id='par'></div>");
//     var paragraf = document.getElementById('par')
//     paragraf.style = 'color:white;background-color:black; border: 3px solid rgb(77, 1, 255); width:200px; height:100px'
//     let form1 = document.forms[0];
//     let fname = form1.elements.fname.value;
//     let lname = form1.elements.lname.value;
//     paragraf.innerHTML = ${fname} <br> ${lname}
// }


//3     var a = document.getElementById('w3r');
//     a.insertAdjacentHTML("afterend", "<div id='par'></div>");
//     var paragraf = document.getElementById('par')
//     paragraf.style = 'color:white;background-color:black; border: 3px solid rgb(77, 1, 255); width:200px; height:100px'
//     var href = a.href;
//     var hreflang = a.hreflang;
//     var rel = a.rel
//     var target = a.target
//     var type = a.type
//     paragraf.innerHTML = `href:${href} <br> hreflang:${hreflang} <br> 
//     rel:${rel} <br> target:${target} <br> type:${type}`
// }


//4 let table = document.getElementById('sampleTable');
// table.style.border = '2px solid black'
// num = 3
// function insert_Row(){
//     new_str = <tr><td>Row${num} cell1</td><td>Row${num} cell2</td></tr>
//     table.insertAdjacentHTML("beforeend", new_str);
//     num +=1
// }


//5 const rows = document.getElementsByTagName('tr')
// function changeContent() {
//     row = prompt('Напишите ряд:')
//     column = prompt('Напишите колону:')
//     data = prompt('Напишите слово:')

//     rows[row - 1].children[column - 1].innerHTML = data;
// }
