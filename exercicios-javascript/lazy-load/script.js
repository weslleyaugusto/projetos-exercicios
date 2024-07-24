const images = document.querySelectorAll('img')

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting === false) return
        else{
            const img = entry.target
            img.src = img.src.replace('w=30', 'w=1000')
            observer.unobserve(img)
        }
    })
},{})

images.forEach(img => {
    observer.observe(img)
})