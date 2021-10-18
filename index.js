
let array_link_b = [
    'image/loc1.1b.png',
    'image/loc1.2b.png',
    'image/loc1.3b.png',
    'image/loc1.4b.png',
];
let array_link = [
    'image/loc1.1.png',
    'image/loc1.2.png',
    'image/loc1.3.png',
    'image/loc1.4.png',
];
let fullname = 'Пупкин Василий Иванович'

const calculatorDate = [
    [
        {
            categories:'teachers',
            id: 'teach1',
            insideInfo:{
                cost:800,
                linkImage:'image/teacher1.1.png',
                nameTeach: "Alex Grin",
                typeTeach: "Носитель языка",
                classBlok: "container_item_height",

            }
        },
        {
            categories:'teachers',
            id: 'teach2',
            insideInfo:{
                cost:800,
                linkImage:'image/teacher1.2.png',
                nameTeach: "Devers Grey",
                typeTeach: "Носитель языка",
                classBlok: "container_item_height",
            }
        },
        {
            categories:'teachers',
            id: 'teach3',
            insideInfo:{
                cost:500,
                linkImage:'image/teacher1.3.png',
                nameTeach: "Alena Grigorena",
                typeTeach: "Русскоязный",
                classBlok: "container_item_height",
            }
        }
    ],
    [
        {
            categories:'courses',
            id: 'cours1',
            insideInfo:{
                cost:1,
                linkImage:'image/vector1.png',
                nameCours: "Школьный",
                classBlok: "container_item_height",
            }
        },
        {
            categories:'courses',
            id: 'cours2',
            insideInfo:{
                cost:1.2,
                linkImage:'image/vector2.png',
                nameCours: "Взрослый",
                classBlok: "container_item_height",
            }
        },
        {
            categories:'courses',
            id: 'cours3',
            insideInfo:{
                cost:1.8,
                linkImage:'image/vector3.png',
                nameCours: "Индивидуальный",
                classBlok: "container_item_height",
            }
        },
        {
            categories:'courses',
            id: 'cours4',
            insideInfo:{
                cost:1.5,
                linkImage:'image/vector4.png',
                nameCours: "Корпоративный",
                classBlok: "container_item_height",
            }
        }
    ],
    [
        {
            categories:'location',
            id: 'locat1',
            insideInfo:{
                cost:1,
                linkImage:'image/loc1.1.png',
                nameTown: "Москва",
                classBlok: "container_item_height",
            }
        },
        {
            categories:'location',
            id: 'locat2',
            insideInfo:{
                cost:0.9,
                linkImage:'image/loc1.2.png',
                nameTown: "Санкт-Петербург",
                classBlok: "container_item_height",
            }
        },
        {
            categories:'location',
            id: 'locat3',
            insideInfo:{
                cost:0.7,
                linkImage:'image/loc1.3.png',
                nameTown: "Челябинск",
                classBlok: "container_item_height",
            }
        },
        {
            categories:'location',
            id: 'locat4',
            insideInfo:{
                cost:0.6,
                linkImage:'image/loc1.4.png',
                nameTown: "Екатеринбург",
                 classBlok: "container_item_height",
            }
        },
    ],
    [
        {
            categories:'time',
            id: 'time1',
            insideInfo:{
                time: 36,
            }
        },
        {
            categories:'time',
            id: 'time2',
            insideInfo:{
                time: 72,
            }
        },
        {
            categories:'time',
            id: 'time3',
            insideInfo:{
                time: 128,
            }
        },
        
    ],
    [
        {
            categories:'confirm',
            id: 'conf1',
            insideInfo:{
                text: 'Да, уверен!',
            }
        },
        {
            categories:'confirm',
            id: 'conf2',
            insideInfo:{
                text: 'Нет',
            }
        },
        
    ],
];
let array_categories = [
];
let array_categories_answer = [];
calculatorDate.forEach((item,index,arr) => {
    array_categories.push(item[0].categories);
});
console.log(array_categories);
// let items = document.querySelectorAll('.item');

// let teachersItems = document.querySelectorAll('.teachers-item');
// let coursesItems = document.querySelectorAll('.courses-item');
// let locationItems = document.querySelectorAll('.location-item');
// let timeItems = document.querySelectorAll('.time-item');

// let cost1,cost2,cost3;
// cost1 = cost2 = cost3 = 1;
// for (let i = 0; i < teachersItems.length; i++) {
    
//     teachersItems[i].addEventListener('click',function name(params) {
//         if (!teachersItems[i].classList.contains('active')) {

//             teachersItems.forEach(function(item) {
//                 item.classList.remove('active')
//             })
            
//             teachersItems[i].classList.add('active');
//             cost1 = i;
//             // console.log(i);
//             summa();
            
//         }
//     })
    
// }

// for (let j = 0; j < coursesItems.length; j++) {
    
//     coursesItems[j].addEventListener('click',function name(params) {
//         if (!coursesItems[j].classList.contains('active')) {

//             coursesItems.forEach(function(item) {
//                 item.classList.remove('active')
//             })
            
//             coursesItems[j].classList.add('active');
//             cost2 = j;
//             // console.log(j);
//             summa();
//         }
//     })
    
// }

