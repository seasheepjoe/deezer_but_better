import { StyleSheet } from "react-native";
import { Metrics, AppStyles } from "../../Themes";

const COVER_WIDTH = Metrics.screenHeight * 0.075;

export default StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 7.5,
  },

  trackInfoContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: COVER_WIDTH / 5,
    maxWidth: "80%",
  },

  trackCoverContainer: {
    width: COVER_WIDTH,
    height: COVER_WIDTH,
  },

  trackCover: {
    width: "100%",
    height: "100%",
    borderRadius: 4,
  },

  trackArtistName: {
    color: "#928e9b",
    fontSize: 12,
  },

  trackAlbumName: {
    color: "#c1c0c7",
  },

  trackTitle: {
    color: "#36323f",
    fontSize: 15,
  },
});