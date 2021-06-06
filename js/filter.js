function filtro() {
    //declarando variáveis

    var input = document.getElementById('form-input');
    let filter = input.value;
    let table = document.getElementById('data');
    let tr = table.getElementsByTagName('tr');
  
    
    //Loop

    for (i = 0; i <tr.length;i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

}