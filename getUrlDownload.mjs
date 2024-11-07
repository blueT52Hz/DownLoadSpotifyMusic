async function getUrlDonwload(idSpotify) {
  const headers = {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br, zstd",
    "Accept-Language": "vi,en-US;q=0.9,en;q=0.8",
    "If-None-Match": 'W/"204-wpJlamVRRx80f94TVkqhRYxvQDk"',
    "Origin": "https://spotifydown.com",
    "Referer": "https://spotifydown.com/",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 Edg/130.0.0.0",
    "sec-ch-ua": '"Chromium";v="130", "Microsoft Edge";v="130", "Not?A_Brand";v="99"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  };

  const url = `https://api.spotifydown.com/download/${idSpotify}`;
  const response = await  fetch(url, {
    method:"GET",
    headers: headers
  })
  const data = await response.json();
  return data.link;
}

async function downloadMusic(trackList) {
  await Promise.all(trackList.map(async (track, index) => {
      await new Promise(resolve => setTimeout(resolve, index * 5000)); // Dừng theo thời gian mỗi track
      // track.trackID = await getTrackID(track.trackName);
      const link = await getUrlDonwload(track.trackID);
      console.log(track.trackName);
      console.log(track.trackID);
      console.log(link);

      downloadMusicFile(link, `${track.trackID}.mp3`)
      
      // window.open(link)
  }));
}

function downloadMusicFile(url, filename) {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.blob();
    })
    .then(blob => {
      // Tạo đối tượng URL cho blob (tệp)
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = filename; // Đặt tên tệp
      link.click(); // Bắt đầu tải tệp
    })
    .catch(error => {
      console.error('Error downloading the music:', error);
    });
}

