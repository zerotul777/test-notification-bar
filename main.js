// notifications
let toastBox = document.getElementById('toastBox')
let successMsg = '<i class="fa-solid fa-circle-check"></i>Successfully submitted'
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i>Please fix the error!'
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i>Invalid input, check again'

function showToast(msg) {
    let toast = document.createElement('div')
    toast.classList.add('toast')
    toast.innerHTML = msg
    toastBox.appendChild(toast)

    if (msg.includes('error')) {
        toast.classList.add('error')
    } else if (msg.includes('Invalid')) {
        toast.classList.add('invalid')
    }

    setTimeout(()=>{
        toast.remove()
    },6000)
}

// popup
let popup = document.querySelector('.popup')

function openPopup() {
    popup.classList.add('open-popup')
}

function closePopup() {
    popup.classList.remove('open-popup')
}

// password
let eyeicon = document.getElementById('eyeicon')
let password = document.getElementById('password')

eyeicon.onclick = function() {
    if (password.type == 'password') {
        password.type = 'text';
        eyeicon.src = './images/eye-open.png'
    } else {
        password.type = 'password';
        eyeicon.src = './images/eye-close.png'
    }
}
