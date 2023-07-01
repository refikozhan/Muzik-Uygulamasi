window.onload = () => {
    const song_img_el = document.getElementById('song-image');
    const song_title_el = document.getElementById('song-title');
    const song_artist_el = document.getElementById('song-artist');
    const song_next_up_el = document.getElementById('song-next-up');


    const play_btn = document.getElementById('play-btn');
    const play_btn_icon = document.getElementById('play-icon');
    const prev_btn = document.getElementById('prev-btn');
    const next_btn = document.getElementById('next-btn');

    const audio_player = document.getElementById('music-player')

    let current_song_index;
    let next_song_index;

    let songs = [
        {
            title: "Vay",
            artist: "Sezen Aksu",
            song_path: "./music/Sezen Aksu - Vay (lkan Gunuc Remix).mp3",
            img_path: "./img/45.jpg"
        },
        {
            title: "Nankör Kedi",
            artist: "İbrahim Tatlıses",
            song_path: "./music/İbrahim Tatlıses - Nankör Kedi (Yüksel Ürer Remix).mp3",
            img_path: "./img/98.jpg"
        },
        {
            title: "Unutmam Lazım",
            artist: "Sedef Sebüktetkin",
            song_path: "./music/Sedef Sebüktekin - Unutmam Lazım (Dans Versiyon).mp3",
            img_path: "./img/56.jpg"
        },
        {
            title: "Sen Çoktan Gitmişsin",
            artist: "Tarkan",
            song_path: "./music/Tarkan - Sen Çoktan Gitmişsin (Deeperise Remix).mp3",
            img_path: "./img/48.jpg" 
        },
        {
            title: "Belki De Aşk Lazım Değildir",
            artist: "Sertab Erener",
            song_path: "music/Sertab Erener - Belki De Aşk Lazım Değildir (Batu Remix).mp3",
            img_path: "./img/48.jpg" 
        },
        {
            title: "Canımsın Sen",
            artist: "Sezen Aksu(Jabbar Cover)",
            song_path: "./music/Sezen Aksu - Canımsın Sen (Jabbar Cover).mp3",
            img_path: "./img/48.jpg"
        },
    ]
    play_btn.addEventListener('click', TogglePlaySong);
    
    next_btn.addEventListener('click', () => ChangeSong());
    prev_btn.addEventListener('click', () => ChangeSong(false));

    InitPlayer();

    function InitPlayer(){
        current_song_index = 0;
        next_song_index = current_song_index + 1;
        UpdatePlayer();
    }

    function UpdatePlayer() {
        let song = songs[current_song_index];

        song_img_el.style = "background-image: url('" + song.impg_path + "')";
        song_title_el.innerText = song.title;
        song_artist_el.innerText = song.artist;

        song_next_up_el.innerText = songs[next_song_index].title + " by " + songs[next_song_index].artist;

        audio_player.src = song.song_path;

    }
    
    function TogglePlaySong () {
        if(audio_player.paused) {
            audio_player.play();
            play_btn_icon.classList.remove('fa-play');
            play_btn_icon.classList.add('fa-pause');
        }else{
            audio_player.pause();
            play_btn_icon.classList.add('fa-play');
            play_btn_icon.classList.remove('fa-pause');
        }
    }

    function ChangeSong (next = true) {
        if (next) {
            current_song_index++;
            next_song_index = current_song_index + 1;

            if (current_song_index > songs.length - 1){
                current_song_index = 0;
                next_song_index = current_song_index + 1;            
            }

            if (next_song_index > songs.length - 1) {
                next_song_index = 0;
            }
        }else {
            current_song_index--;
            next_song_index = current_song_index + 1;

            if (current_song_index < 0) {
                current_song_index = songs.length - 1;
                next_song_index = 0;
            }
        }

        UpdatePlayer();
        TogglePlaySong();
    }
}