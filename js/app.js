const playerCollection = [];

function setPlayerName(array)
{
  let arrayLength = array.length;
   const selectPlayerName = document.getElementById('selected-player-name');
   selectPlayerName.innerText = arrayLength;
   const playerList = document.getElementById('player-list');
   
   playerList.innerHTML = '';
   for(let i=0; i<arrayLength; i++)
   {
    let creatName = document.createElement('ul');
    creatName.innerHTML = `<li>${i+1}.  ${array[i]}</li>`
    playerList.appendChild(creatName);
   }
}
function addPlayer(element)
{
  if(playerCollection.length<5){
    const playerName = element.parentNode.children[0].innerText;
    playerCollection.push(playerName);
   element.disable = true;
   element.style.backgroundColor = 'rgb(115 115 115)';
   setPlayerName(playerCollection);
  }
 else{
    alert('Player is greater than 5');
   return;
 }
}

function getInputFieldValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    return inputFieldString;
}

function setElementText(elementId, value)
{
  document.getElementById(elementId).innerText = value;
}

function addAmount(perPlayerAmount)
{
  const totalPlayervalue = perPlayerAmount * playerCollection.length;
  return totalPlayervalue;
}

document.getElementById('btn-calculate').addEventListener('click',function (){
    const perPlayerAmount = getInputFieldValue('perPlayer-field');
   if(isNaN(perPlayerAmount)){
    alert('please provide number')
   }
   else if(perPlayerAmount === '')
   {
    alert('please enter Amount');
   }
   else{
    const totalPlayervalue = parseFloat(perPlayerAmount);
    const totalPlayerAmount = addAmount(totalPlayervalue);
    setElementText('player_expenses', totalPlayerAmount);
   }
})

document.getElementById('btn-total').addEventListener('click', function(){
  const perPlayerAmount = getInputFieldValue('perPlayer-field');
  const managerField = getInputFieldValue('manager-field');
  const coachFeild = getInputFieldValue('choch-field');

  if(isNaN(managerField) || isNaN(coachFeild) || isNaN(perPlayerAmount)){
    alert('please provide number') ;
   }
   else if(managerField === '' || perPlayerAmount === ''  || coachFeild === '' )
   {
    alert('please enter Amount');
   }
   else{
    const totalPlayervalue = parseFloat(perPlayerAmount);
    const totalPlayerAmount = addAmount(totalPlayervalue);
    const total = totalPlayerAmount + parseFloat(managerField) + parseFloat(coachFeild);
    setElementText('total_expenses', total);
   }
})