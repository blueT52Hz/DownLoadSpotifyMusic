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
    "STT": 1,
    "trackName": "Chiều hôm ấy",
    "trackID": "2Uf4IUlGNFrCitvHKGJ6rW"
  },
  {
    "STT": 2,
    "trackName": "Nơi này có anh",
    "trackID": "5rSAUmbOg4giDrM29vUyHe"
  },
  {
    "STT": 3,
    "trackName": "Âm thầm bên em",
    "trackID": "2wZAvkgiOE5tyrnqhB69KA"
  },
  {
    "STT": 4,
    "trackName": "Những lời hứa bỏ quên",
    "trackID": "1bG6Q8sR8jda7ryI365y8o"
  },
  {
    "STT": 5,
    "trackName": "Đông kiếm em",
    "trackID": "0B1ZnYwYefkNhZeE8ZQpv5"
  },
  {
    "STT": 6,
    "trackName": "Lạ lùng",
    "trackID": "5Bti0azlFhMattVY76qFr9"
  },
  {
    "STT": 7,
    "trackName": "Bước qua mùa cô đơn",
    "trackID": "6uxuJ8Fr1AAfSPJUF9N1yr"
  },
  {
    "STT": 8,
    "trackName": "Bình yên",
    "trackID": "62qu8iTjpgIlAciD2vRLdE"
  },
  {
    "STT": 9,
    "trackName": "Bước qua nhau",
    "trackID": "38rjRVqEHSlDRrDWDvjkqW"
  },
  {
    "STT": 10,
    "trackName": "Lạc trôi",
    "trackID": "0XaY8eVU9eZO4OdIV6agx1"
  },
  {
    "STT": 11,
    "trackName": "Em của ngày hôm qua",
    "trackID": "6NX2B1nLrulC8XogMQzVaI"
  },
  {
    "STT": 12,
    "trackName": "Chúng ta của hiện tại",
    "trackID": "1J3SmWwlYAG68LGKr86MVH"
  },
  {
    "STT": 13,
    "trackName": "Chúng ta của tương lai",
    "trackID": "3OVMe3H6iAxbLF8iD2UYrw"
  },
  {
    "STT": 14,
    "trackName": "Muộn rồi mà sao còn",
    "trackID": "4vfhartd7HDWGJbdVIycEu"
  },
  {
    "STT": 15,
    "trackName": "Đừng làm trái tim anh đau",
    "trackID": "31VNCmwspR7nVJ6kruUuJt"
  },
  {
    "STT": 16,
    "trackName": "Anh ơi anh ở lại",
    "trackID": "0VBv6oyMgeEBOIysaSV9aE"
  },
  {
    "STT": 17,
    "trackName": "Ngổn ngang",
    "trackID": "0TOsszupHDNUvzadopZv3A"
  },
  {
    "STT": 18,
    "trackName": "Từng là",
    "trackID": "2xOhv7XudrBDtkID1jwsFE"
  },
  {
    "STT": 19,
    "trackName": "Tò te tí",
    "trackID": "0X28PqBpbQhWdi4usYw0w5"
  },
  {
    "STT": 20,
    "trackName": "Không phải dạng vừa đâu",
    "trackID": "0tyrLp1zVAjN3EV95EuOzQ"
  },
  {
    "STT": 21,
    "trackName": "Chạy ngay đi",
    "trackID": "3IIvAUPtTqcvB4YnEbYGVX"
  },
  {
    "STT": 22,
    "trackName": "Hãy trao cho anh",
    "trackID": "5x5Vx0Musv3LSUKzjY73mA"
  },
  {
    "STT": 23,
    "trackName": "Cơn mưa ngang qua",
    "trackID": "2By2GAKNBofnNK1H9Hpv4C"
  },
  {
    "STT": 24,
    "trackName": "Buông đôi tay nhau ra",
    "trackID": "3P3rcI48wwVEgxF5vPM6pG"
  },
  {
    "STT": 25,
    "trackName": "Có chắc yêu là đây",
    "trackID": "6aaNsCMWPBaUuJE1grH6Po"
  },
  {
    "STT": 26,
    "trackName": "Chăm hoa",
    "trackID": "40pWxpbXoBYGPCiofujjZ6"
  },
  {
    "STT": 27,
    "trackName": "Không yêu em thì yêu ai?",
    "trackID": "0e6fZkLArSmDIHnZcIua7t"
  },
  {
    "STT": 28,
    "trackName": "Vì anh đâu có biết",
    "trackID": "6VXVYATpQXEIoZ97NnWCmn"
  },
  {
    "STT": 29,
    "trackName": "Không thể say",
    "trackID": "1K0HQ30Wc11okzlcnFA7Ub"
  },
  {
    "STT": 30,
    "trackName": "Nếu lúc đó",
    "trackID": "4exlWP8cokkWVCvyP3kg7c"
  },
  {
    "STT": 31,
    "trackName": "vaicaunoicokhiennguoithaydoi",
    "trackID": "5PLjpBivzvuaIIqqkQgnRK"
  },
  {
    "STT": 32,
    "trackName": "Anh đánh rơi người yêu này",
    "trackID": "5J90ah0ppUSev1uahqQiN6"
  },
  {
    "STT": 33,
    "trackName": "Trời dấu trời mang đi",
    "trackID": "4J3nQArMtsPbYxeBwbshqJ"
  },
  {
    "STT": 34,
    "trackName": "Lần cuối",
    "trackID": "6OTDFXmBxQHKO8oCfolLW0"
  },
  {
    "STT": 35,
    "trackName": "Thanh xuân",
    "trackID": "0X1XI3RiapnBmP1AzQHZ4Y"
  },
  {
    "STT": 36,
    "trackName": "2AM",
    "trackID": "26TX1oZbaDeKxfTYDclSAo"
  },
  {
    "STT": 37,
    "trackName": "Thằng điên",
    "trackID": "27Z9T0mSWHYWSj9SNOGvyt"
  },
  {
    "STT": 38,
    "trackName": "Đã lỡ yêu em nhiều",
    "trackID": "3J3nv18iIrOhca1ZWNeuyW"
  },
  {
    "STT": 39,
    "trackName": "Đi về nhà",
    "trackID": "7LVrrX8pkzI9fMF88nGabt"
  },
  {
    "STT": 40,
    "trackName": "Vì yêu cứ đâm đầu",
    "trackID": "02Jf3KszL1FB1kG6CILEWE"
  },
  {
    "STT": 41,
    "trackName": "Bâng khuâng",
    "trackID": "2gaAcgDNzxHMgYO5SmsY0I"
  },
  {
    "STT": 42,
    "trackName": "Chuyện đôi ta",
    "trackID": "4CUvVaAYuXtvYURLFz7EIL"
  },
  {
    "STT": 43,
    "trackName": "Sinh ra đã là thứ đối lập nhau",
    "trackID": "5BTzf3doGTigDIYUFtbkI9"
  },
  {
    "STT": 44,
    "trackName": "Mơ",
    "trackID": "2a5hng9yXtbjtTVVm9UviC"
  },
  {
    "STT": 45,
    "trackName": "Yêu xa",
    "trackID": "5v6gg7ccWVfydmiq1h1hKT"
  },
  {
    "STT": 46,
    "trackName": "Vết mưa",
    "trackID": "5cn5oHiXJTLiuthgbgfkMh"
  },
  {
    "STT": 47,
    "trackName": "Từng quen",
    "trackID": "4qYfRfSxsmhJ1WMaywtLyI"
  },
  {
    "STT": 48,
    "trackName": "Thích em hơi nhiều",
    "trackID": "45Mswno1F7FoZkcmQkp7fi"
  },
  {
    "STT": 49,
    "trackName": "Phóng đổ tim em",
    "trackID": "2kauMp3YNHXULGXyJh4321"
  },
  {
    "STT": 50,
    "trackName": "Ngày mai em đi",
    "trackID": "0ZP4bO2ywAv44HiEzzHaq5"
  },
  {
    "STT": 51,
    "trackName": "Đi để trở về",
    "trackID": "2qc4FFBylFT5YhvMJMX50R"
  },
  {
    "STT": 52,
    "trackName": "Tháng năm",
    "trackID": "0SmQ0UWeiHKQtxUej4Rem6"
  },
  {
    "STT": 53,
    "trackName": "Nếu ngày ấy",
    "trackID": "20jc2qrUesWnyDYnWq0XW8"
  },
  {
    "STT": 54,
    "trackName": "Giá như",
    "trackID": "6M5i3bQgvMdocsblgh9u9o"
  },
  {
    "STT": 55,
    "trackName": "Anh đã quen với cô đơn",
    "trackID": "39KWnPNEvbXt423CzjvBfA"
  },
  {
    "STT": 56,
    "trackName": "Đưa em về nhà",
    "trackID": "5LQpQ6SDeaz6SIkR0lvsoC"
  },
  {
    "STT": 57,
    "trackName": "dự báo thời tiết hôm nay có mưa",
    "trackID": "55g3lCW3zg2slyWGXz7Qvv"
  },
  {
    "STT": 58,
    "trackName": "tình yêu chậm trễ",
    "trackID": "6jcLKVmEKAQIXIVHJZ8vzS"
  },
  {
    "STT": 59,
    "trackName": "Có hẹn với thanh xuân",
    "trackID": "2qWP5ZarXRsdmxzz3L3BtP"
  },
  {
    "STT": 60,
    "trackName": "lời tạm biệt chưa nói",
    "trackID": "3AejRjgBsFV4HWHjJmmEP7"
  },
  {
    "STT": 61,
    "trackName": "An thần",
    "trackID": "5T6j0rfpCDBzAxC8Fpd0N7"
  },
  {
    "STT": 62,
    "trackName": "Có em",
    "trackID": "1S5fmsEoOceqMWpinK4Kaa"
  },
  {
    "STT": 63,
    "trackName": "Suýt nữa thì",
    "trackID": "1GJ3suxtUVaguVQRemw6Zp"
  },
  {
    "STT": 64,
    "trackName": "Chờ đợi có đáng sợ",
    "trackID": "4h3K653rm69JYWpO4du2BJ"
  },
  {
    "STT": 65,
    "trackName": "1 Phút",
    "trackID": "79bSb2Ilugozn6VygdplEZ"
  },
  {
    "STT": 66,
    "trackName": "Lối nhỏ",
    "trackID": "25edeHHueINMguqu9emCyV"
  },
  {
    "STT": 67,
    "trackName": "Nấu ăn cho em",
    "trackID": "7td8DTWoGC9u9db37mGHX6"
  },
  {
    "STT": 68,
    "trackName": "Anh đếch cần gì nhiều ngoài em",
    "trackID": "5ppEcbmLECxrMYgDxwIJaP"
  },
  {
    "STT": 69,
    "trackName": "Bài này chill phết",
    "trackID": "2nR51wakN5K3AJENqGaNg9"
  },
  {
    "STT": 70,
    "trackName": "Nàng thơ",
    "trackID": "1w3eUC89GPspKpi62tPwjt"
  },
  {
    "STT": 71,
    "trackName": "Đoạn kết mới",
    "trackID": "72YmbRPOa2DZKe4HzdFG9B"
  },
  {
    "STT": 72,
    "trackName": "Khi em lớn",
    "trackID": "5nD5PVXUkIpv0WcwfNFrgS"
  },
  {
    "STT": 73,
    "trackName": "Yếu đuổi",
    "trackID": "6ofqi64OnweM4Ohe1pYMO3"
  },
  {
    "STT": 74,
    "trackName": "Thấy chưa",
    "trackID": "4r7hIDwLsasMfj6nk2Wrib"
  },
  {
    "STT": 75,
    "trackName": "để quên",
    "trackID": "4rPrBNnDgdZpS5gosHv0yr"
  },
  {
    "STT": 76,
    "trackName": "Em dạo này",
    "trackID": "3r0ITWT6gqPHhVjwRsMu5d"
  },
  {
    "STT": 77,
    "trackName": "Mất tích",
    "trackID": "1eXc2ZMStMsQ5cuUrFCnlO"
  },
  {
    "STT": 78,
    "trackName": "Đá tan",
    "trackID": "6Wi18yv3aoO0ZF4uulguof"
  },
  {
    "STT": 79,
    "trackName": "Cho tôi lang thang",
    "trackID": "2zRzmGerfTxc2epZHgaTdh"
  },
  {
    "STT": 80,
    "trackName": "Trước khi em tồn tại",
    "trackID": "1yo967mk7CpjvruNxBecOY"
  },
  {
    "STT": 81,
    "trackName": "Making my way",
    "trackID": "4w1lzcaoZ1IC2K5TwjalRP"
  },
  {
    "STT": 82,
    "trackName": "Khuôn mặt đáng thương",
    "trackID": "6Ymfomc8oUF5vNy73Xjh10"
  },
  {
    "STT": 83,
    "trackName": "Như ngày hôm qua",
    "trackID": "0tPBIwb0p5mozyF6GZVTUG"
  },
  {
    "STT": 84,
    "trackName": "Một năm mới bình an",
    "trackID": "7ESH2ntyD5Bb1XckoJU554"
  },
  {
    "STT": 85,
    "trackName": "Nắng ấm xa dần",
    "trackID": "4SqE2XLtd1AfppGm2xlkf4"
  },
  {
    "STT": 86,
    "trackName": "Chắc ai đó sẽ về",
    "trackID": "527UV7H9SbnmTVkxBVg56X"
  },
  {
    "STT": 87,
    "trackName": "Tiến lên Việt Nam ơi",
    "trackID": "4Nudo7D6XMAwTsaY39TBpJ"
  },
  {
    "STT": 88,
    "trackName": "Ấn nút nhớ thả giấc mơ",
    "trackID": "7x3LYoKxGAtu4hjSkZdxj4"
  },
  {
    "STT": 89,
    "trackName": "Sóng gió",
    "trackID": "1Q8bQhEDEdQQgOgYtirRFN"
  },
  {
    "STT": 90,
    "trackName": "Bạc phận",
    "trackID": "1TScXQviaO6UlkBrpeZDeU"
  },
  {
    "STT": 91,
    "trackName": "Về bên anh",
    "trackID": "4VNoJNnB1jJgKYEAgtptBU"
  },
  {
    "STT": 92,
    "trackName": "Sao em vô tình",
    "trackID": "035dtfdt42ZFgRsBP7qNxr"
  },
  {
    "STT": 93,
    "trackName": "Hồng nhan",
    "trackID": "1g7Udo4eoeJ5Qmk8zUGciW"
  },
  {
    "STT": 94,
    "trackName": "Em gì ơi",
    "trackID": "4rIUb0tgGGbofgjXGle6if"
  },
  {
    "STT": 95,
    "trackName": "Hoa vô sắc",
    "trackID": "2l5XXgFKuIJwn28zZl6Ud8"
  },
  {
    "STT": 96,
    "trackName": "Có ai thương em như anh",
    "trackID": "7AD5F85waSb3yZxZxEXhJM"
  },
  {
    "STT": 97,
    "trackName": "Thức giấc",
    "trackID": "6manOmf9nyeOVP3bBO6Z23"
  },
  {
    "STT": 98,
    "trackName": "Ngày đầu sau chia tay",
    "trackID": "6xKs4CnVadRzdNZ48vhT27"
  },
  {
    "STT": 99,
    "trackName": "Ngày đẹp trời để nói chia tay",
    "trackID": "3Alwi53Ahc2GwHgvel42b2"
  },
  {
    "STT": 100,
    "trackName": "Exit Sign",
    "trackID": "4nXrVH5xwN1w6TpmP7uu8n"
  }
]

downloadMusic(trackList)

