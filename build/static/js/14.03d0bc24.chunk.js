(this.webpackJsonpdemo1=this.webpackJsonpdemo1||[]).push([[14],{1125:function(e,a,t){"use strict";t.d(a,"d",(function(){return c})),t.d(a,"a",(function(){return i})),t.d(a,"f",(function(){return s})),t.d(a,"c",(function(){return o})),t.d(a,"b",(function(){return u})),t.d(a,"e",(function(){return d}));var n=t(39),l=t.n(n),r="https://api.thecrmnetwork.com";function c(e){return l.a.get("".concat(r,"/").concat("api/config/leadsource","/").concat(e))}function i(e){return l.a.post("".concat(r,"/").concat("api/config/leadsource"),e)}function s(e){return l.a.patch("".concat(r,"/").concat("api/config/leadsource"),e)}function o(e){return l.a.delete("".concat(r,"/").concat("api/config/leadsource","/").concat(e))}function u(e){return l.a.post("".concat(r,"/").concat("api/config/leadsource/assign"),e)}function d(e){return l.a.get("".concat(r,"/").concat("api/config/leadsource/users","/").concat(e))}},1131:function(e,a,t){"use strict";t.d(a,"c",(function(){return c})),t.d(a,"a",(function(){return i})),t.d(a,"d",(function(){return s})),t.d(a,"b",(function(){return o}));var n=t(39),l=t.n(n),r="https://api.thecrmnetwork.com";function c(e){return l.a.get("".concat(r,"/").concat("api/config/leadstatus","/").concat(e))}function i(e){return l.a.post("".concat(r,"/").concat("api/config/leadstatus"),e)}function s(e){return l.a.patch("".concat(r,"/").concat("api/config/leadstatus"),e)}function o(e){return l.a.delete("".concat(r,"/").concat("api/config/leadstatus","/").concat(e))}},1139:function(e,a,t){"use strict";var n=t(17),l=t(18),r=t(217),c=t(21),i=t(22),s=t(0),o=t.n(s),u=t(453),d=t(454),m=t(461),h=t(621),p=t(1125),f=function(e){Object(i.a)(t,e);var a=Object(c.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).handleSelectLeadSource=l.handleSelectLeadSource.bind(Object(r.a)(l)),l.state={leadData:[],leadSourceId:l.props.currentLeadSource.leadSourceId},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getLeadsSource(),this.setState({leadSourceId:this.props.currentLeadSource.leadSourceId})}},{key:"getLeadsSource",value:function(){var e=this;Object(p.d)().then((function(a){return e.setState({leadData:a.data})})).catch((function(e){return console.log(e)}))}},{key:"handleSelectLeadSource",value:function(e){this.setState({leadSourceId:e.target.value}),this.props.getSelectedLeadSource(e.target.value)}},{key:"render",value:function(){return o.a.createElement(u.a,{margin:"dense",variant:"outlined",style:{width:"100%"}},o.a.createElement(d.a,{id:"labelLeadSource"},"Lead Source"),o.a.createElement(m.a,{labelId:"labelLeadSource",value:this.props.currentLeadSource.leadSourceId,onChange:this.handleSelectLeadSource.bind(this),label:"Lead Source",name:"leadSourceId"},o.a.createElement(h.a,null,o.a.createElement("em",null,"Select Lead Source")),console.log(this.state.leadData),this.state.leadData.map((function(e){return o.a.createElement(h.a,{key:e.id,value:e.id},e.leadSourceName)}))))}}]),t}(o.a.Component);a.a=f},1140:function(e,a,t){"use strict";t.d(a,"c",(function(){return c})),t.d(a,"b",(function(){return i})),t.d(a,"d",(function(){return s})),t.d(a,"e",(function(){return o})),t.d(a,"a",(function(){return u}));var n=t(39),l=t.n(n),r="https://api.thecrmnetwork.com";function c(){return l.a.get("".concat(r,"/").concat("api/lead/tableview"))}function i(e){return l.a.get("".concat(r,"/").concat("api/lead","/").concat(e))}function s(e){return l.a.post("".concat(r,"/").concat("api/lead"),e)}function o(e){return l.a.patch("".concat(r,"/").concat("api/lead"),e)}function u(e){return l.a.delete("".concat(r,"/").concat("api/lead","/").concat(e))}},1165:function(e,a,t){"use strict";var n=t(78),l=t(17),r=t(18),c=t(217),i=t(21),s=t(22),o=t(0),u=t.n(o),d=t(365),m=t(453),h=t(1139),p=t(37),f=t.n(p),g=t(87),v=t(454),b=t(461),E=t(621),S=t(1131),k=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).getLeadStatusList=Object(g.a)(f.a.mark((function e(){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.c)(n.props.businessId);case 2:a=e.sent,n.setState({leadStatusList:a.data});case 4:case"end":return e.stop()}}),e)}))),n.handleSelectLeadStatus=n.handleSelectLeadStatus.bind(Object(c.a)(n)),n.state={leadData:[],leadStatusId:n.props.currentLeadStatus.leadStatusId,listStatusList:[]},n}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.setState({leadStatusId:this.props.currentLeadStatus.leadStatusId}),this.getLeadStatusList()}},{key:"handleSelectLeadStatus",value:function(e){this.setState({leadStatusId:e.target.value}),this.props.getSelectedLeadStatus(e.target.value)}},{key:"render",value:function(){var e,a;return u.a.createElement(m.a,{margin:"dense",variant:"outlined",style:{width:"100%"}},u.a.createElement(v.a,{id:"labelLeadStatus"},"Lead Status"),u.a.createElement(b.a,{labelId:"labelLeadSource",value:this.props.currentLeadStatus.leadStatusId,onChange:this.handleSelectLeadStatus.bind(this),label:"Lead Status",name:"leadStatusId"},u.a.createElement(E.a,{value:"0"},u.a.createElement("em",null,"Select Lead Status")),null===(e=this.state)||void 0===e||null===(a=e.leadStatusList)||void 0===a?void 0:a.map((function(e){return u.a.createElement(E.a,{key:e.id,value:e.id},e.leadStatusName)}))))}}]),t}(u.a.Component),L=t(1140),C=t(52),y=t(445),N=t(488),I=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(e){var r;Object(l.a)(this,t),r=a.call(this,e);var i=new Date;return r.state=Object(n.a)({firstName:"",leadSourceId:"4PDvakaYzWg.",companyName:"",ssn:"",equiment:"",email:"",phone:"",description:"",lastName:"",receivedDate:"",leadStatusId:"JR1zcprJkUs.",estimatedtBilling:"",isdcode:"",mobile:"",note:""},"receivedDate",i.toISOString()),r.handleChange=r.handleChange.bind(Object(c.a)(r)),r.handleReceivedDate=r.handleReceivedDate.bind(Object(c.a)(r)),r.handleSelectLeadSource=r.handleSelectLeadSource.bind(Object(c.a)(r)),r.handleSelectLeadStatus=r.handleSelectLeadStatus.bind(Object(c.a)(r)),r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.leadsourceId;"undefined"!==typeof a&&Object(L.b)(a).then((function(a){var t=a.data;e.setState(t)})).catch((function(e){return console.log(e)}))}},{key:"handleChange",value:function(e){if("details"!==this.props.modalType){var a=e.target.name,t=this.state;t[a]=e.target.value,this.setState(t),this.props.getFormData(t)}}},{key:"handleReceivedDate",value:function(e){if("details"!==this.props.modalType){var a=this.state;a.receivedDate=e.toISOString(),this.setState(a),this.props.getFormData(a)}}},{key:"handleSelectLeadSource",value:function(e){if("details"!==this.props.modalType){var a=this.state;a.leadSourceId=e,this.setState(a),this.props.getFormData(a)}}},{key:"handleSelectLeadStatus",value:function(e){if("details"!==this.props.modalType){var a=this.state;this.setState(a),this.props.getFormData(a)}}},{key:"render",value:function(){return u.a.createElement("form",{autoComplete:"off"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-6"},u.a.createElement("div",{className:"form-group mb-0"},u.a.createElement(d.a,{margin:"normal",label:"First name",variant:"outlined",className:"kt-width-full",name:"firstName",value:this.state.firstName,onChange:this.handleChange,fullWidth:!0,InputLabelProps:{shrink:!0},size:"small"})),u.a.createElement("div",{className:"form-group mb-0",style:{paddingTop:"16px",paddingBottom:"8px"}},u.a.createElement(h.a,{currentLeadSource:{leadSourceId:this.state.leadSourceId},getSelectedLeadSource:this.handleSelectLeadSource})),u.a.createElement("div",{className:"form-group mb-1"},u.a.createElement(d.a,{margin:"normal",label:"Company Name",variant:"outlined",className:"kt-width-full",name:"companyName",value:this.state.companyName,onChange:this.handleChange,fullWidth:!0,InputLabelProps:{shrink:!0},size:"small"})),u.a.createElement("div",{className:"form-group mb-0"},u.a.createElement(d.a,{margin:"normal",label:"SSN",variant:"outlined",className:"kt-width-full",name:"ssn",value:this.state.ssn,onChange:this.handleChange,fullWidth:!0,InputLabelProps:{shrink:!0},size:"small"})),u.a.createElement("div",{className:"form-group mb-0"},u.a.createElement(d.a,{margin:"normal",label:"Equiment",variant:"outlined",className:"kt-width-full",name:"equiment",value:this.state.equiment,onChange:this.handleChange,fullWidth:!0,InputLabelProps:{shrink:!0},size:"small"})),u.a.createElement("div",{className:"form-group mb-0"},u.a.createElement(d.a,{margin:"normal",label:"Email",variant:"outlined",className:"kt-width-full",name:"email",value:this.state.email,onChange:this.handleChange,fullWidth:!0,InputLabelProps:{shrink:!0},size:"small"})),u.a.createElement("div",{className:"form-group mb-0"},u.a.createElement(d.a,{margin:"normal",label:"Phone",variant:"outlined",className:"kt-width-full",name:"phone",value:this.state.phone,onChange:this.handleChange,fullWidth:!0,InputLabelProps:{shrink:!0},size:"small"})),u.a.createElement("div",{className:"form-group mb-0"},u.a.createElement(d.a,{margin:"normal",label:"Description",variant:"outlined",multiline:!0,rows:"4",className:"kt-width-full",name:"description",value:this.state.description,onChange:this.handleChange,fullWidth:!0,InputLabelProps:{shrink:!0},size:"small"}))),u.a.createElement("div",{className:"col-md-6"},u.a.createElement("div",{className:"form-group mb-0"},u.a.createElement(d.a,{margin:"normal",label:"Last name",variant:"outlined",className:"kt-width-full",name:"lastName",value:this.state.lastName,onChange:this.handleChange,fullWidth:!0,InputLabelProps:{shrink:!0},size:"small"})),u.a.createElement(m.a,{margin:"dense",style:{width:"100%"}},u.a.createElement("div",{className:"form-group mb-0",style:{paddingTop:"0px",paddingBottom:"0px",marginBottom:"0px"}},u.a.createElement(C.a,{utils:N.default},u.a.createElement(y.b,{margin:"normal",id:"receivedDate",name:"receivedDate",label:"Lead Receive Date",format:"MM-dd-yyyy",value:this.state.receivedDate,onChange:this.handleReceivedDate,KeyboardButtonProps:{"aria-label":"change date"},style:{paddingTop:"0px",paddingBottom:"0 px"}})))),u.a.createElement("div",{className:"form-group mb-0",style:{paddingTop:"0px",paddingBottom:"8px"}},u.a.createElement(k,{currentLeadStatus:{leadStatusId:this.state.leadStatusId},getSelectedLeadStatus:this.handleSelectLeadStatus,businessId:this.props.businessId})),u.a.createElement("div",{className:"form-group mb-0"},u.a.createElement(d.a,{margin:"normal",label:"Number of location",variant:"outlined",className:"kt-width-full",name:"noOfLocation",type:"number",value:this.state.number,onChange:this.handleChange,fullWidth:!0,InputLabelProps:{shrink:!0},size:"small"})),u.a.createElement("div",{className:"form-group mb-0"},u.a.createElement(d.a,{margin:"normal",label:"Estimated Billing",variant:"outlined",className:"kt-width-full",name:"estimatedtBilling",value:this.state.estimatedtBilling,onChange:this.handleChange,fullWidth:!0,InputLabelProps:{shrink:!0},size:"small"})),u.a.createElement("div",{className:"form-group mb-0"},u.a.createElement(d.a,{margin:"normal",label:"ISD Code",variant:"outlined",className:"kt-width-full",name:"isdcode",value:this.state.isdcode,onChange:this.handleChange,fullWidth:!0,InputLabelProps:{shrink:!0},size:"small"})),u.a.createElement("div",{className:"form-group mb-0"},u.a.createElement(d.a,{margin:"normal",label:"ISD Code",variant:"outlined",className:"kt-width-full",name:"mobile",value:this.state.mobile,onChange:this.handleChange,fullWidth:!0,InputLabelProps:{shrink:!0},size:"small"})),u.a.createElement("div",{className:"form-group mb-0"},u.a.createElement(d.a,{margin:"normal",label:"Notes",variant:"outlined",multiline:!0,rows:"4",className:"kt-width-full",name:"note",value:this.state.note,onChange:this.handleChange,fullWidth:!0,InputLabelProps:{shrink:!0},size:"small"})))))}}]),t}(u.a.Component);a.a=I},1363:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(193),c=t(37),i=t.n(c),s=t(87),o=t(44),u=t(388),d=t(1104),m=t(1075),h=t(1107),p=t(1188),f=t(15),g=t.n(f),v=t(1076);function b(){return(b=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function E(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var S=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)a.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(t[n[l]]=e[n[l]])}return t},k=function(e){return n.createElement(v.a,null,(function(a){var t,l=a.getPrefixCls,r=e.prefixCls,c=e.type,i=void 0===c?"horizontal":c,s=e.orientation,o=void 0===s?"center":s,u=e.className,d=e.children,m=e.dashed,h=S(e,["prefixCls","type","orientation","className","children","dashed"]),p=l("divider",r),f=o.length>0?"-".concat(o):o,v=g()(u,p,"".concat(p,"-").concat(i),(E(t={},"".concat(p,"-with-text").concat(f),d),E(t,"".concat(p,"-dashed"),!!m),t));return n.createElement("div",b({className:v},h,{role:"separator"}),d&&n.createElement("span",{className:"".concat(p,"-inner-text")},d))}))},L=t(1165),C=t(39),y=t.n(C);var N=function(e){var a=Object(n.useState)(!1),t=Object(o.a)(a,2),r=t[0],c=t[1],f=Object(n.useState)(""),g=Object(o.a)(f,2),v=g[0],b=g[1],E=function(e){e.persist(),v.length>=13||b(v+e.target.innerText)},S=function(){var e=Object(s.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("calling",v),e.next=3,t=v,n="testing",y.a.post("".concat("https://api.thecrmnetwork.com","/").concat("api/twilio/voicecall"),{phoneNo:t,voiceMessage:n});case 3:a=e.sent,console.log(a);case 5:case"end":return e.stop()}var t,n}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{size:"sm",dialogClassName:"modal-90w",show:r,onHide:function(){c(!1)}},l.a.createElement(u.a.Header,{closeButton:!0},l.a.createElement(u.a.Title,null,"Dialpad")),l.a.createElement(u.a.Body,null,l.a.createElement(d.a,null,l.a.createElement(m.a,{xs:12},l.a.createElement(h.a,{bodyStyle:{padding:0}},l.a.createElement("h1",null,v))),l.a.createElement(m.a,{xs:12},l.a.createElement("hr",null)),l.a.createElement(m.a,{xs:4},l.a.createElement(p.a,{size:"large",block:!0,onClick:E},"7")),l.a.createElement(m.a,{xs:4},l.a.createElement(p.a,{size:"large",block:!0,onClick:E},"8")),l.a.createElement(m.a,{xs:4},l.a.createElement(p.a,{size:"large",block:!0,onClick:E},"9")),l.a.createElement(m.a,{xs:12},l.a.createElement("hr",null)),l.a.createElement(m.a,{xs:4},l.a.createElement(p.a,{size:"large",block:!0,onClick:E},"4")),l.a.createElement(m.a,{xs:4},l.a.createElement(p.a,{size:"large",block:!0,onClick:E},"5")),l.a.createElement(m.a,{xs:4},l.a.createElement(p.a,{size:"large",block:!0,onClick:E},"6")),l.a.createElement(m.a,{xs:12},l.a.createElement("hr",null)),l.a.createElement(m.a,{xs:4},l.a.createElement(p.a,{size:"large",block:!0,onClick:E},"1")),l.a.createElement(m.a,{xs:4},l.a.createElement(p.a,{size:"large",block:!0,onClick:E},"2")),l.a.createElement(m.a,{xs:4},l.a.createElement(p.a,{size:"large",block:!0,onClick:E},"3")),l.a.createElement(m.a,{xs:12},l.a.createElement("hr",null)),l.a.createElement(m.a,{xs:4},l.a.createElement(p.a,{size:"large",block:!0,onClick:E},"+")),l.a.createElement(m.a,{xs:4},l.a.createElement(p.a,{size:"large",block:!0,onClick:E},"0")),l.a.createElement(m.a,{xs:4},l.a.createElement(p.a,{size:"large",block:!0,onClick:function(){b("")}},"Clear")),l.a.createElement(m.a,{xs:12},l.a.createElement("hr",null)),l.a.createElement(m.a,{xs:12},l.a.createElement(p.a,{size:"large",block:!0,onClick:S},"CALL"))))),l.a.createElement(d.a,null,l.a.createElement(m.a,{md:8},l.a.createElement("div",{className:"mt-3"},l.a.createElement(h.a,null,l.a.createElement("h4",null,"Lead Detail"),l.a.createElement(L.a,{getFormData:function(e){e}}),l.a.createElement(p.a,{color:"danger"},"Save")))),l.a.createElement(m.a,{md:1},l.a.createElement(k,{type:"vertical"})),l.a.createElement(m.a,null,l.a.createElement("h4",null,"Files"),l.a.createElement("div",{className:"mt-3"},l.a.createElement(h.a,null,"image.jpg",l.a.createElement("hr",null),l.a.createElement(p.a,null,"Upload files"))),l.a.createElement("br",null),l.a.createElement("h4",null,"Call logs"),l.a.createElement("div",{className:"mt-3"},l.a.createElement(h.a,null,"No Data")))))};function I(){return l.a.createElement(r.g,null,l.a.createElement(r.c,{exact:!0,from:"/",to:"/scheduled-calls"}),l.a.createElement(r.d,{path:"/scheduled-calls",component:N}))}t.d(a,"default",(function(){return I}))}}]);
//# sourceMappingURL=14.03d0bc24.chunk.js.map