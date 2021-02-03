import React from "react";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allMemes: [],
      page: 0,
    };

    this.handleFeature = this.handleFeature.bind(this);
    this.handleAnimals = this.handleAnimals.bind(this);
    this.handleApp = this.handleApp.bind(this);
    this.handleAnime = this.handleAnime.bind(this);
    this.handleGaming = this.handleGaming.bind(this);
    this.handleTv = this.handleTv.bind(this);
    this.handleMovies = this.handleMovies.bind(this);
    this.handlePolitics = this.handlePolitics.bind(this);
    this.handleSports = this.handleSports.bind(this);
    this.handleInternet = this.handleInternet.bind(this);

    this.handleClick = this.handleClick.bind(this);
  }

  handleFeature(e) {
    e.preventDefault();
    this.setState({ page: 0 });
  }
  handleApp(e) {
    e.preventDefault();
    this.setState({ page: 1 });
  }
  handleAnimals(e) {
    e.preventDefault();
    this.setState({ page: 2 });
  }
  handleAnime(e) {
    e.preventDefault();
    this.setState({ page: 3 });
  }
  handleGaming(e) {
    e.preventDefault();
    this.setState({ page: 4 });
  }
  handleTv(e) {
    e.preventDefault();
    this.setState({ page: 5 });
  }
  handleMovies(e) {
    e.preventDefault();
    this.setState({ page: 6 });
  }
  handlePolitics(e) {
    e.preventDefault();
    this.setState({ page: 7 });
  }
  handleSports(e) {
    e.preventDefault();
    this.setState({ page: 8 });
  }
  handleInternet(e) {
    e.preventDefault();
    this.setState({ page: 9 });
  }

  //   componentDidMount() {
  //     fetch("https://api.imgflip.com/get_memes")
  //       .then((response) => response.json())
  //       .then((response) => {
  //         const { memes } = response.data;
  //          ;
  //         this.setState({
  //           allMemes: memes,
  //         });
  //       });
  //   }

  componentDidMount() {
    // request to backend to return each tag with its specific array imgs of that tag
    // this.props.fetchTags()
    // this.props
  }

  handleClick(tag) {
    //   return e
    //     e.preventDefault();
    //    this.props.fetchTaggedMemes(tag);
    //   //passess array of tagged memes ids to memefeed
  }

  render() {
    const { tags, tagIds } = this.props;

    // tags object
    // let tagList = tagIds.map((tag, i) => {
    let tagList = [
      "anime",
      "animals",
      "sports",
      "internet",
      "appAcademy",
      "10-26",
    ].map((tag, i) => {
      return (
        <li key={i} onClick={this.handleClick(tag.id)}>
          {tag}
        </li>
      );
    });
    return (
      <div className="sidebar">
        <div className="feature-button" onClick={this.handleFeature}>
          <i className="fas fa-laugh-squint"></i>
          Feature
        </div>
        {tagList}
      </div>
    );
  }
}

export default SideBar;
