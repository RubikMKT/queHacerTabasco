var db = null

document.addEventListener("offline", onOffline, false);
document.addEventListener("online", onOnline, false);

function onOffline () {
  callDB()
    $('#messageConnection').css('display','block')
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
}



function populateDB(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS PUBLICIDAD (id INTEGER PRIMARY KEY, name, ubicacion, resena, categoria, precio, horario, telefono, a, e, s)');
}

function successCB() {
    var db =  window.sqlitePlugin.openDatabase({name: 'quehacer.db', location: 'default'});
    db.transaction(insertDB, errorDB);
}

function errorDB(err) {
    alert("Error processing SQL: "+err.code);
}

function insertDB(tx) {
  axios.get('http://165.227.111.118/api/user/getPublicidad')
    .then( function (res)  {
      for( var i in res.data) {

        db.transaction(function(tx) {

          tx.executeSql('INSERT OR REPLACE INTO PUBLICIDAD VALUES (?,?,?,?,?,?,?,?,?,?,?)', [ ''+res.data[i].id +'',''+res.data[i].cliente.empresa +'', ''+res.data[i].ubicacion+'', ''+res.data[i].resena+'', ''+res.data[i].categoria.name+'', ''+res.data[i].categoria.costo+'', ''+res.data[i].categoria.horario+'', ''+res.data[i].categoria.telefono+'', ''+res.data[i].categoria.clima+'', ''+res.data[i].categoria.estacionamiento+'', ''+res.data[i].categoria.domicilio+'' ]);

        }, function (error) {
          alert('Transaction ERROR: ' + error.message);
        }, function () {
          db.transaction(queryDB)
        }
      );
      }
    })
    .catch( function (error) {
          alert(error.message + 'error')
    })
}

function queryDB() {
  db.transaction(function(tx) {

    tx.executeSql('SELECT * FROM PUBLICIDAD', [], function(tx, rs) {
      var tblText = '';
      var len = rs.rows.length;
      for (var i = 0; i < len; i++) {
        var cards =
        `<div class="col s12 m7">
            <div class="card horizontal" onclick="javascript:location.href='sections/page.html'">
              <div class="card-image">
                <img src="images/cardimages/lacevicheria.png">
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
      alert('SELECT error: ' + error.message);
    });
  });
}
