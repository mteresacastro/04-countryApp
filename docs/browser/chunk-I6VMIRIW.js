import{A as f,B as F,C as L,D,E as w,F as X,G as M,H as y,I as N,J as Y,K as Z,O as ee,Q as te,R as ie,S as A,V as O,W as E,Y as ne,a as k,b as z,c as U,d as J,e as C,f as H,g as T,h as G,i as h,j as P,k as K,l as Q,m as B,n as s,o as g,p as u,q as m,r as o,s as t,t as p,u as W,v as b,w as x,x as R,y as a,z as d}from"./chunk-VU3M2JRA.js";var v=(()=>{let e=class e{constructor(n){this.httpClient=n,this.apiUrl="https://restcountries.com/v3.1",this.cacheStore={byCapital:{term:"",countries:[]},byCountries:{term:"",countries:[]},byRegion:{region:"",countries:[]}},this.loadFromLocalStorage()}saveToLocalStorage(){localStorage.setItem("cacheStore",JSON.stringify(this.cacheStore))}loadFromLocalStorage(){localStorage.getItem("cacheStore")&&(this.cacheStore=JSON.parse(localStorage.getItem("cacheStore")))}getCountriesRequest(n){return this.httpClient.get(n).pipe(U(()=>k([])))}searchCountryByAlphaCode(n){return this.httpClient.get(`${this.apiUrl}/alpha/${n}`).pipe(z(r=>r.length>0?r[0]:null),U(()=>k(null)))}searchCapital(n){let r=`${this.apiUrl}/capital/${n}`;return this.getCountriesRequest(r).pipe(C(l=>this.cacheStore.byCapital={term:n,countries:l}),C(()=>this.saveToLocalStorage()))}searchCountry(n){let r=`${this.apiUrl}/name/${n}`;return this.getCountriesRequest(r).pipe(C(l=>this.cacheStore.byCountries={term:n,countries:l}),C(()=>this.saveToLocalStorage()))}searchRegion(n){let r=`${this.apiUrl}/region/${n}`;return this.getCountriesRequest(r).pipe(C(l=>this.cacheStore.byRegion={region:n,countries:l}),C(()=>this.saveToLocalStorage()))}};e.\u0275fac=function(r){return new(r||e)(G(Z))},e.\u0275prov=H({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var pe=i=>["/countries/by",i];function de(i,e){i&1&&(o(0,"div",2),a(1,` No hay pa\xEDses que mostrar
`),t())}function ue(i,e){if(i&1&&(o(0,"tr")(1,"td"),a(2),t(),o(3,"td")(4,"span",5),a(5),t()(),o(6,"td"),p(7,"img",6),t(),o(8,"td"),a(9),t(),o(10,"td"),a(11),t(),o(12,"td"),a(13),L(14,"number"),t(),o(15,"td")(16,"a",7),a(17,"Ver m\xE1s"),t()()()),i&2){let c=e.$implicit,n=e.index;s(2),f(" ",n+1," "),s(3),d(c.flag),s(2),m("src",c.flags.svg,B)("alt",c.name.common),s(2),d(c.name.common),s(2),d(c.capital),s(2),d(D(14,8,c.population)),s(3),m("routerLink",F(10,pe,c.cca3))}}function he(i,e){if(i&1&&(o(0,"table",3)(1,"thead")(2,"tr")(3,"th"),a(4,"#"),t(),o(5,"th"),a(6,"Icono"),t(),o(7,"th"),a(8,"Bandera"),t(),o(9,"th"),a(10,"Nombre"),t(),o(11,"th"),a(12,"Capital"),t(),o(13,"th"),a(14,"Poblaci\xF3n"),t(),p(15,"th"),t()(),o(16,"tbody"),u(17,ue,18,12,"tr",4),t()()),i&2){let c=x();s(17),m("ngForOf",c.countries)}}var I=(()=>{let e=class e{constructor(){this.countries=[]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=h({type:e,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["table",""],["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[1,"country-flag"],[3,"src","alt"],[3,"routerLink"]],template:function(r,l){if(r&1&&u(0,de,2,0,"div",1)(1,he,18,1,"ng-template",null,0,w),r&2){let _=R(2);m("ngIf",l.countries.length===0)("ngIfElse",_)}},dependencies:[M,y,ie,N],styles:['img[_ngcontent-%COMP%]{width:50px}.country-flag[_ngcontent-%COMP%]{font-family:"Noto Color Emoji",sans-serif}']});let i=e;return i})();function fe(i,e){i&1&&p(0,"shared-loading-spinner")}var re=(()=>{let e=class e{constructor(n){this.countriesServices=n,this.countries=[],this.isLoading=!1,this.initialValue=""}ngOnInit(){this.countries=this.countriesServices.cacheStore.byCapital.countries,this.initialValue=this.countriesServices.cacheStore.byCapital.term}searchByCapital(n){this.isLoading=!0,this.countriesServices.searchCapital(n).subscribe(r=>{this.countries=r,this.isLoading=!1})}};e.\u0275fac=function(r){return new(r||e)(g(v))},e.\u0275cmp=h({type:e,selectors:[["app-by-capital-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por capital",3,"onDebounce","initialValue"],[4,"ngIf"],[3,"countries"]],template:function(r,l){r&1&&(o(0,"h2"),a(1,"Por capital"),t(),p(2,"hr"),o(3,"div",0)(4,"div",1)(5,"shared-search-box",2),b("onDebounce",function($){return l.searchByCapital($)}),t()()(),o(6,"div",0)(7,"div",1),p(8,"hr"),u(9,fe,1,0,"shared-loading-spinner",3),p(10,"countries-table",4),t()()),r&2&&(s(5),m("initialValue",l.initialValue),s(4),m("ngIf",l.isLoading),s(),m("countries",l.countries))},dependencies:[y,O,E,I]});let i=e;return i})();function ye(i,e){i&1&&p(0,"shared-loading-spinner")}var ae=(()=>{let e=class e{constructor(n){this.countriesServices=n,this.countries=[],this.isLoading=!1,this.initialValue=""}ngOnInit(){this.countries=this.countriesServices.cacheStore.byCountries.countries,this.initialValue=this.countriesServices.cacheStore.byCountries.term}searchByCountry(n){this.isLoading=!0,this.countriesServices.searchCountry(n).subscribe(r=>{this.countries=r,this.isLoading=!1})}};e.\u0275fac=function(r){return new(r||e)(g(v))},e.\u0275cmp=h({type:e,selectors:[["app-by-country-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por pa\xEDs",3,"onDebounce","initialValue"],[4,"ngIf"],[3,"countries"]],template:function(r,l){r&1&&(o(0,"h2"),a(1,"Por pa\xEDs"),t(),p(2,"hr"),o(3,"div",0)(4,"div",1)(5,"shared-search-box",2),b("onDebounce",function($){return l.searchByCountry($)}),t()()(),o(6,"div",0)(7,"div",1),p(8,"hr"),u(9,ye,1,0,"shared-loading-spinner",3),p(10,"countries-table",4),t()()),r&2&&(s(5),m("initialValue",l.initialValue),s(4),m("ngIf",l.isLoading),s(),m("countries",l.countries))},dependencies:[y,O,E,I]});let i=e;return i})();var ve=i=>({"btn-outline-primary":i});function Ce(i,e){if(i&1){let c=W();o(0,"button",6),b("click",function(){let r=K(c).$implicit,l=x();return Q(l.searchByRegion(r))}),a(1),t()}if(i&2){let c=e.$implicit,n=x();m("ngClass",F(2,ve,n.selectedRegion===c)),s(),f(" ",c," ")}}function xe(i,e){i&1&&p(0,"shared-loading-spinner")}var se=(()=>{let e=class e{constructor(n){this.countriesServices=n,this.countries=[],this.regions=["Africa","Americas","Asia","Europe","Oceania"],this.isLoading=!1}ngOnInit(){this.countries=this.countriesServices.cacheStore.byRegion.countries,this.selectedRegion=this.countriesServices.cacheStore.byRegion.region}searchByRegion(n){this.selectedRegion=n,this.isLoading=!0,this.countriesServices.searchRegion(n).subscribe(r=>{this.countries=r,this.isLoading=!1})}};e.\u0275fac=function(r){return new(r||e)(g(v))},e.\u0275cmp=h({type:e,selectors:[["app-by-region-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col","text-center"],["class","btn mx-2",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col"],[4,"ngIf"],[3,"countries"],[1,"btn","mx-2",3,"click","ngClass"]],template:function(r,l){r&1&&(o(0,"h2"),a(1,"Por regi\xF3n"),t(),p(2,"hr"),o(3,"div",0)(4,"div",1),u(5,Ce,2,4,"button",2),t()(),o(6,"div",0)(7,"div",3),p(8,"hr"),u(9,xe,1,0,"shared-loading-spinner",4),p(10,"countries-table",5),t()()),r&2&&(s(5),m("ngForOf",l.regions),s(4),m("ngIf",l.isLoading),s(),m("countries",l.countries))},dependencies:[X,M,y,E,I]});let i=e;return i})();function Se(i,e){i&1&&(o(0,"div",2),a(1," Espere por favor "),t())}function be(i,e){if(i&1&&(o(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),a(4,"Pa\xEDs: "),o(5,"strong"),a(6),t()(),p(7,"hr"),t()(),o(8,"div",3)(9,"div",5)(10,"h3"),a(11,"Bandera"),t(),p(12,"img",6),t(),o(13,"div",7)(14,"h3"),a(15,"Informaci\xF3n"),t(),o(16,"ul",8)(17,"li",9)(18,"strong"),a(19,"Poblaci\xF3n:"),t(),a(20),L(21,"number"),t(),o(22,"li",9)(23,"strong"),a(24,"Capital:"),t(),a(25),t(),o(26,"li",9)(27,"strong"),a(28,"Continente:"),t(),a(29),t(),o(30,"li",9)(31,"strong"),a(32,"C\xF3digo:"),t(),a(33),t(),o(34,"li",9)(35,"strong"),a(36,"Mapa:"),t(),o(37,"a",10),a(38),t()()()()(),o(39,"div",11)(40,"div",7)(41,"h3"),a(42,"Traducciones"),t(),o(43,"div",12)(44,"span",13),a(45),t(),o(46,"span",13),a(47),t(),o(48,"span",13),a(49),t(),o(50,"span",13),a(51),t(),o(52,"span",13),a(53),t(),o(54,"span",13),a(55),t(),o(56,"span",13),a(57),t(),o(58,"span",13),a(59),t(),o(60,"span",13),a(61),t(),o(62,"span",13),a(63),t()()()()()),i&2){let c=x();s(6),d(c.country.name.common),s(6),m("src",c.country.flags.svg,B)("alt",c.country.name.common),s(8),f(" ",D(21,19,c.country.population)," "),s(5),f(" ",c.country.capital," "),s(4),f(" ",c.country.region," "),s(4),f(" ",c.country.cca3," "),s(4),m("href",c.country.maps.googleMaps,B),s(),f(" ",c.country.maps.googleMaps,""),s(7),d(c.country.translations.ara.common),s(2),d(c.country.translations.bre.common),s(2),d(c.country.translations.ces.common),s(2),d(c.country.translations.cym.common),s(2),d(c.country.translations.deu.common),s(2),d(c.country.translations.est.common),s(2),d(c.country.translations.fin.common),s(2),d(c.country.translations.ita.common),s(2),d(c.country.translations.kor.common),s(2),d(c.country.translations.per.common)}}var ce=(()=>{let e=class e{constructor(n,r,l){this.activatedRoute=n,this.countriesService=r,this.router=l}ngOnInit(){this.activatedRoute.params.pipe(J(({id:n})=>this.countriesService.searchCountryByAlphaCode(n))).subscribe(n=>n?this.country=n:this.router.navigateByUrl(""))}};e.\u0275fac=function(r){return new(r||e)(g(ee),g(v),g(te))},e.\u0275cmp=h({type:e,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],["target","_blank",3,"href"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(r,l){if(r&1&&u(0,Se,2,0,"ng-template",null,0,w)(2,be,64,21,"div",1),r&2){let _=R(1);s(2),m("ngIf",l.country)("ngIfElse",_)}},dependencies:[y,N]});let i=e;return i})();var Ee=[{path:"by-capital",component:re},{path:"by-country",component:ae},{path:"by-region",component:se},{path:"by/:id",component:ce},{path:"**",redirectTo:"by-capital"}],le=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=P({type:e}),e.\u0275inj=T({imports:[A.forChild(Ee),A]});let i=e;return i})();var We=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=P({type:e}),e.\u0275inj=T({imports:[Y,le,ne]});let i=e;return i})();export{We as CountriesModule};
