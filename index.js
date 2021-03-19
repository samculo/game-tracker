const axios = require('axios');

class stats {
    constructor(api_key) {
        this._key = api_key;
    }

    /**
     * @param {String}
     * @returns {JSON}
     */
    async csgo(platform, platformUserIdentifier) {
        try {
            const response = await axios.get(`https://public-api.tracker.gg/v2/csgo/standard/profile/${platform}/${platformUserIdentifier}`, {
                headers: {
                    'content-type': 'application/json',
                    'TRN-Api-Key': this._key
                }
            })
            return { api_status_code: response.status, user: response.data.data.platformInfo, stats: response.data.data.segments[0].stats };
        } catch (error) {
            return { api_error_code: error.response.status };
        } 
    }
    async csgoSegments(platform, platformUserIdentifier, segmentType) {
        try {
            const response = await axios.get(`https://public-api.tracker.gg/v2/csgo/standard/profile/${platform}/${platformUserIdentifier}/segments/${segmentType}`, {
                headers: {
                    'content-type': 'application/json',
                    'TRN-Api-Key': this._key
                }
            })
            return { api_status_code: response.status, stats: response.data.data };
        } catch (error) {
            return { api_error_code: error.response.status };
        } 
    }
    async apexLegends(platform, platformUserIdentifier) {
        try {
            const response = await axios.get(`https://public-api.tracker.gg/v2/apex/standard/profile/${platform}/${platformUserIdentifier}`, {
                headers: {
                    'content-type': 'application/json',
                    'TRN-Api-Key': this._key
                }
            })
            return { api_status_code: response.status, user: response.data.data.platformInfo, stats: response.data.data.segments[0].stats };
        } catch (error) {
            return { api_error_code: error.response.status };
        }
    }
    async overwatch(platform, platformUserIdentifier) {
        try {
            const response = await axios.get(`https://public-api.tracker.gg/v2/overwatch/standard/profile/${platform}/${platformUserIdentifier}`, {
                headers: {
                    'content-type': 'application/json',
                    'TRN-Api-Key': this._key
                }
            })
            return { api_status_code: response.status, user: response.data.data.platformInfo, stats: response.data.data.segments[0].stats };
        } catch (error) {
            return { api_error_code: error.response.status };
        }
    }
    async fortnite(platform, platformUserIdentifier) {
        try {
            const response = await axios.get(`https://api.fortnitetracker.com/v1/profile/${platform}/${platformUserIdentifier}`, {
                headers: {
                    'content-type': 'application/json',
                    'TRN-Api-Key': this._key
                }
            })
            return { api_status_code: response.status, stats: { life_time: response.data.lifeTimeStats, rececent_matches: response.data.recentMatches } };
        } catch (error) {
            return { api_error_code: error.response.status };
        }
    }
}

module.exports = stats;