const mobile_btn = document.getElementById('mobile_menu_icon');
const mobile_close = document.getElementById('mobile_close_icon');
const mobile_extended = document.getElementById('mobile_extended');

mobile_btn.addEventListener('click', open);
mobile_close.addEventListener('click', close);

function open(){
    mobile_extended.classList.toggle('mobile-extended-active');
}

function close(){
    mobile_extended.classList.remove('mobile-extended-active');
}