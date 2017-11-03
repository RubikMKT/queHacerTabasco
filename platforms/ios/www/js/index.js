axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        this.isLogin();
    },
    isLogin: function() {
        facebookConnectPlugin.getLoginStatus( function log(response) {
            if(response.status == 'connected'){
                window.location = 'app.html'
            }else{
                //window.location = 'index.html'
            }
        })
    },
};

app.initialize();

facebook_btn = document.getElementById('login_facebook');
logout_facebook = document.getElementById('logout_facebook');

facebook_btn.addEventListener("click", function login(e) {
    e.preventDefault()
    facebookConnectPlugin.login(["email", "public_profile", "user_birthday", "user_location"], function (userData){
        window.plugins.toast.show('Login in', 'short', 'center')
        details()
        },
        function loginError(err) {
            window.plugins.toast.show('Error de login' + err, 'short', 'center')
        }
    )
})


function details(e) {

    facebookConnectPlugin.getLoginStatus( function log(response) {
        if(response.status == 'connected'){
            facebookConnectPlugin.api('/' + response.authResponse.userID + '?fields=id,name,email,location,birthday,gender',[],
                function onSuccess (result) {
                    var d = new Date();
                    var n = d.getFullYear();
                    var ageRest = result.birthday
                    var arrAge = ageRest.split('/')
                    var age = (parseInt(n) - parseInt(arrAge[2]))
                    data = {
                        email: ""+result.email+"",
                        name: ""+result.name+"",
                        age: ""+age+"",
                        gender: ""+result.gender+"",
                        locations: ""+result.location.name+""
                    }
                    axios.post('http://165.227.111.118/api/user/createUserApp', data)
                    .then(function (response) {
                        window.location = 'app.html'
                    })
                    .catch(function (error) {
                        window.plugins.toast.show('Error de conexión', 'short', 'center')
                    });
                },
                function onError(error) {
                    alert(JSON.stringify(error))
                }
            )
        }
        else {
            window.plugins.toast.show('No logueado', 'short', 'center')
        }
    })

}

function logout() {
    facebookConnectPlugin.logout( function logOut(response) {
        alert(JSON.stringify(response))
    })
}
