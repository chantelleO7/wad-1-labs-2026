'use strict';

import logger from "../utils/logger.js";
import aboutStore from "../models/about-store.js";

const about = {
  createView(request, response) {
    const viewData = {
      title: "About the Playlist App",
      employees: aboutStore.getAppInfo()
    };
    logger.info(viewData)
    response.render("about", viewData);
  },
};

export default about;