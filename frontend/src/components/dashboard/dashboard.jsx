import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../navbar/navbar_conatiner.js";

class DashBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            allMemes: [],
            page: 0
         }
        // this.handleChange = this.handleChange.bind(this)

        this.handleFeature = this.handleFeature.bind(this)
        this.handleAnimals = this.handleAnimals.bind(this)
        this.handleApp = this.handleApp.bind(this)
        this.handleAnime = this.handleAnime.bind(this)
        this.handleGaming = this.handleGaming.bind(this)
        this.handleTv = this.handleTv.bind(this)
        this.handleMovies = this.handleMovies.bind(this)
        this.handlePolitics = this.handlePolitics.bind(this)
        this.handleSports = this.handleSports.bind(this)
        this.handleInternet = this.handleInternet.bind(this)

    }

    handleFeature(e){
        e.preventDefault()
        this.setState({page: 0})
    }
    handleApp(e){
        e.preventDefault()
        this.setState({page: 1})
    }
    handleAnimals(e){
        e.preventDefault()
        this.setState({page: 2})
    }
    handleAnime(e){
        e.preventDefault()
        this.setState({page: 3})
    }
    handleGaming(e){
        e.preventDefault()
        this.setState({page: 4})
    }
    handleTv(e){
        e.preventDefault()
        this.setState({page: 5})
    }
    handleMovies(e){
        e.preventDefault()
        this.setState({page: 6})
    }
    handlePolitics(e){
        e.preventDefault()
        this.setState({page: 7})
    }
    handleSports(e){
        e.preventDefault()
        this.setState({page: 8})
    }
    handleInternet(e){
        e.preventDefault()
        this.setState({page: 9})
    }

    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                debugger
                this.setState({
                    allMemes:memes
                })
            })
    }

    // componentWillReceiveProps(newState) {
    // this.setState({ memes: newState.memes });
    // }

    randomArr(arr) {
        for (var i = arr.length - 1; i > 0; i--) {
            let randomNum = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[randomNum]] = [arr[randomNum], arr[i]]
        }

        return arr;
    }



    render() { 
        const {allMemes} = this.state

        let boxCount = []
        

        const boxMemes = allMemes.map(meme  => {
            if(meme.box_count <= 2){
                boxCount.push(meme)
            }
        });
        

        let randomMemes = this.randomArr(allMemes)

        const featureMemes = boxCount.map((meme, i) => {
            return (
                <Link key={i} to={`/memes/${meme.id}`} className={"meme-box"}>
                    <img src={meme.url} className={"meme-meme"} />
                </Link>
            );
        });
        debugger
        if(this.state.page === 0){
        return ( 
            <div className="main-page">
                <Navbar />
                <div className="main-content">
                    <div className="sidebar">
                        <div className="feature-button" onClick={this.handleFeature}>
                            <i class="fas fa-laugh-squint"></i>
                            Feature</div>
                        <li onClick={this.handleApp}>App Academy</li>
                        <li onClick={this.handleAnimals}>Animals</li>
                        <li onClick={this.handleAnime}>Anime</li>
                        <li onClick={this.handleGaming}>Gaming</li>
                        <li onClick={this.handleTv}>Tv Shows</li>
                        <li onClick={this.handleMovies}>Movies</li>
                        <li onClick={this.handlePolitics}>Politcs</li>
                        <li onClick={this.handleSports}>Sports</li>
                        <li onClick={this.handleInternet}>Internet</li>
                    </div>
                    <div className="meme-content">
                        <h1 className='catalog-header'>Featured Memes</h1>
                        <br/>
                        {featureMemes}
                    </div>
                </div>
            </div>
         );
        } 


        if(this.state.page === 1){
        return ( 
            <div className="main-page">
                <Navbar />
                <div className="main-content">
                    <div className="sidebar">
                        <div className="feature-button" onClick={this.handleFeature}>
                            <i class="fas fa-laugh-squint"></i>
                            Feature</div>
                        <li onClick={this.handleApp}>App Academy</li>
                        <li onClick={this.handleAnimals}>Animals</li>
                        <li onClick={this.handleAnime}>Anime</li>
                        <li onClick={this.handleGaming}>Gaming</li>
                        <li onClick={this.handleTv}>Tv Shows</li>
                        <li onClick={this.handleMovies}>Movies</li>
                        <li onClick={this.handlePolitics}>Politcs</li>
                        <li onClick={this.handleSports}>Sports</li>
                        <li onClick={this.handleInternet}>Internet</li>
                    </div>
                    <div className="meme-content">
                        <h1 className='catalog-header'>App Academy Memes</h1>
                        {featureMemes}
                    </div>
                </div>
            </div>
         );
        } 

        if(this.state.page === 2){
        return ( 
            <div className="main-page">
                <Navbar />
                <div className="main-content">
                    <div className="sidebar">
                        <div className="feature-button" onClick={this.handleFeature}>
                            <i class="fas fa-laugh-squint"></i>
                            Feature</div>
                        <li onClick={this.handleApp}>App Academy</li>
                        <li onClick={this.handleAnimals}>Animals</li>
                        <li onClick={this.handleAnime}>Anime</li>
                        <li onClick={this.handleGaming}>Gaming</li>
                        <li onClick={this.handleTv}>Tv Shows</li>
                        <li onClick={this.handleMovies}>Movies</li>
                        <li onClick={this.handlePolitics}>Politcs</li>
                        <li onClick={this.handleSports}>Sports</li>
                        <li onClick={this.handleInternet}>Internet</li>
                    </div>
                    <div className="meme-content">
                        <h1 className='catalog-header'>Animals Memes</h1>
                        {featureMemes}
                    </div>
                </div>
            </div>
         );
        } 


        if(this.state.page === 3){
        return ( 
            <div className="main-page">
                <Navbar />
                <div className="main-content">
                    <div className="sidebar">
                        <div className="feature-button" onClick={this.handleFeature}>
                            <i class="fas fa-laugh-squint"></i>
                            Feature</div>
                        <li onClick={this.handleApp}>App Academy</li>
                        <li onClick={this.handleAnimals}>Animals</li>
                        <li onClick={this.handleAnime}>Anime</li>
                        <li onClick={this.handleGaming}>Gaming</li>
                        <li onClick={this.handleTv}>Tv Shows</li>
                        <li onClick={this.handleMovies}>Movies</li>
                        <li onClick={this.handlePolitics}>Politcs</li>
                        <li onClick={this.handleSports}>Sports</li>
                        <li onClick={this.handleInternet}>Internet</li>
                    </div>
                    <div className="meme-content">
                        <h1 className='catalog-header'>Anime Memes</h1>
                        {featureMemes}
                    </div>
                </div>
            </div>
         );
        } 


        if(this.state.page === 4){
        return ( 
            <div className="main-page">
                <Navbar />
                <div className="main-content">
                    <div className="sidebar">
                        <div className="feature-button" onClick={this.handleFeature}>
                            <i class="fas fa-laugh-squint"></i>
                            Feature</div>
                        <li onClick={this.handleApp}>App Academy</li>
                        <li onClick={this.handleAnimals}>Animals</li>
                        <li onClick={this.handleAnime}>Anime</li>
                        <li onClick={this.handleGaming}>Gaming</li>
                        <li onClick={this.handleTv}>Tv Shows</li>
                        <li onClick={this.handleMovies}>Movies</li>
                        <li onClick={this.handlePolitics}>Politcs</li>
                        <li onClick={this.handleSports}>Sports</li>
                        <li onClick={this.handleInternet}>Internet</li>
                    </div>
                    <div className="meme-content">
                        <h1 className='catalog-header'>Gaming Memes</h1>
                        {featureMemes}
                    </div>
                </div>
            </div>
         );
        } 


        if(this.state.page === 5){
        return ( 
            <div className="main-page">
                <Navbar />
                <div className="main-content">
                    <div className="sidebar">
                        <div className="feature-button" onClick={this.handleFeature}>
                            <i class="fas fa-laugh-squint"></i>
                            Feature</div>
                        <li onClick={this.handleApp}>App Academy</li>
                        <li onClick={this.handleAnimals}>Animals</li>
                        <li onClick={this.handleAnime}>Anime</li>
                        <li onClick={this.handleGaming}>Gaming</li>
                        <li onClick={this.handleTv}>Tv Shows</li>
                        <li onClick={this.handleMovies}>Movies</li>
                        <li onClick={this.handlePolitics}>Politcs</li>
                        <li onClick={this.handleSports}>Sports</li>
                        <li onClick={this.handleInternet}>Internet</li>
                    </div>
                    <div className="meme-content">
                        <h1 className='catalog-header'>Tv Shows Memes</h1>
                        {featureMemes}
                    </div>
                </div>
            </div>
         );
        } 


        if(this.state.page === 6){
        return ( 
            <div className="main-page">
                <Navbar />
                <div className="main-content">
                    <div className="sidebar">
                        <div className="feature-button" onClick={this.handleFeature}>
                            <i class="fas fa-laugh-squint"></i>
                            Feature</div>
                        <li onClick={this.handleApp}>App Academy</li>
                        <li onClick={this.handleAnimals}>Animals</li>
                        <li onClick={this.handleAnime}>Anime</li>
                        <li onClick={this.handleGaming}>Gaming</li>
                        <li onClick={this.handleTv}>Tv Shows</li>
                        <li onClick={this.handleMovies}>Movies</li>
                        <li onClick={this.handlePolitics}>Politcs</li>
                        <li onClick={this.handleSports}>Sports</li>
                        <li onClick={this.handleInternet}>Internet</li>
                    </div>
                    <div className="meme-content">
                        <h1 className='catalog-header'>Movies Memes</h1>
                        {featureMemes}
                    </div>
                </div>
            </div>
         );
        } 


        if(this.state.page === 7){
        return ( 
            <div className="main-page">
                <Navbar />
                <div className="main-content">
                    <div className="sidebar">
                        <div className="feature-button" onClick={this.handleFeature}>
                            <i class="fas fa-laugh-squint"></i>
                            Feature</div>
                        <li onClick={this.handleApp}>App Academy</li>
                        <li onClick={this.handleAnimals}>Animals</li>
                        <li onClick={this.handleAnime}>Anime</li>
                        <li onClick={this.handleGaming}>Gaming</li>
                        <li onClick={this.handleTv}>Tv Shows</li>
                        <li onClick={this.handleMovies}>Movies</li>
                        <li onClick={this.handlePolitics}>Politcs</li>
                        <li onClick={this.handleSports}>Sports</li>
                        <li onClick={this.handleInternet}>Internet</li>
                    </div>
                    <div className="meme-content">
                        <h1 className='catalog-header'>Politcs Memes</h1>
                        {featureMemes}
                    </div>
                </div>
            </div>
         );
        } 


        if(this.state.page === 8){
        return ( 
            <div className="main-page">
                <Navbar />
                <div className="main-content">
                    <div className="sidebar">
                        <div className="feature-button" onClick={this.handleFeature}>
                            <i class="fas fa-laugh-squint"></i>
                            Feature</div>
                        <li onClick={this.handleApp}>App Academy</li>
                        <li onClick={this.handleAnimals}>Animals</li>
                        <li onClick={this.handleAnime}>Anime</li>
                        <li onClick={this.handleGaming}>Gaming</li>
                        <li onClick={this.handleTv}>Tv Shows</li>
                        <li onClick={this.handleMovies}>Movies</li>
                        <li onClick={this.handlePolitics}>Politcs</li>
                        <li onClick={this.handleSports}>Sports</li>
                        <li onClick={this.handleInternet}>Internet</li>
                    </div>
                    <div className="meme-content">
                        <h1 className='catalog-header'>Sports Memes</h1>
                        {featureMemes}
                    </div>
                </div>
            </div>
         );
        } 


        if(this.state.page === 9){
        return ( 
            <div className="main-page">
                <Navbar />
                <div className="main-content">
                    <div className="sidebar">
                        <div className="feature-button" onClick={this.handleFeature}>
                            <i class="fas fa-laugh-squint"></i>
                            Feature</div>
                        <li onClick={this.handleApp}>App Academy</li>
                        <li onClick={this.handleAnimals}>Animals</li>
                        <li onClick={this.handleAnime}>Anime</li>
                        <li onClick={this.handleGaming}>Gaming</li>
                        <li onClick={this.handleTv}>Tv Shows</li>
                        <li onClick={this.handleMovies}>Movies</li>
                        <li onClick={this.handlePolitics}>Politcs</li>
                        <li onClick={this.handleSports}>Sports</li>
                        <li onClick={this.handleInternet}>Internet</li>
                    </div>
                    <div className="meme-content">
                        <h1 className='catalog-header'>Internet Memes</h1>
                        {featureMemes}
                    </div>
                </div>
            </div>
         );
        } 


        
    }
}
 
export default DashBoard;
