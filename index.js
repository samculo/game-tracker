const axios = require('axios');

class stats {

    /**
     * @param {String} api_key // Tracker Network key
    */

    constructor(api_key) {
        this._key = api_key;
    }

    /**
     * @param {String} platform // kbm, gamepad, touch
     * @param {String} platformUserIdentifier // nickname 
     * @returns {JSON}
    */

    async fortnite(platform, platformUserIdentifier) {
        try {
            const response = await axios.get(`https://api.fortnitetracker.com/v1/profile/${platform}/${platformUserIdentifier}`, {
                headers: {
                    'content-type': 'application/json',
                    'TRN-Api-Key': this._key
                }
            })
            return {
                api_status_code: response.status,
                stats: {
                    life_time: response.data.lifeTimeStats,
                    rececent_matches: response.data.recentMatches
                }
            }
        } catch (error) {
            return {
                api_error_code: error.response.status
            }
        }
    }

    /**
     * @param {String} platform // steam
     * @param {String} platformUserIdentifier // nickname 
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
            return { 
                api_status_code: response.status,
                user: response.data.data.platformInfo,
                stats: response.data.data.segments[0].stats
            }
        } catch (error) {
            return {
                api_error_code: error.response.status
            }
        } 
    }

    /**
     * @param {String} platform // steam
     * @param {String} platformUserIdentifier // nickname 
     * @param {String} segmentType // map, weapon
     * @returns {JSON}
    */

    async csgoSegments(platform, platformUserIdentifier, segmentType) {
        try {
            const response = await axios.get(`https://public-api.tracker.gg/v2/csgo/standard/profile/${platform}/${platformUserIdentifier}/segments/${segmentType}`, {
                headers: {
                    'content-type': 'application/json',
                    'TRN-Api-Key': this._key
                }
            })
            return {
                api_status_code: response.status,
                stats: response.data.data
            }
        } catch (error) {
            return {
                api_error_code: error.response.status
            }
        } 
    }

    /**
     * @param {String} platform // origin, xbl, psn
     * @param {String} platformUserIdentifier // nickname 
     * @returns {JSON}
    */

    async apexLegends(platform, platformUserIdentifier) {
        try {
            const response = await axios.get(`https://public-api.tracker.gg/v2/apex/standard/profile/${platform}/${platformUserIdentifier}`, {
                headers: {
                    'content-type': 'application/json',
                    'TRN-Api-Key': this._key
                }
            })
            return {
                api_status_code: response.status,
                user: response.data.data.platformInfo,
                stats: response.data.data.segments[0].stats
            }
        } catch (error) {
            return {
                api_error_code: error.response.status
            }
        }
    }

    /**
     * @param {String} platform // origin, xbl, psn
     * @param {String} platformUserIdentifier // nickname 
     * @param {String} segmentType // legend
     * @returns {JSON}
    */

    async apexLegendsSegments(platform, platformUserIdentifier, segmentType) {
        try {
            const response = await axios.get(`https://public-api.tracker.gg/v2/apex/standard/profile/${platform}/${platformUserIdentifier}/segments/${segmentType}`, {
                headers: {
                    'content-type': 'application/json',
                    'TRN-Api-Key': this._key
                }
            })
            return {
                api_status_code: response.status,
                stats: response.data.data
            }
        } catch (error) {
            return {
                api_error_code: error.response.status
            }
        }
    }

    /**
     * @param {String} platform // battlenet, xbl, psn
     * @param {String} platformUserIdentifier // nickname 
     * @returns {JSON}
    */

    async overwatch(platform, platformUserIdentifier) {
        try {
            const response = await axios.get(`https://public-api.tracker.gg/v2/overwatch/standard/profile/${platform}/${platformUserIdentifier}`, {
                headers: {
                    'content-type': 'application/json',
                    'TRN-Api-Key': this._key
                }
            })
            return {
                api_status_code: response.status, user: response.data.data.platformInfo,
                stats: response.data.data.segments[0].stats
            }
        } catch (error) {
            return {
                api_error_code: error.response.status
            }
        }
    }

    /**
     * @param {String} platform // uplay, xbl, psn
     * @param {String} platformUserIdentifier // nickname 
     * @returns {JSON}
    */

    async hyperScape(platform, platformUserIdentifier) {
        try {
            const response = await axios.get(`https://public-api.tracker.gg/v2/hyper-scape/standard/profile/${platform}/${platformUserIdentifier}`, {
                headers: {
                    'content-type': 'application/json',
                    'TRN-Api-Key': this._key
                }
            })
            return {
                api_status_code: response.status,
                user: response.data.data.platformInfo,
                stats: response.data.data.segments
            }
        } catch (error) {
            return {
                api_error_code: error.response.status
            }
        }
    }
}

module.exports = stats;
