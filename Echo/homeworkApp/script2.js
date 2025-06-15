      function addSong() {
        const song = document.getElementById('song').value;
        const artist = document.getElementById('artist').value;

        const playlist = JSON.parse(localStorage.getItem('playlist')) || [];
        playlist.push({ song, artist });
        localStorage.setItem('playlist', JSON.stringify(playlist));
        showSongs();
      }

      function showSongs() {
        const playlist = JSON.parse(localStorage.getItem('playlist')) || [];
        const table = document.getElementById('playlist');
        table.innerHTML = '<tr><th>Song</th><th>Artist</th></tr>';
        playlist.forEach(({ song, artist }) => {
          table.innerHTML += `<tr><td>${song}</td><td>${artist}</td></tr>`;
        });
      }

      showSongs();