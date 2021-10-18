const menu_kart_slaiders =[
 `          
    <div class="container_title">
        <h2>Выберите курс</h2>
    </div>
    <div class="container_items ">
        <div class="container_item container_item_zero item">
            <p>Курс по английскому языку</p>
        </div>
        <div class="container_item container_item_zero item">
            <p>Курс по английскому языку</p>
        </div>
        <div class="container_item container_item_zero item">
            <p>Курс по английскому языку</p>
        </div>
        <div class="container_item container_item_zero item">
            <p>Курс по английскому языку</p>
        </div>
    </div>
    <div class="container_return">
        <i class="fas fa-undo-alt"></i>
        <p>Назад</p>
    </div>

` ,
`
<div class="container_title">
                <h2>Выберите преподавателя</h2>
            </div>
            <div class="container_items container_item_height">
                <div class="container_item item ${calculatorDate[0][0].categories}" id="${calculatorDate[0][0].id}">
                    <img src="${calculatorDate[0][0].insideInfo.linkImage}" alt="">
                    <div class="item_text">
                        <p>${calculatorDate[0][0].insideInfo.nameTeach}</p>
                        <hr>
                        <p>${calculatorDate[0][0].insideInfo.typeTeach}</p>
                    </div>
                   <div class="item_cost">
                        <p>${calculatorDate[0][0].insideInfo.cost}<br>руб.</p>
                   </div>
                </div>
                <div class="container_item item ${calculatorDate[0][0].categories}" id="${calculatorDate[0][1].id}">
                    <img src="${calculatorDate[0][1].insideInfo.linkImage}" alt="">
                    <div class="item_text">
                        <p>${calculatorDate[0][1].insideInfo.nameTeach}</p>
                        <hr>
                        <p>${calculatorDate[0][1].insideInfo.typeTeach}</p>
                    </div>
                   <div class="item_cost">
                        <p>${calculatorDate[0][1].insideInfo.cost}<br>руб.</p>
                   </div>
                </div>
                <div class="container_item item ${calculatorDate[0][0].categories}" id="${calculatorDate[0][2].id}">
                    <img src="${calculatorDate[0][2].insideInfo.linkImage}" alt="">
                    <div class="item_text">
                        <p>${calculatorDate[0][2].insideInfo.nameTeach}</p>
                        <hr>
                        <p>${calculatorDate[0][2].insideInfo.typeTeach}</p>
                    </div>
                    <div class="item_cost">
                        <p>${calculatorDate[0][2].insideInfo.cost}<br>руб.</p>
                   </div>
                </div>
                
            </div>
            <div class="container_return">
                <i class="fas fa-undo-alt"></i>
                <p>Назад</p>
            </div>
`,
`
            <div class="container_title">
                <h2>Выберите тип курса</h2>
            </div>
            <div class="container_items container_item_height">
                <div class="container_item item ${calculatorDate[1][0].categories}" id="${calculatorDate[1][0].id}">
                    <img src="${calculatorDate[1][0].insideInfo.linkImage}" alt="" class="item_icons">
                    <div class="item_text item_text_cours">
                        <p class="item_text_h">${calculatorDate[1][0].insideInfo.nameCours}</p>
                        <hr>
                        <p class="item_text_p">Начальный уровень<br> знания языка.</p>
                    </div>
                </div>
                <div class="container_item item ${calculatorDate[1][0].categories}" id="${calculatorDate[1][1].id}">
                    <img src="${calculatorDate[1][1].insideInfo.linkImage}" alt="" class="item_icons">
                    <div class="item_text item_text_cours">
                        <p class="item_text_h">${calculatorDate[1][1].insideInfo.nameCours}</p>
                        <hr>
                        <p class="item_text_p">Продвинутый уровень<br> знания языка.</p>
                    </div>
                </div>
                <div class="container_item item ${calculatorDate[1][0].categories}" id="${calculatorDate[1][2].id}">
                    <img src="${calculatorDate[1][2].insideInfo.linkImage}" alt="" class="item_icons">
                    <div class="item_text item_text_cours">
                        <p class="item_text_h">${calculatorDate[1][2].insideInfo.nameCours}</p>
                        <hr>
                        <p class="item_text_p">Занятие с преподователем <br>индивидуально.</p>
                    </div>
                </div>
                <div class="container_item item ${calculatorDate[1][0].categories}" id="${calculatorDate[1][3].id}">
                    <img src="${calculatorDate[1][3].insideInfo.linkImage}" alt="" class="item_icons">
                    <div class="item_text item_text_cours">
                        <p class="item_text_h">${calculatorDate[1][3].insideInfo.nameCours}</p>
                        <hr>
                        <p class="item_text_p">Специализированный курс</p>
                    </div>
                </div>
                
            </div>
            <div class="container_return">
                <i class="fas fa-undo-alt"></i>
                <p>Назад</p>
            </div>
`,
`
            <div class="container_title">
                <h2>Выберите свой город</h2>
            </div>
            <div class="container_items container_item_height locat">
                <div class="container_item item ${calculatorDate[2][0].categories}" id="${calculatorDate[2][0].id}">
                    <img src="${calculatorDate[2][0].insideInfo.linkImage}" alt="" class="locat_img" id="img1">
                    <div class="item_text">
                        <p>${calculatorDate[2][0].insideInfo.nameTown}</p>
                    </div>
                </div>
                <div class="container_item item ${calculatorDate[2][0].categories}" id="${calculatorDate[2][1].id}">
                    <img src="${calculatorDate[2][1].insideInfo.linkImage}" alt="" class="locat_img" id="img2">
                    <div class="item_text">
                        <p>${calculatorDate[2][1].insideInfo.nameTown}</p>
                    </div>
                </div>
                <div class="container_item item ${calculatorDate[2][0].categories}" id="${calculatorDate[2][2].id}">
                    <img src="${calculatorDate[2][2].insideInfo.linkImage}" alt="" class="locat_img" id="img3">
                    <div class="item_text">
                        <p>${calculatorDate[2][2].insideInfo.nameTown}</p>
                    </div>
                </div>
                <div class="container_item item ${calculatorDate[2][0].categories}" id="${calculatorDate[2][3].id}">
                    <img src="${calculatorDate[2][3].insideInfo.linkImage}" alt="" class="locat_img" id="img4">
                    <div class="item_text">
                        <p>${calculatorDate[2][3].insideInfo.nameTown}</p>
                    </div>
                </div>
                
            </div>     
            <div class="container_return">
                <i class="fas fa-undo-alt"></i>
                <p>Назад</p>
            </div> 
`,
`
            <div class="container_title">
                <h2>Выберите количество часов в курсе</h2>
            </div>
            <div class="container_items">
                <div class="container_item item ${calculatorDate[3][0].categories}" id="${calculatorDate[3][0].id}">
                    <p>${calculatorDate[3][0].insideInfo.time} часов</p>
                </div>
                <div class="container_item item ${calculatorDate[3][0].categories}" id="${calculatorDate[3][1].id}">
                    <p>${calculatorDate[3][1].insideInfo.time} часов</p>
                </div> 
                <div class="container_item item ${calculatorDate[3][0].categories}" id="${calculatorDate[3][2].id}">
                    <p>${calculatorDate[3][2].insideInfo.time} часов</p>
                </div>
            </div>
            <div class="container_return">
                <i class="fas fa-undo-alt"></i>
                <p>Назад</p>
            </div>
`,
`
<div class="container_title">
                <h2>Итого:</h2>
            </div>
            <div class="container_items container_items_menu">
                <div class="container_item">
                    <p>Имя студента(ФИО):</p>
                    <input type="text" class="name">
                </div>
                <div class="container_item">
                    <p>Выбранный курс:</p>
                    <select>
                        <option>Курс по английскому языку</option>
                        <option>Курс по английскому языку</option>
                        <option>Курс по английскому языку</option>
                        <option>Курс по английскому языку</option>
                    </select>
                </div>
                <div class="container_item select_item">
                    <p>Преподаватель:</p>
                    <select class="selector">
                        <option>Alex Grin</option>
                        <option>Devers Grey</option>
                        <option>Alena Grigorena</option>
                        
                    </select>
                </div>
                <div class="container_item select_item">
                    <p>Тип курса:</p>
                    <select class="selector">
                        <option>Школьный</option>
                        <option>Взрослый</option>
                        <option>Индивидуальный</option>
                        <option>Корпоративный</option>
                    </select>
                </div>
                <div class="container_item select_item">
                    <p>Город проживания:</p>
                    <select class="selector">
                        <option>Москва</option>
                        <option>Санкт-Петербург</option>
                        <option>Челябинск</option>
                        <option>Екатеринбург</option>
                        
                    </select>
                </div>
                <div class="container_item select_item">
                    <p>Количество часов:</p>
                    <select class="selector">
                        <option>36 часов</option>
                        <option>72 часов</option>
                        <option>128 часов</option>
                    </select>
                </div>
                <div class="container_item marg_plus">
                    <p>Итого к оплате:</p>
                    <input type="text" class="">
                </div>
                <div class="container_item item">
                    <button>Купить курс</button>
                </div>
            </div>
`,
`
    <div class="container_title">
        <h2>Вы уверены?</h2>
    </div>
    <div class="container_items confirm">
        <div class="container_item conf_item item " id="${calculatorDate[4][0].id}">
            <button class="continue">Да, уверен!</button>
        </div>
        <div class="container_item conf_item item" id="${calculatorDate[4][1].id}">
            <button class="cancel">Нет </button>
        </div>
    </div>
`,
];
console.log(menu_kart_slaiders[6]);
const container = document.querySelector('.container');
const containerItemZero = document.querySelectorAll('.container_item_zero');


