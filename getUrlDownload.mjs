export async function getUrlDonwload(idSpotify) {
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

// const link = await getUrlDonwload("5rSAUmbOg4giDrM29vUyHe");
// console.log(link);



