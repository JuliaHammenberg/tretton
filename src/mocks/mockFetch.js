const employeeListResponse = [{
    name: 'John',
    office: 'Lund',
    gitHub: null,
    twitter: null,
    stackOverflow: null,
    linkedIn: null,
    imagePortraitUrl: "https://img"
},
{
    name: 'Jane',
    office: 'Stockholm',
    gitHub: null,
    twitter: null,
    stackOverflow: null,
    linkedIn: null,
    imagePortraitUrl: "https://img"
}];


export default async function mockFetch(url) {
    switch (url) {
        case "https://api.1337co.de/v3/employees": {
            return {
                ok: true,
                status: 200,
                json: async () => employeeListResponse,
            };
        }
        default: {
            throw new Error(`Unhandled request: ${url}`);
        }
    }
}