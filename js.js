let userNameInput = document.querySelector('.username')
let passwordInput = document.querySelector('.password')
let text = document.querySelector("#text")
function btnfun(){
    // alert('great')
    let userNameValue = userNameInput.value
    let passwordValue = passwordInput.value
    if (userNameValue.length < 12 || passwordValue.length < 8){
        text.style.display = 'block'
        text.style.color ='red'
        text.innerHTML = "لطفا اطلاعات را درست وارد کنید"
    }else{
        text.style.display = 'block'
        text.style.color ='green'
        text.innerHTML = "با موفقیت وارد شدید"
    }
    setTimeout(function(){
        text.style.display = 'none'
    }, 3000)
}