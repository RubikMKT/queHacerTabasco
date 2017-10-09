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

facebook_btn.addEventListener("click", login, false);
details_facebook.addEventListener("click", details, false);
logout_facebook.addEventListener("click", logout, false);



function login() {
    facebookConnectPlugin.login(["email"], function(response){
        alert('Login in');
        alert(JSON.stringify(response.authResponse))
        },
        function loginError (error) {
            console.error(error)
        }
    );
}

function details() {

    facebookConnectPlugin.getLoginStatus( (response) => {
        if(response.status == 'connected'){
            facebookConnectPlugin.api('/' + response.authResponse.userID + '?fields=id,name,gender',[],
                function onSuccess (result) {
                    alert(JSON.stringify(result))
                },
                function onError(error) {
                    alert(JSON.stringify(error))
                }
            )
        }
        else {
            alert('No logueado')
        }
    })

}

function logout() {
    facebookConnectPlugin.logout((response)=> {

        alert(JSON.stringify(response))
    })
}
