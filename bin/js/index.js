require(["jquery"],function(e){function _(){o=h.height(),u=c.height(),a=l.height(),O=M.offset().top,d=m.offset().top+m.height()/2-u,b=E.offset().top+E.height()/2-u,T=C.offset().top-u*2/3,A=O-u,D()}function D(){if(c.scrollTop()<a){var e=.3*f*(c.scrollTop()/a)-50;TweenLite.set(l,{y:e})}!v&&c.scrollTop()>d&&(TweenLite.to(g,s,{autoAlpha:1,x:0}),TweenMax.staggerTo(y.children(),s,{autoAlpha:1,x:0},.2),v=!0),!w&&c.scrollTop()>b&&(TweenLite.to(S,s,{autoAlpha:1,x:0}),TweenLite.to(x,s,{delay:.2,autoAlpha:1,x:0}),w=!0),!N&&c.scrollTop()>T&&(TweenLite.to(k,s,{autoAlpha:1,x:0}),TweenLite.to(L,s,{delay:.2,autoAlpha:1,y:0}),N=!0);if(c.scrollTop()>A){var e=.3*f*((c.scrollTop()-O)/a)-M.height()/4;TweenLite.set(M,{y:e})}}var t=function(){var e=!1;return function(t){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))e=!0}(navigator.userAgent||navigator.vendor||window.opera),e};if(t()){var n=jQuery(".page1");jQuery(window).resize("resizeBackground");function r(){n.height(jQuery(window).height())}r()}var i=function(t,n){typeof n=="undefined"&&(n=!0);var r=e("#fullview"),i=e("#articles"),s=500,o;t==="about"?o=".page2":t==="features"?o=".page3":t==="screenshots"?o=".page4":t==="disclaimer"&&(o=".page5");if(t!==-1){var u=e("#"+t);n?e("html, body").animate({scrollTop:u.offset().top},300,function(){window.location.hash=t}):e("html, body").scrollTop(u.offset().top)}};e(".header > a").click(function(e){e.preventDefault(),i(this.href.split("#")[1])});var s=.3,o,u,a,f=906,l=e(".page1-body > .bg"),c=e(window),h=e(document),p=e("body"),d,v=!1,m=e(".page2-content"),g=e(".page2-content > .screen-class"),y=e(".page2-content > .text >"),b,w=!1,E=e(".page3-content"),S=e(".page3-content h1"),x=e(".page3-content ul"),T,N=!1,C=e(".page4 .content"),k=e(".page4 .content h1"),L=e(".page4 .content .ss-container"),A,O,M=e(".get-the-app-bg");TweenLite.set(g,{autoAlpha:0,x:-200}),TweenLite.set(l,{y:0}),TweenLite.set(y.children(),{autoAlpha:0,x:200}),TweenLite.set(S,{autoAlpha:0,x:-200}),TweenLite.set(x,{autoAlpha:0,x:200}),TweenLite.set(k,{autoAlpha:0,x:-200}),TweenLite.set(L,{autoAlpha:0,y:200}),c.on("scroll",D).on("resize",_),_();var P=e(".image-view"),H=e(".image-container"),B=e(".loading"),j=function(){var e=c.scrollTop();p.data("scroll-position",e),p.css("overflow","hidden"),window.scrollTo(0,e)},F=function(){var e=p.data("scroll-position");p.css("overflow","visible"),window.scrollTo(0,e)};resize=function(t){var n=80,r=40;t.css("width","auto").css("height","auto"),t.removeAttr("width").removeAttr("height");var i=t.width(),s=t.height(),o=i/s,u=s/i,a=e(window).width(),f=e(window).height(),l=Math.round(a-r),c=Math.round(f-n);if(i>=s){var h=Math.round(l*u);h<=c?(t.css("width",l),t.css("height",h)):t.css("height",c)}else t.css("height",c)},e(".ss-container > div > a").click(function(t){t.preventDefault(),H.empty(),B.css("display","block"),j(),P.css("display","flex");var n=new Image;e(n).load(function(){var t=e(this);setTimeout(function(){B.css("display","none"),t.css("max-width","100%"),t.css("max-height","100%"),H.append(t),resize(t)},500)}).attr({src:e(this).attr("href")})}),P.click(function(e){F(),P.css("display","none")}),e(document).keyup(function(e){e.keyCode==27&&(F(),P.css("display","none"))}),e("#loading-view").css("display","none"),p.css("overflow","visible"),console.log("Scripts done!")}),define("index",function(){});