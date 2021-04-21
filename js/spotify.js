<<<<<<< HEAD
const APIController = (function() {
    const clietnID = '';
    const clientSecret = '';

    // private methods

    const getToken = async () => {
        const result = await fetch('https://accounts.spotify.com/api/token',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Authorization' : 'Basic ' + btoa(clietID + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });
        const data = await result.json();
        result data.access_token;
    }
})();
=======
console.log('test');
>>>>>>> 1f02dc2bf6922e9769900258292466d50375cc5e
