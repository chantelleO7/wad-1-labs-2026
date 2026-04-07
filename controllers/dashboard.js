'use strict';

import logger from "../utils/logger.js";
import playlistStore from "../models/playlist-store.js";
import { v4 as uuidv4 } from 'uuid';

const dashboard = {
  createView(request, response) {
    logger.info("Dashboard page loading!");

    const searchTerm = request.query.searchTerm || "";

    const playlists = searchTerm
      ? playlistStore.searchPlaylist(searchTerm)
      : playlistStore.getAllPlaylists();

    const viewData = {
      title: "Playlist App Dashboard",
      playlists:  playlists,
      search: searchTerm
    };

    logger.debug(viewData.playlists);

    response.render("dashboard", viewData);
},
  addPlaylist(request, response) {
    const timestamp = new Date();
    
    const newPlaylist = {
      id: uuidv4(),
      title: request.body.title,
      rating: Number(request.body.rating),
	    date: timestamp,
      songs: []
    };
    playlistStore.addPlaylist(newPlaylist);
    response.redirect('/dashboard');
  },
};

export default dashboard;