// NO LOOPING IN WEBSITE
const myForm = document.querySelector("#my-form");

const containet = document.querySelector(".container");

const body = document.querySelector("body");

const inputName = document.querySelector("#name");
const inputGender = document.querySelector("#gender");
const inputEmail = document.getElementById("email");
const inputMobile = document.querySelector("#mobile");
const inputDOB = document.querySelector("#dob");
const inputMessage = document.querySelector("#message");
const inputAddress = document.querySelector("#address");
const sts = document.querySelector(".sts");

const button = document.querySelector(".button");
button.addEventListener("click", (e) => {
  // e.preventDefault();
  // console.log('click');
  containet.style.background = "#ccc";
});

button.addEventListener("mouseover", (e) => {
  e.preventDefault();
  // console.log('click');
  containet.style.background = "coral";
});

button.addEventListener("mouseout", (e) => {
  e.preventDefault();
  // console.log('click');
  containet.style.background = "#c1eefc";
});

myForm.addEventListener("submit", onSubmit);
function onSubmit(f) {
  f.preventDefault();
  const ip = [
    inputName.value,
    inputGender.value,
    inputEmail.value,
    inputMobile.value,
    inputDOB.value,
    inputMessage.value,
    inputAddress.value,
  ];

  if (
    ip[0] === "" ||
    ip[1] === "" ||
    ip[2] === "" ||
    ip[3] === "" ||
    ip[4] === ""
  ) {
    // console.log('Please Enter all The Fields');
    sts.classList.add("error");
    sts.innerHTML = "Please Enter all the Fields";

    setTimeout(() => sts.remove(), 3000);
  } else {
    sts.classList.add("success");
    sts.innerHTML =
      "Thanks for Submitting the form<br> We will get back to you soon";
      setTimeout(() => sts.remove(), 3000);
    }
  // console.log(ip);
  // console.log(inputName.value);
  // console.log(inputEmail.value);
  // console.log(inputGender.value);
  // console.log(inputMobile.value);
  // console.log(inputDOB.value);
  // console.log(inputMessage.value);
  // console.log(inputAddress.value);

  //     for (i= 0; i<= ip.length; i++) {
  //         // console.log(ip[i])
  //         if(ip[i]  != '') {
  //             // console.log('Success');
  //             break;
  //         }
  //         console.log('Success');

  //         else{
  //             console.log('Please Enter all The Fields');
  //         }
  //     }
}
