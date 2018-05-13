var btnLogin = document.getElementById('login')
var db = null
var idFacebook = null
var idUser = null
var categories = null 
var loadsec = document.getElementById('load')
var templateCategory = Handlebars.templates['category']
var categoryElement = document.getElementById('category')
var templateRecomendaciones = Handlebars.templates['recomendacion']
var btnSugerencias = document.getElementById('btnSugerencias')
var recomendaciones = document.getElementById('recomendaciones')
var cleanInput = document.getElementById('cleanInput')
var publicidadConten = document.getElementById('publicidad')
var templateListPubCategory = Handlebars.templates['listPublicidadCategory']
var contentListPubCategory = document.getElementById('lisPubCategory');
var facebook_btn = document.getElementById('login_facebook');
var inputFilter = document.getElementById('search')  
var templatePublicidad = Handlebars.templates['publicidad']
var templateTerminos = Handlebars.templates['terminos']
var templateConocenos = Handlebars.templates['conocenos']
var btnConocenos = document.getElementById('btnConocenos')
var btnTerminos = document.getElementById('btnTerminos')
var contentConocenos = document.getElementById('conocenos')
var contentTerminos = document.getElementById('terminos')
var searchPub = document.getElementById('searchPub')
var cleanInputPub = document.getElementById('cleanInputPub')
var jsonpub = null
var templateListPublicidad = Handlebars.templates['listPublicidad']
var templateSliders = Handlebars.templates['slider']
var contentSlider = document.getElementById('sliderContent')
var templateLoginquehacer = Handlebars.templates['loginquehacer']
var loginquehacer = document.getElementById('loginquehacer')
var login_quehacer = document.getElementById('login_quehacer') 

var app = {
  initialize: function() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },
  onDeviceReady: function() {
    this.isLogin();
  },
  isLogin: function() {

     var value = window.localStorage.getItem("id")
    facebookConnectPlugin.getLoginStatus( function (response) {
      if(response.status == 'connected' || value != null )  {
        btnLogin.style.display = 'none'
          idFacebook = response.authResponse.userID 
      }
    })
  },
};
app.initialize();

