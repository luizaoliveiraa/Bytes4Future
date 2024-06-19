import { TopArtists } from "../top100/topThings";

export function ArtistPage100 ({navigateTo}) {
  return (
    <div className="top-artist">
      <TopArtists navigateTo={navigateTo}/>
    </div>
  );
}
