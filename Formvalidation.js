const jina = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('forrm');
const errorElement= document.getElementById('error')

forrm.addEventListener('submit', (e)=>{
let messages =[]
if(jina.value ==='' || jina.value == null){
    messages.push('Name is required');
}
if (password.value.length <= 6){
    messages.push('password must be longer than 6 characters')

}
if(password.value.length >=20){
    messages.push('password should be less than 20 characters');
}
if (password.value === 'password'){
    messages.push('password cannot be password');
}
if(messages.length >0){
    e.preventDefault()
    errorElement.innerText = messages.join(' , ')
}
});