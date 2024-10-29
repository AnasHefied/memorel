// SIDEBAR hna bach koulchi kaykhdem fle menus
const menuItems = document.querySelectorAll('.menu-item');

// Messages
const messagesNotification = document.querySelector('#messages-notification');
// lentourage de message qui est en mauve
const messages = document.querySelector('.messages');
/* qu'on j'appuie sur une lettre quelconque elle m'affichera les nom qui ont cette lettre  */
const message = messages.querySelectorAll('.message');

const messageSearch = document.querySelector('#message-search');


// theme

const theme = document.querySelector('#theme');
//const Notification = document.querySelector('notification-popup')
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');


/* *********** SIDBAR*************** */

// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notification-popup').
            style.display = 'none';
        }else{
            document.querySelector('.notification-popup').
            style.display = 'block';
            // hna raqem 9+ disparait apres lclick de notifications
            document.querySelector('#notifications .notification-count')
            .style.display ='none';

        }
    })

})

// ******************** Messages *****************//
// search chat
const searchMessage = () => {
    /* const val ????? on le fait pour avoir la possibilité de chercher la personne 
     dont on veut voir le message qui m'a envoyé*/
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        // on appuie sur le nom de personne dont on vient de chercher 
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display ='flex';
        }else{
            chat.style.display='none';
        }

    })
}
messageSearch.addEventListener('keyup', searchMessage);
/* metter en surbeillance lorsque vous cliquez le menu item (meesage)*/

messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';// propagation stylyser lombre de la boite separee des virgules
    messagesNotification.querySelector('.notification-count').style.display =
    'none'; //kat7iyedlk mli katbrek 3la message dak raqem li en rouge
    setTimeout(() => {
        messages.style.boxShadow ='none';
    }, 2000);
})

// THEME/DISPLAY CUSTOMIZATION

//opens modal 
const openThemeModal = () =>{
 themeModal.style.display ='grid';   
}
//closes modal
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}
// close modal
themeModal.addEventListener('click', closeThemeModal);
// open modal
theme.addEventListener('click', openThemeModal);



// ======================= FONTS =========================
// Remove active class from spans or font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}
fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');// cette methode permet de basculer les l'elements de la liste 
        //between hide and show

        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        }else if (size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        }else if (size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        }else if (size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        }else if (size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-12rem');
            root.style.setProperty('----sticky-top-right', '-35rem');
        }
         // change font size of the root element 
    document.querySelector('html').style.fontSize =fontSize;
    })
    
   
})
// remove active class from colors
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

//change primary colors
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        // remove active class from colors
        changeActiveColorClass();
        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.contains('active');

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

//Theme BACKGROUND values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// change BACKGGROUNG COLOR.
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness',darkColorLightness);
}
// change background color
Bg1.addEventListener('click', () => {
    // add active class
    Bg1.classList.add('active');
    // remove active class from the others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    // remove customized changes from local storage
    window.location.reload();
    
});

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%'; 
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    // add active class
    Bg2.classList.add('active');
    // remove active class from the others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});
Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    // add active class
    Bg3.classList.add('active');
    // remove active class from the others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
    
})

// END