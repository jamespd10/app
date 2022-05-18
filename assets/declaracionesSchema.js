import{c as o,a as e,b as i,d as t}from"./array.js";import{c as s}from"./Lazy.js";import{e as m,r as l,d as n}from"./regex.js";const g=o().shape({dv:e().trim().min(2,"Favor ingresar un n\xFAmero de dos decimales").max(2,"Favor ingresar un n\xFAmero de m\xE1ximo 2 d\xEDgitos").required("Favor ingresar el d\xEDgito verificador").test("check","Favor ingresar un n\xFAmero de dos decimales",r=>!!(r&&r.match(m))),no_contribuyente:e().typeError("Favor de ingresar el No. contribuyente").trim().required("Favor de ingresar el No. contribuyente").max(255,"Favor ingresar m\xE1ximo 255 caracteres").matches(l,"Favor ingresar solo n\xFAmeros y/o guion(-)"),municipio:e().trim().required("Favor seleccionar el municipio").test("check-muni","Favor seleccionar un municipio de la lista",r=>!!(r&&["Panam\xE1","San Miguelito","Chorrera"].includes(r))),total_ingresos:i().typeError("Favor de ingresar el total de ingresos").min(0,"El valor debe ser mayor o igual a 0").max(9e10,"Favor ingresar un n\xFAmero de m\xE1ximo 10 d\xEDgitos").required("Favor de ingresar el total de ingresos").test("check-decimal","Favor ingresar m\xE1ximo dos decimales",r=>!!(r===0||r&&r.toString().match(n))),total_licor:i().typeError("Favor de ingresar el total de ingresos por licor").min(0,"El valor debe ser mayor o igual a 0").max(9e10,"Favor ingresar un n\xFAmero de m\xE1ximo 10 d\xEDgitos").required("Favor de ingresar el total de ingresos por licor").test("check-decimal","Favor ingresar m\xE1ximo dos decimales",r=>!!(r===0||r&&r.toString().match(n))),rubros:t().of(o().shape({actividad:e().trim().required("Favor ingresar la actividad"),porcentaje:i().typeError("Favor ingresar el porcentaje").positive("Favor ingresar un n\xFAmero positivo").required("Favor ingresar el valor del rubro")})).typeError("Favor ingresar al menos un rubro").min(1,"Favor ingresar al menos un rubro"),rotulos:s(r=>r.length===1?t().of(o().shape({rotulo:e().trim().nullable().test("check-texto","Favor ingresar un texto",function(a){return!(this.parent.texto&&!a)}),texto:e().trim().nullable().test("check-texto","Favor ingresar un texto",function(a){return!(this.parent.rotulo&&!a)})})).nullable():t().of(o().shape({rotulo:e().trim().required("Favor ingresar un texto"),texto:e().trim().required("Favor ingresar un texto")})).typeError("Favor ingresar un r\xF3tulo").required("Favor llenar todos los campos"))});export{g as d};
