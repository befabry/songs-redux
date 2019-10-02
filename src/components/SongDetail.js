import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ selectedSong }) => {
    if (!selectedSong) {
        return <div>Select a song !</div>;
    }
    return (
        <React.Fragment>
            <h3>Details for:</h3>
            <p>
                Title: {selectedSong.title}
                <br />
                Duration: {selectedSong.duration}
            </p>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
