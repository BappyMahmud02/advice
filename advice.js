
const loadAdvice = async() => {
    const url = `https://api.adviceslip.com/advice`
    const res = await fetch (url) ;
    const data = await res.json() ;
    displayAdvice(data.slip);
}

const loadAdviceId = async(search) => {
    const url = `https://api.adviceslip.com/advice/${search}`
    const res = await fetch (url) ;
    const data = await res.json() ;
    displayAdvice(data.slip);
}

const buttonValue = () => {
    const inputField = document.getElementById("input-container").value ;
    loadAdviceId(inputField);
}

const newAdvice = () => {
    location.reload();

}

const displayAdvice = advices =>{
    console.log(advices);
    const adviceContainer = document.getElementById("advice-container") ;
    
       
        adviceContainer.innerHTML =`
       <div class="card w-96 bg-base-100 shadow-xl text-center">
  <div class="card-body">
  <h2 class="card-title mx-auto font-bold text-2xl">Advice ID : ${advices.id} </h2>
  <p class="">${advices.advice}</p>
    <div class="card-actions justify-end mx-auto mt-5">
      <button onclick="newAdvice()" class="btn btn-primary">new advice</button>
    </div>
  </div>
</div>
        ` ;
        }


loadAdvice() ;
