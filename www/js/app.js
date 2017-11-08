  var db = null
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

  function getCategory(){

    var templateCategory = Handlebars.templates['category'];

    axios.get('http://165.227.111.118/api/user/getCategorias')
      .then(function (res){
        document.getElementById('category').innerHTML = templateCategory(res) 
      })
      .catch(function (err){

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
        let rest = res.data
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

  var publicidadConten = document.getElementById('publicidad');

  function renderPublicidad(id){
    axios.get('http://165.227.111.118/api/user/searchPublicidad'+ '/'+id)
      .then(res =>{

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
  });
