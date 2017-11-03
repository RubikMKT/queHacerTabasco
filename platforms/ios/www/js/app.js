var db = null

document.addEventListener("offline", onOffline, false);
document.addEventListener("online", onOnline, false);

function onOffline () {
  callDB()
    $('#messageConnection').css('display','block')
    window.plugins.toast.show('Sin conexion a internet', 'long', 'center')
}

function onOnline () {
   onDeviceReady()
     $('#messageConnection').css('display','none')
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

  axios.get('http://165.227.111.118/api/user/getCategorias')
    .then(function (res){
        categoris = res.data 
        var cats = ''
        categoris.forEach(function (el){

        var template = `<a class="waves-effect btn-flat nombre-black" onclick="javascript:location.href='sections/page.html'">
            <p class="buttons">
              <p><i class="fa fa-map-o" aria-hidden="true"></i>` + el.name + `</p>
              <div class="italic">(` + el.descripcion + `)</div>
            </p>
          </a> `;
          cats += template
        }) 
        document.getElementById('category').innerHTML = cats

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

    tx.executeSql('SELECT * FROM PUBLICIDAD', [], function(tx, rs) {
      var tblText = '';
      var len = rs.rows.length;

      for (var i = 0; i < len; i++) {
        
        var imgSplit =  rs.rows.item(i).imagen
        var getImg = imgSplit.split("../")
        var img = 'http://165.227.111.118/'+getImg[2]

        var cards =
        `<div class="col s12 m7">
            <div class="card horizontal" onclick="javascript:location.href='sections/page.html'">
              <div class="card-image">
                <img src="`+ img +`">
              </div>
              <div class="card-stacked">
                <div class="card-content" >
                    <p class="nombre-black"> ` + rs.rows.item(i).name + `</p>
                      <i><p>`+ rs.rows.item(i).ubicacion +`</p></i>
                    <p>`+ rs.rows.item(i).resena +`</p>
                </div>
              </div>
            </div>
          </div> `
          tblText += cards;
      }
      document.getElementById("app").innerHTML = tblText;
    },

    function(tx, error) {
      window.plugins.toast.show('Error', 'short', 'center')
    });
  });
}
