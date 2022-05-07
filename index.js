
    const dateText  = document.querySelector('.date');
    const dateMonth  = document.querySelector('.month');
    function clearInput(){
      document.querySelector('.input-task').value="";
    }
    function getTime(){
      return new Date().getHours() + ':' + new Date().getMinutes();
    }
    function setCountTask(){
        let taskCount = document.querySelector('.tasks-count');
      taskCount.innerHTML = getTaskCountText();
    }
    function getTaskCountText(){

        let count = document.querySelectorAll('.task-block').length;
        return (count === 1) ? `${count} Task` : `${count} Tasks`;
    }
    function getDay(){
      let monthes = {
    1 : 'January',
    2 : 'February',
    3 : 'March',
    4 : 'April',
    5 : 'May',
    6 : 'June',
    7 : 'July',
    8 : 'August',
    9 : 'September',
    10 : 'October',
    11 : 'November',
    12 : 'December' 
};
let dayOfWeek = {
    1 : 'Monday',
    2 : 'Tuesday',
    3 : 'Wednesday',
    4 : 'Thursday',
    5 : 'Friday',
    6 : 'Saturday',
    7 : 'Sunday',
};
dateText.innerHTML =  new Date().getUTCDate() + ' ' +monthes[new Date().getUTCMonth()+1]+',';
dateMonth.innerHTML =  dayOfWeek[new Date().getUTCDay()];  

};
let elemCount = 0;
getDay();
let storageArr = [];
function addTask(text){
let bodyCard = document.querySelector('.body-card');
let elems = `<div class= task-block >
<div class= plus-icn ><input type= checkbox  id= checkbox${elemCount} onclick= getCheckboxStatus(${elemCount}) ></div>
<div class= two-elems >
<p class= task-text${elemCount} >${text}</p>
<div class= right-block >
<button class= task-clear-btn >X</button>
<p class= time-right-block >${getTime()}</p>
</div>
</div>
</div>`;




bodyCard.insertAdjacentHTML("beforeend", elems);
let count = document.querySelectorAll('.task-block').length-1;
  function deleteElem(){
    count = document.querySelectorAll('.task-block').length-1;
      document.querySelectorAll('.task-block')[count].remove();
    setCountTask();
  }
document.querySelectorAll('.task-clear-btn')[count].addEventListener('click',deleteElem,false);

// function checkElem(){
//   if(document.querySelectorAll('#checkbox')[count].checked){
//     document.querySelectorAll('.task-text')[count].setAttribute('class','line-true');
    
//   }
//   else{

//     document.querySelectorAll('.task-text')[count].setAttribute('class','line-false');
   
//   }
//   }




elemCount++;
clearInput();
setCountTask();
}
function getCheckboxStatus(n){
  if(document.querySelector(`#checkbox${n}`).checked){
    document.querySelector(`.task-text${n}`).removeAttribute('id', 'line-false');
    document.querySelector(`.task-text${n}`).setAttribute('id', 'line-true');

  }
  else{
    document.querySelector(`.task-text${n}`).setAttribute('id', 'line-false');
    document.querySelector(`.task-text${n}`).removeAttribute('id', 'line-true');
  }

}


