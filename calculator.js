let string = "";
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).map((item)=>{
  item.addEventListener('click',(e)=>{
    if (e.target.innerHTML === '=') {
      string = eval(string).toString();
    }else if (e.target.innerHTML === 'Clear') {
      string="";
    }else{
      string+=e.target.innerHTML;
    }

    document.querySelector('.inputdata').value=string;
  });
});