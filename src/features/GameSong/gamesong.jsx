import React from "react";
import AlbumList from "./components/AlbumList/albumlist";

function GameSong(props) {
  const albumList = [
    {
      id: 1,
      name: "KDA Popstar",
      thumnailUrl:
        "https://avatar-ex-swe.nixcdn.com/song/2018/11/04/2/0/7/7/1541268104862_640.jpg",
    },
    {
      id: 2,
      name: "KDA All out",
      thumnailUrl: "https://pbs.twimg.com/media/EmE_9AoU4AAIVsT.jpg",
    },
    {
      id: 3,
      name: "Pentakill",
      thumnailUrl: "https://pbs.twimg.com/media/E9e_heEUcAkQUxb.jpg:large",
    },
  ];
  return (
    <div>
      <h2>Có thể bạn sẽ thích đấy</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

GameSong.propTypes = {};

export default GameSong;
