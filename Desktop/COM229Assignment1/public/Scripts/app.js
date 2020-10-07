// IIFE -- Immediately Invoked Function Expression
(function(){

    function Start()
    {
        console.log("App Started...");

        if(document.title === "Contact")
        {
           let sendBotton = document.getElementById("sendButton");

           sendBotton.addEventListener('click', (event) => {
               event.preventDefault();
                if (confirm("Thank you for your message! Do you want to move to home page?"));
                location.href = "/home";

           })
        }
    }

    window.addEventListener('load', Start);
})();