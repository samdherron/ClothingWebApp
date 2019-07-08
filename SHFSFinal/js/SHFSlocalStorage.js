
/**
 * File Name: SHlocalStorage.js
 *
 * Revision History:
 *       Sam Herron, 2018-4-05 : Created file
 */

function start()
{
    var content = document.getElementById("content");

    initStorage();
    clearAll();
   addToStorage();
   show();


    function initStorage()
    {
        content.innerHTML += "<br>Initializing... <br>";

        localStorage.setItem("email", "sherron6310@conestogac.on.ca");

    }

    function show()
    {
        var savedEmail = localStorage.getItem("email");
        alert("Default reviewer email saved: " + savedEmail);

    }

    function clearAll()
    {
        content.innerHTML += "<br>Removing ... <br>";
        localStorage.removeItem("email");
        content.innerHTML = "";
        console.log("Cleared");
    }

    function addToStorage()
    {
        var enteredEmail = $("#SHFSdefaultEmail").val();
        console.log("entered: " + enteredEmail);

        if (localStorage.getItem("email"))
        {
            alert("email already exists");
        }
        else{

            localStorage.setItem("email", enteredEmail);

        }
    }
}