const trackList = [
  {
    "trackID": "40U3n1f6R2LsKEzVItiZTh",
    "trackName": "Con Cá Con Chim",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/40U3n1f6R2LsKEzVItiZTh",
    "lyric": ""
  },
  {
    "trackID": "3D1eYXE2w0FMAk8PtFSde5",
    "trackName": "Phù Du",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/3D1eYXE2w0FMAk8PtFSde5",
    "lyric": ""
  },
  {
    "trackID": "5u28QaMKbSePO69187D470",
    "trackName": "Nguyệt Thực",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/5u28QaMKbSePO69187D470",
    "lyric": ""
  },
  {
    "trackID": "3nAqo4RHk5OkZUULLrHwsr",
    "trackName": "Chạy Khỏi Thế Giới Này - Remix",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/3nAqo4RHk5OkZUULLrHwsr",
    "lyric": ""
  },
  {
    "trackID": "2aVWDrwpvcU1dwcM06i3gn",
    "trackName": "Hẹn Gặp Em Ở Một Hành Tinh Khác",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/2aVWDrwpvcU1dwcM06i3gn",
    "lyric": ""
  },
  {
    "trackID": "31UlmmwAzyD4MRgiz8d8JA",
    "trackName": "Cứu Lấy Anh",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/31UlmmwAzyD4MRgiz8d8JA",
    "lyric": ""
  },
  {
    "trackID": "4hdzdmi7MZpaWSY92JdeAJ",
    "trackName": "Rơi Khỏi Quỹ Đạo",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/4hdzdmi7MZpaWSY92JdeAJ",
    "lyric": ""
  },
  {
    "trackID": "7fCeYpR02Q8JVuD88hJZVT",
    "trackName": "Bầu Trời Mới",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/7fCeYpR02Q8JVuD88hJZVT",
    "lyric": ""
  },
  {
    "trackID": "2HEI3NMLXxllui92uviSrt",
    "trackName": "Monster",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/2HEI3NMLXxllui92uviSrt",
    "lyric": ""
  },
  {
    "trackID": "3jh1oSJ0bIse26xRRUPx6A",
    "trackName": "SKYLINE - M∞N Version",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/3jh1oSJ0bIse26xRRUPx6A",
    "lyric": ""
  },
  {
    "trackID": "12bRpvn1FjjN15JIFnqinb",
    "trackName": "Dòng Sông Sao",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/12bRpvn1FjjN15JIFnqinb",
    "lyric": ""
  },
  {
    "trackID": "6DUoR9vnTgJCwiKELneaH9",
    "trackName": "Cherry On Top - BiniMo Remix",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/6DUoR9vnTgJCwiKELneaH9",
    "lyric": ""
  },
  {
    "trackID": "5eoT30UmAbbvdKxG1w2WMm",
    "trackName": "Cherry On Top",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/5eoT30UmAbbvdKxG1w2WMm",
    "lyric": ""
  },
  {
    "trackID": "5KmNFz2Ve8ITrTMvAcJOsw",
    "trackName": "When a Man Cries",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/5KmNFz2Ve8ITrTMvAcJOsw",
    "lyric": ""
  },
  {
    "trackID": "33vtLeCWJAMbYjIg6xc6cz",
    "trackName": "That's What I Love",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/33vtLeCWJAMbYjIg6xc6cz",
    "lyric": ""
  },
  {
    "trackID": "2HyTl2ZFnRNoe56LJsETOc",
    "trackName": "Laredo",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/2HyTl2ZFnRNoe56LJsETOc",
    "lyric": ""
  },
  {
    "trackID": "0ySkMC5CSdVFuBkiEDCQfF",
    "trackName": "Panther City",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/0ySkMC5CSdVFuBkiEDCQfF",
    "lyric": ""
  },
  {
    "trackID": "3rHRwx3G8o6VAfaFAliw5d",
    "trackName": "Ain't Got Nothing On You",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/3rHRwx3G8o6VAfaFAliw5d",
    "lyric": ""
  },
  {
    "trackID": "3FWMV8E8bugipOWGaehWW6",
    "trackName": "Simplify",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/3FWMV8E8bugipOWGaehWW6",
    "lyric": ""
  },
  {
    "trackID": "7sOBXuIjekNDkivaurAHgD",
    "trackName": "Teddy's Tune",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/7sOBXuIjekNDkivaurAHgD",
    "lyric": ""
  },
  {
    "trackID": "5Uoe2op9gLbwwKMtyjux5t",
    "trackName": "Never Satisfied",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/5Uoe2op9gLbwwKMtyjux5t",
    "lyric": ""
  },
  {
    "trackID": "7g4JvjIMwC4gi6gBPKOqnz",
    "trackName": "Peaceful Place",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/7g4JvjIMwC4gi6gBPKOqnz",
    "lyric": ""
  },
  {
    "trackID": "2SIjWrKuWIPm2359x3ilCs",
    "trackName": "Can't Have It All",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/2SIjWrKuWIPm2359x3ilCs",
    "lyric": ""
  },
  {
    "trackID": "6kvdjKkkd2QJ0arXpjCmfW",
    "trackName": "Ivy",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/6kvdjKkkd2QJ0arXpjCmfW",
    "lyric": ""
  },
  {
    "trackID": "2kmRNdU0GIxb8099z45WQn",
    "trackName": "Ghetto Honeybee",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/2kmRNdU0GIxb8099z45WQn",
    "lyric": ""
  },
  {
    "trackID": "78Hz15kEfWJ3wbuYlD0Zyw",
    "trackName": "God Loves Everyone",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/78Hz15kEfWJ3wbuYlD0Zyw",
    "lyric": ""
  },
  {
    "trackID": "6nTNtWCDuL2loiO1s7a3kF",
    "trackName": "Want Me Back",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/6nTNtWCDuL2loiO1s7a3kF",
    "lyric": ""
  },
  {
    "trackID": "2pvRAeyLWqtkoHdsNjoO6d",
    "trackName": "Don't Ask Me To Stay",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/2pvRAeyLWqtkoHdsNjoO6d",
    "lyric": ""
  },
  {
    "trackID": "5sctsQHnYetZCvo3iDmUDj",
    "trackName": "Salahku Di Mana?",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/5sctsQHnYetZCvo3iDmUDj",
    "lyric": ""
  },
  {
    "trackID": "3xx1muts9Bt2FXkiBo7GTD",
    "trackName": "How Could You Still Love Me",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/3xx1muts9Bt2FXkiBo7GTD",
    "lyric": ""
  },
  {
    "trackID": "7EPMEvwZRDO6NgCozCWy9O",
    "trackName": "Your Favorite Food",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/7EPMEvwZRDO6NgCozCWy9O",
    "lyric": ""
  },
  {
    "trackID": "5U47vFt1VdUa3l0jbWYrWF",
    "trackName": "Another Heartbreak",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/5U47vFt1VdUa3l0jbWYrWF",
    "lyric": ""
  },
  {
    "trackID": "6IoSJaRUiXuwZBsHFgj1kp",
    "trackName": "OSLO",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/6IoSJaRUiXuwZBsHFgj1kp",
    "lyric": ""
  },
  {
    "trackID": "4NB18m3ZAh7bTz5VDxTZel",
    "trackName": "Do I Care Too Much",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/4NB18m3ZAh7bTz5VDxTZel",
    "lyric": ""
  },
  {
    "trackID": "5xqfAyA4isdnwpwZrUFGKY",
    "trackName": "Tak Ingin Lagi",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/5xqfAyA4isdnwpwZrUFGKY",
    "lyric": ""
  },
  {
    "trackID": "63EbNEB1rrRaDjNXK4jlJC",
    "trackName": "LOVE ME LIKE YOU",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/63EbNEB1rrRaDjNXK4jlJC",
    "lyric": ""
  },
  {
    "trackID": "2NjU8W8OgtiJAvLBytb0Gr",
    "trackName": "One Bad Day",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/2NjU8W8OgtiJAvLBytb0Gr",
    "lyric": ""
  },
  {
    "trackID": "5l05B0D62uoWP9FfKUXClZ",
    "trackName": "Wanna Be Yours",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/5l05B0D62uoWP9FfKUXClZ",
    "lyric": ""
  },
  {
    "trackID": "0XufLceJR7CAGKSE1L0wcZ",
    "trackName": "New Feeling",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/0XufLceJR7CAGKSE1L0wcZ",
    "lyric": ""
  },
  {
    "trackID": "27N6aK0HyweR6bqCuRDcP8",
    "trackName": "Putus",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/27N6aK0HyweR6bqCuRDcP8",
    "lyric": ""
  },
  {
    "trackID": "2P1MtsW2718ELmeWgywqdk",
    "trackName": "I Love About You",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/2P1MtsW2718ELmeWgywqdk",
    "lyric": ""
  },
  {
    "trackID": "4Ky9mJFd5mztZfcR6z9Ko0",
    "trackName": "Fight Some More",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/4Ky9mJFd5mztZfcR6z9Ko0",
    "lyric": ""
  },
  {
    "trackID": "7HP5BRxhgLTxDG1BZU6FTi",
    "trackName": "Let Me Cry",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/7HP5BRxhgLTxDG1BZU6FTi",
    "lyric": ""
  },
  {
    "trackID": "6om7ExUWd4Oymh5CfW7vf8",
    "trackName": "Riddle Of The Night",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/6om7ExUWd4Oymh5CfW7vf8",
    "lyric": ""
  },
  {
    "trackID": "5Z1MROWKedoFNZquPct1Ej",
    "trackName": "Outro II",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/5Z1MROWKedoFNZquPct1Ej",
    "lyric": ""
  },
  {
    "trackID": "3kkrXydZaaor24348eYbIp",
    "trackName": "Renaissance Man",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/3kkrXydZaaor24348eYbIp",
    "lyric": ""
  },
  {
    "trackID": "0vb3agb9QlHY2hZ2GmJSXk",
    "trackName": "Lover",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/0vb3agb9QlHY2hZ2GmJSXk",
    "lyric": ""
  },
  {
    "trackID": "0psSGht509NEpw60oFNOfc",
    "trackName": "Issa Goodbye",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/0psSGht509NEpw60oFNOfc",
    "lyric": ""
  },
  {
    "trackID": "5qwTV8pr5mU9Fb2HPLyNis",
    "trackName": "Devastated",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/5qwTV8pr5mU9Fb2HPLyNis",
    "lyric": ""
  },
  {
    "trackID": "28fdZiMAwrYU41REleoZIi",
    "trackName": "I Don't Know Anymore",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/28fdZiMAwrYU41REleoZIi",
    "lyric": ""
  },
  {
    "trackID": "0hJnGB29A4dkZ9zND9jUTj",
    "trackName": "Somebody's Pleasure",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/0hJnGB29A4dkZ9zND9jUTj",
    "lyric": ""
  },
  {
    "trackID": "3MkOsjScGN4hE9wdtJEuka",
    "trackName": "Pure Love",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/3MkOsjScGN4hE9wdtJEuka",
    "lyric": ""
  },
  {
    "trackID": "3Xvao3VV3kUVSnR93bBZ4B",
    "trackName": "Heartless",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/3Xvao3VV3kUVSnR93bBZ4B",
    "lyric": ""
  },
  {
    "trackID": "5vWpk3g58gmvW7EedSvEU5",
    "trackName": "no more you and i",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/5vWpk3g58gmvW7EedSvEU5",
    "lyric": ""
  },
  {
    "trackID": "37V2WeqMC54TPFa7d9PsfM",
    "trackName": "Best Lesson",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/37V2WeqMC54TPFa7d9PsfM",
    "lyric": ""
  },
  {
    "trackID": "2uE5zaQYiOR4iPa9wDfY8R",
    "trackName": "Remember You",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/2uE5zaQYiOR4iPa9wDfY8R",
    "lyric": ""
  },
  {
    "trackID": "5fTMi7nDH3HGlzFLOSvVjp",
    "trackName": "Lesson Learned",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/5fTMi7nDH3HGlzFLOSvVjp",
    "lyric": ""
  },
  {
    "trackID": "2pqIfQe8ku7GB58k6VK5hF",
    "trackName": "MỘNG YU",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/2pqIfQe8ku7GB58k6VK5hF",
    "lyric": ""
  },
  {
    "trackID": "6P7xEmk7ZZYz0AV84uOwiW",
    "trackName": "Cuộc gọi lúc nửa đêm",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/6P7xEmk7ZZYz0AV84uOwiW",
    "lyric": ""
  },
  {
    "trackID": "76LJNZFUi9NOGkpZnIIRVX",
    "trackName": "Beautiful nightmare (interlude)",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/76LJNZFUi9NOGkpZnIIRVX",
    "lyric": ""
  },
  {
    "trackID": "5S2ObREaW7Dl1XMMC7SxGX",
    "trackName": "Miền Mộng Mị",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/5S2ObREaW7Dl1XMMC7SxGX",
    "lyric": ""
  },
  {
    "trackID": "3rxbssNItXaXyqc0wJUsYC",
    "trackName": "2000 câu hỏi vì sao",
    "trackUrl": "",
    "trackUrlSpotify": "https://open.spotify.com/track/3rxbssNItXaXyqc0wJUsYC",
    "lyric": ""
  }
]

downloadMusic(trackList)

