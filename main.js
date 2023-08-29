const questions = [
  {
    id : 1,
    prompt : "How many team members can I invite?",
    answer: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
  },

  {
    id : 2,
    prompt : " What is the maximum file upload size?",
    answer: "  No more than 2GB. All files in your account must fit your allotted storage space."
  },

  {
    id : 3,
    prompt : "How do I reset my password?",
    answer: " Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
  },

  {
    id : 4,
    prompt : " Can I cancel my subscription?",
    answer: "Yes! Send us a message and we’ll process your request no questions asked."
  },

  {
    id : 5,
    prompt : "  Do you provide additional support?",
    answer: "Chat and email support is available 24/7. Phone lines are open during normal business hours."
  },
]

const containerList = document.querySelector(".container_content-list");

window.addEventListener("DOMContentLoaded", ()=>{

  let displayQuestions = questions.map(question =>{
    return `  <li>


    <div class="container_content-list-info">
      <h1 class="title">${question.prompt}</h1>
       <button class="btn"> 
      <img src="./images/icon-arrow-down.svg">
      </button>
    </div>
    <div class="container_content-list-answer">
    <p>${question.answer}</p>
    </div>

    </div>

   </li>
  `
  }).join("")

containerList.innerHTML = displayQuestions


const btns = document.querySelectorAll(".btn");
const answers = document.querySelectorAll(".container_content-list-answer")
const titles = document.querySelectorAll(".title");

btns.forEach(btn => {
  btn.addEventListener('click', (e)=>{

    btns.forEach(otherBtn => {
      if (otherBtn !== btn) {
        otherBtn.classList.remove("rotate");
      }
    });
    btn.classList.toggle("rotate");

        answers.forEach(answer =>{
        if (e.currentTarget.parentElement.parentElement == answer.parentElement ){
           answer.classList.toggle("visibility")
        } else {
          answer.classList.remove("visibility")

        }
      })
    
      titles.forEach(title =>{
        if (title.parentElement == e.currentTarget.parentElement){
            title.classList.toggle("gras")
        } else {
          title.classList.remove("gras")
        }
 
      })
     
    })
  });
})
