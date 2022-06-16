const getQuotes = async (page = 1) => {
  try {
    const response = await fetch(`https://api.imgflip.com/get_memes`);

    const result = await response.json();

    console.log("tu", result);

    return result.data.memes;
  } catch (error) {
    console.log(error);
  }
};

let page = 1;
const contentDiv = document.getElementById("content");

const createCard = (author, meme) => {
  return `<div
 style="
    
   width: 400px;
   min-height: 100px;
   border: 1px solid black;
   margin: 10px auto;
   padding: 20px;
 "
>
<p style="
text-align: center;
">${author}</p>
 <img src="${meme}" style="width:400px">
   
 </img>
</div>`;
};

getQuotes().then((result) => {
  result.forEach((meme) => {
    console.log(contentDiv.innerHTML);
    contentDiv.innerHTML =
      contentDiv.innerHTML + createCard(meme.name, meme.url);
  });
  //   contentDiv.appendChild();
});
