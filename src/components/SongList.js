import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends React.Component {
    renderList() {
        const { songs, selectSong } = this.props;

        return songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        );
    }
}

//call every time we touch our state
//convention name
const mapStateToProps = (state) => {
    return { songs: state.songs };
};

//ES2015 Synthax :
//{ selectSong: selectSong } = { selectSong }
//call our action creator, automatically take the action that is returned, and automatically call the dispatch
export default connect(
    mapStateToProps,
    { selectSong }
)(SongList);
