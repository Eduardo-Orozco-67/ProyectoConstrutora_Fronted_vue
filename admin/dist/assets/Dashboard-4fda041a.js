import{a as p}from"./axios-47b9d439.js";import{r as h,o as R,a as g,b,c as m,d as i,e,w as s,f as F,g as l,t as r,F as C,h as A}from"./index-e9023bbb.js";const M={class:"grid"},T=F('<div class="col-12 lg:col-6 xl:col-3"><div class="card mb-0"><div class="flex justify-content-between mb-3"><div><span class="block text-500 font-medium mb-3">Clientes</span><div class="text-900 font-medium text-xl">0</div></div><div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width:2.5rem;height:2.5rem;"><i class="pi pi-user text-blue-500 text-xl"></i></div></div><span class="text-green-500 font-medium">0 nuevos </span><span class="text-500">desde la última visita</span></div></div><div class="col-12 lg:col-6 xl:col-3"><div class="card mb-0"><div class="flex justify-content-between mb-3"><div><span class="block text-500 font-medium mb-3">Usuarios conectados</span><div class="text-900 font-medium text-xl">0</div></div><div class="flex align-items-center justify-content-center bg-cyan-100 border-round" style="width:2.5rem;height:2.5rem;"><i class="pi pi-eye text-cyan-500 text-xl"></i></div></div><span class="text-green-500 font-medium">0 </span><span class="text-500">Recientemente</span></div></div>',2),L={class:"col-12 xl:col-12"},B={class:"card"},U=i("h5",null,"Solicitudes en espera",-1),O={class:"col-12 xl:col-12"},V={class:"card"},J=i("h5",null,"Proyectos con mas del 50% de avance",-1),W={class:"col-12 xl:col-12"},q={class:"card"},G=i("h5",null,"Proyectos aceptados",-1),H={class:"col-12 xl:col-12"},K={class:"card"},Q=i("h5",null,"Proyectos con prioridad Alta",-1),X=i("div",{class:"col-12 xl:col-6"},null,-1),oe={__name:"Dashboard",setup(Y){const f=h(null),w=h([]),S=h([]),k=h([]),P=h([]),u=h(null),x=async()=>{try{const t=await p.get(`https://api-constructora.onrender.com/solicitud_proyecto/ver-todas?jsonwebtoken=${u.value}`);w.value=t.data.filter(c=>c.estado==="en espera")}catch(t){console.error("Error al obtener los datos de la API",t)}},E=async()=>{try{const t=await p.get(`https://api-constructora.onrender.com/reportes/proyectos-50/?jsonwebtoken=${u.value}`);S.value=t.data}catch(t){console.error("Error al obtener los datos de la API",t)}},$=async()=>{try{const t=await p.get(`https://api-constructora.onrender.com/reportes/proyectos-aceptados/?jsonwebtoken=${u.value}`);k.value=t.data}catch(t){console.error("Error al obtener los datos de la API",t)}},D=async()=>{try{const t=await p.get(`https://api-constructora.onrender.com/reportes/proyectos-prioridad/?jsonwebtoken=${u.value}`);P.value=t.data}catch(t){console.error("Error al obtener los datos de la API",t)}},I=async()=>{const t={username:"admin",password:"secretaacces123"};try{const c=await p.post("https://api-constructora.onrender.com/token",{username:t.username,password:t.password},{headers:{"Content-Type":"application/json"}});u.value=c.data.access_token,p.defaults.headers.common.Authorization=`Bearer ${u.value}`,x(),E(),$(),D()}catch(c){console.error("Error al obtener el token JWT",c),c.response&&console.error("Respuesta del servidor:",c.response.data)}};R(()=>{I(),f.value=h("toast")});const d=t=>t.toLocaleString("en-US",{style:"currency",currency:"USD"}),v=(t,c,o)=>{f.value&&f.value.add({severity:o,summary:t,detail:c,life:5e3})},j=async t=>{const c=t.folio_solicitud,o=encodeURIComponent("aceptado");try{const n=await p.patch(`https://api-constructora.onrender.com/solicitud_proyecto/actualizar-estado/${c}?estado=${o}&jsonwebtoken=${u.value}`);console.log("Aceptar solicitud:",t),console.log("Respuesta de la API:",n.data),x(),v("Solicitud aceptada","La solicitud ha sido aceptada","success")}catch(n){console.error("Error al aceptar la solicitud",n),v("Error","No se pudo aceptar la solicitud","error")}},z=async t=>{const c=t.folio_solicitud,o=encodeURIComponent("rechazado");try{const n=await p.patch(`https://api-constructora.onrender.com/solicitud_proyecto/actualizar-estado/${c}?estado=${o}&jsonwebtoken=${u.value}`);console.log("Rechazar solicitud:",t),console.log("Respuesta de la API:",n.data),x(),v("Solicitud rechazada","La solicitud ha sido rechazada","error")}catch(n){console.error("Error al rechazar la solicitud",n),v("Error","No se pudo rechazar la solicitud","error")}};return(t,c)=>{const o=g("Column"),n=g("Button"),y=g("DataTable"),N=g("Toast");return b(),m("div",M,[T,i("div",L,[i("div",B,[U,e(y,{value:w.value,paginator:!0,rows:5,rowsPerPageOptions:[5,10,25],responsiveLayout:"scroll"},{default:s(()=>[e(o,{field:"id_solicitud",header:"ID Solicitud",sortable:!0}),e(o,{field:"nombre_empresa",header:"Nombre de empresa",sortable:!0}),e(o,{field:"fecha",header:"Fecha",sortable:!0}),e(o,{field:"monto_presupuesto",header:"Monto de Presupuesto",sortable:!0},{body:s(a=>[l(r(d(a.data.monto_presupuesto)),1)]),_:1}),e(o,{field:"monto_anticipo",header:"Monto de Anticipo",sortable:!0},{body:s(a=>[l(r(d(a.data.monto_anticipo)),1)]),_:1}),e(o,{field:"folio_solicitud",header:"Folio de Solicitud",sortable:!0}),e(o,{field:"estado",header:"Estado",sortable:!0}),e(o,{style:{width:"150px"}},{header:s(()=>[l(" Aceptar/Rechazar Solicitud ")]),body:s(a=>[e(n,{icon:"pi pi-check-circle",class:"p-button-success p-mr-2",onClick:_=>j(a.data)},null,8,["onClick"]),e(n,{icon:"pi pi-ban",class:"p-button-danger",onClick:_=>z(a.data)},null,8,["onClick"])]),_:1})]),_:1},8,["value"])])]),i("div",O,[i("div",V,[J,e(y,{value:S.value,paginator:!0,rows:5,rowsPerPageOptions:[5,10,25],responsiveLayout:"scroll"},{default:s(()=>[e(o,{field:"id_solicitud",header:"ID Solicitud",sortable:!0}),e(o,{field:"nombre_empresa",header:"Nombre de empresa",sortable:!0}),e(o,{field:"fecha",header:"Fecha",sortable:!0}),e(o,{field:"monto_presupuesto",header:"Monto de Presupuesto",sortable:!0},{body:s(a=>[l(r(d(a.data.monto_presupuesto)),1)]),_:1}),e(o,{field:"monto_anticipo",header:"Monto de Anticipo",sortable:!0},{body:s(a=>[l(r(d(a.data.monto_anticipo)),1)]),_:1}),e(o,{field:"folio_solicitud",header:"Folio de Solicitud",sortable:!0}),e(o,{field:"estado",header:"Estado",sortable:!0}),e(o,{field:"descripcion_solicitud",header:"Descripción de Solicitud",sortable:!0}),e(o,{field:"costo_solicitud",header:"Costo de Solicitud",sortable:!0},{body:s(a=>[l(r(d(a.data.costo_solicitud)),1)]),_:1})]),_:1},8,["value"])])]),i("div",W,[i("div",q,[G,e(y,{value:k.value,paginator:!0,rows:5,rowsPerPageOptions:[5,10,25],responsiveLayout:"scroll"},{default:s(()=>[e(o,{field:"id_solicitud",header:"ID Solicitud",sortable:!0}),e(o,{field:"nombre_empresa",header:"Nombre de empresa",sortable:!0}),e(o,{field:"fecha",header:"Fecha",sortable:!0}),e(o,{field:"monto_presupuesto",header:"Monto de Presupuesto",sortable:!0},{body:s(a=>[l(r(d(a.data.monto_presupuesto)),1)]),_:1}),e(o,{field:"monto_anticipo",header:"Monto de Anticipo",sortable:!0},{body:s(a=>[l(r(d(a.data.monto_anticipo)),1)]),_:1}),e(o,{field:"folio_solicitud",header:"Folio de Solicitud",sortable:!0}),e(o,{field:"estado",header:"Estado",sortable:!0}),e(o,{field:"descripcion_solicitud",header:"Descripción de Solicitud",sortable:!0}),e(o,{field:"costo_solicitud",header:"Costo de Solicitud",sortable:!0},{body:s(a=>[l(r(d(a.data.costo_solicitud)),1)]),_:1}),e(o,{header:"Servicios",sortable:!1},{body:s(a=>[i("ul",null,[(b(!0),m(C,null,A(a.data.servicios,_=>(b(),m("li",null,r(_.servicio)+" - "+r(_.descripcion_servicio),1))),256))])]),_:1})]),_:1},8,["value"])])]),i("div",H,[i("div",K,[Q,e(y,{value:P.value,paginator:!0,rows:5,rowsPerPageOptions:[5,10,25],responsiveLayout:"scroll"},{default:s(()=>[e(o,{field:"id_solicitud",header:"ID Solicitud",sortable:!0}),e(o,{field:"nombre_empresa",header:"Nombre de empresa",sortable:!0}),e(o,{field:"fecha",header:"Fecha",sortable:!0}),e(o,{field:"monto_presupuesto",header:"Monto de Presupuesto",sortable:!0},{body:s(a=>[l(r(d(a.data.monto_presupuesto)),1)]),_:1}),e(o,{field:"monto_anticipo",header:"Monto de Anticipo",sortable:!0},{body:s(a=>[l(r(d(a.data.monto_anticipo)),1)]),_:1}),e(o,{field:"folio_solicitud",header:"Folio de Solicitud",sortable:!0}),e(o,{field:"estado",header:"Estado",sortable:!0}),e(o,{field:"descripcion_solicitud",header:"Descripción de Solicitud",sortable:!0}),e(o,{field:"costo_solicitud",header:"Costo de Solicitud",sortable:!0},{body:s(a=>[l(r(d(a.data.costo_solicitud)),1)]),_:1}),e(o,{header:"Servicios",sortable:!1},{body:s(a=>[i("ul",null,[(b(!0),m(C,null,A(a.data.servicios,_=>(b(),m("li",null,r(_.servicio)+" - "+r(_.descripcion_servicio),1))),256))])]),_:1})]),_:1},8,["value"])])]),X,e(N,{ref_key:"toast",ref:f},null,512)])}}};export{oe as default};