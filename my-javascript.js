const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement =document.getElementById('error')

form.addEventListener('submit', (e) => {
	let messages = []
if 
	
   (name.value === '' ||name.value == null) {
    messages.push('name is required')
}
if  

(password.value.length <=8 {
	messages.push('Password must not be longer than 8 characters')
} 
