'use strict';

import logger from "../utils/logger.js";
import aboutStore from "../models/about-store.js";

const start = {
  createView(request, response) {
    logger.info("Start page loading!");
    
    const createView = {
      title: "Welcome to the Playlist app!",
      info: aboutStore.getAppInfo()
    };
  
    response.render('start', createView);   
  },
};

export default start;