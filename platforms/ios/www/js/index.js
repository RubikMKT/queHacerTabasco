
var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        this.isLogin();
    },
    isLogin: function() {
    },
};

app.initialize();

facebook_btn = document.getElementById('login_facebook');
details_facebook = document.getElementById('details_facebook');
logout_facebook = document.getElementById('logout_facebook');

facebook_btn.addEventListener("click", function login(e) {
    e.preventDefault()
    facebookConnectPlugin.login(["email", "public_profile", "user_birthday", "user_hometown", "user_location"], function (userData){
        window.plugins.toast.show('Login in', 'short', 'center')
        details()
        },
        function loginError(err) {
            alert(err)
            window.plugins.toast.show('Error de login' + err, 'short', 'center')
        }
    )
})

details_facebook.addEventListener("click", details, false);
logout_facebook.addEventListener("click", logout, false);


function details(e) {
    //e.preventDefault()

    facebookConnectPlugin.getLoginStatus( function log(response) {
        if(response.status == 'connected'){
            facebookConnectPlugin.api('/' + response.authResponse.userID + '?fields=id,name,email,location,hometown,birthday,gender',[],
                function onSuccess (result) {

                    alert(JSON.stringify(result))
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
