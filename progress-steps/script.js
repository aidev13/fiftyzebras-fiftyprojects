// Classes: progress, container, progress-container, circle, btn, active
// ID's: progress, prev, next

const progress = document.getElementById("progress")
const prevBtn = document.getElementById("prev")
const nextBtn = document.getElementById("next")
const circle = document.querySelectorAll(".circle")

let currentActive = 1

nextBtn.addEventListener("click", () => {
    currentActive++
    if (currentActive > circle.length) {
        currentActive = circle.length
    }

    update()
})

prevBtn.addEventListener("click", () => {
    currentActive--
    if (currentActive < 1) {
        currentActive = 1
    }

    update()
})

const update = () => {
   circle.forEach((circle, index) => {
      if(index < currentActive) {
         circle.classList.add('active')
      } else {
         circle.classList.remove('active')
      }
   })

   const actives = document.querySelectorAll('.active')

   progress.style.width = (actives.length - 1) / (circle.length - 1) * 100 + '%'

   const text = document.getElementById('text')

   if(currentActive === 1) {
      prevBtn.disabled = true     
   } else  if (currentActive === circle.length) {
      nextBtn.disabled = true
   } else {
      prevBtn.disabled = false
      nextBtn.disabled = false
   }

   if(currentActive <= 1) {
      text.textContent = "Click next" 
   } else if(currentActive === 2) {
      text.textContent = "Daddy Chill 2" 
   } else if(currentActive === 3) {
      text.textContent = "Daddy Chill 3" 
   } else if(currentActive === circle.length) {
      text.textContent = "Daddy Chill 4" 
   }
   
}

