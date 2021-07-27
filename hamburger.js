 const mainmenu = document.querySelector('.mainmenu');
 const openMenu = document.querySelector('.openMenu');

 openMenu.addEventListerner('click,show');
 mainenu.addEventListerner('click,show');

 function show(){
     mainmenu.style.display ='flex';
     mainmenu.style.top ='0';

 }
 function close(){
    mainmenu.style.top ='100%';