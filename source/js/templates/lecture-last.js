var Handlebars = require("handlebars");module.exports = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams) {
    return "              <span>"
    + container.escapeExpression(container.lambda(blockParams[0][0], depth0))
    + "</span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"schedule__row\">\n    <div class=\"schedule__col schedule__col--wide\">\n        <a href=\""
    + alias4(((helper = (helper = helpers.video || (depth0 != null ? depth0.video : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"video","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "\" class=\"schedule__link\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "</a>\n    </div>\n    <div class=\"schedule__col schedule__col--medium\">"
    + alias4(((helper = (helper = helpers.school || (depth0 != null ? depth0.school : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"school","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "</div>\n    <div class=\"schedule__col\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.teacher : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"schedule__col\">"
    + alias4(((helper = (helper = helpers.classroom || (depth0 != null ? depth0.classroom : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"classroom","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "</div>\n    <div class=\"schedule__col\">\n        <a href=\""
    + alias4(((helper = (helper = helpers.video || (depth0 != null ? depth0.video : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"video","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "\" class=\"schedule__button\">Смотреть</a>\n    </div>\n</div>";
},"useData":true,"useBlockParams":true});