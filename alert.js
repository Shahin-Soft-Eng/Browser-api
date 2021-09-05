console.log('I am here');

const maComing = () => {
    alert('ma coming open the book');
}

const askPicnic = () => {
    // confirm('going to picnic for the next vacation'); (eita ek vabe kaj kore nicher ta onno vabe)

    const response = confirm('going to picnic for the next vacation');
    console.log(response);
    if(response===true){
        alert('amak fee ta bkash kore de');
    }

}
const askName = () => {
    const name = prompt('What is your Name');
    if (name){
        console.log(name);
    }
}