facebook_btn.addEventListener("click", function login(e) {
  e.preventDefault()
  e.stopImmediatePropagation()
  facebookConnectPlugin.login(["email", "public_profile", "user_birthday", "user_location"], function (userData) {
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

            var age = null;
            if(!result.birthday){
              age = '18'
            } else {
              var d = new Date();
              var n = d.getFullYear();
              var ageRest = result.birthday
              var arrAge = ageRest.split('/')
              age = (parseInt(n) - parseInt(arrAge[2]))
            }

            
            if(!result.location){
              locationCity = 'sin locación'  
            }else{
              locationCity = result.location.name
            }

            if(!result.gender){
              genero = 'male'
            }else{
              genero = result.gender
            }

            data = {
                email: ""+result.email+"",
                idUserFacebook:""+response.authResponse.userID+"",
                name: ""+result.name+"",
                age: ""+age+"",
                gender: ""+genero+"",
                locations: ""+locationCity+"",
            }

            axios.post('http://138.197.104.17/api/user/createUserApp', data)
            .then(function (response) {
                btnLogin.style.display = 'none'
                idFacebook = response.idFacebook
            })
            .catch(function (error) {
                window.plugins.toast.show('Error de conexión', 'short', 'center')
            });
        },
        function onError(error) {
            
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

  // Obtiene y lista las categorias
  function getCategory() {
    axios.get('http://138.197.104.17/api/user/getCategorias')
      .then(function (res){
        categories = res.data
        categoryElement.innerHTML = templateCategory(res)
        console.log(categories)
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
    axios.get('http://138.197.104.17/api/user/getPublicidads')
      .then( function (res)  {
        var rest = res.data
        rest.forEach(function(el) {
          db.transaction(function(tx) {

            tx.executeSql('INSERT OR REPLACE INTO PUBLICIDAD VALUES (?,?,?,?,?,?,?,?,?,?,?,?)', [ ''+el.id +'',''+el.cliente.empresa +'', ''+el.ubicacion+'', ''+el.resena+'', ''+el.categoria.name+'', ''+el.categoria.costo+'', ''+el.categoria.horario+'', ''+el.categoria.telefono+'', ''+el.cliente.imagen+'', ''+el.categoria.clima+'', ''+el.categoria.estacionamiento+'', ''+el.categoria.domicilio+'' ]);

          }, function (error) {
            //alert('Transaction ERROR: ' + error.message);
            window.plugins.toast.show('Transaction ERROR', 'short', 'center')
          }, function () {
            db.transaction(queryDB)
          });
        
        })  
      })
      .catch( function () {
            //alert(error.message + 'error')
            window.plugins.toast.show('Error', 'short', 'center')
      })
  }

  function queryDB() {
    db.transaction(function(tx) {
      tx.executeSql('SELECT * FROM PUBLICIDAD', [], function(tx, rs) {
        jsonpub = {
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
          img = 'http://138.197.104.17/'+getImg[2]

          pubArray.push({
            "id": rs.rows.item(i).id,
            "imagen": img,
            "name":rs.rows.item(i).name,
            "ubicacion":rs.rows.item(i).ubicacion,
            "resena":rs.rows.item(i).resena
          });
        }

        $.extend(jsonpub.data, pubArray);
        
        document.getElementById('listPub').innerHTML = templateListPublicidad(jsonpub) 
      },

      function(tx, error) {
        window.plugins.toast.show('Error', 'short', 'center')
      });
    });
  }

  function renderPublicidad(id){
    loadsec.style.display = "flex";
    axios.get('http://138.197.104.17/api/user/searchUserAppsForFacebook/'+idFacebook)
      .then( function(res) {
        idUser = res.data.id
        publicidadInteres(idUser)
      })

      function publicidadInteres(idUser){
          data = {
            'user_aplication_id': idUser,
            'publicidad_id': id,
          }

          axios.post('http://138.197.104.17/api/user/createPublicidadInterest', data)
            .then(function (res) { })
      }

    axios.get('http://138.197.104.17/api/user/searchPublicidad'+ '/'+id)
      .then( function (res) {

        loadsec.style.display = 'none'

        publicidadConten.style.left = 0      
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
    loadsec.style.display = 'flex'
    axios.get('http://138.197.104.17/api/user/getPublicidadForCategory'+ '/'+id)
      .then( function (res) {
        loadsec.style.display = 'none'
        contentListPubCategory.style.left = 0 
        contentListPubCategory.style.height = '100%'
        contentListPubCategory.innerHTML = templateListPubCategory(res)
      })
  }
  
  function closeListPubCategory() {
    contentListPubCategory.innerHTML = ''
    contentListPubCategory.style.height = 'auto'
    contentListPubCategory.style.left = '100%'
  }

  function closePublicidad(e) {
    publicidadConten.style.left = '100%'
    publicidadConten.innerHTML = ''
  }

  Handlebars.registerHelper('splitUrl', function(url) {
    var t = url.split("../");
    return "http://138.197.104.17/" + t[2];
    
  });

  Handlebars.registerHelper('ifCond', function(v1, v2, options) {
    if(v1 === v2) { 
      return options.fn(this);
    }
    return options.inverse(this);
  });

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


searchPub.addEventListener("keyup", function (e ,i) {
  var pub_json = JSON.stringify(jsonpub.data)
  var pub_searh = filtrarCategoria( JSON.parse(pub_json), {name:  searchPub.value }) 
  var data = {
    data: pub_searh
  }
  document.getElementById('listPub').innerHTML = templateListPublicidad(data) 
})


cleanInputPub.addEventListener("click", function() {
  searchPub.value = ''
  document.getElementById('listPub').innerHTML = templateListPublicidad(jsonpub) 
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
    loadsec.style.display = 'flex'
    var asunto = document.getElementById('asunto')
    var comentarios = document.getElementById('comentarios')

    data = {
      asunto: asunto.value,
      mensaje: comentarios.value
    }

    if(asunto.value !== '' && comentarios.value !== ''){
      axios.post('http://138.197.104.17/api/user/createSugerencia', data)
      .then( function(res){
        window.plugins.toast.show('Gracias por su comentario', 'short', 'center')
        asunto.value = ''
        comentarios.value = ''
        loadsec.style.display = 'none'
      }).catch(function(res){
        window.plugins.toast.show('Su comentario debe de tener menos de 190 caracteres', 'short', 'center')
      })
    }else{
     loadsec.style.display = 'none'
      window.plugins.toast.show('Favor de llenar todos los campos', 'short', 'center')
    }
  }

  btnConocenos.addEventListener('click', function (e) {
    e.preventDefault()
    e.stopImmediatePropagation()

    contentConocenos.innerHTML = templateConocenos()
    contentConocenos.style.left = 0 
    contentConocenos.style.height = '100%'
  })

  function closeConocenos(e) {
    contentConocenos.style.left = '100%'
    contentConocenos.style.height = 'auto'
    contentConocenos.innerHTML = ''
  }

  btnTerminos.addEventListener('click', function(e) {
    e.preventDefault()
    e.stopPropagation()

    contentTerminos.innerHTML = templateTerminos()
    contentTerminos.style.left = 0
    contentTerminos.style.height = '100%'
  })

  function closeTerminos() {
    contentTerminos.style.left = '100%'
    contentTerminos.style.height = 'auto'
    contentTerminos.innerHTML = ''
  }

  axios.get('http://138.197.104.17/api/user/getSliders')
    .then( function (res) {
        contentSlider.innerHTML = templateSliders(res)
       
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
    })

var styleOpen = {
    'transform': 'scaleY(1) scaleX(1) translateY(0px) translateX(0px)',
    'opacity': '1'
  }

var styleClose = {
  'transform': 'transform: scaleY(0.4) scaleX(0.4) translateY(0px) translateX(40px)',
  'opacity': '0'
}

function shareBtb () {
  var toobar = $('.toolbar')
  var btns = $('.btn_send_p')

  toobar.toggleClass('active');
    if(toobar.hasClass('active')){
      btns.css(styleOpen) 
    }else{
        btns.css(styleClose)
    }
}

//Compartir
function share (a, b) {
  console.log(b)
  facebookConnectPlugin.showDialog({
    method: "share",
    href: 'http://www.elteapaneco.com/',
    hashtag: ' #QueHacerHoyTabasco',
    quote: a,
    mobile_iframe: true,
    picture:b,
    share_feedWeb: true, // iOS only
  });
}

login_quehacer.addEventListener('click', function (a) {
  a.preventDefault()
  loginquehacer.style.display = 'block'
  loginquehacer.innerHTML = templateLoginquehacer()
})

// Cierra el login
function closeLoginquehacer(e) {
  loginquehacer.style.display = 'none'
  loginquehacer.innerHTML = ''
}

//Envio del formulario
function sendFormulario() {
  var nombre = document.getElementById('nombre').value
  var apellidos = document.getElementById('apellidos').value
  var edad = document.getElementById('edad').value
  var sexo = document.getElementById('sexo').value
  var nacionalidad = document.getElementById('nacionalidad').value
  var correo = document.getElementById('correo').value

  var id = Math.random().toString(36).slice(2);

  data = {
    email: correo,
    idUserFacebook: id,
    name: nombre + ' ' +apellidos,
    age: edad,
    gender: sexo,
    locations: nacionalidad,
  }

  axios.post('http://138.197.104.17/api/user/createUserApp', data)
  .then(function (response) {
      btnLogin.style.display = 'none'
      idFacebook = response.data.idFacebook
      window.localStorage.setItem("id", idFacebook)
      var value = window.localStorage.getItem("id")
      loginquehacer.style.display = 'none'
  })
  .catch(function (error) {
      window.plugins.toast.show('Error de conexión', 'short', 'center')
  });
}
