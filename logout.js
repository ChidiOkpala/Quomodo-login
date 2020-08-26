let logout = document.getElementById("logout");

let loggingOut = () => {
	window.location.href = "https://wizardly-einstein-a3ca95.netlify.app/login";
}
 
logout.addEventListener("click", function(){
	loggingOut();
});
