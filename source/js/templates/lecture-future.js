var Handlebars = require("handlebars");module.exports = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"schedule__row\">\n    <div class=\"schedule__col schedule__col--blue schedule__col--wide\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</div>\n    <div class=\"schedule__col schedule__col--medium\">"
    + alias3(((helper = (helper = helpers.school || (depth0 != null ? depth0.school : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"school","hash":{},"data":data}) : helper)))
    + "</div>\n    <div class=\"schedule__col schedule__col--blue\">"
    + alias3(((helper = (helper = helpers.teacher || (depth0 != null ? depth0.teacher : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"teacher","hash":{},"data":data}) : helper)))
    + "</div>\n    <div class=\"schedule__col\">"
    + alias3(((helper = (helper = helpers.classroom || (depth0 != null ? depth0.classroom : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"classroom","hash":{},"data":data}) : helper)))
    + "</div>\n    <div class=\"schedule__col\">"
    + alias3(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"date","hash":{},"data":data}) : helper)))
    + "</div>\n</div>";
},"useData":true});