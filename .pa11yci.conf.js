const defaults = {
    standard: 'WCAG2AA',
    timeout: 50000,
    runners: [
        'axe'
    ]
};

const urls = [
    '${URL}',
    'http://localhost:3000'
];

function myPa11yCiConfiguration() {
    console.error('Env:', process.env.URL)

    for (let idx = 0; idx < urls.length; idx++) {
        urls[idx] = urls[idx].replace('${URL}', process.env.URL)
    }

    return {
        defaults: defaults,
        urls: urls,
    }
}

module.exports = myPa11yCiConfiguration()
