import React from "react";
export const adsConfig = {
  allowedRoutes: [
    "/"
  ],

  blockedPatterns: [
    /^\/[^/]+\/details$/,                 // /:matchId/details
    /^\/[^/]+\/ajouter-joueur-staff$/     // /:teamId/ajouter-joueur-staff
  ]
};