import React from "react";
import PropTypes from "prop-types";
import "./albumlist.css";
import Album from "../Album/album";

function AlbumList(props) {
  const { albumList } = props;
  return (
    <ul className="album-list">
      {albumList.map((album) => (
        <li key={album.id}>
          <Album album={album} />
        </li>
      ))}
    </ul>
  );
}

AlbumList.propTypes = {
  albumList: PropTypes.array.isRequired,
};

export default AlbumList;
