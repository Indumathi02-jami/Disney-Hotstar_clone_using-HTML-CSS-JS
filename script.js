

const corousel = document.querySelector('.corousel');
let slider =[];

let sliderindex =0;

const createslider =()=>{
    if(sliderindex>=movies.length){
        sliderindex=0;
    }
    //creating dom elements
    let slide = document.createElement('div');
    let imgelement = document.createElement('img');
    let content = document.createElement('div');
    let h1= document.createElement('h1');
    let p = document.createElement('p');

    imgelement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[sliderindex].name));
    p.appendChild(document.createTextNode(movies[sliderindex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgelement);
    corousel.appendChild(slide);


    imgelement.src = movies[sliderindex].image;
    sliderindex++;

    // class names

    slide.className = 'slider';
    content.classList = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-info';


    slider.push(slide);

    if(slider.image){
        slider[0].style.marginLeft =  'calc(-${100*(slider.length -2)}% - ${30*(slider.length -2)}px)';
    }
}
for(let i=0; i<3; i++){
    createslider();
}

setInterval(()=>{
    createslider();
},300)