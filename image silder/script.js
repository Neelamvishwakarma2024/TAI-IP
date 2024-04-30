const left = document.querySelector('.left');
const right = document.querySelector('.right');
const silder = document.querySelector('.silder');
const images = document.querySelectorAll('.image');

let sildeNumber = 1;

const length = images.length;
/*start for dots*/ 
const bottom = document.querySelector('.bottom');

for(let i=0; i<length; i++){
    const div = document.createElement('div');
    div.className = 'button';
    bottom.appendChild(div);
}

const buttons = document.querySelectorAll('.button');

buttons[0].style.backgroundColor = 'black';

const resetBg = ()=>{
    buttons.forEach((button) =>{
        button.style.backgroundColor = 'transparent';
    });
};

buttons.forEach((button,i) =>{
    button.addEventListener('click',()=>{
        resetBg();
        silder.style.transform = `translateX(-${i*800}px)`;
        sildeNumber = i + 1;
        button.style.backgroundColor = 'black';

    });

});

const changeColor = () =>{
    resetBg();
    buttons[sildeNumber-1].style.backgroundColor = 'black';
};



/*End for dot*/



const nextSilde = ()=>{   
    silder.style.transform = `translateX(-${sildeNumber*800}px)`;
    sildeNumber++;

};

const prevSilde = ()=>{   
    silder.style.transform = `translateX(-${(sildeNumber-2)*800}px)`;
    sildeNumber--;

};

const getFirstSilde = ()=>{   
    silder.style.transform = `translateX(0px)`;
    sildeNumber = 1;

};

const getLastSilde = ()=>{   
    silder.style.transform = `translateX(-${(length-1)*800}px)`;
    sildeNumber = length;

};

right.addEventListener('click',()=>{
    sildeNumber <length ? nextSilde() : getfirstSilde();
    changeColor();
});

left.addEventListener('click',()=>{
    sildeNumber > 1 ? prevSilde() : getLastSilde();
    changeColor();
});