let containerCenter = document.createElement('div');
let index_kart= 0;
container.appendChild(containerCenter);
containerCenter.classList.add('container_center');
slaidCreate(index_kart);

function slaidCreate(j) {    
    containerCenter.innerHTML='';
    containerCenter.insertAdjacentHTML('afterbegin',menu_kart_slaiders[j]);
    containerItem = containerCenter.querySelectorAll('.item');  
}
function locationHover(item, index) {
    if (item.closest('.locat')) {
        item.addEventListener('mousemove', ()=>{
            const locatImage= item.querySelector('.locat_img');
            locatImage.src=array_link_b[index];
            console.log(array_link_b[index]);
        })
        item.addEventListener('mouseleave', ()=>{
            const locatImage= item.querySelector('.locat_img');
            locatImage.src=array_link[index];
            console.log(array_link[index]);
        })
    }
}

function summa(parent) {
    let cont_summa_input = parent.querySelector('.marg_plus');
    let summa_input = cont_summa_input.querySelector('input');
    summa_input.value = arr[0][array_categories_answer[0]]*arr[1][array_categories_answer[1]]*arr[2][array_categories_answer[2]]+' руб.';
    console.log(arr[0][array_categories_answer[0]]*arr[1][array_categories_answer[1]]*arr[2][array_categories_answer[2]]);
}
function  MenuFill(item) {
    if (item.closest('.container_items_menu')) {
        let containerItemsMenu =item.parentElement;
        summa(containerItemsMenu);    
        
        let name = containerItemsMenu.querySelector('.name');
        name.value = fullname;
        let selectItems = containerItemsMenu.querySelectorAll('.select_item');
        for (let i = 0; i <selectItems.length; i++) {
            let select = selectItems[i].querySelector('select');
            let select_options = select.querySelectorAll('option');
            
            let select_index =Number(array_categories_answer[i]);
            
            console.log(select_index);
           for (let j = 0; j < select_options.length; j++) {
                select_options[select_index].selected='selected';
                
           }
                
                // console.log(select_index);
                // console.log(option]);
                
            
        }
        
    }
}
function Confirm(item) {
    
    if (item.closest('.confirm')) {
        // console.log(1444);
        let containerConfirm =item.parentElement;
        console.log(containerConfirm);
        let confirms = containerConfirm.querySelectorAll('.conf_item');
        for (let i = 0; i <  confirms.length; i++) {
            confirms[i].addEventListener('click',function name(params) {
                
                switch (i) {
                    case 0:
                        document.location.href = "main.html";
                        break;
                    case 1:
                        Begin_cycle();
                        break;
                  }
            })
       }   
    }
}
function Begin_cycle(params) {
    index_kart =0;
    array_categories_answer= [];
    slaidCreate(index_kart);
    rec();
}

function rec(params) {
    console.log(index_kart);
    let containerItem = containerCenter.querySelectorAll('.item');
    containerItem.forEach((item,index,arr) => {
        locationHover(item,index);
        MenuFill(item);
        Confirm(item);

        if (!item.closest('.confirm')) {
            item.addEventListener('click',function name(params) {
                index_kart++;
                for (let i = 0; i < array_categories.length; i++) {
                    if (item.classList.contains(array_categories[i])) {
                        array_categories_answer.push(index);
                    
                    }
                    
                }
                
                containerCenter.classList.add('active');    
                setTimeout(() => {
                    slaidCreate(index_kart);
                    containerCenter.classList.remove('active'); 
                    rec();
                }, 400); 
            })
        }
    })
}
rec();


