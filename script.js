const btn  = document.getElementById('btn')
const input = document.getElementById('search-input');
var movie_cards = document.getElementById('movie-cards');


btn.addEventListener('click',async function(){
   let mov=input.value;
   let api= await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=8c6c6942&s=${mov}`);
   let result = await api.json();
   showMovies(result.Search)
})

function showMovies(pictures){
   movie_cards.innerHTML="";
   pictures.forEach(async function(movie) {
      let api=await fetch(`https://www.omdbapi.com/?&apikey=8c6c6942&i=${movie.imdbID}`);
      let response=await api.json();
      movie_display(response);
   });
}

function movie_display(movie){
   const movie_elm=document.createElement("div");
   movie_elm.classList.add("movie-card");
   movie_elm.innerHTML=`

         <div class="cards">
            <img src="${movie.Poster}" alt="poster" width="300px" height="300px"/>
            <br>
            <div class="movie-description">
               <span class="movie-title"><b>Title:</b>${movie.Title}</span>
               <br>
               <span class="movie-title"><b>Released Date:</b>${movie.Released}</span>
               <br>
               <span class="movie-title"><b>Director:</b>${movie.Director}</span>
               <br>
               <span class="movie-title"><b>Type:</b>${movie.Type}</span>
               <br>
               <span class="movie-title"><b>Genre:</b>${movie.Genre}</span>
               <br>
               <span class="movie-title"><b>Rating:</b>${movie.imdbRating}</span> 
               <br>
            </div>   
         </div>

   `;  
   movie_cards.appendChild(movie_elm);
}
