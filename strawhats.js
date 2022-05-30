// toggle nav-menu and close button

const toggle = document.querySelector(".toggle");
const close = document.querySelector(".close");
const navBar = document. querySelector(".nav-bar")

toggle.addEventListener("click", function() {
    navBar.classList.toggle("show-nav-bar");
});

close.addEventListener("click", function() {
    navBar.classList.remove("show-nav-bar");
});

// Countdown

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const endTime = document.querySelector(".end-time")
const timeLeft = document.querySelector(".time-left")
const items = document.querySelectorAll(".time-box h3")

let futureDate = new Date(2022,06,12,10,00,0);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const hour = futureDate.getHours();
const mins = ("0" + futureDate.getMinutes()).slice(-2);
const day = weekdays[futureDate.getDay()];

endTime.textContent = `One Piece chapter 1044 releases on ${day}, ${date} ${month} ${year} @ ${hour}:${mins} a.m EST`;



// end time in ms
const futureTime = futureDate.getTime();


function remainingTime() {
    const currentTime = new Date().getTime();
    const rTime = futureTime - currentTime;
    console.log(rTime);

    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMin = 60*1000;
    const oneSecond = 1000; 

    let days = Math.floor(rTime/oneDay);
    let hours = Math.floor((rTime/oneHour)-(days*24));
    let mins = Math.floor((rTime/oneMin) - ((days*24*60)+ (hours*60)));
    let secs = Math.floor((rTime/oneSecond) - ((days*24*60*60) + (hours*60*60) + (mins*60)));

    const values = [days,hours,mins,secs];

    function format (item) {
        if(item < 10){
            return (item = `0${item}`)
        }
        return item;
    }

    items.forEach(function(item,index) {
        item.innerHTML = format(values[index]);
    });
    if (rTime< 0) {
        clearInterval(countdown)
        timeLeft.innerHTML = `One Piece CHAPTER 1044 IS OUT!!! Go read it (<a href="https://www.viz.com/shonenjump/chapters/one-piece" target="_blank">Here<a/>)`
    }
}


let countdown = setInterval(remainingTime, 1000);
remainingTime();


// Characters 


