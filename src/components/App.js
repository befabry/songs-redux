import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column height wide">
                    <SongList />
                </div>
                <div className="column height wide">
                    <SongDetail />
                </div>
            </div>
        </div>
    );
};

export default App;
