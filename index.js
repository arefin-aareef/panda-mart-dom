// Task 2 - Change all same element color
const h2 = document.getElementsByTagName('h2');
for(var i = 0; i < h2.length; i++){
    h2[i].style.color = 'red';
}

// Task 3 - Change Background Color of a section
const backPack = document.getElementById('backpack');
backPack.style.backgroundColor = 'tomato'

// Task 4 - Change Radius Of Card Class
const card = document.getElementsByClassName('card');
for(var i = 0; i < card.length; i++){
    card[i].style.borderRadius = '30px';
}

// Task 5 - Add Click Handler With Function
document.getElementById('submit').addEventListener('click', function(){
    alert('thank you');
})

// Task 6 - Remove Card On Button Click - Not 100% ok
const buyNow = document.getElementsByClassName('btn');
for(var i = 0; i < buyNow.length; i++){
    buyNow[i].addEventListener('click', function(){
        const hideCard = document.getElementsByClassName('card');
        for(var i = 0; i < hideCard.length; i++){
            hideCard[i].parentNode.removeChild(hideCard[i]);
        }
    })
}

// Task 7 - Input Field Text Validation
const inputField = document.getElementById('exampleInputEmail1');
inputField.addEventListener('keyup', function(event){
    const text = event.target.value;
    const submitButton = document.getElementById('submit');
    if(text == 'email'){
        submitButton.removeAttribute('disabled')
    }
    else{
        submitButton.setAttribute('disabled', true)
    }
});

// Task 8 - Change Image On Mouse Enter
const changeImg = document.getElementById('change-img');
changeImg.addEventListener('mouseenter', function(){
    changeImg.src = 'images/bags/bag-2.png';
})

// Task 9 - Change Section Background Color On Double Click
const subscribe = document.getElementById('subscribe');
subscribe.addEventListener('dblclick', function(){
    subscribe.style.backgroundColor = 'blue';
})


