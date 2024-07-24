const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolor molestiae, aliquid dictadistinctio quis dolorem incidunt ipsa, illo quasi eum? Excepturi nemo eligendi reprehenderitsapiente. Consectetur pariatur ipsa eaque?"

//Informações de avaliações simulando uma requisição de objetos
const reviews = [
    { label: 'Erick Smith', job: 'web developer', review: lorem, photo: 'man-1.jpg' },
    { label: 'Matthew Turner', job: 'Fashion Designer', review: lorem, photo: 'man-2.jpg' },
    { label: 'Alexander Harris', job: 'Lawyer', review: lorem, photo: 'man-3.jpg' },
    { label: 'Olivia Taylor', job: 'Psychologist', review: lorem, photo: 'woman-1.jpg' },
    { label: 'Ava Bailey', job: 'Software Engineer', review: lorem, photo: 'woman-2.jpg' },
    { label: 'Sophia Clark', job: 'Nutritionist', review: lorem, photo: 'woman-3.jpg' },
    { label: 'William Jones', job: 'Doctor', review: lorem, photo: 'man-4.jpg' },
    { label: 'Samuel Nelson', job: 'Musician', review: lorem, photo: 'man-5.jpg' },
    { label: 'Ruby Adams', job: 'Astronomer', review: lorem, photo: 'woman-4.jpg' },
    { label: 'Matthew Turner', job: 'Civil Engineer', review: lorem, photo: 'man-6.jpg' },
    { label: 'Eleanor Foster', job: 'Airline Pilot', review: lorem, photo: 'woman-5.jpg' },
]

//Seleção de elementos
const img = document.querySelector('img')
const author = document.querySelector('#author')
const job = document.querySelector('#job')
const review = document.querySelector('#review')
const prevBtn = document.querySelector('#prev-btn')
const nextBtn = document.querySelector('#next-btn')
const randomBtn = document.querySelector('#random-button')

let index = 0

//Funções

function initialize() {
    index = Math.floor(Math.random() * reviews.length)

    const randomObj = reviews[index]

    img.src = `./img/${randomObj.photo}`
    author.innerText = randomObj.label
    job.innerText = randomObj.job
    review.innerText = randomObj.review

    return index
}

index = initialize()

function next() {
    index++
    if (index >= reviews.length) index = 0

    const randomObj = reviews[index]
    img.src = `./img/${randomObj.photo}`
    author.innerText = randomObj.label
    job.innerText = randomObj.job
    review.innerText = randomObj.review

    console.log(index)
}

function prev() {
    if (index === 0) index = reviews.length

    index--
    const randomObj = reviews[index]
    img.src = `./img/${randomObj.photo}`
    author.innerText = randomObj.label
    job.innerText = randomObj.job
    review.innerText = randomObj.review
    console.log(index)
}

function random(){
    index = Math.floor(Math.random() * reviews.length)

    const randomObj = reviews[index]
    
    img.src = `./img/${randomObj.photo}`
    author.innerText = randomObj.label
    job.innerText = randomObj.job
    review.innerText = randomObj.review
    console.log(index)
}
//Eeventos
nextBtn.addEventListener('click', () => next())
prevBtn.addEventListener('click', () => prev())
randomBtn.addEventListener('click', () => random())