// for (let k = 0; k < locationItems.length; k++) {
    
//     locationItems[k].addEventListener('click',function name(params) {
//         if (!locationItems[k].classList.contains('active')) {

//             locationItems.forEach(function(item) {
//                 item.classList.remove('active')
//             })
            
//             locationItems[k].classList.add('active');
//             cost3 = k;
//             // console.log(k);
//             summa();
//         }
//     })
    
// }

// for (let l = 0; l < timeItems.length; l++) {
    
//     timeItems[l].addEventListener('click',function name(params) {
//         if (!timeItems[l].classList.contains('active')) {

//             timeItems.forEach(function(item) {
//                 item.classList.remove('active')
//             })
            
//             timeItems[l].classList.add('active');
            
//             summa();
//         }
//     })
    
// }


// function summa(params) {
//     console.log(arr[0][cost1]*arr[1][cost2]*arr[2][cost3]);
// }



// items[i].addEventListener('click',function name(params) {

        // if (items[i].classList.contains('teachers-item')) {
        //     items[i].classList.toggle('active');
        // }
       
    // })











// let arr= [
//     ['t1',false,100],
//     ['t2',false,200],
//     ['t3',false,300],
//     ['t4',false,400],
//     ['t5',false,500],
// ]
// //    console.log(arr)

// let cheks = document.querySelectorAll('ul li input');
// // console.log(cheks);
// let cost = document.querySelector('.cost');
// for (let i = 0; i < cheks.length; i++) {
//    cheks[i].addEventListener('change',function name(params) {
//             arr[i][1]=cheks[i].checked;
//             plus();
//             cost.innerHTML=b;
//             console.log(b);
//         // console.log(cheks[i].checked);
//         // console.log(arr[i][1]);
//    })
    
// }
// let b=0;
// function plus(params) {
//     b=0;
//     arr.forEach(function(item, i, arr) {
//        if (item[1]==true) {
        
//          b= b+item[2];
//        }
      
//     });
// }
let arr= [
    [800,800,500],
    [1,1.2,1.8,1.5],
    [1,0.9,0.8,0.7,0.6],
    [1,1,1]
    // ['t5',false,500],
]
// let items = document.querySelectorAll('.item');
// let cost0,cost1,cost2,cost3;
// cost0=cost1=cost2=cost3= 1;
// const calculatorDate = [
//     {
//         categories:'teachers',
//         id: 'teach1',
//         insideInfo:{
//             cost:800,
//             nameTeach: "Alex Grin",
//             typeTeach: "Носитель языка",
//         }
//     },
//     {
//         categories:'teachers',
//         id: 'teach2',
//         insideInfo:{
//             cost:800,
//             nameTeach: "Devers Grey",
//             typeTeach: "Носитель языка",
//         }
//     },
//     {
//         categories:'teachers',
//         id: 'teach3',
//         insideInfo:{
//             cost:500,
//             nameTeach: "Alena Grigorena",
//             typeTeach: "Русскоязный",
//         }
//     },
//     {
//         categories:'courses',
//         id: 'cours1',
//         insideInfo:{
//             cost:1,
//             nameCours: "Школьный",
//         }
//     },
//     {
//         categories:'courses',
//         id: 'cours2',
//         insideInfo:{
//             cost:1.2,
//             nameCours: "Взрослый",
//         }
//     },
//     {
//         categories:'courses',
//         id: 'cours3',
//         insideInfo:{
//             cost:1.8,
//             nameCours: "Индивидуальный",
//         }
//     },
//     {
//         categories:'courses',
//         id: 'cours4',
//         insideInfo:{
//             cost:1.5,
//             nameCours: "Корпоративный",
//         }
//     },
//     {
//         categories:'location',
//         id: 'locat1',
//         insideInfo:{
//             cost:1,
//             nameTeach: "Москва",
//         }
//     },
//     {
//         categories:'location',
//         id: 'locat2',
//         insideInfo:{
//             cost:0.9,
//             nameTeach: "Санкт-Петербург",
//         }
//     },
//     {
//         categories:'location',
//         id: 'locat3',
//         insideInfo:{
//             cost:0.7,
//             nameTeach: "Челябинск",
//         }
//     },
//     {
//         categories:'location',
//         id: 'locat4',
//         insideInfo:{
//             cost:0.6,
//             nameTeach: "Екатеринбург",
//         }
//     },
// ]

// items.forEach((item,index,arr)=>{
//     console.log(item.getAttribute('id'));
//     item.id=calculatorDate[index].id;
//     item.addEventListener('click',()=>{
//         if (calculatorDate[index].categories=='teachers') {
//             cost0 = calculatorDate[index].insideInfo.cost;
//             summa();
//         }
//         if (calculatorDate[index].categories=='courses') {
//             cost1 = calculatorDate[index].insideInfo.cost;
//             summa();
//         }
//         if (calculatorDate[index].categories=='location') {
//             cost2 = calculatorDate[index].insideInfo.cost;
//             summa();
//         }
//     })
// });

// function summa(params) {
//     // console.log(cost0*cost1*cost2*cost3);
//     let f= cost0*cost1*cost2*cost3;
//     let t = parseFloat(f.toFixed());
//     console.log(t);
// }