let bookmarkBtn,searchingBtn,sharingBtn,featureImg,featureTitle,featureDesc,featureBtn;

bookmarkBtn = document.querySelector('.bookmark');
searchingBtn = document.querySelector('.searching');
sharingBtn = document.querySelector('.sharing');
featureBtn = document.querySelectorAll('.feature__link');
featureImg = document.querySelector('.feature__img');
featureTitle = document.querySelector('.feature__title');
featureDesc = document.querySelector('.feature__desc');

console.log(featureImg.src,featureTitle.textContent,featureDesc.textContent);
console.log(bookmarkBtn.className);

;

featureBtn.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        if(e.target.className.includes('bookmark')){
            bookmarkBtn.classList.add('current');
            searchingBtn.classList.remove('current');
            sharingBtn.classList.remove('current');
        
            featureImg.src = './images/illustration-features-tab-1.svg';
            featureTitle.textContent = 'Bookmark in one click';
            featureDesc.textContent = 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.';
        }
        else if(e.target.className.includes('searching')){
            bookmarkBtn.classList.remove('current');
            searchingBtn.classList.add('current');
            sharingBtn.classList.remove('current');
        
            featureImg.src = './images/illustration-features-tab-2.svg';
            featureTitle.textContent = 'Intelligent Search';
            featureDesc.textContent = 'Our powerful search feature will help you find saved sites in not time at all. No need to trawl through all of your bookmarks.';
        }
        else{
            bookmarkBtn.classList.remove('current');
            searchingBtn.classList.remove('current');
            sharingBtn.classList.add('current');
        
            featureImg.src = './images/illustration-features-tab-3.svg';
            featureTitle.textContent = 'Share your bookmarks';
            featureDesc.textContent = 'Easily share your bookmarks and collections with others.Create a shareable link that you can send at the click of a button.';
        }
    })
});

// FAQ

let arrowBtn,answerText;

arrowBtn  = document.querySelectorAll('.question__button');

arrowBtn.forEach(function(button){
    button.addEventListener('click',function(){
        console.log(button.children[0].src);
        console.log(button.parentElement.parentElement.lastElementChild);

        if (button.children[0].src.includes('arrow')){
            button.children[0].src ='./images/icon-close.svg'
        }
        else{
            button.children[0].src ='./images/icon-arrow.svg'
        }

        button.parentElement.parentElement.lastElementChild.classList.toggle('drop');
    })
});


// open nav

let burgerBtn,closeNavBtn,mobilenav;

burgerBtn = document.querySelector('.burger');
closeNavBtn = document.querySelector('.mobilenav__close');
mobilenav = document.querySelector('.mobilenav');

burgerBtn.addEventListener('click',function(){
    mobilenav.classList.add('open');
})

closeNavBtn.addEventListener('click',function(){
    mobilenav.classList.remove('open');
})