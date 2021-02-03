import { connect } from "react-redux";
import MemeFeed from "./memefeed";


const mSTP = (state,ownProps) => {
    return {
        allMemes: state.entities.memes,
        // display is the array of memes to render 
        display: ownProps.params.match.display
    }
}

const mDTp = dispatch => {
    return {

    }
}

export default connect(mSTP,mDTp)(MemeFeed)