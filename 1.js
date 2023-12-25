const windowsVersion = {
    name: "Windows 8.1",
    version: '8,1',
    year: 2014,
    developer: 'Microsoft Corporation',
};

getObjectValues(windowsVersion);

function getObjectValues(obj) {
    for (var key in obj) {
        console.log(key + ' = ' + obj[key]);
    }
}