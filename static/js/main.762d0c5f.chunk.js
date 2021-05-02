(this["webpackJsonpdisney-clone"]=this["webpackJsonpdisney-clone"]||[]).push([[0],{53:function(e,n,t){},56:function(e,n,t){},81:function(e,n,t){"use strict";t.r(n);var i,a,s,r,o,d,c,p,l,h,g,b,m,x,u,j,y,v,f,A,F=t(3),D=t.n(F),E=t(32),w=t.n(E),O=(t(53),t(18)),B=t(11),C=t(5),k=t(6),I=t(2),R=k.a.section(i||(i=Object(C.a)(["\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  height: 100vh;\n"]))),S=k.a.div(a||(a=Object(C.a)(["\n  margin-bottom: 10vw;\n  width: 100%;\n  position: relative;\n  min-height: 100vh;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 80px 40px;\n  height: 100%;\n"]))),T=k.a.div(s||(s=Object(C.a)(['\n  height: 100%;\n  background-position: top;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: url("/images/login-background.jpg");\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: -1;\n']))),z=k.a.div(r||(r=Object(C.a)(["\n  max-width: 650px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]))),M=k.a.img(o||(o=Object(C.a)(["\n  margin-bottom: 12px;\n  max-width: 600px;\n  min-height: 1px;\n  display: block;\n  width: 100%;\n"]))),J=k.a.a(d||(d=Object(C.a)(["\n  font-weight: bold;\n  color: #f9f9f9;\n  background-color: #0063e5;\n  padding: 16.5px 0;\n  margin-bottom: 12px;\n  width: 100%;\n  letter-spacing: 1.5px;\n  font-size: 18px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n\n  &:hover {\n    background-color: #0483ee;\n  }\n"]))),P=k.a.p(c||(c=Object(C.a)(["\n  color: hsla(0, 0%, 95.3%, 1);\n  font-size: 11px;\n  margin: 0 0 24px;\n  line-height: 1.5;\n  letter-spacing: 1.5px;\n"]))),L=k.a.img(p||(p=Object(C.a)(["\n  max-width: 600px;\n  margin-bottom: 20px;\n  width: 100%;\n"]))),W=function(e){return Object(I.jsx)(R,{children:Object(I.jsxs)(S,{children:[Object(I.jsxs)(z,{children:[Object(I.jsx)(M,{src:"./images/cta-logo-one.svg",alt:"No Image"}),Object(I.jsx)(J,{children:"GET ALL THERE"}),Object(I.jsx)(P,{children:"Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1."}),Object(I.jsx)(L,{src:"./images/cta-logo-two.png",alt:"No Image"})]}),Object(I.jsx)(T,{})]})})},G=(t(56),t(37)),N=t.n(G),H=t(45),U=t(27),X=U.a.initializeApp({apiKey:"AIzaSyCk54cXvtUkO8Yba6q3vwiIJJLJ51cMGj4",authDomain:"disney-clone-6839c.firebaseapp.com",projectId:"disney-clone-6839c",storageBucket:"disney-clone-6839c.appspot.com",messagingSenderId:"606544224732",appId:"1:606544224732:web:15e0f49bdb203e42122f19",measurementId:"G-FNXFFST6T7"}).firestore(),K=U.a.auth(),q=new U.a.auth.GoogleAuthProvider,V=(U.a.storage(),X),Y=t(19),$=t(26),Q=Object($.createSlice)({name:"user",initialState:{name:"",email:"",photo:""},reducers:{setUserLoginDetails:function(e,n){e.name=n.payload.name,e.email=n.payload.email,e.photo=n.payload.photo},setSignOutState:function(e){e.name=null,e.email=null,e.photo=null}}}),Z=Q.reducer,_=Q.actions,ee=_.setUserLoginDetails,ne=_.setSignOutState,te=function(e){return e.user.name},ie=function(e){return e.user.photo},ae=k.a.nav(l||(l=Object(C.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 70px;\n  background-color: #090b13;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 36px;\n  letter-spacing: 16px;\n  z-index: 3;\n"]))),se=k.a.a(h||(h=Object(C.a)(["\n  text-decoration: none;\n  padding: 0;\n  width: 80px;\n  margin-top: 4px;\n  max-height: 70px;\n  font-size: 0;\n  display: inline-block;\n  img {\n    display: block;\n    width: 100%;\n  }\n"]))),re=k.a.div(g||(g=Object(C.a)(['\n  display: flex;\n  align-items: center;\n  flex-flow: row nowrap;\n  height: 100%;\n  margin: 0;\n  justify-content: flex-end;\n  position: relative;\n  padding: 0;\n  margin-right: auto;\n  margin-left: 25px;\n  a {\n    display: flex;\n    align-items: center;\n    padding: 0 12px;\n\n    img {\n      width: 20px;\n      height: 20px;\n      min-width: 20px;\n    }\n\n    span {\n      color: rgb(249, 249, 249);\n      font-size: 13px;\n      letter-spacing: 1.42px;\n      padding: 2px 0px;\n      white-space: nowrap;\n      position: relative;\n\n      &:before {\n        background-color: rgb(249, 249, 249);\n        border-radius: 0px 0px 4px 4px;\n        bottom: -6px;\n        content: "";\n        height: 2px;\n        left: 0px;\n        opacity: 0;\n        position: absolute;\n        right: 0px;\n        transform-origin: left center;\n        transform: scaleX(0);\n        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n        visibility: hidden;\n        width: auto;\n      }\n    }\n\n    &:hover {\n      span:before {\n        transform: scaleX(1);\n        visibility: visible;\n        opacity: 1 !important;\n      }\n    }\n  }\n  // @media (max-width: 768px) {\n  //   display: none;\n  // }\n']))),oe=k.a.a(b||(b=Object(C.a)(["\n  background-color: rgba(0, 0, 0, 0.6);\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  border: 1px solid #f9f9f9;\n  padding: 8px 16px;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.2s ease 0s;\n\n  &:hover {\n    color: #000;\n    background-color: #f9f9f9;\n    border-color: transparent;\n  }\n"]))),de=k.a.img(m||(m=Object(C.a)(["\n  height: 100%;\n"]))),ce=k.a.div(x||(x=Object(C.a)(["\n  position: absolute;\n  top: 48px;\n  right: 0px;\n  background: rgb(19, 19, 19);\n  border: 1px solid rgba(151, 151, 151, 0.34);\n  border-radius: 4px;\n  letter-spacing: 3px;\n  padding: 10px;\n  box-shadow: rgb(0 0 0 /50%) 0px 0px 18px 0px;\n  font-size: 14px;\n  width: 100px;\n  opacity: 0;\n"]))),pe=k.a.div(u||(u=Object(C.a)(["\n  position: relative;\n  display: flex;\n  height: 48px;\n  width: 48px;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n\n  "," {\n    border-radius: 50%;\n    width: 100%;\n    height: 100%;\n  }\n\n  &:hover {\n    "," {\n      opacity: 1;\n      transition-duration: 1s;\n    }\n  }\n"])),de,ce),le=function(e){var n=Object(Y.b)(),t=Object(B.f)(),i=Object(Y.c)(te),a=Object(Y.c)(ie);Object(F.useEffect)((function(){K.onAuthStateChanged(function(){var e=Object(H.a)(N.a.mark((function e(n){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n&&(r(n),t.push("/home"));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}),[i]);var s=function(){i?i&&K.signOut().then((function(){n(ne()),t.push("/")})).catch((function(e){return alert(e.message)})):K.signInWithPopup(q).then((function(e){r(e.user)})).catch((function(e){alert(e.message)}))},r=function(e){n(ee({name:e.displayName,email:e.email,photo:e.photoURL}))};return Object(I.jsxs)(ae,{children:[Object(I.jsx)(se,{children:Object(I.jsx)("img",{src:"./images/logo.svg",alt:"Disney+"})}),i?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(re,{children:[Object(I.jsxs)("a",{href:"/home",children:[Object(I.jsx)("img",{src:"./images/home-icon.svg",alt:"Home"}),Object(I.jsx)("span",{children:"HOME"})]}),Object(I.jsxs)("a",{children:[Object(I.jsx)("img",{src:"./images/search-icon.svg",alt:"search"}),Object(I.jsx)("span",{children:"SEARCH"})]}),Object(I.jsxs)("a",{children:[Object(I.jsx)("img",{src:"./images/watchlist-icon.svg",alt:"watchlist"}),Object(I.jsx)("span",{children:"WATCHLIST"})]}),Object(I.jsxs)("a",{children:[Object(I.jsx)("img",{src:"./images/original-icon.svg",alt:"originals"}),Object(I.jsx)("span",{children:"ORIGINALS"})]}),Object(I.jsxs)("a",{children:[Object(I.jsx)("img",{src:"./images/movie-icon.svg",alt:"movie"}),Object(I.jsx)("span",{children:"MOVIES"})]}),Object(I.jsxs)("a",{children:[Object(I.jsx)("img",{src:"./images/series-icon.svg",alt:"series"}),Object(I.jsx)("span",{children:"SERIES"})]})]}),Object(I.jsxs)(pe,{children:[Object(I.jsx)(de,{src:a,alt:i}),Object(I.jsx)(ce,{children:Object(I.jsx)("span",{onClick:s,children:"Sign out"})})]})]}):Object(I.jsx)(oe,{onClick:s,children:"Login"})]})},he=t(22),ge=t(30),be=(0,t(26).createSlice)({name:"movie",initialState:{recommend:null,newDisney:null,originals:null,trending:null},reducers:{setMovies:function(e,n){e.recommend=n.payload.recommend,e.newDisney=n.payload.newDisney,e.originals=n.payload.originals,e.trending=n.payload.trending}}}),me=be.actions.setMovies,xe=be.reducer,ue=(t(64),t(65),t(47)),je=t.n(ue),ye=Object(k.a)(je.a)(j||(j=Object(C.a)(["\n  margin-top: 20px;\n\n  & > button {\n    opacity: 0;\n    height: 100%;\n    width: 5vw;\n    z-index: 1;\n\n    &:hover {\n      opacity: 1;\n      transition: opacity 0.2s ease 0s;\n    }\n  }\n\n  ul li button {\n    &:before {\n      font-size: 10px;\n      color: rgb(150, 158, 171);\n    }\n  }\n\n  li.slick-active button:before {\n    color: white;\n  }\n\n  .slick-list {\n    overflow: initial;\n  }\n\n  .slick-prev {\n    left: -75px;\n  }\n\n  .slick-next {\n    right: -75px;\n  }\n"]))),ve=k.a.div(y||(y=Object(C.a)(["\n  border-radius: 4px;\n  cursor: pointer;\n  position: relative;\n\n  a {\n    border-radius: 4px;\n    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n      rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n    cursor: pointer;\n    display: block;\n    position: relative;\n    padding: 4px;\n\n    img {\n      width: 100%;\n      height: 100%;\n    }\n\n    &:hover {\n      padding: 0px;\n      border: 4px solid rgba(249, 249, 249, 0.8);\n      transition-duration: 300ms;\n    }\n  }\n"]))),fe=function(e){return Object(I.jsxs)(ye,Object(he.a)(Object(he.a)({},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0}),{},{children:[Object(I.jsx)(ve,{children:Object(I.jsx)("a",{children:Object(I.jsx)("img",{src:"./Disney-clone/images/slider-badging.jpg",alt:""})})}),Object(I.jsx)(ve,{children:Object(I.jsx)("a",{children:Object(I.jsx)("img",{src:"./Disney-clone/images/slider-scale.jpg",alt:""})})}),Object(I.jsx)(ve,{children:Object(I.jsx)("a",{children:Object(I.jsx)("img",{src:"./Disney-clone/images/slider-badag.jpg",alt:""})})}),Object(I.jsx)(ve,{children:Object(I.jsx)("a",{children:Object(I.jsx)("img",{src:"./Disney-clone/images/slider-scales.jpg",alt:""})})})]}))},Ae=[{backgroundImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg",cardImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg",description:"When 11-year-old Riley moves to a new city, her Emotions team up to help her through the transition. Joy, Fear, Anger, Disgust and Sadness work together, but when Joy and Sadness get lost, they must journey through unfamiliar places to get back home.",subTitle:"2015 \u2022 1h 35m \u2022 Coming of Age, Family, Animation",title:"Inside Out",titleImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5C647DF3FFBFA343CFEA84AC715148F25F9E86F398B408010CC403E7654FB908/scale?width=1440&aspectRatio=1.78",type:"recommend"},{backgroundImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4E9E81584305009D6385F6178D4B6930E97CD6EC4A3B53C818400DEF778FFA9A/scale?width=1440&aspectRatio=1.78&format=jpeg",cardImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B983FF22BA64B6E19E0D3267280819B26758CFB765E8BED1099D11E320612953/scale?width=400&aspectRatio=1.78&format=jpeg",description:"Garfield is adopted by a greedy Lord with nefarious plans to open up his estate as a hunting ground.",subTitle:"2006 \u2022 1h 19m \u2022 Family, Comedy, Kids",title:"A tail of two kitties",titleImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/50B933E83609BEEFEDFA177A6D96DBFA7804C14F70A0B5AB314E892E65498ACF/scale?width=1440&aspectRatio=1.78",type:"new"},{backgroundImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg",cardImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/706C68FF1CEA5A9C2AE0608892C2DF79E4AC1F0DDB4BFF7FE6DAFC36DAFC0286/scale?width=400&aspectRatio=1.78&format=jpeg",description:"A Chinese mom who\u2019s sad when her grown son leaves home gets another chance at motherhood when one of her dumplings springs to life. But she finds that nothing stays cute and small forever.",subTitle:"2018 \u2022 7m \u2022 Family, Fantasy, Kids, Animation",title:"Bao",titleImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78",type:"recommend"},{backgroundImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FA1548A6B82C9991B1D38DF251A388FEA2483904510FBC73E150F67F7BDE38C0/scale?width=1440&aspectRatio=1.78&format=jpeg",cardImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0ECD36DD35658155915685271440833C29ED87E788CF8AE111AA6BCA6B939C37/scale?width=400&aspectRatio=1.78&format=jpeg",description:"When the kingdom's most wanted bandit is taken hostage by Rapunzel \u2014 a teen with 70 feet of golden hair who's looking to escape the tower where she's been locked away for years \u2014 the unlikely duo sets off on a hair-raising escapade.",subTitle:"2010 \u2022 1h 40m \u2022 Family, Fantasy, Animation, Action-Adventure, Musical",title:"Tangled",titleImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F70235E3463A6F246EB462ED5379F9D41D6318E80098BD40900E7AFC1C7D932D/scale?width=1440&aspectRatio=1.78",type:"trending"},{backgroundImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/56EEBB17CC25C9FE16E334C34EF96BF7D91EC9BA3B438F88FB24E1C2AE785E03/scale?width=1440&aspectRatio=1.78&format=jpeg",cardImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E486A02FA7B60669E77958D4FAE567AA5C9C57344006E1D1ADFC080719545166/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals",description:"Jamie Foxx leads an all-star cast in this hilarious, heart-filled adventure. Pixar\u2019s 'Soul' introduces Joe, who lands the gig of his life at the best jazz club in town. But one misstep lands Joe in a fantastical place: The Great Before. There, he teams up with soul 22 (Tina Fey), and together they find the answers to some of life\u2019s biggest questions.",subTitle:"2020 \u2022 1h 49m \u2022 Family, Comedy, Fantasy, Animation, Music",title:"Soul",titleImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E837DDE901CD036DD87A00F2D63E2F2458FAA798E62BE91F973AECCEA313A67E/scale?width=1440&aspectRatio=1.78",type:"original"},{backgroundImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AAC4808815AE5721A6AAB372DD14B8CE2E7E9EFF3A27942EF2B6B45EBF4E65CB/scale?width=1440&aspectRatio=1.78&format=jpeg",cardImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/501783804F435A386DBC4736F529A8EF664B1817CCB0B552E52D825B85B0A97B/scale?width=400&aspectRatio=1.78&format=jpeg",description:"Moana sets sail on a daring mission to save her people. Along the way, she meets the mighty demigod Maui\u2013together they cross the ocean on a fun-filled, action-packed voyage from Walt Disney Animation Studios.",subTitle:"2016 \u2022 1h 47m \u2022 Family, Fantasy, Animation, Action-Adventure, Musical",title:"Moana",titleImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9562874BAB22B22A698368819B9EBF30FEB0291543552EB2416A5A61A73F63F4/scale?width=1440&aspectRatio=1.78",type:"trending"},{backgroundImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B409C2A425D58C32D822EB633C7CAE3DC910DC2FC62D2B1807A0BB092C531E9A/scale?width=1440&aspectRatio=1.78&format=jpeg",cardImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C0A883EAB54DDDC924018D08CF4555EE72B3E9A8C214BDADF29CB82B5E2275D7/scale?width=400&aspectRatio=1.78&format=jpeg",description:"While Helen is called on to lead a campaign to bring back the Supers, Bob navigates the day-to-day heroics of \u201cnormal\u201d life at home with Violet, Dash and Jack-Jack, whose superpowers are about to be discovered. Their mission is derailed, however, when a new villain emerges with a brilliant and dangerous plot that threatens everything. But with Frozone by their side, the Parrs can take on anything.",subTitle:"2018 \u2022 1h 58m \u2022 Science Fiction, Family, Animation, Action-Adventure",title:"Incredibles 2",titleImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2041CE26663867FC4EF20377B8625BD629E619452E23BCDB1AB259DD475C2EA1/scale?width=1440&aspectRatio=1.78",type:"recommend"},{backgroundImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D53D1F5D357587A8D09067AB09FFC7096F837CBAAE02BDC3C0E75814471A1E36/scale?width=1440&aspectRatio=1.78&format=jpeg",cardImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CC08686E87BDB2D83A46C9608CB2F43018381A82608C380649351A00ED0D2919/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals",description:"ASSEMBLED is an immersive series of documentary-style specials examining the creation of Marvel Studios\u2019 thrilling new shows and theatrical releases.",subTitle:"2021 \u2022 1 Season \u2022 Docuseries, Anthology",title:"Assembled",titleImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/37D80C5D1AB0BA65C63588311EC60A07342F60F91D402C28B8E1137AF6A30549/scale?width=1440&aspectRatio=1.78",type:"original"},{backgroundImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2A509165105A09F9F533E2008B143BCF38D6A5859D0EBB40CCA388772005CD94/scale?width=1440&aspectRatio=1.78&format=jpeg",cardImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A13BEC78ACF76FC91A94A1595A62A42CC26DFC6259332C74E061ADA379024E5C/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals",description:"A young rabbit embarks on a journey to dig the burrow of her dreams, despite not having a clue what she\u2019s doing. Rather than reveal to her neighbors her imperfections, she digs herself deeper and deeper into trouble. After hitting (bed)rock bottom, she learns there is no shame in asking for help.",subTitle:"2020 \u2022 6m \u2022 Family, Animation",title:"Burrow",titleImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DD8BBA864E290FBC03A244A488FFC8DC8365FBF2F95A122B1D57BF3772D717FD/scale?width=1440&aspectRatio=1.78",type:"original"},{backgroundImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/223DAE104BE1175F374C4AACAC0EB5B8B0DB9C49839AA2E10085533DDFE07A8E/scale?width=1440&aspectRatio=1.78&format=jpeg",cardImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg",description:"This animated comedy focuses on the eponymous family in the town of Springfield. The head of the Simpson family, Homer, is not a typical family man. A nuclear-plant employee, he does his best to lead his family but often finds that they are leading him. The family includes loving, blue-haired matriarch Marge, troublemaking son Bart, overachieving daughter Lisa and baby Maggie.",subTitle:"1989 - 2019 \u2022 31 Seasons \u2022 Comedy, Animation",title:"The Simpsons",titleImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/47A6FB38D95B3A5EF5583C9EED0B698ED2992CBA4AC7222DD3269DC92DFA03A6/scale?width=1440&aspectRatio=1.78",type:"trending"},{backgroundImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F6CDB6C0EB2D77EB19BCADA31F85066E001A1F61FA68F4AC3356A73FE076477F/scale?width=1440&aspectRatio=1.78&format=jpeg",cardImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F8D1A6FD00ED479CC5E2E5C3E85F10EB05550748BD3C0FE76756614071968541/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals",description:"Marvel Studios LEGENDS traces Wanda Maximoff\u2019s evolution from an adversary of The Avengers to a powerful ally, and highlights one special relationship destined to shape her future in unexpected ways\u2026",subTitle:"2021 \u2022 1 Season \u2022 Science Fiction, Fantasy, Action-Adventure",title:"Legends",titleImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DDFF0FDF457E092EE53149CE7DB5BD14CB97E27B92D2D087E7C687B4E3073DE2/scale?width=1440&aspectRatio=1.78",type:"original"},{backgroundImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/09A0617D43282F1A4FA1A97DF6159B4263A8DEB9679A007B61D5E5D6E5D0A2DD/scale?width=1440&aspectRatio=1.78&format=jpeg",cardImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1E0501AFBAFCA1ABB5D31DBA7D1A913B2A35D70FD3DFD804939B71901577161D/scale?width=400&aspectRatio=1.78&format=jpeg",description:"Watch with Premier Access at the same time it's in open theaters and before it's available to all Disney+ subscribers on June 4, 2021.",subTitle:"2021 \u2022 1h 52m \u2022 Family, Fantasy, Animation, Action-Adventure",title:"Raya",titleImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E7D8EFFDD30B2A0E205DDD9929207439B21E7595709769F2A23C50457664FFB2/scale?width=1440&aspectRatio=1.78",type:"new"},{backgroundImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/09DAD6A5DAECB6BA9E329FFA896B18978FE4AD5540C070D7973EE53357DD4D24/scale?width=1440&aspectRatio=1.78&format=jpeg",cardImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/01666FAA085FF29B709DB13975E563E5E047DAAFF7D8F331201CB73F3C30027E/scale?width=400&aspectRatio=1.78&format=jpeg",description:"When Bob Parr visits designer Edna Mode for help with his high-energy toddler, she pulls an all-nighter designing a supersuit to harness Jack-Jack\u2019s seemingly limitless powers.",subTitle:"2018 \u2022 7m \u2022 Family, Comedy, Animation",title:"Auntie EDNA",titleImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A31BE6502DC7A3A01DAF58DF7E91AB6FF598A078C8FA88A1DB2D7B7E25439464/scale?width=1440&aspectRatio=1.78",type:"recommend"},{backgroundImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6FF2B403436E6558C08FB44B40AE334A9172FA293A8325940E8E7FF7F696E4D3/scale?width=1440&aspectRatio=1.78&format=jpeg",cardImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/509E4D9F0BF98A9DC4CDD38954380782F6AB2664E503CC7652A37D18D06666BF/scale?width=400&aspectRatio=1.78&format=jpeg",description:"Mickey entertains preschoolers by inviting them to join him and his friends for a date at the Clubhouse. Using early math learning and problem solving skills, he leads kids on an interactive adventure of learning and fun.",subTitle:"2006 - 2013 \u2022 5 Seasons \u2022 Kids, Animation",title:"Mickey mouse",titleImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4FF3FCD567F0263430DFC33B9489CE2799AE33B50AD553DE65F03B3EA2E19828/scale?width=1440&aspectRatio=1.78",type:"trending"},{backgroundImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/456A711C19899C881600F6247705E5253EB18C2471D75E5281E1FF6ACB6D2FBA/scale?width=1440&aspectRatio=1.78&format=jpeg",cardImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/341AE85B6C1423B9042B5F2E786645EE551B9D546C3D263B220A4727617FD2B8/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals",description:"Marvel Studios\u2019 \u201cThe Falcon and The Winter Soldier\u201d stars Anthony Mackie as Sam Wilson aka The Falcon, and Sebastian Stan as Bucky Barnes aka The Winter Soldier. The pair, who came together in the final moments of \u201cAvengers: Endgame,\u201d team up on a global adventure that tests their abilities\u2014and their patience.",subTitle:"2021 \u2022 1 Season \u2022 Science Fiction, Action-Adventure, Buddy",title:"The falcon and the winter soldier",titleImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4A67A42FB16607DAE7E22266D3F00181965178ED1884047C2D982EE7D89D3554/scale?width=1440&aspectRatio=1.78",type:"new"},{backgroundImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/28F85D4A1F7CA135B7B20B3EDB42EDA73196C2A71C52C5400A6C2285F8E071BE/scale?width=1440&aspectRatio=1.78&format=jpeg",cardImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4B32D8CB7C0C358E9FF348FB0338AD13F9A5836808E9EF5FADD9DBDE52FC3CAD/scale?width=400&aspectRatio=1.78&format=jpeg",description:"J-Pop band Perfume is featured in this original music and documentary series 'Disney\u2019s My Music Story.' The show features Perfume's life stories, passion for music, Disney memories, and more.",subTitle:"2019 \u2022 53m \u2022 Documentary, Biographical, Music",title:"My music story",titleImg:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/97BB36F8B9FC053F561894DD7B1C42C4FD20E63560F481CBCB3B9D3600CFCA3B/scale?width=1440&aspectRatio=1.78",type:"new"}];var Fe,De,Ee,we=k.a.div(v||(v=Object(C.a)(["\n  padding: 0 0 26px;\n"]))),Oe=k.a.div(f||(f=Object(C.a)(["\n  display: grid;\n  grid-gap: 25px;\n  gap: 25px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n"]))),Be=k.a.div(A||(A=Object(C.a)(["\n  padding-top: 56.25%;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n  border: 3px solid rgba(249, 249, 249, 0.1);\n\n  img {\n    inset: 0px;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n    opacity: 1;\n    position: absolute;\n    transition: opacity 500ms ease-in-out 0s;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n  }\n\n  &:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n  }\n"]))),Ce=function(){return Object(I.jsxs)(we,{children:[Object(I.jsx)("h4",{children:"New to Disney+"}),Object(I.jsx)(Oe,{children:Ae&&Ae.filter((function(e){return"new"===e.type})).map((function(e,n){return Object(I.jsxs)(Be,{children:[n,Object(I.jsx)(O.b,{to:"/detail/"+n+e.type,children:Object(I.jsx)("img",{src:e.cardImg,alt:e.title})})]},n)}))})]})};var ke,Ie,Re,Se=k.a.div(Fe||(Fe=Object(C.a)(["\n  padding: 0 0 26px;\n"]))),Te=k.a.div(De||(De=Object(C.a)(["\n  display: grid;\n  grid-gap: 25px;\n  gap: 25px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n"]))),ze=k.a.div(Ee||(Ee=Object(C.a)(["\n  padding-top: 56.25%;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n  border: 3px solid rgba(249, 249, 249, 0.1);\n\n  img {\n    inset: 0px;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n    opacity: 1;\n    position: absolute;\n    transition: opacity 500ms ease-in-out 0s;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n  }\n\n  &:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n  }\n"]))),Me=function(){return Object(I.jsxs)(Se,{children:[Object(I.jsx)("h4",{children:"Originals"}),Object(I.jsx)(Te,{children:Ae&&Ae.filter((function(e){return"original"===e.type})).map((function(e,n){return Object(I.jsxs)(ze,{children:[n,Object(I.jsx)(O.b,{to:"/detail/"+n+e.type,children:Object(I.jsx)("img",{src:e.cardImg,alt:e.title})})]},n)}))})]})};var Je,Pe,Le,We=k.a.div(ke||(ke=Object(C.a)(["\n  padding: 0 0 26px;\n"]))),Ge=k.a.div(Ie||(Ie=Object(C.a)(["\n  display: grid;\n  grid-gap: 25px;\n  gap: 25px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n"]))),Ne=k.a.div(Re||(Re=Object(C.a)(["\n  padding-top: 56.25%;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n  border: 3px solid rgba(249, 249, 249, 0.1);\n\n  img {\n    inset: 0px;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n    opacity: 1;\n    position: absolute;\n    transition: opacity 500ms ease-in-out 0s;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n  }\n\n  &:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n  }\n"]))),He=function(){return Object(I.jsxs)(We,{children:[Object(I.jsx)("h4",{children:"Recommended For You"}),Object(I.jsx)(Ge,{children:Ae&&Ae.filter((function(e){return"recommend"===e.type})).map((function(e,n){return Object(I.jsxs)(Ne,{children:[n,Object(I.jsx)(O.b,{to:"/detail/"+n+e.type,children:Object(I.jsx)("img",{src:e.cardImg,alt:e.title})})]},n)}))})]})};var Ue,Xe,Ke,qe,Ve,Ye,$e,Qe,Ze,_e,en,nn,tn,an,sn=k.a.div(Je||(Je=Object(C.a)(["\n  padding: 0 0 26px;\n"]))),rn=k.a.div(Pe||(Pe=Object(C.a)(["\n  display: grid;\n  grid-gap: 25px;\n  gap: 25px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n"]))),on=k.a.div(Le||(Le=Object(C.a)(["\n  padding-top: 56.25%;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n  border: 3px solid rgba(249, 249, 249, 0.1);\n\n  img {\n    inset: 0px;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n    opacity: 1;\n    position: absolute;\n    transition: opacity 500ms ease-in-out 0s;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n  }\n\n  &:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n  }\n"]))),dn=function(){return Object(I.jsxs)(sn,{children:[Object(I.jsx)("h4",{children:"Trending"}),Object(I.jsx)(rn,{children:Ae&&Ae.filter((function(e){return"trending"===e.type})).map((function(e,n){return Object(I.jsxs)(on,{children:[n,Object(I.jsx)(O.b,{to:"/detail/"+n+e.type,children:Object(I.jsx)("img",{src:e.cardImg,alt:e.title})})]},n)}))})]})},cn=k.a.div(Ue||(Ue=Object(C.a)(["\n  margin-top: 30px;\n  padding: 30px 0px 26px;\n  display: grid;\n  grid-gap: 25px;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n"]))),pn=k.a.div(Xe||(Xe=Object(C.a)(["\n  padding-top: 56.25%;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n  border: 2px solid rgba(249, 249, 249, 0.1);\n\n  img {\n    inset: 0px;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n    opacity: 1;\n    position: absolute;\n    transition: opacity 500ms ease-in-out 0s;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n  }\n\n  video {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    opacity: 0;\n    z-index: 0;\n    top: 0px;\n  }\n\n  &:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n\n    video {\n      opacity: 1;\n    }\n  }\n"]))),ln=function(e){return Object(I.jsxs)(cn,{children:[Object(I.jsxs)(pn,{children:[Object(I.jsx)("img",{src:"/images/viewers-disney.png",alt:""}),Object(I.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,muted:!0,children:Object(I.jsx)("source",{src:"/videos/1564674844-disney.mp4",type:"video/mp4"})})]}),Object(I.jsxs)(pn,{children:[Object(I.jsx)("img",{src:"/images/viewers-marvel.png",alt:""}),Object(I.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,muted:!0,children:Object(I.jsx)("source",{src:"/videos/1564676115-marvel.mp4",type:"video/mp4"})})]}),Object(I.jsxs)(pn,{children:[Object(I.jsx)("img",{src:"/images/viewers-national.png",alt:""}),Object(I.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,muted:!0,children:Object(I.jsx)("source",{src:"/videos/1564676296-national-geographic.mp4",type:"video/mp4"})})]}),Object(I.jsxs)(pn,{children:[Object(I.jsx)("img",{src:"/images/viewers-pixar.png",alt:""}),Object(I.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,muted:!0,children:Object(I.jsx)("source",{src:"/videos/1564676714-pixar.mp4",type:"video/mp4"})})]}),Object(I.jsxs)(pn,{children:[Object(I.jsx)("img",{src:"/images/viewers-starwars.png",alt:""}),Object(I.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,muted:!0,children:Object(I.jsx)("source",{src:"/videos/1608229455-star-wars.mp4",type:"video/mp4"})})]})]})},hn=k.a.main(Ke||(Ke=Object(C.a)(['\n  position: relative;\n  min-height: calc(100vh - 250px);\n  overflow-x: hidden;\n  display: block;\n  top: 72px;\n  padding: 0 calc(3.5vw + 5px);\n\n  &:after {\n    background: url("/images/home-background.png") center center/cover no-repeat\n      fixed;\n    content: "";\n    position: absolute;\n    inset: 0px;\n    opacity: 1;\n    z-index: -1;\n  }\n']))),gn=function(e){var n=Object(Y.b)(),t=Object(Y.c)(te),i=[],a=[],s=[],r=[];return Object(F.useEffect)((function(){V.collection("movies").onSnapshot((function(e){e.docs.map((function(e){switch(console.log(i),e.data().type){case"recommend":i=[].concat(Object(ge.a)(i),[Object(he.a)({id:e.id},e.data())]);break;case"new":a=[].concat(Object(ge.a)(a),[Object(he.a)({id:e.id},e.data())]);break;case"originals":s=[].concat(Object(ge.a)(s),[Object(he.a)({id:e.id},e.data())]);break;case"trending":r=[].concat(Object(ge.a)(r),[Object(he.a)({id:e.id},e.data())])}})),n(me({recommend:i,newDisney:a,originals:s,trending:r}))}))}),[t]),Object(I.jsxs)(hn,{children:[Object(I.jsx)(fe,{}),Object(I.jsx)(ln,{}),Object(I.jsx)(He,{}),Object(I.jsx)(Ce,{}),Object(I.jsx)(dn,{}),Object(I.jsx)(Me,{})]})},bn=t(48);var mn=k.a.div(qe||(qe=Object(C.a)(["\n  position: relative;\n  min-height: calc(100vh-250px);\n  overflow-x: hidden;\n  display: block;\n  top: 72px;\n  padding: 0 calc(3.5vw + 5px);\n"]))),xn=k.a.div(Ve||(Ve=Object(C.a)(["\n  left: 0px;\n  opacity: 0.8;\n  position: fixed;\n  right: 0px;\n  top: 0px;\n  z-index: -1;\n\n  img {\n    width: 100vw;\n    height: 100vh;\n\n    @media (max-width: 768px) {\n      width: initial;\n    }\n  }\n"]))),un=k.a.div(Ye||(Ye=Object(C.a)(["\n  align-items: flex-end;\n  display: flex;\n  -webkit-box-pack: start;\n  justify-content: flex-start;\n  margin: 0px auto;\n  height: 30vw;\n  min-height: 170px;\n  padding-bottom: 24px;\n  width: 100%;\n\n  img {\n    max-width: 600px;\n    min-width: 200px;\n    width: 35vw;\n  }\n"]))),jn=k.a.div($e||($e=Object(C.a)(["\n  max-width: 874px;\n"]))),yn=k.a.div(Qe||(Qe=Object(C.a)(["\n  align-items: center;\n  display: flex;\n  flex-flow: row nowrap;\n  margin: 24px 0px;\n  min-height: 56px;\n"]))),vn=k.a.button(Ze||(Ze=Object(C.a)(["\n  font-size: 15px;\n  margin: 0px 22px 0px 0px;\n  padding: 0px 24px;\n  height: 56px;\n  border-radius: 4px;\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  letter-spacing: 1.8px;\n  text-align: center;\n  text-transform: uppercase;\n  border: none;\n  background: rgb(249, 249, 249);\n  color: rgb(0, 0, 0);\n\n  img {\n    width: 32px;\n  }\n\n  &:hover {\n    background: rgb(198, 198, 198);\n  }\n\n  @media (max-width: 768px) {\n    height: 45px;\n    padding: 0 px 12px;\n    font-size: 12px;\n    margin: 0px 10px 0px;\n\n    img {\n      width: 25px;\n    }\n  }\n"]))),fn=Object(k.a)(vn)(_e||(_e=Object(C.a)(["\n  background: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgb(249, 249, 249);\n  color: rgb(249, 249, 249);\n"]))),An=k.a.div(en||(en=Object(C.a)(["\n  margin-right: 16px;\n  height: 44px;\n  width: 44px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.6);\n  border: 2px solid white;\n  border-radius: 50%;\n  cursor: pointer;\n\n  span {\n    background-color: rgb(249, 249, 249);\n    display: inline-block;\n\n    &:first-child {\n      height: 2px;\n      transform: translate(1px, 0px) rotate(0deg);\n      width: 16px;\n    }\n\n    &:nth-child(2) {\n      height: 16px;\n      transform: translateX(-8px) rotate(0deg);\n      width: 2px;\n    }\n  }\n"]))),Fn=k.a.div(nn||(nn=Object(C.a)(["\n  margin-right: 16px;\n  height: 44px;\n  width: 44px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: white;\n  border: 2px solid white;\n  border-radius: 50%;\n  cursor: pointer;\n\n  div {\n    height: 40px;\n    width: 40px;\n    background: rgb(0, 0, 0);\n    border-radius: 50%;\n\n    img {\n      width: 100%;\n    }\n  }\n"]))),Dn=k.a.div(tn||(tn=Object(C.a)(["\n  color: rgb(249, 249, 249);\n  font-size: 15px;\n  min-height: 20px;\n\n  @media (max-width: 768px) {\n    font-size: 12px;\n  }\n"]))),En=k.a.div(an||(an=Object(C.a)(["\n  line-height: 1.4;\n  color: rgb(249, 249, 249);\n  font-size: 20px;\n  padding: 16px 0px;\n\n  @media (max-width: 768px) {\n    font-size: 14px;\n  }\n"]))),wn=function(e){var n=Object(B.g)().id,t=Object(F.useState)({}),i=Object(bn.a)(t,2),a=(i[0],i[1],Ae.filter((function(e){return e.type===n.slice(1)})).filter((function(e,t){return t===+n.split("")[0]})));return console.log(a),Object(I.jsxs)(mn,{children:[Object(I.jsx)(xn,{children:Object(I.jsx)("img",{alt:a[0].title,src:a[0].backgroundImg})}),Object(I.jsx)(un,{children:Object(I.jsx)("img",{alt:a[0].title,src:a[0].titleImg})}),Object(I.jsxs)(jn,{children:[Object(I.jsxs)(yn,{children:[Object(I.jsxs)(vn,{children:[Object(I.jsx)("img",{src:"/images/play-icon-black.png",alt:""}),Object(I.jsx)("span",{children:"Play"})]}),Object(I.jsxs)(fn,{children:[Object(I.jsx)("img",{src:"/images/play-icon-white.png",alt:""}),Object(I.jsx)("span",{children:"Trailer"})]}),Object(I.jsxs)(An,{children:[Object(I.jsx)("span",{}),Object(I.jsx)("span",{})]}),Object(I.jsx)(Fn,{children:Object(I.jsx)("div",{children:Object(I.jsx)("img",{src:"/images/group-icon.png",alt:""})})})]}),Object(I.jsx)(Dn,{children:a[0].subTitle}),Object(I.jsx)(En,{children:a[0].description})]})]})};var On=function(){return Object(I.jsx)("div",{className:"App",children:Object(I.jsxs)(O.a,{children:[Object(I.jsx)(le,{}),Object(I.jsxs)(B.c,{children:[Object(I.jsx)(B.a,{exact:!0,path:"/",children:Object(I.jsx)(W,{})}),Object(I.jsx)(B.a,{exact:!0,path:"/home",children:Object(I.jsx)(gn,{})}),Object(I.jsx)(B.a,{exact:!0,path:"/detail/:id",component:wn})]})]})})},Bn=Object($.configureStore)({reducer:{user:Z,movie:xe},middleware:Object($.getDefaultMiddleware)({serializableCheck:!1})});w.a.render(Object(I.jsx)(D.a.StrictMode,{children:Object(I.jsx)(Y.a,{store:Bn,children:Object(I.jsx)(On,{})})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.762d0c5f.chunk.js.map