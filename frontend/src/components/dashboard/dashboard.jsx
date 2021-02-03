// import React from "react";
// import FileUpload from "../file_upload/file_upload";

// class Dashboard extends React.Component {
//   render() {
//     return (
//       <div>
//         <FileUpload />
//         <h1>progress Slacker</h1>
//         <footer>Copyright &copy; H&BG 2021</footer>
//       </div>
//     );
//   }
// }
import React from "react";
import { Link } from "react-router-dom";
import MemeFeed from "../memefeed/memefeed_container";
import SideBar from "../sidebar/sidebar";

class DashBoard extends React.Component {
  render() {
    return (
      <div className="main-page">
        {/*  */}
        <div className="main-content">
          <SideBar />
          <MemeFeed />
        </div>
      </div>
    );
  }
}

export default DashBoard;

// if (this.state.page === 1) {
//   return (
//     <div className="main-page">

//       <div className="main-content">
//         <div className="sidebar">
//           <div className="feature-button" onClick={this.handleFeature}>
//             <i class="fas fa-laugh-squint"></i>
//             Feature
//           </div>
//           <li onClick={this.handleApp}>App Academy</li>
//           <li onClick={this.handleAnimals}>Animals</li>
//           <li onClick={this.handleAnime}>Anime</li>
//           <li onClick={this.handleGaming}>Gaming</li>
//           <li onClick={this.handleTv}>Tv Shows</li>
//           <li onClick={this.handleMovies}>Movies</li>
//           <li onClick={this.handlePolitics}>Politcs</li>
//           <li onClick={this.handleSports}>Sports</li>
//           <li onClick={this.handleInternet}>Internet</li>
//         </div>
//         <div className="meme-content">
//           <h1 className="catalog-header">App Academy Memes</h1>
//           {featureMemes}
//         </div>
//       </div>
//     </div>
//   );
// }

// if (this.state.page === 2) {
//   return (
//     <div className="main-page">

//       <div className="main-content">
//         <div className="sidebar">
//           <div className="feature-button" onClick={this.handleFeature}>
//             <i class="fas fa-laugh-squint"></i>
//             Feature
//           </div>
//           <li onClick={this.handleApp}>App Academy</li>
//           <li onClick={this.handleAnimals}>Animals</li>
//           <li onClick={this.handleAnime}>Anime</li>
//           <li onClick={this.handleGaming}>Gaming</li>
//           <li onClick={this.handleTv}>Tv Shows</li>
//           <li onClick={this.handleMovies}>Movies</li>
//           <li onClick={this.handlePolitics}>Politcs</li>
//           <li onClick={this.handleSports}>Sports</li>
//           <li onClick={this.handleInternet}>Internet</li>
//         </div>
//         <div className="meme-content">
//           <h1 className="catalog-header">Animals Memes</h1>
//           {featureMemes}
//         </div>
//       </div>
//     </div>
//   );
// }

// if (this.state.page === 3) {
//   return (
//     <div className="main-page">

//       <div className="main-content">
//         <div className="sidebar">
//           <div className="feature-button" onClick={this.handleFeature}>
//             <i class="fas fa-laugh-squint"></i>
//             Feature
//           </div>
//           <li onClick={this.handleApp}>App Academy</li>
//           <li onClick={this.handleAnimals}>Animals</li>
//           <li onClick={this.handleAnime}>Anime</li>
//           <li onClick={this.handleGaming}>Gaming</li>
//           <li onClick={this.handleTv}>Tv Shows</li>
//           <li onClick={this.handleMovies}>Movies</li>
//           <li onClick={this.handlePolitics}>Politcs</li>
//           <li onClick={this.handleSports}>Sports</li>
//           <li onClick={this.handleInternet}>Internet</li>
//         </div>
//         <div className="meme-content">
//           <h1 className="catalog-header">Anime Memes</h1>
//           {featureMemes}
//         </div>
//       </div>
//     </div>
//   );
// }

// if (this.state.page === 4) {
//   return (
//     <div className="main-page">

//       <div className="main-content">
//         <div className="sidebar">
//           <div className="feature-button" onClick={this.handleFeature}>
//             <i class="fas fa-laugh-squint"></i>
//             Feature
//           </div>
//           <li onClick={this.handleApp}>App Academy</li>
//           <li onClick={this.handleAnimals}>Animals</li>
//           <li onClick={this.handleAnime}>Anime</li>
//           <li onClick={this.handleGaming}>Gaming</li>
//           <li onClick={this.handleTv}>Tv Shows</li>
//           <li onClick={this.handleMovies}>Movies</li>
//           <li onClick={this.handlePolitics}>Politcs</li>
//           <li onClick={this.handleSports}>Sports</li>
//           <li onClick={this.handleInternet}>Internet</li>
//         </div>
//         <div className="meme-content">
//           <h1 className="catalog-header">Gaming Memes</h1>
//           {featureMemes}
//         </div>
//       </div>
//     </div>
//   );
// }

// if (this.state.page === 5) {
//   return (
//     <div className="main-page">

