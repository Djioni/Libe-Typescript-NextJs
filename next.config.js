// /**
//  * @type {import('next').NextConfig}
//  */

// import {PHASE_DEVELOPMENT_SERVER} from 'next/constants';
// //  module.exports = {
// //     /* config options here */
// //     images: {
// //       domains: ['images.vexels.com']
// //   },
// //     webpack(config) {
// //         config.module.rules.push({
// //           test: /\.svg$/,
// //           use: ["@svgr/webpack"]
// //         });

// //         return config;
// //       }

// //   }

// module.exports = (phase, {defaultConfig}) => {
//   if (phase === PHASE_DEVELOPMENT_SERVER) {
//     return {
//       env: {
//         mongodb_username: "djioni_db",
//         mongodb_password: "CKf0OKoYElE6vp05",
//         mongodb_clustername: "savvyexpensedb",
//         mongodb_database: "ciskoServices-dev",
//       },
//     };
//   }

//   return {
//     env: {
//       mongodb_username: "djioni_db",
//       mongodb_password: "CKf0OKoYElE6vp05",
//       mongodb_clustername: "savvyexpensedb",
//       mongodb_database: "ciskoServices-prod",
//     },
//   };
// };

//const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    trailingSlash: true,
    
}

module.exports = {
  /* config options here */
  images: {
    domains: [
      'images.vercels.com',
      'assets.vercels.com',
      'image.tmdb.org'

    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

// module.exports = {
//   exportPathMap: async function(
//     defaultPathMap,
//     { dev, dir, outDir, distDir, buildId }
//   ) {
//     return {
//       "/": { page: "/" },
//       "/Particuliers": { page: "/Particuliers" },
//       "/Professionnels": { page: "/Professionnels" },
//       "/About": { page: "/About" },
//       "/Contact": { page: "/Contact" },
      
//     };
//   }
// };




