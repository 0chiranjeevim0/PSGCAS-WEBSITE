const topbar = document.getElementById('topbar');

const navbarToggler = () =>{
    if(topbar.className == 'topbar-master-container-unactive'){
        topbar.className = 'topbar-master-container-active';
    }else{
        topbar.className = 'topbar-master-container-unactive';
    }
}