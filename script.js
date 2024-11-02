//validate the login form of the webpage
const form = document.querySelector("form");
//return error if the input value is invalid
if(!form == noValidate){
    form.addeventlistener('submit', e=> {
        e.preventDefault()
        form.classlist.add("was-validated");
    }) 
}
/* set the value of the auto-type in the html element 
to the string listed below*/
var typed = new typed(".auto-type",{
    //display these string to the end user according to the type and back spped
    String: ["Code", "Explore", "Create", "Discover", "Innovate"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
})
