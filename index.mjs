import {getUrlDonwload} from './getUrlDownload.mjs'

document.querySelector('button').addEventListener('click', async ()=>{
    const id = document.querySelector('input').value;
    var link = await getUrlDonwload(id);
    console.log(link);
    link = 'https://www.facebook.com/'
    window.open(link, '_blank');
})

// const link = await getUrlDonwload("3ztP5O7dJSha2PG429eUCb")
// console.log(link);
