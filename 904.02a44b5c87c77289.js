"use strict";(self.webpackChunkphoto_library_app=self.webpackChunkphoto_library_app||[]).push([[904],{9904:(d,c,r)=>{r.r(c),r.d(c,{SinglePhotoComponent:()=>u});var _=r(6814),l=r(2296),s=r(2058),m=r(2096),g=r(5740),o=r(2029);function p(n,i){if(1&n){const e=o.EpF();o.ynx(0),o.TgZ(1,"div",1),o._UZ(2,"img",2),o.TgZ(3,"button",3),o.NdJ("click",function(){const v=o.CHM(e).ngIf,P=o.oxw(2);return o.KtG(P.removeFromFavorite(v.id))}),o._uU(4,"Remove from favorites"),o.qZA()(),o.BQk()}if(2&n){const e=i.ngIf;o.xp6(2),o.MGl("alt","Photo with id: ",e.id,""),o.Q6J("src",e.url,o.LSH)}}function h(n,i){if(1&n&&(o.ynx(0),o.YNc(1,p,5,2,"ng-container",0),o.ALo(2,"async"),o.BQk()),2&n){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",o.lcZ(2,1,e.photo$))}}function f(n,i){1&n&&(o.ynx(0),o.TgZ(1,"h1",4),o._uU(2,"An error occured :("),o.qZA(),o.BQk())}let u=(()=>{var n;class i{constructor(t,a){this.favoritesService=t,this.route=a,this.isError=!1}ngOnInit(){let t=this.favoritesService.getPhoto(this.route.snapshot.params.id);void 0===t?this.isError=!0:this.photo$=(0,m.of)(t)}removeFromFavorite(t){this.favoritesService.removePhoto(t)}}return(n=i).\u0275fac=function(t){return new(t||n)(o.Y36(g.G),o.Y36(s.gz))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-single-photo"]],standalone:!0,features:[o._Bn([g.G]),o.jDz],decls:2,vars:2,consts:[[4,"ngIf"],[1,"photo-container"],[1,"photo-container_img",3,"src","alt"],["mat-flat-button","","color","warn","routerLink","/favorites",1,"remove_btn",3,"click"],[1,"error-message"]],template:function(t,a){1&t&&(o.YNc(0,h,3,3,"ng-container",0),o.YNc(1,f,3,0,"ng-container",0)),2&t&&(o.Q6J("ngIf",!a.isError),o.xp6(1),o.Q6J("ngIf",a.isError))},dependencies:[_.ez,_.O5,_.Ov,l.ot,l.lW,s.Bz,s.rH],styles:[".photo-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:1rem}.photo-container[_ngcontent-%COMP%]   .photo-container_img[_ngcontent-%COMP%]{width:500px;margin:auto;border-radius:4px}.remove_btn[_ngcontent-%COMP%]{padding:1.5rem;font-size:1rem;margin:1rem auto}.error-message[_ngcontent-%COMP%]{margin:3rem;text-align:center;font-size:3rem;color:red}"]}),i})()}}]);