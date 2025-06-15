const addBtn = document.getElementById('addBtn');
    const deleteBtn = document.getElementById('deleteBtn');
    const updateBtn = document.getElementById('updateBtn');
    const deleteAllBtn = document.getElementById('deleteAllBtn');
    const playlistDiv = document.getElementById('playlist');

    function getPlaylist() {
      return JSON.parse(localStorage.getItem('playlist') || '[]');
    }

    function savePlaylist(list) {
      localStorage.setItem('playlist', JSON.stringify(list));
    }

    function render() {
      const list = getPlaylist();
      let html = '';
      list.forEach((entry, i) => {
        html += `${i + 1}. Song: ${entry.song}, Artist: ${entry.artist}<br>`;
      });
      playlistDiv.innerHTML = html || 'No songs saved.';
    }

    addBtn.onclick = () => {
      const song = document.getElementById('song').value;
      const artist = document.getElementById('artist').value;
      const list = getPlaylist();
      list.push({song, artist});
      savePlaylist(list);
      render();
      document.getElementById('song').value = '';
      document.getElementById('artist').value = '';
    };

    deleteBtn.onclick = () => {
      const val = document.getElementById('deleteInput').value.toLowerCase();
      let list = getPlaylist();

      //filter method takes a function as a callback. you skip the unwanted ones, and the rest stay. 
      list = list.filter((entry, i) => {
        if(val === (i + 1).toString()) return false;
        if(entry.song.toLowerCase() === val) return false;
        if(entry.artist.toLowerCase() === val) return false;
        return true;
      });
      //now the filtered list is replaced by the original list and the updated list is rendered.
      savePlaylist(list);
      render();
      document.getElementById('deleteInput').value = '';
    };

    //-----------------smart search!----------------------
    let currentEditIndex = null; // Track which entry we're editing

    // Search function
    searchBtn.onclick = () => {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const list = getPlaylist();
    
    const matches = list.reduce((acc, entry, index) => {
        if (entry.song.toLowerCase().includes(searchTerm) || 
            entry.artist.toLowerCase().includes(searchTerm)) {
        acc.push({...entry, originalIndex: index});
        }
        return acc;
    }, []);

    if (matches.length === 1) {
        // Single match found - prepare to edit
        currentEditIndex = matches[0].originalIndex;
        document.getElementById('editSong').value = matches[0].song;
        document.getElementById('editArtist').value = matches[0].artist;
        document.getElementById('editSection').style.display = 'block';
    } else {
        alert(matches.length > 1 ? "Multiple matches found" : "No matches found");
    }
    };

    // Save edited entry
    saveEditBtn.onclick = () => {
    if (currentEditIndex !== null) {
        const list = getPlaylist();
        list[currentEditIndex] = {
        song: document.getElementById('editSong').value,
        artist: document.getElementById('editArtist').value
        };
        savePlaylist(list);
        render();
        document.getElementById('editSection').style.display = 'none';
        currentEditIndex = null;
        document.getElementById('searchInput').value = '';
    }};

    // searchBtn.onclick = () => {
    // const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    // const list = getPlaylist();
  
    // const results = list.filter(entry => {
    // return (
    //   entry.song.toLowerCase().includes(searchTerm) ||
    //   entry.artist.toLowerCase().includes(searchTerm))
    // });
  
    // render(results); // Modify your render() to accept filtered results
    // };



    updateBtn.onclick = () => {
      const num = parseInt(document.getElementById('updateNum').value);
      const newSong = document.getElementById('updateSong').value;
      const newArtist = document.getElementById('updateArtist').value;
      const list = getPlaylist();
      if(num > 0 && num <= list.length) {
        list[num - 1] = {song: newSong, artist: newArtist};
        savePlaylist(list);
        render();
      }
      document.getElementById('updateNum').value = '';
      document.getElementById('updateSong').value = '';
      document.getElementById('updateArtist').value = '';
    };

    deleteAllBtn.onclick = () => {
      localStorage.removeItem('playlist');
      render();
    };

    render();