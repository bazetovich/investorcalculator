var Handlebars = require("handlebars");module.exports = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <tr>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.cells : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                        </tr>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.numeric : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                                    <td style=\"border-bottom: 1px solid #eaeaea; padding: 14px; text-align: right\">"
    + container.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"value","hash":{},"data":data}) : helper)))
    + "</td>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                                    <td style=\"border-bottom: 1px solid #eaeaea; padding: 14px;\">"
    + container.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"value","hash":{},"data":data}) : helper)))
    + "</td>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <tr>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.cells : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                        </tr>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.col : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                                    <td colspan=\""
    + alias4(((helper = (helper = helpers.col || (depth0 != null ? depth0.col : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"col","hash":{},"data":data}) : helper)))
    + "\" style=\"border-bottom: 1px solid #eaeaea; padding: 14px; text-align: right\" >"
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "</td>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <tr>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.cells : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                        </tr>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.numeric : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(19, data, 0),"data":data})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.col : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(16, data, 0),"data":data})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                                        <td colspan=\""
    + alias4(((helper = (helper = helpers.col || (depth0 != null ? depth0.col : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"col","hash":{},"data":data}) : helper)))
    + "\" style=\"border-bottom: 1px solid #eaeaea; padding: 14px; text-align: right;\" >"
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "</td>\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "                                        <td style=\"border-bottom: 1px solid #eaeaea; padding: 14px; text-align: right; "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.res : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + container.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "</td>\r\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "background: #F9A825; color: #ffffff;";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "                                    <td style=\"border-bottom: 1px solid #eaeaea; padding: 14px; "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.res : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + container.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "</td>\r\n";
},"20":function(container,depth0,helpers,partials,data) {
    return "background: #F9A825; color: #ffffff";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" bgcolor=\"#ffffff\" style=\"min-width: 100%; width: 100%\">\r\n    <tbody>\r\n        <tr>\r\n            <td align=\"center\">\r\n                <table width=\"600\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" align=\"center\" style=\"width: 600px; font-family: sans-serif;\">\r\n                    <tr>\r\n                        <td colspan=\"3\" align=\"left\" border=\"0\" style=\"background: #2196f3; padding: 14px 14px 11px 14px; position: relative; box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24)\">\r\n                            <img src=\"http://www.realestateprofitcalculator.of.by/img/logo.png\" width=\"24\" height=\"24\" alt=\"img\">\r\n                            <span style=\"color: #ffffff; font-size: 16px; float: right; line-height: 1.9; width: 536px;\">Your have got the real estate assessment from "
    + container.escapeExpression(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"author","hash":{},"data":data}) : helper)))
    + "</span>\r\n                        </td>\r\n                    </tr>\r\n\r\n                    <tr>\r\n                        <td colspan=\"3\" style=\"font-weight: bold; color: #636363; padding: 14px; background: #f9f9f9;\">Incomes</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td style=\"border-bottom: 1px solid #eaeaea; padding: 14px; color: #bdbdbd\">Param.</td>\r\n                        <td style=\"border-bottom: 1px solid #eaeaea; padding: 14px; color: #bdbdbd; text-align: right\">Per month</td>\r\n                        <td style=\"border-bottom: 1px solid #eaeaea; padding: 14px; color: #bdbdbd; text-align: right\">Annual</td>\r\n                    </tr>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.incomes : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                    <tr>\r\n                        <td colspan=\"3\" style=\"font-weight: bold; color: #636363; padding: 14px; background: #f9f9f9;\">Expenses</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td style=\"border-bottom: 1px solid #eaeaea; padding: 14px; color: #bdbdbd\">Param.</td>\r\n                        <td style=\"border-bottom: 1px solid #eaeaea; padding: 14px; color: #bdbdbd; text-align: right\">Per month</td>\r\n                        <td style=\"border-bottom: 1px solid #eaeaea; padding: 14px; color: #bdbdbd; text-align: right\">Annual</td>\r\n                    </tr>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.expenses : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                    <tr>\r\n                        <td colspan=\"3\" style=\"font-weight: bold; color: #636363; padding: 14px; background: #f9f9f9;\">Loan details</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td style=\"border-bottom: 1px solid #eaeaea; padding: 14px; color: #bdbdbd\">Param.</td>\r\n                        <td colspan=\"2\" style=\"border-bottom: 1px solid #eaeaea; padding: 14px; color: #bdbdbd; text-align: right\">Value</td>\r\n                    </tr>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.loanDetails : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                    <tr>\r\n                        <td colspan=\"3\" style=\"font-weight: bold; color: #636363; padding: 14px; background: #f9f9f9;\">Cash flow and ratios</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td style=\"border-bottom: 1px solid #eaeaea; padding: 14px; color: #bdbdbd\">Param.</td>\r\n                        <td style=\"border-bottom: 1px solid #eaeaea; padding: 14px; color: #bdbdbd; text-align: right\">Per month</td>\r\n                        <td style=\"border-bottom: 1px solid #eaeaea; padding: 14px; color: #bdbdbd; text-align: right\">Annual</td>\r\n                    </tr>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.results : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </table>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n";
},"useData":true});