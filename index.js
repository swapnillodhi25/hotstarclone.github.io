let movies = [
    {
        name: 'Brahmāstra',
        des: 'It can only be known once the movie has been released in theatres. The only thing common between Brahmāstra movie and the Shiva trilogy book is that except for mythology, weapons, and mythological characters, everything is fictional',
        image: 'b1.JPG'
    },
    {
        name: 'Golmaal Again',
        des: 'The story revolves around the lives of Gopal (Ajay Devgn), Lucky (Tusshar Kapoor), Madhav (Arshad Warsi) and Laxman (Sharman Joshi). Laxman is an intelligent student who is diverted from doing well in college by his mischievous band of friends Gopal, Madhav, and Lucky. Lucky is a mute in the movie.',
        image: 'g1.JPG'
    },
    {
        name: 'RRR',
        des: 'It centers around fictional versions of two Indian revolutionaries, Alluri Sitarama Raju (Charan) and Komaram Bheem (Rama Rao), their friendship and their fight against the British Raj',
        image: 'rrr.JPG'
    },
    {
        name: 'RakshaBandhan',
        des: 'Raksha Bandhan has enough material to keep the audience tied for two hours, and the pace and pitch of the narrative are such that',
        image: 'r1.JPG'
    },
    {
        name: 'Bahubali',
        des: ' result for bahubali discription about movie In ancient India, an adventurous and daring man becomes involved in a decades-old feud between two It a tale of two cousins in the Kingdom of Mahishmati India Balla fights his way with cousin Baahubali for the throne.',
        image: 'bahu.JPG'
    }
]




















const carousel = document.querySelector('.carousel')
let sliders = []

let slideIndex = 0;

const createSlide = () => {
    if(slideIndex >= movies.length) {
        slideIndex = 0;
    }

    // creating DOM element
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    // attaching all element
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    // setting up image
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    // setting elements classname
    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';

    sliders.push(slide);

    // adding sliding effect
    if(sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }
}

for(let i = 0; i < 3; i++) {
    createSlide();
}

setInterval(() => {
     createSlide();
}, 3000);


// video cards

const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause();
    })
})

// cards sliders

let cardContainers = document.querySelectorAll('.card-container');
let preBtns = document.querySelectorAll('.pre-btn');
let nxtBtns = document.querySelectorAll('.nxt-btn');

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    })

    preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    })
})