//       <div className="main-content">
//         <div className="sidebar">
//           <div className="feature-button" onClick={this.handleFeature}>
//             <i class="fas fa-laugh-squint"></i>
//             Feature
//           </div>
//           <li onClick={this.handleApp}>App Academy</li>
//           <li onClick={this.handleAnimals}>Animals</li>
//           <li onClick={this.handleAnime}>Anime</li>
//           <li onClick={this.handleGaming}>Gaming</li>
//           <li onClick={this.handleTv}>Tv Shows</li>
//           <li onClick={this.handleMovies}>Movies</li>
//           <li onClick={this.handlePolitics}>Politcs</li>
//           <li onClick={this.handleSports}>Sports</li>
//           <li onClick={this.handleInternet}>Internet</li>
//         </div>
//         <div className="meme-content">
//           <h1 className="catalog-header">Tv Shows Memes</h1>
//           {featureMemes}
//         </div>
//       </div>
//     </div>
//   );
// }

// if (this.state.page === 6) {
//   return (
//     <div className="main-page">

//       <div className="main-content">
//         <div className="sidebar">
//           <div className="feature-button" onClick={this.handleFeature}>
//             <i class="fas fa-laugh-squint"></i>
//             Feature
//           </div>
//           <li onClick={this.handleApp}>App Academy</li>
//           <li onClick={this.handleAnimals}>Animals</li>
//           <li onClick={this.handleAnime}>Anime</li>
//           <li onClick={this.handleGaming}>Gaming</li>
//           <li onClick={this.handleTv}>Tv Shows</li>
//           <li onClick={this.handleMovies}>Movies</li>
//           <li onClick={this.handlePolitics}>Politcs</li>
//           <li onClick={this.handleSports}>Sports</li>
//           <li onClick={this.handleInternet}>Internet</li>
//         </div>
//         <div className="meme-content">
//           <h1 className="catalog-header">Movies Memes</h1>
//           {featureMemes}
//         </div>
//       </div>
//     </div>
//   );
// }

// if (this.state.page === 7) {
//   return (
//     <div className="main-page">

//       <div className="main-content">
//         <div className="sidebar">
//           <div className="feature-button" onClick={this.handleFeature}>
//             <i class="fas fa-laugh-squint"></i>
//             Feature
//           </div>
//           <li onClick={this.handleApp}>App Academy</li>
//           <li onClick={this.handleAnimals}>Animals</li>
//           <li onClick={this.handleAnime}>Anime</li>
//           <li onClick={this.handleGaming}>Gaming</li>
//           <li onClick={this.handleTv}>Tv Shows</li>
//           <li onClick={this.handleMovies}>Movies</li>
//           <li onClick={this.handlePolitics}>Politcs</li>
//           <li onClick={this.handleSports}>Sports</li>
//           <li onClick={this.handleInternet}>Internet</li>
//         </div>
//         <div className="meme-content">
//           <h1 className="catalog-header">Politcs Memes</h1>
//           {featureMemes}
//         </div>
//       </div>
//     </div>
//   );
// }

// if (this.state.page === 8) {
//   return (
//     <div className="main-page">

//       <div className="main-content">
//         <div className="sidebar">
//           <div className="feature-button" onClick={this.handleFeature}>
//             <i class="fas fa-laugh-squint"></i>
//             Feature
//           </div>
//           <li onClick={this.handleApp}>App Academy</li>
//           <li onClick={this.handleAnimals}>Animals</li>
//           <li onClick={this.handleAnime}>Anime</li>
//           <li onClick={this.handleGaming}>Gaming</li>
//           <li onClick={this.handleTv}>Tv Shows</li>
//           <li onClick={this.handleMovies}>Movies</li>
//           <li onClick={this.handlePolitics}>Politcs</li>
//           <li onClick={this.handleSports}>Sports</li>
//           <li onClick={this.handleInternet}>Internet</li>
//         </div>
//         <div className="meme-content">
//           <h1 className="catalog-header">Sports Memes</h1>
//           {featureMemes}
//         </div>
//       </div>
//     </div>
//   );
// }

// if (this.state.page === 9) {
//   return (
//     <div className="main-page">

//       <div className="main-content">
//         <div className="sidebar">
//           <div className="feature-button" onClick={this.handleFeature}>
//             <i class="fas fa-laugh-squint"></i>
//             Feature
//           </div>
//           <li onClick={this.handleApp}>App Academy</li>
//           <li onClick={this.handleAnimals}>Animals</li>
//           <li onClick={this.handleAnime}>Anime</li>
//           <li onClick={this.handleGaming}>Gaming</li>
//           <li onClick={this.handleTv}>Tv Shows</li>
//           <li onClick={this.handleMovies}>Movies</li>
//           <li onClick={this.handlePolitics}>Politcs</li>
//           <li onClick={this.handleSports}>Sports</li>
//           <li onClick={this.handleInternet}>Internet</li>
//         </div>
//         <div className="meme-content">
//           <h1 className="catalog-header">Internet Memes</h1>
//           {featureMemes}
//         </div>
//       </div>
//     </div>
//   );
// }
// }
// }

// export default DashBoard;
