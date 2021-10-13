window.addEventListener("load", () => {
    const cakes = document.querySelector(".cakes");
    const inner = document.querySelector(".inner");
    const resize = () => inner.style.transform = `translate(-50%, -50%) scale(${Math.min(window.innerHeight / 720, window.innerWidth / 400)})`;
    resize();
    window.addEventListener("resize", resize);

    const linkMap = {
        logo: "party-pack-eight",
        job: "job-job",
        weapons: "weapons-drawn",
        drawful: "drawful-animate",
        wheel: "the-wheel-of-enormous-proportions",
        poll: "the-poll-mine"
    };

    Object.keys(linkMap).forEach(className => {
        const cake = document.querySelector(`.${className}`);
        const link = document.createElement("a");
        link.href = `https://www.jackboxgames.com/${linkMap[className]}/`;
        link.appendChild(cake);
        inner.appendChild(link);
        cake.addEventListener("mouseenter", () => {
            cakes.classList.add("selected");
            cake.classList.add("selected");
        });
        cake.addEventListener("mouseleave", () => {
            cakes.classList.remove("selected");
            cake.classList.remove("selected");
        });
    });

    let currentNumber = "";
    const count = () => {
        const releaseDate = new Date("October 14, 2021, 12:00 AM CDT");
        const difference = releaseDate - new Date();
        if (difference < 0) {
            document.querySelector(".countdown").innerText = "PLAY NOW!";
            document.title = "The Jackbox Party Pack 8 is OUT NOW!";
            return;
        }
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        const ret = [hours, minutes, seconds];
        const final = ret.filter(x => x != null).map(x => x.toString().padStart(2, "0")).join(":");
        document.querySelector(".countdown").innerText = final;
        if (currentNumber != final) document.title = `${final} | Party Pack 8 Countdown`;
        currentNumber = final;
        setTimeout(count, 250);
    };
    count();
});
