const axios = require('axios')

const travis = axios.create({
    baseURL: 'https://api.travis-ci.com/',
    timeout: 15000,
    headers: {
        'Travis-API-Version': 3,
        'Authorization': 'token VTC9o1dWzwyHf95MS5g_7w'
    }
});

(async function () {
    const url = `repo/${encodeURIComponent('iloveyou-linqian/iloveyou-linqian.github.io')}/builds`
    console.log(url)
    const repo = await travis.get(url)
    console.log('builds: ', repo.data)
})()