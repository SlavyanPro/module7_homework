const windowsVersion = {
    name: "Windows 8.1",
    version: '8,1',
    year: 2014,
    developer: 'Microsoft Corporation',
};

console.log(isProperty(windowsVersion, 'developer'));

function isProperty(object, property) {
    return property in object
};
