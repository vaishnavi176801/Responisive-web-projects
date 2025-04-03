let name=document.querySelector('#nme');
let work=document.querySelector('#work');
let img=document.querySelector('#img');
let info =document.querySelector('#info');
let prev=document.querySelector('#prev');
let next=document.querySelector('#next');
let supBtn=document.querySelector('#btnSup');

const reviews=[{
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        img: 'https://www.course-api.com/images/people/person-1.jpeg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        img: 'https://www.course-api.com/images/people/person-2.jpeg',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        img: 'https://picsum.photos/200',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        img: 'https://www.course-api.com/images/people/person-3.jpeg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    }
    ];
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    name.textContent = item.name;
    work.textContent = item.job;
    info.textContent = item.text;
});

function func(individual){
    const item = reviews[individual];
    img.src = item.img;
    name.textContent = item.name;
    work.textContent = item.job;
    info.textContent = item.text;

};

next.addEventListener('click',function(){
    if(currentItem<=reviews.length-1){
        func(currentItem);
        currentItem++;
    }
    else{
        currentItem=0;
        func(currentItem);
    }
});

prev.addEventListener('click',function(){
    if(currentItem>0){
        func(currentItem);
        currentItem--;
    }
    else{
        currentItem=reviews.length-1;
        func(currentItem);
    }
});
