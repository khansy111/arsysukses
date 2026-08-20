document.addEventListener(
    "DOMContentLoaded",
    () => {


    /* ==================================================
       FLOATING DECORATIONS
    ================================================== */

    const decor =
        document.getElementById(
            "floating-decorations"
        );


    const flowers = [
        "🌸",
        "🌷",
        "🌼",
        "✿",
        "✧",
        "♡",
        "💗"
    ];


    for (
        let i = 0;
        i < 30;
        i++
    ) {

        const item =
            document.createElement(
                "div"
            );

        item.className =
            "petal";

        item.textContent =
            flowers[
                Math.floor(
                    Math.random() *
                    flowers.length
                )
            ];


        item.style.left =
            Math.random() *
            100 +
            "vw";


        item.style.fontSize =
            10 +
            Math.random() *
            12 +
            "px";


        item.style.animationDuration =
            12 +
            Math.random() *
            12 +
            "s";


        item.style.animationDelay =
            Math.random() *
            15 +
            "s";


        decor.appendChild(item);

    }



    /* ==================================================
       ELEMENTS
    ================================================== */

    const lockScreen =
        document.getElementById(
            "lock-screen"
        );


    const giftIntro =
        document.getElementById(
            "gift-intro"
        );


    const loadingScreen =
        document.getElementById(
            "loading-screen"
        );


    const mainContent =
        document.getElementById(
            "main-content"
        );


    const giftBox =
        document.getElementById(
            "gift-box"
        );


    const giftTap =
        document.getElementById(
            "gift-tap"
        );


    const pinDisplay =
        document.getElementById(
            "pin-display"
        );


    const dots =
        document.querySelectorAll(
            ".dot"
        );


    const keys =
        document.querySelectorAll(
            ".key:not(.backspace):not(.clear-key)"
        );



    /* ==================================================
       PIN
    ================================================== */

    const correctPIN =
        "1111";


    let currentPIN =
        "";


    function updateDots() {

        dots.forEach(
            (
                dot,
                index
            ) => {

                dot.classList.toggle(
                    "filled",
                    index <
                    currentPIN.length
                );

            }
        );

    }


    keys.forEach(
        key => {

            key.addEventListener(
                "click",
                () => {

                    if (
                        currentPIN.length >=
                        4
                    ) {

                        return;

                    }


                    currentPIN +=
                        key.textContent.trim();


                    updateDots();


                    if (
                        currentPIN.length ===
                        4
                    ) {

                        setTimeout(
                            () => {

                                if (
                                    currentPIN ===
                                    correctPIN
                                ) {

                                    correctPINEntered();

                                } else {

                                    wrongPIN();

                                }

                            },
                            250
                        );

                    }

                }
            );

        }
    );



    /* ==================================================
       BACKSPACE
    ================================================== */

    document
        .querySelector(
            ".backspace"
        )
        .addEventListener(
            "click",
            () => {

                currentPIN =
                    currentPIN.slice(
                        0,
                        -1
                    );

                updateDots();

            }
        );



    /* ==================================================
       CLEAR
    ================================================== */

    document
        .querySelector(
            ".clear-key"
        )
        .addEventListener(
            "click",
            () => {

                currentPIN =
                    "";

                updateDots();

            }
        );



    /* ==================================================
       WRONG PIN
    ================================================== */

    function wrongPIN() {

        pinDisplay.classList.add(
            "shake"
        );


        setTimeout(
            () => {

                pinDisplay.classList.remove(
                    "shake"
                );


                currentPIN =
                    "";


                updateDots();

            },
            500
        );

    }



    /* ==================================================
       CORRECT PIN
       PIN → GIFT
    ================================================== */

    function correctPINEntered() {

        lockScreen.style.opacity =
            "0";


        lockScreen.style.transform =
            "scale(1.05)";


        setTimeout(
            () => {

                lockScreen.classList.add(
                    "hidden"
                );


                giftIntro.classList.remove(
                    "hidden"
                );


                giftIntro.style.opacity =
                    "0";


                giftIntro.style.transform =
                    "scale(.95)";


                requestAnimationFrame(
                    () => {

                        giftIntro.style.opacity =
                            "1";


                        giftIntro.style.transform =
                            "scale(1)";

                    }
                );


            },
            800
        );

    }



    /* ==================================================
       FIRST GIFT
    ================================================== */

    let giftOpened =
        false;


    giftBox.addEventListener(
        "click",
        () => {

            if (
                giftOpened
            ) {

                return;

            }


            giftOpened =
                true;


            giftBox.classList.add(
                "open"
            );


            giftTap.textContent =
                "Opening your surprise...";


            /* fade */

            setTimeout(
                () => {

                    giftIntro.style.opacity =
                        "0";

                },
                1000
            );


            /* loading */

            setTimeout(
                () => {

                    giftIntro.classList.add(
                        "hidden"
                    );


                    loadingScreen.classList.remove(
                        "hidden"
                    );


                    loadingScreen.style.opacity =
                        "1";

                },
                1600
            );


            /* hide loading */

            setTimeout(
                () => {

                    loadingScreen.style.opacity =
                        "0";

                },
                3200
            );


            /* website */

            setTimeout(
                () => {

                    loadingScreen.classList.add(
                        "hidden"
                    );


                    mainContent.classList.remove(
                        "hidden"
                    );


                    mainContent.style.opacity =
                        "1";


                    window.scrollTo(
                        0,
                        0
                    );


                    reveal();

                },
                4000
            );

        }
    );



    /* ==================================================
       SCROLL REVEAL
    ================================================== */

    const reveals =
        document.querySelectorAll(
            ".reveal"
        );


    function reveal() {

        const height =
            window.innerHeight;


        reveals.forEach(
            section => {

                const top =
                    section
                    .getBoundingClientRect()
                    .top;


                if (
                    top <
                    height - 80
                ) {

                    section.classList.add(
                        "active"
                    );

                }

            }
        );

    }


    window.addEventListener(
        "scroll",
        reveal
    );



    /* ==================================================
       MUSIC PLAYER
    ================================================== */

    const audio =
        document.getElementById(
            "audio"
        );


    const playBtn =
        document.getElementById(
            "play-btn"
        );


    const prevBtn =
        document.getElementById(
            "prev-btn"
        );


    const nextBtn =
        document.getElementById(
            "next-btn"
        );


    const globalMusicBtn =
        document.getElementById(
            "global-music-btn"
        );


    const progress =
        document.getElementById(
            "progress"
        );


    const progressContainer =
        document.getElementById(
            "progress-container"
        );


    const currentTimeEl =
        document.getElementById(
            "current-time"
        );


    const durationEl =
        document.getElementById(
            "duration"
        );


    const songTitle =
        document.getElementById(
            "song-title"
        );


    const songArtist =
        document.getElementById(
            "song-artist"
        );


    const playlistItems =
        document.querySelectorAll(
            ".playlist-item"
        );


    const songs = [

        {
            title:
                "Shape of My Heart",

            artist:
                "Backstreet Boys",

            src:
                "assets/music/song1.mp3"
        },

        {
            title:
                "Angel Baby",

            artist:
                "Troye Sivan",

            src:
                "assets/music/song2.mp3"
        },

        {
            title:
                "My Love",

            artist:
                "Westlife",

            src:
                "assets/music/song3.mp3"
        }

    ];


    let songIndex =
        0;


    let isPlaying =
        false;



    function loadSong(index) {

        const song =
            songs[index];


        songTitle.textContent =
            song.title;


        songArtist.textContent =
            song.artist;


        audio.src =
            song.src;


        playlistItems.forEach(
            item => {

                item.classList.remove(
                    "active"
                );

            }
        );


        playlistItems[index]
            .classList.add(
                "active"
            );


        progress.style.width =
            "0%";


        currentTimeEl.textContent =
            "0:00";


        durationEl.textContent =
            "0:00";

    }



    function playSong() {

        audio
            .play()
            .then(
                () => {

                    isPlaying =
                        true;


                    playBtn.innerHTML =
                        '<i class="fas fa-pause"></i>';


                    globalMusicBtn.innerHTML =
                        '<i class="fas fa-pause"></i>';


                    globalMusicBtn.classList.add(
                        "playing"
                    );

                }
            )
            .catch(
                () => {

                    isPlaying =
                        false;

                }
            );

    }



    function pauseSong() {

        audio.pause();


        isPlaying =
            false;


        playBtn.innerHTML =
            '<i class="fas fa-play"></i>';


        globalMusicBtn.innerHTML =
            '<i class="fas fa-music"></i>';


        globalMusicBtn.classList.remove(
            "playing"
        );

    }



    playBtn.addEventListener(
        "click",
        () => {

            if (
                isPlaying
            ) {

                pauseSong();

            } else {

                playSong();

            }

        }
    );



    globalMusicBtn.addEventListener(
        "click",
        () => {

            if (
                isPlaying
            ) {

                pauseSong();

            } else {

                playSong();

            }

        }
    );



    nextBtn.addEventListener(
        "click",
        () => {

            songIndex++;


            if (
                songIndex >=
                songs.length
            ) {

                songIndex =
                    0;

            }


            loadSong(
                songIndex
            );


            playSong();

        }
    );



    prevBtn.addEventListener(
        "click",
        () => {

            songIndex--;


            if (
                songIndex < 0
            ) {

                songIndex =
                    songs.length - 1;

            }


            loadSong(
                songIndex
            );


            playSong();

        }
    );



    playlistItems.forEach(
        item => {

            item.addEventListener(
                "click",
                () => {

                    songIndex =
                        Number(
                            item.dataset.index
                        );


                    loadSong(
                        songIndex
                    );


                    playSong();

                }
            );

        }
    );



    audio.addEventListener(
        "timeupdate",
        () => {

            if (
                !isNaN(
                    audio.duration
                )
            ) {

                const percent =
                    (
                        audio.currentTime /
                        audio.duration
                    ) * 100;


                progress.style.width =
                    percent + "%";


                currentTimeEl.textContent =
                    formatTime(
                        audio.currentTime
                    );


                durationEl.textContent =
                    formatTime(
                        audio.duration
                    );

            }

        }
    );



    progressContainer.addEventListener(
        "click",
        event => {

            if (
                isNaN(
                    audio.duration
                )
            ) {

                return;

            }


            const rect =
                progressContainer
                    .getBoundingClientRect();


            const percent =
                (
                    event.clientX -
                    rect.left
                ) /
                rect.width;


            audio.currentTime =
                percent *
                audio.duration;

        }
    );



    audio.addEventListener(
        "ended",
        () => {

            nextBtn.click();

        }
    );



    function formatTime(
        seconds
    ) {

        if (
            isNaN(seconds)
        ) {

            return "0:00";

        }


        const minutes =
            Math.floor(
                seconds / 60
            );


        const secs =
            Math.floor(
                seconds % 60
            );


        return (
            minutes +
            ":" +
            String(secs)
                .padStart(
                    2,
                    "0"
                )
        );

    }


    loadSong(0);



    /* ==================================================
       FINAL GIFT
    ================================================== */

    const finalGift =
        document.getElementById(
            "final-gift"
        );


    const finalTap =
        document.getElementById(
            "final-tap"
        );


    const finalMessage =
        document.getElementById(
            "final-message"
        );


    let finalOpened =
        false;



    finalGift.addEventListener(
        "click",
        openFinalGift
    );


    finalTap.addEventListener(
        "click",
        openFinalGift
    );



    function openFinalGift() {

        if (
            finalOpened
        ) {

            return;

        }


        finalOpened =
            true;


        finalGift.classList.add(
            "open"
        );


        finalTap.textContent =
            "Opening your final surprise...";


        setTimeout(
            () => {

                finalGift.style.opacity =
                    "0";


                finalTap.style.opacity =
                    "0";

            },
            900
        );


        setTimeout(
            () => {

                finalGift.style.display =
                    "none";


                finalTap.style.display =
                    "none";


                finalMessage.classList.remove(
                    "hidden"
                );


                finalMessage.scrollIntoView({
                    behavior:
                        "smooth",

                    block:
                        "center"
                });


                createFinalFlowers();

            },
            1300
        );

    }



    /* ==================================================
       FINAL FLOWERS
    ================================================== */

    function createFinalFlowers() {

        const symbols = [
            "🌸",
            "🌷",
            "🌼",
            "✿",
            "💗"
        ];


        for (
            let i = 0;
            i < 20;
            i++
        ) {

            const flower =
                document.createElement(
                    "div"
                );


            flower.className =
                "petal";


            flower.textContent =
                symbols[
                    Math.floor(
                        Math.random() *
                        symbols.length
                    )
                ];


            flower.style.left =
                Math.random() *
                100 +
                "vw";


            flower.style.animationDuration =
                8 +
                Math.random() *
                8 +
                "s";


            flower.style.animationDelay =
                Math.random() *
                3 +
                "s";


            flower.style.fontSize =
                12 +
                Math.random() *
                12 +
                "px";


            decor.appendChild(
                flower
            );

        }

    }

});