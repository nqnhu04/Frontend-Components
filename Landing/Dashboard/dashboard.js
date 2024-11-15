const wholesaleDropbtn = document.getElementById('wholesaleBtn');
const wholesaleDropdown = document.getElementById('wholesaleDropdown');
const wholesaleDropcontent = document.getElementById('wholesaleDropContent');
wholesaleDropbtn.addEventListener('click', function(){
    const wholesaleCarat = document.getElementById('carat-dropdown');
    wholesaleDropdown.classList.toggle('active-dropdown');
    wholesaleDropcontent.classList.toggle('hide');
    if (wholesaleDropcontent.classList.contains('hide')){
        wholesaleCarat.classList.remove('fa-caret-up');
        wholesaleCarat.classList.add('fa-caret-down');
    }else{
        wholesaleCarat.classList.remove('fa-caret-down');
        wholesaleCarat.classList.add('fa-caret-up');
    }
    
});