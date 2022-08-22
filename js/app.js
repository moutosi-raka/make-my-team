const playerCollection = [];

function setPlayerName(array)
{
  let arrayLength = array.length;
   const selectPlayerName = document.getElementById('selected-player-name');
   selectPlayerName.innerText = arrayLength;
   const playerList = document.getElementById('player-list');
   
   playerList.innerHTML = '';
   let ulElement = document.createElement('ul');
   for(let i=0; i<arrayLength; i++)
   {
    let liElement = document.createElement('li');
    liElement.innerText = `${i+1}.  ${array[i]}`;
    ulElement.appendChild(liElement);
   }
   playerList.appendChild(ulElement);
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

function addPerPlayerAmount(perPlayerAmount)
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
   if(playerCollection.length === 0)
   {
    alert('please add player');
   }
   else{
    const totalPlayervalue = parseFloat(perPlayerAmount);
    const totalPlayerAmount = addPerPlayerAmount(totalPlayervalue);
    setElementText('player_expenses', totalPlayerAmount);
   }
})

document.getElementById('btn-total').addEventListener('click', function(){
  const PlayerTotalAmount = document.getElementById('player_expenses').innerText;
  const managerField = getInputFieldValue('manager-field');
  const coachFeild = getInputFieldValue('choch-field');

  if(isNaN(managerField) || isNaN(coachFeild) || isNaN(PlayerTotalAmount)){
    alert('please provide number') ;
   }
   else if(managerField === '' || PlayerTotalAmount === ''  || coachFeild === '' )
   {
    alert('please enter Amount');
   }
   else{
    const totalPlayervalue = parseFloat(PlayerTotalAmount);
    const total = totalPlayervalue + parseFloat(managerField) + parseFloat(coachFeild);
    setElementText('total_expenses', total);
   }
})