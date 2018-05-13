(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['category'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <a class=\"waves-effect btn-flat nombre-black\" id=\"content-list\" onclick=\"listPubCat("
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + ")\">\n      <p class=\"buttons\">\n\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias2).call(alias1,(depth0 != null ? depth0.name : depth0),"comida",{"name":"ifCond","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias2).call(alias1,(depth0 != null ? depth0.name : depth0),"ENTRETENIMIENTO",{"name":"ifCond","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias2).call(alias1,(depth0 != null ? depth0.name : depth0),"TURISMO",{"name":"ifCond","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        \n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias2).call(alias1,(depth0 != null ? depth0.name : depth0),"TRANSPORTE",{"name":"ifCond","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias2).call(alias1,(depth0 != null ? depth0.name : depth0),"HOTELES",{"name":"ifCond","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias2).call(alias1,(depth0 != null ? depth0.name : depth0),"CAFE",{"name":"ifCond","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias2).call(alias1,(depth0 != null ? depth0.name : depth0),"CULTURAL",{"name":"ifCond","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias2).call(alias1,(depth0 != null ? depth0.name : depth0),"NOCTURNA",{"name":"ifCond","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n        <div class=\"italic\"> "
    + alias4(((helper = (helper = helpers.descripcion || (depth0 != null ? depth0.descripcion : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"descripcion","hash":{},"data":data}) : helper)))
    + "</div>\n      </p>\n    </a> \n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "          <p><img src=\"/android_asset/www/images/restaurante.png\" class=\"icon\"></img> "
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "          <p><img src=\"/android_asset/www/images/entretenimiento.png\" class=\"icon\"></img> "
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "          <p><img src=\"/android_asset/www/images/turismo.png\" class=\"icon\"></img> "
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper;

  return "          <p><img src=\"/android_asset/www/images/transporte.png.png\" class=\"icon\"></img> "
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var helper;

  return "          <p><img src=\"/android_asset/www/images/hoteles.png\" class=\"icon\"></img> "
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var helper;

  return "          <p><img src=\"/android_asset/www/images/cafe.png\" class=\"icon\"></img> "
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var helper;

  return "          <p><img src=\"/android_asset/www/images/cultural.png\" class=\"icon\"></img> "
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var helper;

  return "          <p><img src=\"/android_asset/www/images/nocturna.png\" class=\"icon\"></img> "
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"19":function(container,depth0,helpers,partials,data) {
    return "  <p>No encontramos categorías</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.data : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(19, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});
templates['conocenos'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!-- Simple header with fixed tabs. -->\n  <div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs\" >\n    <header class=\"mdl-layout__header\">\n      <div class=\"mdl-layout__header-row marg-head\">\n        <!-- Colored FAB button with ripple -->\n        <button class=\"mdl-button mdl-js-button mdl-button--icon\">\n          <a onclick=\"closeConocenos()\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a>\n        </button>\n        <div class=\"col-12\">\n          <img src=\"images/logo_quehacerhoy.png\" style=\"max-width: 30%; margin-left: 120px;\">\n        </div>\n      </div>\n    </header>\n    <div class=\"col-12\" >\n      <div class=\"row\">\n        <div class=\"col s12 mt-2\">\n          <p>Que Hacer Hoy Tabasco, es una iniciativa para acercar a las empresas Tabasqueñas a los clientes que quisieran conocer las actividades culturales, lugares a conocer o actividades que puedan realizar en nuestro estado.</p>\n        </div>\n      </div>\n    </div>\n  </div>";
},"useData":true});
templates['listPublicidad'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <div class=\"col s12 m7\">\n    <div class=\"card horizontal\" onclick=\"renderPublicidad("
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + ")\">\n      <div class=\"card-image\">\n        <img src=\""
    + alias4(((helper = (helper = helpers.imagen || (depth0 != null ? depth0.imagen : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imagen","hash":{},"data":data}) : helper)))
    + "\">\n      </div>\n      <div class=\"card-stacked\">\n        <div class=\"card-content\" >\n            <p class=\"nombre-black\"> "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</p>\n              <i><p>"
    + alias4(((helper = (helper = helpers.ubicacion || (depth0 != null ? depth0.ubicacion : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ubicacion","hash":{},"data":data}) : helper)))
    + "</p></i>\n            <p>"
    + alias4(((helper = (helper = helpers.resena || (depth0 != null ? depth0.resena : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"resena","hash":{},"data":data}) : helper)))
    + "</p>\n        </div>\n      </div>\n    </div>\n  </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['listPublicidadCategory'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <div class=\"col s12 m7\">\n        <div class=\"card horizontal\" onclick=\"renderPublicidad("
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + ")\">\n          <div class=\"card-image\">\n            <img src=\""
    + alias4((helpers.splitUrl || (depth0 && depth0.splitUrl) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.cliente : depth0)) != null ? stack1.imagen : stack1),{"name":"splitUrl","hash":{},"data":data}))
    + "\">\n            <p></p>\n          </div>\n          <div class=\"card-stacked\">\n            <div class=\"card-content\" >\n                <p class=\"nombre-black\"> "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</p>\n                  <i><p>"
    + alias4(((helper = (helper = helpers.ubicacion || (depth0 != null ? depth0.ubicacion : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ubicacion","hash":{},"data":data}) : helper)))
    + "</p></i>\n                <p>"
    + alias4(((helper = (helper = helpers.resena || (depth0 != null ? depth0.resena : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"resena","hash":{},"data":data}) : helper)))
    + "</p>\n            </div>\n          </div>\n        </div>\n      </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<!-- Simple header with fixed tabs. -->\n  <div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs\" >\n    <header class=\"mdl-layout__header\">\n      <div class=\"mdl-layout__header-row marg-head\">\n        <!-- Colored FAB button with ripple -->\n        <button class=\"mdl-button mdl-js-button mdl-button--icon\">\n          <a onclick=\"closeListPubCategory()\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a>\n        </button>\n        <div class=\"col-12\">\n          <img src=\"images/logo_quehacerhoy.png\" style=\"max-width: 30%; margin-left: 120px;\">\n        </div>\n      </div>\n    </header>\n\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>";
},"useData":true});
templates['loginquehacer'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!-- Simple header with fixed tabs. -->\n  <div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs\" >\n    <header class=\"mdl-layout__header\">\n      <div class=\"mdl-layout__header-row marg-head\">\n        <!-- Colored FAB button with ripple -->\n        <button class=\"mdl-button mdl-js-button mdl-button--icon\">\n          <a onclick=\"closeLoginquehacer()\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a>\n        </button>\n        <div class=\"col-12\">\n          <img src=\"images/logo_quehacerhoy.png\" style=\"max-width: 30%; margin-left: 120px;\">\n        </div>\n      </div>\n    </header>\n    <div class=\"col-12\" >\n      <div class=\"row\">\n        <div class=\"col s12 mt-2\">\n          <form id=\"formAddUser\" method=\"post\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" placeholder=\"Nombre(s):\" class=\"validate\" id=\"nombre\">\n            </div>\n            <div class=\"input-field col s12\">\n              <input type=\"text\" placeholder=\"Apellidos:\" class=\"validate\" id=\"apellidos\">\n            </div>\n            <div class=\"input-field col s12\">\n              <input type=\"text\" placeholder=\"Edad:\" class=\"validate\" id=\"edad\">\n            </div>  \n            <div class=\"input col s12\">\n              <select id=\"sexo\">\n                <option value=\"\" disabled selected> Sexo:</option>\n                <option value=\"male\">Masculino</option>\n                <option value=\"female\">Femenino</option>\n              </select>\n            </div>\n            <div class=\"input-field col s12\">\n              <input type=\"text\" placeholder=\"Nacionalidad:\" class=\"validate\" id=\"nacionalidad\">\n            </div>\n            <div class=\"input-field col s12\">\n              <input type=\"text\" placeholder=\"Correo:\" class=\"validate\" id=\"correo\">\n            </div>\n            <button type=\"button\" onclick=\"sendFormulario()\" class=\"btn btn-success right mt-1\" role=\"button\"> Guardar<i class=\"material-icons right\">send</i></button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n";
},"useData":true});
templates['publicidad'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "              <div>\n                <div style=\"background-image: url('"
    + container.escapeExpression((helpers.splitUrl || (depth0 && depth0.splitUrl) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.url : depth0),{"name":"splitUrl","hash":{},"data":data}))
    + "'); background-color: #cccccc; background-positon: center; background-size:cover; height:150px; with:100%;\"></div>\n              </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                        <td>Aire acondicionado</td>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "                        <td>Wi-Fi</td>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "                        <td>Estacionamiento</td>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "                        <td>Bar</td>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "                        <td>Servicio a domicilio</td>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "                        <td>Música en vivo</td>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression;

  return "  <!-- Simple header with fixed tabs. -->\n  <div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs\" >\n    <header class=\"mdl-layout__header\">\n      <div class=\"mdl-layout__header-row marg-head\">\n        <!-- Colored FAB button with ripple -->\n        <button class=\"mdl-button mdl-js-button mdl-button--icon\">\n          <a onclick=\"closePublicidad()\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a>\n        </button>\n        <div class=\"col-12\">\n          <img src=\"images/logo_quehacerhoy.png\" style=\"max-width: 30%; margin-left: 120px;\">\n        </div>\n      </div>\n    </header>\n\n    <div class=\"col-12\" >\n        <!-- Wrapper for slides -->\n        <div class=\"carousel-inner\">\n          <style>\n              .bx-pager.bx-default-pager{\n                display: none;\n              }\n            </style>\n          <div class=\"bxslider_pub\">\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.pictures : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		      </div>\n        </div>\n      </div>\n\n      <!-- Datos/ mas informacion/ informacion detallada -->\n    <div class=\"col-12\" >\n      <div class=\"row espacio\">\n        <div class=\"nombre-lugar\">\n          <h3>"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.cliente : stack1)) != null ? stack1.empresa : stack1), depth0))
    + "</h3>\n        </div>\n        <div class=\"card-panel resena\">\n          <p>"
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.resena : stack1), depth0))
    + "</p>\n        </div>\n        <div class=\"card-panel resena\">\n          <p>"
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.oferta : stack1), depth0))
    + "</p>\n        </div>\n      </div>\n    </div>\n      <!-- Tabla con informacion del sitio -->\n    <div class=\"col-12\">  \n      <div class=\"row\">\n        <div class=\"col s12\">\n          <ul class=\"collection\">\n            <li class=\"collection-item avatar\">\n              <img src=\"/android_asset/www/images/icons/ubicacion.png\" class=\"icon1\" aria-hidden=\"true\"></img>\n              <span class=\"title\">"
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.ubicacion : stack1), depth0))
    + "</span>\n            </li>\n            <li class=\"collection-item avatar\">\n                <img src=\"/android_asset/www/images/icons/rango de precios.png\" class=\"icon1\" aria-hidden=\"true\"></img>\n                <span class=\"title\">"
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.costo : stack1), depth0))
    + "</span>\n            </li>\n            <li class=\"collection-item avatar\">\n                <img src=\"/android_asset/www/images/icons/horario de servicio.png\" class=\"icon1\" aria-hidden=\"true\"></img>\n                <span class=\"title\">"
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.horario : stack1), depth0))
    + "</span>\n            </li>\n            <li class=\"collection-item avatar\">\n                <img src=\"/android_asset/www/images/icons/telefono.png\" class=\"icon1\" aria-hidden=\"true\"></img>\n                <span class=\"title\">"
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.telefono : stack1), depth0))
    + "</span>\n            </li>\n             <li class=\"collection-item avatar\">\n               <img src=\"/android_asset/www/images/icons/mail.png\" class=\"icon1\" aria-hidden=\"true\"></img>\n              <span class=\"title\">"
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.correo : stack1), depth0))
    + "</span>\n            </li>\n            <li class=\"collection-item avatar\">\n<img src=\"/android_asset/www/images/icons/servicios.png\" class=\"icon1\" aria-hidden=\"true\"></img>\n                <span class=\"title\">\n                  <table>\n                    <tr>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.clima : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.wifi : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    </tr>\n                    <tr>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.estacionamiento : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.bar : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    </tr>\n                    <tr>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.domicilio : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.musica : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    </tr>\n                  </table>\n                </span>\n            </li>\n          </ul>\n      </div>\n      </div>\n    </div>\n  </div>\n  <div>\n    <div class=\"fixed-action-btn toolbar\">\n      <a class=\"btn-floating btn-large orange click-to-toggle\" onclick=\"shareBtb()\" style=\"opacity: 0.9;\">\n        <img src=\"images/iconqht.png\" alt=\"\" style=\"margin: 17%\" align=\"center\" width=\"60%\" height=\"auto\">\n      </a>\n      <ul>\n        <li class=\"waves-effect waves-light\"><a class=\"btn_send_p\" onclick=\"share( '"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.cliente : stack1)) != null ? stack1.empresa : stack1), depth0))
    + "', '"
    + alias3((helpers.splitUrl || (depth0 && depth0.splitUrl) || helpers.helperMissing).call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.cliente : stack1)) != null ? stack1.imagen : stack1),{"name":"splitUrl","hash":{},"data":data}))
    + "')\" ><i class=\"fa fa-share-alt\" aria-hidden=\"true\"></i></a></li>\n      </ul>\n    </div>\n  </div>\n  <footer id=\"map\" style=\"align-self: flex-end; width: 100%; height: 350px;\"></footer>";
},"useData":true});
templates['recomendacion'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!-- Simple header with fixed tabs. -->\n  <div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs\" >\n    <header class=\"mdl-layout__header\">\n      <div class=\"mdl-layout__header-row marg-head\">\n        <!-- Colored FAB button with ripple -->\n        <button class=\"mdl-button mdl-js-button mdl-button--icon\">\n          <a onclick=\"closeRecomendacion()\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a>\n        </button>\n        <div class=\"col-12\">\n          <img src=\"images/logo_quehacerhoy.png\" style=\"max-width: 30%; margin-left: 120px;\">\n        </div>\n      </div>\n    </header>\n    <div class=\"col-12\" >\n      <div class=\"row\">\n        <div class=\"col s12 mt-2\">\n          <form>\n            <div class=\"input-field col s12\">\n              <input type=\"text\" placeholder=\"Asunto:\" class=\"validate\" id=\"asunto\">\n            </div>\n            <div class=\"input-field col s12\">\n              <textarea class=\"materialize-textarea\" placeholder=\"Comentarios:\" class=\"validate\" rows=\"5\" id=\"comentarios\"></textarea>\n            </div>\n            <button type=\"button\" onclick=\"sendComentario()\" class=\"btn btn-success right\" role=\"button\"> Enviar<i class=\"material-icons right\">send</i></button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>";
},"useData":true});
templates['slider'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "  <div class=\"h-img-slide\"><img src=\""
    + container.escapeExpression((helpers.splitUrl || (depth0 && depth0.splitUrl) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.imagen : depth0),{"name":"splitUrl","hash":{},"data":data}))
    + "\"></div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['terminos'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!-- Simple header with fixed tabs. -->\n  <div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs\" >\n    <header class=\"mdl-layout__header\">\n      <div class=\"mdl-layout__header-row marg-head\">\n        <!-- Colored FAB button with ripple -->\n        <button class=\"mdl-button mdl-js-button mdl-button--icon\">\n          <a onclick=\"closeTerminos()\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a>\n        </button>\n        <div class=\"col-12\">\n          <img src=\"images/logo_quehacerhoy.png\" style=\"max-width: 30%; margin-left: 120px;\">\n        </div>\n      </div>\n    </header>\n    <div class=\"col-12\" >\n      <div class=\"row\">\n        <div class=\"col s12 mt-4\">\n          <div class=\"content-terminos\"> \n            <h5> CONDICIONES DE USO Y POLÍTICA DE PRIVACIDAD PARA APLICACIONES MÓVILES Y ACCESO DESDE DISPOSITIVOS MÓVILES <br><br>\n              [QUE HACER TABASCO] <br><br>\n              CONDICIONES GENERALES DE USO</h5>\n              <p>\n              El presente documento tiene por objeto establecer las Condiciones Generales de Uso de la aplicación móvil “Que Hacer Tabasco” de la empresa Rubik estrategia digital, con domicilio social en la ciudad de Villahermosa, Tabasco México, calle Av.27 de febrero, colonia Tabasco 2000. \n              Rubik se reserva el derecho a modificar las presentes Condiciones de Uso con el objeto de adecuarlas a la legislación vigente aplicable en cada momento. Las presentes Condiciones de Uso no excluyen la posibilidad de que determinados Servicios de las aplicaciones, por sus características particulares, sean sometidos, además de a las Condiciones Generales de Uso, a sus propias condiciones particulares de uso.\n              La Empresa podrá, en cualquier momento y sin necesidad de previo aviso, realizar cambios y actualizaciones de las presentes Condiciones de Uso y de la Política de Privacidad. Estos cambios serán publicados en la Web y en la Aplicación y serán efectivos desde el momento de su publicación.\n              Como consecuencia de lo anterior, el Usuario deberá revisar periódicamente si hay cambios en estas Condiciones y, tanto si existe consentimiento expreso como si no, si el Usuario continúa usando el Servicio tras la publicación, ello implica la aceptación y asunción de los mismos. En caso de que no esté de acuerdo con las actualizaciones de las Condiciones de uso o de la Política de Privacidad, podrá renunciar dejando de usar el Servicio.\n              El acceso y descarga de la aplicación es gratuito salvo en lo relativo al coste de la conexión a través de la red de telecomunicaciones suministrada por el proveedor de acceso contratado por los usuarios. </p>\n            \n            <h6> USO DE LA APLICACIÓN MÓVIL Y SUS SERVICIOS </h6>\n              <p> El Usuario reconoce y acepta que el uso de los contenidos y/o servicios ofrecidos por la presente aplicación móvil será bajo su exclusivo riesgo y/o responsabilidad. El Usuario se compromete a utilizar la presente aplicación móvil y todo su contenido y Servicios de conformidad con la ley, la moral, el orden público y las presentes Condiciones de Uso, y las Condiciones Particulares que, en su caso, le sean de aplicación. Asimismo, se compromete hacer un uso adecuado de los servicios y/o contenidos de la aplicación móvil y a no emplearlos para realizar actividades ilícitas o constitutivas de delito, que atenten contra los derechos de terceros y/o que infrinjan la regulación sobre propiedad intelectual e industrial, o cualesquiera otras normas del ordenamiento jurídico aplicable.\n              El usuario deberá contar con un dispositivo móvil inteligente (Smartphone) o Tableta con sistema operativo Android o IOS, cualquiera de estos con acceso a internet, ambos seguros y confiables.\n              En la forma permitida por la ley, los materiales de la aplicación se suministran sin garantía de ningún género, expresa o implícita, incluyendo sin limitación las garantías de calidad satisfactoria, comerciabilidad, adecuación para un fin particular o no infracción, por tanto, Rubik no garantiza el funcionamiento adecuado en los distintos sistemas operativos o dispositivos en los cuales se haga uso de la aplicación.\n              Para acceder a la aplicación, el usuario deberá contar con una cuenta personal de Facebook, por medio del cual podrá iniciar sesión en la aplicación Que Hacer Tabasco, y de dicha cuenta de Facebook serán usados por consentimiento del usuario sus datos para la creación de un ID personal. </p>\n            \n              <h6> OBLIGACIONES DE LOS USUARIOS </h6>\n              <p> El Usuario se obliga a usar la aplicación y los contenidos encontrados en ella de una manera diligente, correcta, lícita y en especial, se compromete a NO realizar las conductas descritas a continuación:</p>\n              <ul> \n                <li> <strong>(a)</strong>	Utilizar los contenidos de forma, con fines o efectos contrarios a la ley, a la moral y a las buenas costumbres generalmente aceptadas o al orden público; </li>\n\n              <li> <strong>(b)</strong>	Reproducir, copiar, representar, utilizar, distribuir, transformar o modificar los contenidos de la aplicación, por cualquier procedimiento o sobre cualquier soporte, total o parcial, o permitir el acceso del público a través de cualquier modalidad de comunicación pública; </li>\n\n              <li><strong> (c)</strong>	Utilizar los contenidos de cualquier manera que entrañen un riesgo de daño o inutilización de la aplicación o de los contenidos o de terceros; </li>\n\n              <li> <strong>(d)</strong>	Suprimir, eludir o manipular el derecho de autor y demás datos identificativos de los derechos de autor incorporados a los contenidos, así como los dispositivos técnicos de protección, o cualesquiera mecanismos de información que pudieren tener los contenidos; </li>\n\n              <li> <strong>(e)</strong>	Utilizar la aplicación y los contenidos con fines lícitos y/o ilícitos, contrarios a lo establecido en estos Términos y Condiciones, o al uso mismo de la aplicación, que sean lesivos de los derechos e intereses de terceros, o que de cualquier forma puedan dañar, inutilizar, sobrecargar o deteriorar la aplicación y los contenidos o impedir la normal utilización o disfrute de esta y de los contenidos por parte de los usuarios. </li>\n\n              <li> <strong>(f)</strong>	Difundir, transmitir o poner a disposición de terceros cualquier tipo de información, elemento o contenido que constituya publicidad ilícita o desleal. </li>\n\n              <li> <strong>(g)</strong>	Suplantar a otros usuarios utilizando sus claves de registro a los distintos servicios y/o contenidos de los Portales. </li>\n\n              </ul>\n            \n              <h6> PROPIEDAD INTELECTUAL E INDUSTRIAL </h6>\n              <p> Rubik se reserva todos los derechos sobre la marca Que Hacer Tabasco, nombre comercial o demás signos distintivos, las patentes, y la propiedad intelectual, con respecto al contenido y diseño de la aplicación.\n              Todos los contenidos de la misma, incluyendo sin carácter limitativo, textos, gráficos, imágenes, su diseño y los derechos de propiedad intelectual que pudieran corresponder al contenido de cada empresa, así como las marcas, nombres comerciales o cualquier otro signo distintivo son propiedad de cada uno de los clientes ingresados en la aplicación, quedando reservados todos los derechos sobre los mismos. </p>\n              <h6> EXCLUSION DE GARANTÍAS. RESPONSABILIDAD </h6>\n              <p> Rubik no garantiza en todo momento la disponibilidad de acceso y continuidad del funcionamiento de la presente aplicación móvil y de sus servicios, por lo que Rubik no será responsable, con los límites establecidos en el Ordenamiento Jurídico vigente, de los daños y perjuicios causados al Usuario como consecuencia de la indisponibilidad, fallos de acceso y falta de continuidad de la presente aplicación móvil y sus Servicios.\n              La descarga, acceso y uso de la aplicación en los dispositivos móviles o similares, no implica la obligación por parte de Rubik de controlar la ausencia de virus, gusanos o cualquier otro elemento informático dañino. Corresponde al Usuario, en todo caso, la disponibilidad de herramientas adecuadas para la detección y desinfección de programas informáticos dañinos. </p>\n              <h6> POLITICA PRIVACIDAD </h6>\n              <p> Rubik desea poner en conocimiento de los usuarios y clientes de la aplicación, la política llevada a cabo respecto al tratamiento de todos los datos de carácter personal que por la utilización de las funciones de la/s aplicación/es se faciliten a la empresa. </p>\n              <h6> FINALIDAD DEL FICHERO </h6>\n              <p> Todos los datos que se solicitan a los usuarios y clientes a través de la aplicación para dispositivos móviles serán necesarios para prestar el servicio objeto del servicio en virtud del cual se ha procedido a la descarga e instalación de la aplicación en los correspondientes dispositivos. </p>\n              <h6> CONSENTIMIENTO </h6>\n              <p> La utilización de la aplicación dará lugar al tratamiento de datos de carácter personal que Rubik, en su caso, llevará a cabo de acuerdo con las normas y procedimientos internos establecidos al efecto, que son conocidos por los clientes y usuarios y autorizados por éstos. </p>\n              <h6> GARANTÍA Y PROTECCIÓN DE DATOS</h6>\n              <p> En el tratamiento de los datos de carácter personal, Rubik se compromete a garantizar y proteger las libertades públicas y los derechos fundamentales de las personas físicas de los ficheros y, especialmente, su honor y su intimidad familiar y personal, obligándose en este sentido, a efectuar el correspondiente tratamiento de datos de acuerdo con la normativa vigente en cada momento y a guardar el más absoluto secreto en relación con la información entregada por los clientes y usuarios. <br>\n              Los datos de carácter personal objeto de tratamiento no se utilizarán para otras finalidades que no se encuentren aquí recogidas o, en su caso, por otro documento o contrato que vinculase a ambas partes con condiciones particulares. </p>\n              <h6> EJERCICIO DE LOS DERECHOS DE ACCESO, RECTIFICACIÓN, CANCELACIÓN Y OPOSICIÓN</h6>\n              <p> Rubik informa de que los usuarios podrán ejercitar los derechos de acceso, rectificación, cancelación y oposición mediante el envío de un correo electrónico a correo de la empresa. </p>\n              <h6> MENORES DE EDAD </h6>\n              <p> Con carácter general, para hacer uso de los Servicios de la presente aplicación móvil los menores de edad deben haber obtenido previamente la autorización de sus padres, tutores o representantes legales, quienes serán responsables de todos los actos realizados a través de la presente aplicación móvil por los menores a su cargo. </p>\n              <h6> DURACIÓN Y TERMINACIÓN </h6>\n              <p> La prestación de los servicios y/o contenidos de la presente aplicación móvil tiene una duración indefinida. Sin perjuicio de lo anterior, Rubik está facultada para dar por terminada, suspender o interrumpir unilateralmente, en cualquier momento y con la necesidad de un preaviso, la prestación del servicio y de la presente aplicación móvil y/o de cualquiera de los servicios, sin perjuicio de lo que se hubiera dispuesto al respecto en las correspondientes condiciones particulares. </p>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>";
},"useData":true});
})();
