var btnLogin = document.getElementById('login')
var db = null
var idFacebook = null
var idUser = null
var categories = null 
var templateCategory = Handlebars.templates['category']
var categoryElement = document.getElementById('category')
var templateRecomendaciones = Handlebars.templates['recomendacion']
var btnSugerencias = document.getElementById('btnSugerencias')
var recomendaciones = document.getElementById('recomendaciones')
var cleanInput = document.getElementById('cleanInput')
var publicidadConten = document.getElementById('publicidad')

var app = {
  initialize: function() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },
  onDeviceReady: function() {
    this.isLogin();
  },
  isLogin: function() {
    facebookConnectPlugin.getLoginStatus( function (response) {
      if(response.status == 'connected'){
        btnLogin.style.display = 'none'
          idFacebook = response.authResponse.userID 
      }
    })
  },
};
app.initialize();

facebook_btn = document.getElementById('login_facebook');

facebook_btn.addEventListener("click", function login(e) {
  e.preventDefault()
  e.stopImmediatePropagation()
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
    if(response.status == 'connected') {
        facebookConnectPlugin.api('/' + response.authResponse.userID + '?fields=id,name,email,location,birthday,gender',[],
          function onSuccess (result) {
            
            var d = new Date();
            var n = d.getFullYear();
            var ageRest = result.birthday
            var arrAge = ageRest.split('/')
            var age = (parseInt(n) - parseInt(arrAge[2]))
             
            if(!result.location){
              locationCity = 'sin locación'  
            }else{
              locationCity = result.location.name
            }

            data = {
                email: ""+result.email+"",
                idUserFacebook:""+response.authResponse.userID+"",
                name: ""+result.name+"",
                age: ""+age+"",
                gender: ""+result.gender+"",
                locations: ""+locationCity+"",
            }

            axios.post('http://165.227.111.118/api/user/createUserApp', data)
            .then(function (response) {
                btnLogin.style.display = 'none'
                idFacebook = response.idFacebook
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

  document.addEventListener("offline", onOffline, false);
  document.addEventListener("online", onOnline, false);

  function onOffline () {
    callDB()
      window.plugins.toast.show('Sin conexion a internet', 'long', 'center')
  }

  function onOnline () {
    onDeviceReady()
  }

  function callDB () {
    db = window.sqlitePlugin.openDatabase({name: 'quehacer.db', location: 'default'});
    db.transaction(populateDB, errorDB, callSuccessCB);
  }

  function callSuccessCB () {
    var db =  window.sqlitePlugin.openDatabase({name: 'quehacer.db', location: 'default'});
      db.transaction(queryDB, errorDB);
  }


  function onDeviceReady() {

    db = window.sqlitePlugin.openDatabase({name: 'quehacer.db', location: 'default'});
    db.transaction(populateDB, errorDB, successCB);

    getCategory()
  }

  function getCategory() {
    axios.get('http://165.227.111.118/api/user/getCategorias')
      .then(function (res){
        categories = res.data
        categoryElement.innerHTML = templateCategory(res) 
      })
  }

  function populateDB(tx) {
      tx.executeSql('CREATE TABLE IF NOT EXISTS PUBLICIDAD (id INTEGER PRIMARY KEY, name, ubicacion, resena, categoria, precio, horario, telefono, imagen,a, e, s)');
  }

  function successCB() {
      var db =  window.sqlitePlugin.openDatabase({name: 'quehacer.db', location: 'default'});
      db.transaction(insertDB, errorDB);
  }

  function errorDB(err) {
      window.plugins.toast.show('Error processing SQL', 'short', 'center')
  }

  function insertDB(tx) {
    axios.get('http://165.227.111.118/api/user/getPublicidads')
      .then( function (res)  {
        var rest = res.data
        rest.forEach(function(el) {
          db.transaction(function(tx) {

            tx.executeSql('INSERT OR REPLACE INTO PUBLICIDAD VALUES (?,?,?,?,?,?,?,?,?,?,?,?)', [ ''+el.id +'',''+el.cliente.empresa +'', ''+el.ubicacion+'', ''+el.resena+'', ''+el.categoria.name+'', ''+el.categoria.costo+'', ''+el.categoria.horario+'', ''+el.categoria.telefono+'', ''+el.cliente.imagen+'', ''+el.categoria.clima+'', ''+el.categoria.estacionamiento+'', ''+el.categoria.domicilio+'' ]);

          }, function (error) {
            alert('Transaction ERROR: ' + error.message);
            window.plugins.toast.show('Transaction ERROR', 'short', 'center')
          }, function () {
            db.transaction(queryDB)
          });
        
        })  
      })
      .catch( function () {
            alert(error.message + 'error')
            window.plugins.toast.show('Error', 'short', 'center')
      })
  }

  function queryDB() {
    db.transaction(function(tx) {
      var templateListPublicidad = null
      tx.executeSql('SELECT * FROM PUBLICIDAD', [], function(tx, rs) {
        var jsonpub = {
          "data":[]
        }
        var pubArray = []
        var imgSplit = null
        var getImg = null
        var img = null
        
        var len = rs.rows.length;
        for (var i = 0; i < len; i++) {
          
          imgSplit =  rs.rows.item(i).imagen
          getImg = imgSplit.split("../")
          img = 'http://165.227.111.118/'+getImg[2]

          pubArray.push({
            "id": rs.rows.item(i).id,
            "imagen": img,
            "name":rs.rows.item(i).name,
            "ubicacion":rs.rows.item(i).ubicacion,
            "resena":rs.rows.item(i).resena
          });
        }

        $.extend(jsonpub.data, pubArray);
        
        templateListPublicidad = Handlebars.templates['listPublicidad']
        document.getElementById('listPub').innerHTML = templateListPublicidad(jsonpub) 
      },

      function(tx, error) {
        window.plugins.toast.show('Error', 'short', 'center')
      });
    });
  }

  function renderPublicidad(id){
    axios.get('http://165.227.111.118/api/user/searchUserAppsForFacebook/'+idFacebook)
      .then( function(res) {
        idUser = res.data.id
        publicidadInteres(idUser)
      })

      function publicidadInteres(idUser){
          data = {
            'user_aplication_id': idUser,
            'publicidad_id': id,
          }

          axios.post('http://165.227.111.118/api/user/createPublicidadInterest', data)
            .then(function (res) { })
      }

    axios.get('http://165.227.111.118/api/user/searchPublicidad'+ '/'+id)
      .then( function (res) {

        publicidadConten.style.left = 0      

        templatePublicidad = Handlebars.templates['publicidad']
        publicidadConten.innerHTML = templatePublicidad(res) 

        initialize(res.data.mapaLat, res.data.mapaLng)

        $('.bxslider_pub').bxSlider({
          mode: 'fade',
          captions: false,
          slideWidth: 1200,
          responsive: true,
          controls: false,
          hideControlOnEnd: true,
          auto:true,
          speed:400
        });
       
      })
  }

  function listPubCat (id) {
    alert(id)
  }

  function closePublicidad(e) {
    publicidadConten.style.left = '100%'
    publicidadConten.innerHTML = ''
  }

  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: false,
    slideWidth: 1200,
    responsive: true,
    controls: false,
    hideControlOnEnd: true,
    auto:true,
    speed:400
  });

  Handlebars.registerHelper('splitUrl', function(url) {
    var t = url.split("../");
    return "http://165.227.111.118/" + t[2];
  });

const inputFilter = document.getElementById('search')  

function filtrarCategoria(obj, fil) {
  return obj.filter( function(obj) {
    return Object.keys(fil).every( function(a) {
      return obj[a].toLowerCase().indexOf(fil[a].toLowerCase()) > -1;
    });
  });
}

inputFilter.addEventListener("keyup", function (e, i) {
  var cat_json = JSON.stringify(categories)
  var category = filtrarCategoria( JSON.parse(cat_json), {name:  inputFilter.value }) 
  data = {
    data: category
  }
  categoryElement.innerHTML = templateCategory(data) 
})


cleanInput.addEventListener("click", function () {
  inputFilter.value = ''
  data = {
    data: categories
  }
  categoryElement.innerHTML = templateCategory(data) 
})

btnSugerencias.addEventListener("click", function (e) {
  e.preventDefault()
  e.stopImmediatePropagation()

  recomendaciones.innerHTML = templateRecomendaciones()

  recomendaciones.style.left = 0 
  recomendaciones.style.height = '100%'
  
})

  function closeRecomendacion(e) {
    recomendaciones.style.left = '100%'
    recomendaciones.style.height = 'auto'
    recomendaciones.innerHTML = ''
  }

  function sendComentario (e) {
    var asunto = document.getElementById('asunto')
    var comentarios = document.getElementById('comentarios')

    data = {
      asunto: asunto.value,
      mensaje: comentarios.value
    }

    if(asunto.value !== '' && comentarios.value !== ''){
      axios.post('http://165.227.111.118/api/user/createSugerencia', data)
      .then( function(res){
          window.plugins.toast.show('Gracias por su comentario', 'short', 'center')
          asunto.value = ''
          comentarios.value = ''
      })
    }else{
      window.plugins.toast.show('Favor de llenar todos los campos', 'short', 'center')
    }
  }
