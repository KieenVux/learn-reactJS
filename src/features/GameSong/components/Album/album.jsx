import React from "react";
import PropTypes from "prop-types";
import "./album.css";

function Album(props) {
  const { album } = props;
  return (
    <div className="album">
      <div className="album_thumnail">
        <img src={album.thumnailUrl} alt={"Bài hát" + album.name} />
      </div>
      <p className="album_name">{album.name}</p>
    </div>
  );
}

Album.propTypes = {
  album: PropTypes.object.isRequired,
};

export default Album;
