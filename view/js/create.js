let contactform = document.getElementById("contactForm");

let fname = document.getElementById("name");
let femail = document.getElementById("email");
let fmobile = document.getElementById("mobile");
let fage = document.getElementById("age");

contactform.addEventListener("submit", async (e) => {
    e.preventDefault();

    let data = {
        name: fname.value,
        email: femail.value,
        mobile: fmobile.value,
        age: fage.value,
    };
    console.log("new user =", data)

    await fetch(`/api/user/create`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(data),
    })
    .then((res) => res.json()).then((res) => {
        alert(res.msg);
    })
    .catch((err) => {
        alert("Error: " + err.message);
    });
});
