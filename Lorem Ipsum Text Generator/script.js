let btn=document.getElementById('submit');
let text=document.getElementById('text');
let num=document.getElementById('num');

let para= 'At vero eos et accusamus et iusto odio ' +
    'dignissimos ducimus qui blanditiis praesentium voluptatum ' +
    'deleniti atque corrupti quos dolores et quas molestias excepturi ' +
    '.';




function work() {
    text.innerText = "";
    let n = Number(num.value);
    for(let i=0;i<n;i++){
        text.innerText+= para+"\n"+"\n";
    }

}

btn.addEventListener('click',work);

function myFunction() {
    navigator.clipboard.writeText(text.innerText)
        .then(() => {
            console.log('Text copied to clipboard');
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
}


