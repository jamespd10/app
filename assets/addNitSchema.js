import{c as a,a as r}from"./array.js";const i=a().shape({ruc:r().trim().required("Favor ingresar el ruc"),razon_social:r().trim().required("Favor ingresar la raz\xF3n social"),tipo_razon:r().trim().nullable(!0),nit:r().trim().required("Favor ingresar el NIT"),usuario:r().trim().nullable(!0),contra:r().trim().nullable(!0),correo:r().trim().nullable(!0),dv:r().trim().nullable(!0).test("check-dv","Favor ingresa dos caracteres",e=>!!(!e||e&&e.length===2))});export{i as a};