var icon = document.getElementById('icon');

icon.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        icon.className = 'bx bxs-moon bx-sm';
    }
    else{
        icon.className = 'bx bxs-sun bx-sm';
    }
})

