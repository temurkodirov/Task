
const button = document.getElementById("buttonInt");
const int = document.getElementById("inputInt");
const hidden = document.getElementById("hidden");

const modal = document.getElementById("myModal");
const showModalBtn = document.getElementById("showModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});


function myBtn() {
    modal.style.display = "block";
    hidden.style.display = "block";

    const parentDiv = document.querySelector(".mygrid")
    const divsToRemove = parentDiv.querySelectorAll("div");

    divsToRemove.forEach((div) => {
        div.remove();
    });
    
    var n = int.value;
    var center = -1;
    var even = -1;
    if(n%2==1)
    {
       center = Math.floor(n/2);
    }
    else{
        even = n/2;
    }
    n = n-1
  
        for (let i = 0; i <= n; i++) {
            
            const childDiv = document.createElement("div");
            childDiv.classList.add("d-flex");
            childDiv.classList.add("myDiv"+i);

            parentDiv.appendChild(childDiv);
                for (let j = 0; j <= n; j++) {
                    const parentDiv = document.querySelector(".myDiv"+i);
                    const childDiv = document.createElement("div");
                        if(n<10)
                        {
                            if (i === 0 || j === 0 || j === n || i === n ) {
                                childDiv.classList.add("colored");
                            } 
                            else if( center!= -1 && i === center && j === center && i>1 && j>1){
                                childDiv.classList.add("colored");
                            }
                            else if(n > 4)
                            {   
                                if(even === i && even === j || even === i+1 && even === j+1
                                || even === i && even === j+1  || even === i+1 && even === j)
                                {
                                    childDiv.classList.add("colored");
                                }
                                else{
                                childDiv.classList.add("blank");

                                }
                            }
                        else {
                            childDiv.classList.add("blank");
                        }
                    }
                    else{
                        if (i === 0 || j === 0 || j === n || i === n ) {
                            childDiv.classList.add("colored");
                        } 
                        else if( center!= -1 && i === center && j === center && i>2 && j>2){
                            childDiv.classList.add("colored");
                        }
                        else if(even > 4 && even === i && even === j || even === i+1 && even === j+1
                                || even === i && even === j+1  || even === i+1 && even === j )
                        {
                            childDiv.classList.add("colored");
                        }
                        else {
                            childDiv.classList.add("blank");
                        }
                   }
                     parentDiv.appendChild(childDiv);
                }
        }
}
