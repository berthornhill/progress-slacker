import React from 'react';


class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return (
            <div>
                <div className="aboutUsMain">
                    <div className="auHeader">Meet The Team</div>
                    <div className="creators">
                        <div className="aboutSingle1">
                            <div className="creator-pic">
                                <img src="./img/bert.jpeg" alt=""/>
                            </div>
                            <div className="creator-info">
                                <h2 className="creatorname">Bert Hill</h2>
                                <div className="pageLinks">
                                        <a href="https://github.com/berthornhill">
                                            <div className="github"></div>
                                        </a>
                                        <a href=" https://www.linkedin.com/in/bert-hill-0324b120/ ">
                                            <div className="linkedin"></div>
                                        </a>
                                        <a href="https://angel.co/u/bert-hill-2">
                                            <div className="angelList"></div>
                                        </a>
                                </div>
                            </div>
                        </div>
                        <div className="aboutSingle1">
                            <div className="creator-pic">
                                <img src="./img/dan.png" alt=""/>
                            </div>
                            <div className="creator-info">
                                <h2 className="creatorname">Daniel Ahn</h2>
                                <div className="pageLinks">
                                    <a href="https://github.com/iamdanahn">
                                        <div className="github"></div>
                                    </a>                                                   
                                    <a href="https://www.linkedin.com/in/iamdanahn/">
                                        <div className="linkedin"></div>
                                    </a>                              
                                    <a href="https://angel.co/u/daniel-ahn-1">
                                        <div className="angelList"></div>
                                    </a>                             
                                </div>
                            </div>
                        </div>
                        <div className="aboutSingle">
                            <div className="creator-pic">
                                <img src="./img/paul.jpg" alt=""/>
                            </div>
                            <div className="creator-info">
                                <h2 className="creatorname">Paul Stonebraker</h2>
                                <div className="pageLinks">                               
                                    <a href="https://github.com/wpstonebraker">
                                        <div className="github"></div>
                                    </a>                                                      
                                    <a href="https://www.linkedin.com/in/paul-stonebraker-a8b034207/">
                                        <div className="linkedin"></div>
                                    </a>                    
                                    <a href="https://angel.co/u/paul-stonebraker">
                                        <div className="angelList"></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="aboutSingle">
                            <div className="creator-pic">
                                <img src="./img/mike.JPG" alt=""/>
                            </div>
                            <div className="creator-info">
                                <h2 className="creatorname">Mike Criollo</h2>
                                <div className="pageLinks">           
                                    <a href="https://github.com/mkcriollo">
                                        <div className="github"></div>
                                    </a>                                  
                                    <a href="https://www.linkedin.com/in/mike-criollo-b38377206/">
                                        <div className="linkedin"></div>
                                    </a>                  
                                    <a href="https://angel.co/u/mike-criollo">
                                        <div className="angelList"></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default AboutUs;