var Handlebars = require("handlebars");module.exports = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"schedule__row\">\n    <div class=\"schedule__col schedule__col--blue schedule__col--wide\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</div>\n    <div class=\"schedule__col schedule__col--medium\">"
    + alias4(((helper = (helper = helpers.school || (depth0 != null ? depth0.school : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"school","hash":{},"data":data}) : helper)))
    + "</div>\n    <div class=\"schedule__col schedule__col--blue\">"
    + alias4(((helper = (helper = helpers.teacher || (depth0 != null ? depth0.teacher : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"teacher","hash":{},"data":data}) : helper)))
    + "</div>\n    <div class=\"schedule__col\">"
    + alias4(((helper = (helper = helpers.classroom || (depth0 != null ? depth0.classroom : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"classroom","hash":{},"data":data}) : helper)))
    + "</div>\n    <div class=\"schedule__col\">"
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</div>\n</div>";
},"useData":true});