const characters = [
    {
        id: 1,
        image: "./images/luffy_wanted.png",
        names: "Monkey D. Luffy",
        link: "luffy",
        title: "(Captain)",
        powers: `<h1>Powers</h1>
        <h2>Devil Fruit User</h2>
        <h2>Gomu Gomu no Mi</h2>
        <h3>Gear Second</h3> <h3>Gear Third</h3> <h3>Gear Fourth</h3>
        <h1>Haki</h1>
        <ul>
            <li>Kenbunshoku Haki</li>
            <li>Busoshoku Haki</li>
            <li>Haoshoku Haki</li>
        </ul>`,
        description: `Monkey D. Luffy, also known as " Straw Hat Luffy" and commonly as "Straw Hat", is the main protagonist of the manga and anime, One Piece. He is the founder and captain of the increasingly infamous and powerful Straw Hat Pirates, as well as one of its top fighters. His dream is to become the King of the Pirates. He believes that being the Pirate King means having the most freedom in the world.`
    },
    {
        id: 2,
        image: "./images/zoro_wanted.png",
        names: "Roronoa Zoro",
        link: "zoro",
        title: "(Swordsman/ Vice-Captain)",
        powers: `<h1>Three-Sword Style</h1>     
        <h3>Wado Ichimonji</h3>          <h3>Sandai Kitetsu</h3>                <h3>Enma</h3>
        <h1>Haki</h1>
        <ul>
            <li>Kenbunshoku Haki</li>
            <li>Busoshoku Haki</li>
            <li>Haoshoku Haki</li>
        </ul>`,
        description: `Roronoa Zoro, also known as "Pirate Hunter" Zoro, is the First Mate of the Straw hat crew. Formerly a bounty hunter, he is the second member of the crew and the first to join, doing so in the Romance Dawn Arc.As a master of Santoryu, a swordsmanship style which he created during his childhood training in Shimotsuki Village, Zoro is among the four most powerful combatants of the Straw Hats, alongside Luffy, Sanji and Jinbe. His dream is to become the greatest swordsman in the world, in order to honor a promise he made to his deceased childhood friend Kuina.`
    },
    {
        id: 3,
        image: "./images/nami_wanted.png",
        names: `"Cat Burglar" Nami`,
        link: "nami",
        title: "(Navigator)",
        powers: `<h1>Cartographer</h1>
        <h1>Zeus</h1>
        <h1>Thief and Pickpcket</h1>
        <h1>Art of Weather</h1>
        <h2>Sorcery Clima-Tact</h2>
        <h2>Finances</h2>`,
        description: `"Cat Burglar" Nami is the navigator of the Straw Hat Pirates. Not only is she extremy skilled in navigation and cartographey, she is also
        an excellent thief and a master pickpockeyt. She is the third member of the crew and the second to join, doing so during the Orange Town Arc.
        She is the adoptive sister of Nojiko after the two were orphaned and taken in by Bell-mère. She was formerly a member of the Arlong Pirates and initially
        joined the Straw Hats so that she could rob them in order to buy back her village from Arlong. However, she legitimately joined the Straw Hats after they
        rebelled against and defeated Arlong. Her dream is to make a map of the entire world.`
    },  
    {
        id: 4,
        image: "./images/usopp_wanted.png",
        names: `"God" Usopp`,
        link: "usopp",
        title: "(Sniper)",
        powers: `<h2>Ginga Pachinko</h2>
                <h2>Kuro Kabuto</h2>
                <h1>Pop Greens</h1>
                <h1>Dials User</h1>
                <h1>Haki</h1>
                <ul>
                    <li>Kenbunshoku Haki</li>
                </ul>`,
        description: `"God" Usopp is the sniper of the Straw Hat Pirates. He is the fourth member of the crew and the third to join, doing so at the end of the Syrup Village Arc.
        Although he left the crew during the Water 7 Arc, he rejoined at the end of the Post-Enies Lobby Arc. Usopp is the son of Yasopp and Banchina. He was born
        and raised in Syrup Village, serving as "captain" of the Usopp Pirates and being Kaya's close friend. After working with the Straw Hats to defeat Kuro and
        the Black Cat Pirates, he was invited to join the crew.Despite his normal cowardice, Usopp dreams of becoming a brave warrior of the sea just like his father
        and lives every day in pursuit of living up to this dream.`,
    },
    {
        id: 5,
        image: "./images/sanji_wanted.png",
        names: `Vinsmoke Sanji`,
        link: "sanji",
        title: "(Cook)",
        powers: `<h1>Culinary Expert</h1>
        <h1>Black Leg Style</h1>
        <h2>Diable Jambe</h2>
        <h1>Raid Suit</h1>
        <h1>Attack Cuisine</h1>
        <h2>Hormone Soup with Sea Pork</h2>
        <h2>Simsim Cream</h2>
        <h1>Haki</h1>
                <ul>
                    <li>Kenbunshoku Haki</li>
                    <li>Busoshoku Haki</li>
                </ul>`,
        description: `"Black Leg" Sanji, born as Vinsmoke Sanji, is the cook of the Straw Hat Pirates. He is the fifth member of the crew and the fourth to join, doing so at the end
        of the Baratie Arc. Born as the third son and fourth child of the Vinsmoke Family (thus making him a prince of the Germa Kingdom), he disowned his family twice,
        once in his youth and again after reuniting with them as an adult. After fleeing the Vinsmokes as a child, he eventually entered the care of Zeff as the sous
        chef of the Baratie, where he would remain until he met Luffy, who convinced him to join his crew. His dream is to find the rumored chef's paradise, All Blue,
        which is where East Blue, West Blue, North Blue, and South Blue meet, along with their wildlife.`
    },
    {
        id: 6,
        image: "./images/chopper_wanted.png",
        names: "Tony Tony Chopper",
        link: "chopper",
        title: "(Doctor)",
        powers: `<h1>Devil Fruit User</h1>
        <h2>Hito Hito no Mi</h2>                
        <h4>Gaurd Point</h4>
        <h4>Horn Point</h4>
        <h4>Arm Point</h4>
        <h4>Jumping Point</h4>
        <h4>Monster Point</h4>
        <h4>Kung Fu Point</h4>
        <h1>Zoolingualism</h1>`,
        description: `Tony Tony Chopper, also known as "Cotton Candy Lover" Chopper, is the doctor of the Straw Hat Pirates. He is the sixth member of the crew and the fifth
        to join, doing so at the end of the Drum Island Arc. He was temporarily forced to join the Foxy Pirates during the Long Ring Long Land Arc, but was quickly
        returned to Luffy's crew. Chopper is a reindeer that ate the Hito Hito no Mi, a Devil Fruit that allows its user to transform into a human hybrid or a human
        at will. He came from Drum Island and was taught how to be a doctor by his two parental figures, Doctors Hiriluk and Kureha. His dream is to one day become a
        doctor capable of curing any disease and wants to travel all across the world specifically in the hopes of accomplishing this dream.`
    },
    {
        id: 7,
        image: "./images/nico_wanted.png",
        names: "Nico Robin",
        link: "robin",
        title: "(Archaeologist)",
        powers: `<h1>Devil Fruit User</h1>
        <h2>Hana Hana no Mi</h2>
        <h1>Fish-Man karate</h1>
        <h1>Espionage</h1>
        <h1>Spy</h1>`,
        description: `Nico Robin, also known by her epithet "Devil Child", is the archaeologist of the Straw Hat Pirates. She is the seventh member of the crew and the sixth
        to join, doing so at the end of the Arabasta Arc. She temporarily left the crew during the Water 7 Arc, but rejoined during the Enies Lobby Arc.Robin ate
        the Hana Hana no Mi at a young age, giving her the power to reproduce her body parts (or her entire body) on any surface at will. As the sole survivor of Ohara,
        she is currently the only person in the world known to have the ability to read and decipher Poneglyphs, a skill which is considered forbidden and threatening
        to the World Government. Her dream is to find the Rio Poneglyph which tells the true history of the world, specifically the Void Century.`
    },
    {
        id: 8,
        image: "./images/franky_wanted.png",
        names: `"Iron Man" Franky`,
        link: "franky",
        title: "(Shipwright)",
        powers: ` <h1>Cyborg</h1>
        <h3>BF-36/Cyborg Tactics</h3>      <h3>BF-37/Armored Me</h3>   <h3>BF-38/General Franky</h3>
        <h1>Master Craftsman</h1>
        <h1>Engineering Genius</h1>`,
        description: `Born "Cutty Flam", he chose to go by his nickname of "Franky" until eventually permanently discarding his true name per the request of Iceburg
        to hide his identity. Originally from the South Blue, Franky was abandoned by his family as a four-year-old, eventually making his way to Water 7.
        There, he came to be a member of Tom's Workers, until an incident resulted in his body being heavily damaged and requiring him to augment himself
        into a cyborg. Upon returning to Water 7, he became the leader of the Franky Family, a group of ship dismantlers. Franky and his followers were
        originally enemies of the Straw Hats at the beginning of the Water 7 Arc, until circumstances forced them to become allies at the end of the same
        arc and the Enies Lobby Arc. Franky's dream is to create a ship and circumnavigate the world with it, and he built the Thousand Sunny and joined
        the Straw Hat Pirates to fulfill his dream.`
    },
    {
        id: 9,
        image: "./images/brook_wanted.png",
        names: `"Soul King" Brook`,
        link: "brook",
        title: "(Musician)",
        powers: `<h1>Swordsman</h1>
        <h2>Shikomizue</h2>
        <h1>Devil Fruit User</h1>
        <h2>Yomi Yomi no Mi</h2>
        <h1>Soul</h1>`,
        description: `"Soul King" Brook is the musician of the Straw Hat Pirates, and one of their two swordsmen. He is the ninth member of the crew and the eighth
        to join, doing so at the end of the Thriller Bark Arc. Brook ate the Yomi Yomi no Mi, which allowed him to return to life after death once.
        Brook eventually learned to tap deeper into the powers of his Devil Fruit, giving him significant control over his own soul and the souls of
        others. His dream is to reunite with his old friend, Laboon, at Reverse Mountain, where he resides with Crocus. Originally a member of the Rumbar
        Pirates, he died and was resurrected through the power of the Yomi Yomi no Mi. However, due to the amount of time it took for his soul to find his
        body, it was reduced to a skeleton, keeping only his afro intact. Brook drifted alone in the Florian Triangle for 50 years, eventually meeting
        Luffy and serving as the Straw Hats' ally during the Thriller Bark Arc before officially joining the crew.`
    },
    {
        id: 10,
        image: "./images/jinbe_wanted.png",
        names: `"Knight of the Sea" Jinbe`,
        link: "jinbe",
        title: "(Helmsman)",
        powers: `<h1>Fish-Man Karate</h1>
        <h1>Haki</h1>
                <ul>
                    <li>Kenbunshoku Haki</li>
                    <li>Busoshoku Haki</li>
                </ul>
        <h1>Fish Communication</h1>`,
        description: `"Knight of the Sea" Jinbe is the helmsman of the Straw Hat Pirates. He is the tenth member of the crew and the ninth to join, doing so during
        the Wano Country Arc. Jinbe is a whale shark fish-man and a powerful master of Fish-Man Karate. His dream is to fulfill his former captain
        Fisher Tiger's dying wish of coexistence and equality between humans and fish-men. He was a member of the Sun Pirates, eventually becoming
        its second captain after the death of their original captain, Tiger. He eventually became one of the Seven Warlords of the Sea, though he
        resigned during the Summit War of Marineford. Prior to and amidst said war, Jinbe befriended Monkey D. Luffy, and two years later allied
        with him and his crew to prevent the New Fish-Man Pirates' coup d'état against the Ryugu Kingdom's Neptune Royal Family. Luffy thereafter
        invited him to join the Straw Hat Pirates, but Jinbe held it off until severing ties with Big Mom during the Whole Cake Island Arc. After
        staying behind in Totto Land to protect the Sun Pirates from Big Mom's wrath, Jinbe returned to the Straw Hats during the Wano Country Arc,
        officially announcing his status as a member of the crew.`
    },
    {
        id: 11,
        image: "./images/sunny.webp",
        names: "Thousand Sunny",
        link: "sunny",
        title: "(Ship)",
        powers: `<h1>Soldier Dock System</h1>
        <h3>Channel Zero</h3>           <h3>Channel One</h3>           <h3>Channel Two</h3>               <h3>Channel Three</h3>
                        <h3>Channel Four</h3>            <h3>Channel Five</h3>             <h3>Channel Six</h3>
        <h1>Coup de Burst</h1>
        <h1>Gaon Cannon</h1>
        <h1>Library</h1>
        <h1>Training Room</h1>
        <h1>Aquarium</h1>`,
        description: `The Thousand Sunny is the second ship of the Straw Hat Pirates, built after the Going Merry was destroyed.
        It is often referred to as Sunny (サニー Sanī?) by the crew. It is a brigantine-type ship designed and built
        by Franky with help from Yokozuna, Iceburg, and the remaining Galley-La foremen who were among the best shipwrights
        in the world. Built from Adam Wood, it is a magnificent ship of the finest craftsmanship at least double the size of
        the Going Merry. Its features include practically all of the various requests the Straw Hats had before arriving in Water 7.`
    },
];

const container = document.querySelector(".container");
const pirates = document.querySelector(".pirates");

window.addEventListener("DOMContentLoaded", function() {
    displayCharacters(characters);
    displayCharactersMenu(characters);
})

function displayCharacters(characterInfo) {
    let displayCharacters = characterInfo.map(function (info) {
        return `<div class="character">
        <img src="${info.image}" alt="${info.names}" class="image"   id="${info.link}">
        <div class="info">
            <h1 class="name">${info.names}</h1>
            <h2 id="title">${info.title}</h2>
            <div class="power">${info.powers}</div>
            <p class="description">${info.description}</p>
        </div>
    </div>`;
    });
    displayCharacters = displayCharacters.join("");
    container.innerHTML = displayCharacters;
}

function displayCharactersMenu(menuInfo) {
    let displayCharactersMenu = menuInfo.map(function (info) {
        return `<li>
                <a href="#${info.link}">${info.names}</a>
                </li>`
    });
    displayCharactersMenu = displayCharactersMenu.join("");
    pirates.innerHTML = displayCharactersMenu;
}
