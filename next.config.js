const {PHASE_DEVELOPMENT_SERVER} = require('next/constants');

module.exports = (phase, {defaultConfig}) => {
    const commonConfig = {
        generateBuildId: async () => {
            // For example get the latest git commit hash here
            return 'my-build-id';
        },
        pageExtensions: ['jsx', 'js'],
        distDir: 'build',
        onDemandEntries: {
            // period (in ms) where the server will keep pages in the buffer
            maxInactiveAge: 25 * 1000,
            // number of pages that should be kept simultaneously without being disposed
            pagesBufferLength: 2,
        },
        exportPathMap: async function (defaultPathMap) {
            return {
              '/': { page: '/' },
              '/blog': { page: '/blog' }
            }
          }
    };

    if(phase === PHASE_DEVELOPMENT_SERVER) {
        return Object.assign( { },
                commonConfig,
                {
                    /* development only config options here */
                });
    }

    return Object.assign( { },
            commonConfig,
            {
                /* config options for all phases except development here */
            });
}
