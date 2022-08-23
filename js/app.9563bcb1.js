(function(){var t={914:function(t,e,a){"use strict";var n=a(144),o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[t.showChat?e("ViewChat",{attrs:{chatList:t.chatList,actualState:t.actualState,answers:t.answers,disableAnswers:t.disableAnswers,showButtonToChoice:t.showButtonToChoice,btnDataChoicePatient:t.btnDataChoicePatient},on:{pushmessage:function(e){return t.pushToChatList()},action:function(e){return t.doAction(e)},actionanswer:function(e){return t.doAction(e)},deleteanswer:function(e){return t.deleteanswer(e)}}}):t._e(),t.showModal?e("InfoModal",{attrs:{modalInfo:t.modalInfo},on:{action:function(e){return t.doAction(e)}}}):t._e()],1)},s=[],i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal modal-disclaimer",staticStyle:{display:"flex"}},[t.modalInfo.head?e("InfoHead",{attrs:{head:t.modalInfo.head}}):t._e(),t.modalInfo.body?e("InfoBody",{attrs:{body:t.modalInfo.body}}):t._e(),t.modalInfo.choicePatient?e("ChoicePatient",{attrs:{patientList:t.modalInfo.choicePatient},on:{action:function(e){return t.buttonAction(e)}}}):t._e(),t.modalInfo.btnList?e("div",{staticClass:"modal_body modal-btn-list"},[e("ButtonList",{attrs:{btnList:t.modalInfo.btnList},on:{action:function(e){return t.buttonAction(e)}}})],1):t._e(),t.modalInfo.body2?e("InfoBody",{attrs:{body:t.modalInfo.body2}}):t._e(),t.modalInfo.footer?e("InfoFooter",{class:t.addClass,attrs:{footerData:t.modalInfo.footer},on:{action:function(e){return t.buttonAction(e)}}}):t._e()],1)},c=[],r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal_header"},[t._v(" "+t._s(t.head)+" ")])},l=[],d={props:{head:String}},p=d,h=a(1),u=(0,h.Z)(p,r,l,!1,null,null,null),f=u.exports,y=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal_body",domProps:{innerHTML:t._s(t.body)}})},m=[],x={props:{body:String}},b=x,w=(0,h.Z)(b,y,m,!1,null,null,null),k=w.exports,D=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal_footer"},[t.footerData.checkbox?e("InfoCheckbox",{attrs:{checkboxText:t.footerData.checkboxText},on:{changecheckbox:function(e){return t.changecheckbox(e)}}}):t._e(),t._l(t.footerData.btnData,(function(a,n){return e("InfoButton",{key:n,attrs:{btnDataItem:a,isDisabled:t.isDisabled},on:{action:function(e){return t.buttonAction(e)}}})}))],2)},g=[],v=function(){var t=this,e=t._self._c;return e("div",{staticClass:"accept"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"checked"}],attrs:{id:"accept",type:"checkbox",name:"ok"},domProps:{checked:Array.isArray(t.checked)?t._i(t.checked,null)>-1:t.checked},on:{change:[function(e){var a=t.checked,n=e.target,o=!!n.checked;if(Array.isArray(a)){var s=null,i=t._i(a,s);n.checked?i<0&&(t.checked=a.concat([s])):i>-1&&(t.checked=a.slice(0,i).concat(a.slice(i+1)))}else t.checked=o},t.changeCheckbox]}}),e("label",{attrs:{for:"accept"}},[t._v(t._s(t.checkboxText))])])},C=[],_={data(){return{checked:!1}},props:{checkboxText:String},methods:{changeCheckbox(){this.$emit("changecheckbox",this.checked)}},mounted(){this.changeCheckbox()}},A=_,I=(0,h.Z)(A,v,C,!1,null,null,null),T=I.exports,S=function(){var t=this,e=t._self._c;return e("div",{class:t.choiceDiv},[e("button",{class:t.choiceButton,attrs:{disabled:t.isDisabled},on:{click:t.buttonAction}},[t._v(t._s(t.btnDataItem.name))])])},B=[],L={props:{btnDataItem:{},isDisabled:Boolean},methods:{buttonAction(){this.$emit("action",this.btnDataItem.action)}},computed:{choiceDiv(){return"choice"===this.btnDataItem.class?"choice-div":""},choiceButton(){return"choice"===this.btnDataItem.class?"choice-button":""}},mounted(){}},P=L,j=(0,h.Z)(P,S,B,!1,null,null,null),$=j.exports,M={data(){return{isDisabled:!1}},components:{InfoCheckbox:T,InfoButton:$},props:{footerData:{}},methods:{buttonAction(t){this.$emit("action",t)},changecheckbox(t){this.isDisabled=!t}}},O=M,Z=(0,h.Z)(O,D,g,!1,null,null,null),N=Z.exports,H=function(){var t=this,e=t._self._c;return e("div",{staticClass:"button-list"},t._l(t.btnList,(function(a,n){return e("span",{key:n,on:{click:function(e){return t.buttonAction(a)}}},[t._v(" "+t._s(a.name)+" ")])})),0)},q=[],E={props:{btnList:[]},methods:{buttonAction(t){this.$emit("action",t.action)}}},F=E,Q=(0,h.Z)(F,H,q,!1,null,null,null),V=Q.exports,z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"choice-patient"},t._l(t.patientList,(function(a,n){return e("div",{key:n,staticClass:"patient-card",on:{click:function(e){return t.buttonAction(a)}}},[e("div",{staticClass:"modal_header patient-head"},[t._v(" "+t._s(a.head)+" ")]),e("div",[e("img",{attrs:{src:t.getImage(n),alt:"choice patient"}})]),e("div",{staticClass:"patient-text"},[t._v(" "+t._s(a.text)+" ")])])})),0)},U=[],J={props:{patientList:[]},methods:{getImage(t){return a(990)(`./${this.patientList[t].image}`)},buttonAction(t){this.$emit("action",t.action)}}},R=J,G=(0,h.Z)(R,z,U,!1,null,null,null),K=G.exports,W={components:{InfoHead:f,InfoBody:k,InfoFooter:N,ButtonList:V,ChoicePatient:K},props:{modalInfo:{}},computed:{addClass(){return this.modalInfo.footer.class}},methods:{buttonAction(t){this.$emit("action",t)}}},X=W,Y=(0,h.Z)(X,i,c,!1,null,null,null),tt=Y.exports,et=function(){var t=this,e=t._self._c;return!1!==t.actualState.showChat?e("div",{staticClass:"content"},[e("div",{ref:"chartbox",staticClass:"chart box"},[t._l(t.chatList,(function(a,n){return e("ChatMessage",{key:n,attrs:{message:t.chatList[n]},on:{scrolldown:t.scrollDown}})})),t.actualState.data.chatImage?e("ImageModal",{attrs:{chatImage:t.actualState.data.chatImage}}):t._e()],2),e("ChatQuestions",{attrs:{actualState:t.actualState,answers:t.answers,disableAnswers:t.disableAnswers,showButtonToChoice:t.showButtonToChoice,btnDataChoicePatient:t.btnDataChoicePatient},on:{actionanswer:function(e){return t.actionAnswer(e)},deleteanswer:function(e){return t.deleteAnswer(e)},action:function(e){return t.action(e)}}})],1):t._e()},at=[],nt=function(){var t=this,e=t._self._c;return t.message.isDoctor?e("div",{ref:"answerDoctor",staticClass:"medic"},[e("div",{staticClass:"dialog-arrow"})]):e("div",{ref:"answerPatient",staticClass:"patient"},[e("div",{staticClass:"dialog-arrow"})])},ot=[],st={props:{message:{}},mounted(){async function t(t,e,n){t.innerHTML='<div class="load">...</div><div class="dialog-arrow"></div>',n.$emit("scrolldown"),await a(500),t.innerHTML=e+'<div class="dialog-arrow"></div>',n.$emit("scrolldown"),await a(500)}async function e(t,e,n){t.innerHTML='<div class="load">...</div><div class="dialog-arrow"></div>',n.$emit("scrolldown"),await a(500),t.innerHTML=e+'<div class="dialog-arrow"></div>',n.$emit("scrolldown"),await a(500)}function a(t){return new Promise((e=>setTimeout(e,t)))}this.message.isDoctor&&t(this.$refs.answerDoctor,this.message.text,this),this.message.isDoctor||e(this.$refs.answerPatient,this.message.text,this)}},it=st,ct=(0,h.Z)(it,nt,ot,!1,null,null,null),rt=ct.exports,lt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"questions box",staticStyle:{display:"flex"}},[t._m(0),"answer"===t.actualState.type?e("div",{staticClass:"body"},t._l(t.answers,(function(a,n){return e("div",{key:n,staticClass:"question",class:t.setDisableClass,on:{click:function(e){return t.actionAnswer(n,a)}}},[t._v(" "+t._s(a.text)+" ")])})),0):t._e(),e("div",{staticClass:"questions-footer"},[e("div",{staticClass:"questions-footer-button"},[t.showButtonToChoice?e("QuestionButton",{class:t.setDisableClass,attrs:{btnDataItem:t.btnDataChoicePatient},on:{action:function(e){return t.action(e)}}}):t._e()],1)])])},dt=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"header"},[e("img",{attrs:{src:a(8)}}),e("div",{staticClass:"title"},[t._v(" Выберите вариант: ")])])}],pt=function(){var t=this,e=t._self._c;return e("div",[e("button",{staticClass:"btn-to-choice",on:{click:t.buttonAction}},[t._v(" "+t._s(t.btnDataItem.name)+" ")])])},ht=[],ut={props:{btnDataItem:{}},methods:{testTimeout(){setTimeout(this.buttonAction,1e3)},buttonAction(){this.$emit("action",this.btnDataItem.action)}}},ft=ut,yt=(0,h.Z)(ft,pt,ht,!1,null,null,null),mt=yt.exports,xt={components:{QuestionButton:mt},props:{actualState:{},answers:[],disableAnswers:Boolean,showButtonToChoice:Boolean,btnDataChoicePatient:{}},computed:{setDisableClass(){return this.disableAnswers?"disable-answer":""}},methods:{actionAnswer(t,e){this.$emit("actionanswer",e.action),e.deleteAnswer&&this.$emit("deleteanswer",t)},action(t){this.$emit("action",t)}}},bt=xt,wt=(0,h.Z)(bt,lt,dt,!1,null,null,null),kt=wt.exports,Dt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"image-wrapper"},[e("img",{staticClass:"image-modal",attrs:{src:t.getImage,alt:"chat image"}})])},gt=[],vt={props:{chatImage:String},computed:{getImage(){return a(990)(`./${this.chatImage}`)}}},Ct=vt,_t=(0,h.Z)(Ct,Dt,gt,!1,null,null,null),At=_t.exports,It={components:{ChatMessage:rt,ChatQuestions:kt,ImageModal:At},props:{chatList:[],actualState:{},answers:[],disableAnswers:Boolean,showButtonToChoice:Boolean,btnDataChoicePatient:{}},methods:{actionAnswer(t){this.$emit("actionanswer",t)},deleteAnswer(t){this.$emit("deleteanswer",t)},scrollDown(){this.$refs.chartbox.scrollTop=this.$refs.chartbox.scrollHeight},action(t){this.$emit("action",t)}}},Tt=It,St=(0,h.Z)(Tt,et,at,!1,null,null,null),Bt=St.exports,Lt=JSON.parse('[{"type":"showButtonToChoice","showButton":true,"btnDataItem":{"name":"Выбрать другую пациентку","action":{"type":"jumpToStepClearChat","stepId":"patientChoice"}},"action":{"type":"next"}},{"type":"info","showChat":false,"data":{"head":"Информация","body":"Материал создан при участии компании Байер исключительно в образовательных целях и предназначен только для специалистов здравоохранения. Любое совпадение с реальными пациентами случайно. Тактика лечения определяется лечащим врачом. <p>Клинические случаи не являются универсальными, в них представлены алгоритмы выбора препаратов на примере препаратов компании Байер. Для лечения пациентов могут быть использованы иные лекарственные препараты по назначению лечащего врача.</p>","footer":{"checkbox":true,"checkboxText":"Принимаю","btnData":[{"name":"Далее","action":{"type":"next"}}]}}},{"id":"patientChoice","type":"info","showChat":false,"data":{"choicePatient":[{"head":"Пациентка №1","image":"choicePatient1.jpg","text":"Возраст: 51 год. Жалобы: Больше года нет менструаций…","action":{"type":"jumpToStep","stepId":"patient1"}},{"head":"Пациентка №2","image":"choicePatient2.jpg","text":"Возраст: 53 года. Жалобы: В течение последних двух месяцев нет менструаций. Принимает МГТ в циклическом режиме 5 лет…","action":{"type":"jumpToStep","stepId":"patient2"}}]}},{"id":"patient1","type":"info","showChat":false,"data":{"head":"Пациентка №1","body":"Возраст: 51 год. <p>Жалобы: «Больше года нет менструаций. Сначала было все хорошо, а сейчас меня мучают приливы, бессонница».</p><p>У пациентки с собой есть результаты анализов, сданные по рекомендации подруги-врача (УЗИ молочных желез, ФСГ, общий анализ крови, биохимический анализ крови, гормоны щитовидной железы, мазок на онкоцитологию).</p>","footer":{"btnData":[{"name":"Далее","action":{"type":"next"}}]}}},{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Исходя из Ваших жалоб, я предполагаю, что это может быть связано с менопаузой. Для уточнения диагноза, пожалуйста, заполните опросник"},{"isDoctor":false,"text":"Да, хорошо, давайте"}],"action":{"type":"next"}}},{"type":"answer","data":{"answers":[{"text":"Оценить данные опросника","action":{"type":"next"}}]}},{"type":"answer","data":{"chatImage":"green1.jpg","answers":[{"text":"На основании полученных данных я могу диагностировать у Вас климактерический синдром легкой степени тяжести","action":{"type":"info","data":{"head":"Сообщение","body":"Сумма баллов не соответствует степени тяжести","footer":{"btnData":[{"name":"Ок","action":{"type":"close"}}]}}}},{"text":"На основании полученных данных я могу диагностировать у Вас климактерический синдром средней степени тяжести","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"На основании полученных данных я могу диагностировать у Вас климактерический синдром средней степени тяжести"}],"action":{"type":"next"}}}},{"text":"На основании полученных данных я могу диагностировать у Вас климактерический синдром тяжелой степени тяжести","action":{"type":"info","data":{"head":"Сообщение","body":"Сумма баллов не соответствует степени тяжести","footer":{"btnData":[{"name":"Ок","action":{"type":"close"}}]}}}}]}},{"type":"answer","data":{"answers":[{"text":"Провести физикальное обследование","deleteAnswer":true,"action":{"type":"info","data":{"head":"Информация","body":"<b>Данные физикального обследования:</b> нормального телосложения. Рост 165 см. Вес 67 кг. ОТ 80 см. ИМТ 24,6.<p>Молочные железы развиты правильно, симметричны, выделений из сосков нет. При пальпации мягко эластичной консистенции, уплотнений не обнаружено.</p><p>Слизистая влагалища бледная, истончена. Складчатость снижена. Выделений нет.</p><p>Шейка матки цилиндрическая, не изменена. Подвижная.</p><p>Пальпаторно тело матки не увеличено.</p><p>Патологических образований в области малого таза не выявлено.</p>","footer":{"btnData":[{"name":"Ок","action":{"type":"closeCheck","action":{"type":"checkAnswerList"}}}]}}}},{"text":"Давайте посмотрим на результаты анализов, которые Вы принесли","deleteAnswer":true,"action":{"type":"info","data":{"head":"Информация","body":"<b>Данные лабораторных исследований:</b> ТТГ 1,7 мЕд/л; Пролактин 350 мМЕ/л. Ферменты печени, креатинин: показатели в норме. Клин. анализ крови: Нв 127 г/л  Нт 1,0.<p><b>Данные инструментальных исследований:</b> АД 120/75 мм.рт.ст. Маммография: BIRADS – 2. PAP-тест – без аномалий. ПЦР ВПЧ – не обнаружен.</p>","footer":{"btnData":[{"name":"Ок","action":{"type":"closeCheck","action":{"type":"checkAnswerList"}}}]}}}}]}},{"type":"answer","data":{"answers":[{"text":"Да, похоже, дело все же в менопаузе. Не хватает одного обследования","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Да, похоже, дело все же в менопаузе. Не хватает одного обследования"},{"isDoctor":false,"text":"Какого обследования, доктор?"}],"action":{"type":"next"}}}}]}},{"type":"answer","data":{"answers":[{"text":"УЗИ брюшной полости","action":{"type":"info","data":{"head":"Сообщение","body":"Не является обязательным обследованием при назначении МГТ согласно клиническим рекомендациям 2021 г.: «Менопауза и климактерическое состояние у женщины» (<a href = \'https://med-game.ru/sites/default/files/docs/klinrec_menopause.pdf\' target=\'_blank\'>открыть</a>)","footer":{"btnData":[{"name":"Ок","action":{"type":"close"}}]}}}},{"text":"Коагулограмма","action":{"type":"info","data":{"head":"Сообщение","body":"Не является обязательным обследованием при назначении МГТ согласно клиническим рекомендациям 2021 г.: «Менопауза и климактерическое состояние у женщины» (<a href = \'https://med-game.ru/sites/default/files/docs/klinrec_menopause.pdf\' target=\'_blank\'>открыть</a>)","footer":{"btnData":[{"name":"Ок","action":{"type":"close"}}]}}}},{"text":"УЗИ органов малого таза","action":{"type":"info","data":{"head":"Сообщение","body":"<b>УЗИ малого таза:</b> тело матки 5,1х4,8х5,6 см. Эхоструктура миометрия однородная. Полость матки не деформировна. Толщина эндометрия 2 мм, структура однородная. Правый яичник 1,3х1,0х1,6. V=1,0 см<sup>3</sup> без фолликулов. Левый яичник не визуализируется. Свободной жидкости в полости малого таза не обнаружено.","footer":{"btnData":[{"name":"Ок","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"УЗИ органов малого таза"}],"action":{"type":"next"}}}}]}}}},{"text":"Колоноскопия","action":{"type":"info","data":{"head":"Сообщение","body":"Не является обязательным обследованием при назначении МГТ согласно клиническим рекомендациям 2021 г.: «Менопауза и климактерическое состояние у женщины» (<a href = \'https://med-game.ru/sites/default/files/docs/klinrec_menopause.pdf\' target=\'_blank\'>открыть</a>)","footer":{"btnData":[{"name":"Ок","action":{"type":"close"}}]}}}}]}},{"type":"answer","data":{"answers":[{"text":"Да, результаты Ваших анализов так же подтверждают, что у вас климактерический синдром","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Да, результаты Ваших анализов также подтверждают, что у вас климактерический синдром "},{"isDoctor":false,"text":"Я так и думала, что это климакс. Что же теперь делать "}],"action":{"type":"next"}}}},{"text":"Результаты Ваших анализов говорят, о том, что ваше состояние не связано с климактерическим синдромом","action":{"type":"info","data":{"head":"Сообщение","body":"Данный вывод неверный.","footer":{"btnData":[{"name":"Ок","action":{"type":"close"}}]}}}}]}},{"type":"answer","data":{"answers":[{"text":"Чтобы подобрать правильное лечение, подходяще именно Вам, необходимо выявить факторы риска. Заполните, пожалуйста, опросник","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Чтобы подобрать правильное лечение, подходяще именно Вам, необходимо выявить факторы риска. Заполните, пожалуйста, опросник"},{"isDoctor":false,"text":"Да, хорошо"}],"action":{"type":"next"}}}}]}},{"type":"answer","data":{"chatImage":"risk1.jpg","answers":[{"text":"У Вас высокий риск осложнений. Гормональная терапия противопоказана","action":{"type":"info","data":{"head":"Сообщение","body":"Шкала Падуя интерпретирована неверно.","footer":{"btnData":[{"name":"Ок","action":{"type":"close"}}]}}}},{"text":"У Вас низкий риск осложнений. Предлагаю обсудить возможные варианты терапии","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"У Вас низкий риск осложнений. Предлагаю обсудить возможные варианты терапии"},{"isDoctor":false,"text":"Хорошо"}],"action":{"type":"next"}}}}]}},{"type":"answer","data":{"answers":[{"text":"Фитоэстрогены","deleteAnswer":true,"action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Фитоэстрогены:<ul><li>Это не патогенетическая, а только симптоматическая терапия.<li>Безопасность не доказана: клинические исследования не проводились, отдельные сообщения свидетельствуют о возникновении серьезных неблагоприятных событий.<li>Симптомы устраняют не полностью, нет протективного эффекта на костную ткань, сердечно-сосудистую систему. Эффективность сопоставима с плацебо.<li>Не содержат гестаген, нет защиты эндометрия от гиперплазии, есть сообщения о развитии гиперплазии.<li>Отсутствие четких показаний.</ul>"}],"action":{"type":"checkAnswerList"}}}},{"text":"Менопаузальная гормональная терапия","deleteAnswer":true,"action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Менопаузальная гормональная терапия:<ul><li>МГТ- «золотой стандарт» лечения пациенток в постменопаузальный период.<li>Патогенетически обоснованная терапия.<li>Обширная и достоверная доказательная база.<li>Доказанно способствует купированию приливов и других менопаузальных симптомов, обеспечивает профилактику постменопаузального остеопороза.<li>Содержит гестаген, который препятствует гиперплазии эндометрия, и обладают дополнительными преимуществами за счет антиминералокортикоидного и антиандрогенного эффектов.</ul>"}],"action":{"type":"checkAnswerList"}}}}]}},{"type":"talk","data":{"talk":[{"isDoctor":false,"text":"Доктор, спасибо! У меня есть несколько вопросов: Я слышала, что такие препараты могут вызвать рак."}],"action":{"type":"next"}}},{"type":"answer","data":{"answers":[{"text":"Многочисленные научные данные показывают, что препараты МГТ безопасны для тщательно обследованных женщин, не увеличивают риск возникновения рака любой локализации","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Многочисленные научные данные показывают, что препараты МГТ безопасны для тщательно обследованных женщин, не увеличивают риск возникновения рака любой локализации"}],"action":{"type":"next"}}}}]}},{"type":"talk","data":{"talk":[{"isDoctor":false,"text":"Я боюсь набрать вес от гормонов"}],"action":{"type":"next"}}},{"type":"answer","data":{"answers":[{"text":"В этом возрасте увеличение веса, связано с дефицитом гормонов и увеличением жировой ткани, и другими метаболическими изменениями. Именно восполнив с помощью МГТ этот дефицит, мы можем помочь сохранить вес","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"В этом возрасте увеличение веса, связано с дефицитом гормонов и увеличением жировой ткани, и другими метаболическими изменениями. Именно восполнив с помощью МГТ этот дефицит, мы можем помочь сохранить вес"}],"action":{"type":"next"}}}}]}},{"type":"talk","data":{"talk":[{"isDoctor":false,"text":"У меня есть варикозное расширение вен, я боюсь пить гормоны"}],"action":{"type":"next"}}},{"type":"answer","data":{"answers":[{"text":"Варикозное расширение вен не является противопоказанием к МГТ. По данным исследований на фоне МГТ нет риска увеличения тромбозов","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Варикозное расширение вен не является противопоказанием к МГТ. По данным исследований на фоне МГТ нет риска увеличения тромбозов"},{"isDoctor":false,"text":"Доктор, спасибо, я все поняла"}],"action":{"type":"next"}}}}]}},{"type":"answer","data":{"answers":[{"text":"Я выпишу Вам препарат, с учетом Ваших индивидуальных потребностей: который способствует уменьшению симптомов КС и поможет профилактировать развитие поздних осложнений, таких как остеопороз и сердечно-сосудистые и метаболические нарушения.","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Я выпишу Вам препарат, с учетом Ваших индивидуальных потребностей: который способствует уменьшению симптомов КС и поможет профилактировать развитие поздних осложнений, таких как остеопороз и сердечно-сосудистые и метаболические нарушения."},{"isDoctor":false,"text":"Да? Расскажите, пожалуйста, как они могут улучшить мое состояние? Какие это препараты?"}],"action":{"type":"next"}}}}]}},{"type":"answer","data":{"answers":[{"text":"Например, препарат Анжелик® – заместительная гормональная терапия, которая поможет устранить дефицит своих гормонов. При приеме препарата отмечается значимое снижение приливов и других климактерических симптомов","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Например, препарат Анжелик® – заместительная гормональная терапия, которая поможет устранить дефицит своих гормонов. При приеме препарата отмечается значимое снижение приливов и других климактерических симптомов "},{"isDoctor":false,"text":"А чем он лучше других препаратов МГТ?"}],"action":{"type":"next"}}}}]}},{"type":"answer","data":{"answers":[{"text":"Первый компонент МГТ – эстрадиол, он одинаков во всех препаратах. Второй компонент – дроспиренон – обладает дополнительными положительными эффектами. ","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Первый компонент МГТ – эстрадиол, он одинаков во всех препаратах. Второй компонент – дроспиренон – обладает дополнительными положительными эффектами. "},{"isDoctor":false,"text":"Какими эффектами?"}],"action":{"type":"next"}}}}]}},{"type":"answer","data":{"answers":[{"text":"Дроспиренон способствует снижению АД у женщин с гипертонией, уменьшает отеки, положительно сказывается на метаболических изменениях. ","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Дроспиренон способствует снижению АД у женщин с гипертонией, уменьшает отеки, положительно сказывается на метаболических изменениях. "},{"isDoctor":false,"text":"А можно поподробнее?"}],"action":{"type":"next"}}}}]}},{"type":"answer","data":{"answers":[{"text":"Например, на наборе веса, рисках развития атеросклероза и других ССЗ.","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Например, на наборе веса, рисках развития атеросклероза и других ССЗ."},{"isDoctor":false,"text":"Ух ты! Здорово! А когда я могу начать прием Анжелик®?"}],"action":{"type":"next"}}}}]}},{"type":"answer","data":{"answers":[{"text":"Учитывая, что все обследования пройдены, противопоказаний нет, Вы можете начинать прием препарата в любой день. Таблетку желательно пить в одно и тоже время. ","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Учитывая, что все обследования пройдены, противопоказаний нет, Вы можете начинать прием препарата в любой день. Таблетку желательно пить в одно и тоже время. "},{"isDoctor":false,"text":"Хорошо, это понятно."}],"action":{"type":"next"}}}}]}},{"type":"answer","data":{"answers":[{"text":"Хочу Вас предупредить, что иногда в первые несколько месяцев возможно появление мажущих кровянистых выделений. Не пугайтесь, это абсолютно нормально – так происходит адаптация организма к МГТ. ","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Хочу Вас предупредить, что иногда в первые несколько месяцев возможно появление мажущих кровянистых выделений. Не пугайтесь, это абсолютно нормально – так происходит адаптация организма к МГТ. "},{"isDoctor":false,"text":"Спасибо, доктор!"}],"action":{"type":"next"}}}}]}},{"type":"answer","data":{"answers":[{"text":"Рада помочь! Для контроля переносимости и эффективности терапии Вам нужно записаться на прием через 1-2 месяца после начала приема.","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Рада помочь! Для контроля переносимости и эффективности терапии Вам нужно записаться на прием через 1-2 месяца после начала приема."},{"isDoctor":false,"text":"До свидания!"}],"action":{"type":"next"}}}}]}},{"type":"info","data":{"head":"Резюме","body":"<b><ul><li>Эстрогенный компонент во всех препаратах МГТ идентичен. <li>Только дроспиренон в качестве гестагенного компонента обладает рядом дополнительных преимуществ: антиандрогенное и антиминералокортикоидное действие.<li>Препарат Анжелик® может оказывать комплексное действие на патогенез менопаузы и способствовать профилактике поздних осложнений, таких как остеопороз, метаболических и сердечно-сосудистых нарушений.</ul></b>","body2":"АО «БАЙЕР» <br>107113, Москва, 3-я Рыбинская ул., дом 18, строение 2.<br>Телефон: (495) 231-12-00<br>Факс: (495) 231-12-02 АО «БАЙЕР»","btnList":[{"name":"Пройти диалог ещё раз","action":{"type":"jumpToStepClearChat","stepId":"patient1"}},{"name":"Инструкция Анжелик®","action":{"type":"openLink","url":"https://med-game.ru/sites/default/files/docs/Anzhelik.pdf"}}],"footer":{"btnData":[{"name":"Ок","action":{"type":"jumpToStepClearChat","stepId":"patientChoice"}}]}}},{"id":"patient2","type":"info","showChat":false,"data":{"head":"Пациентка №2","body":"В кабинет входит пациентка. Возраст: 53 лет. <p>Жалобы: «Здравствуйте! Я принимаю МГТ в циклическом режиме 5 лет. У меня всегда были регулярные менструальные реакции, но в течение последних двух месяцев менструации не было. Это меня беспокоит. Пришла узнать – продолжать пить дальше или переходить на другой препарат?»</p><p>Полное стандартное обследование при приеме МГТ проходит ежегодно, последнее - 2 месяца назад. Во время приема было измерено АД, окружность талии, посчитан ИМТ – все в пределах нормы.</p>","footer":{"btnData":[{"name":"Далее","action":{"type":"next"}}]}}},{"type":"talk","data":{"talk":[{"isDoctor":false,"text":"Здравствуйте! Я принимаю МГТ в циклическом режиме 5 лет. У меня всегда были регулярные менструальные реакции, но в течение последних двух месяцев менструации не было. Это меня беспокоит. Пришла узнать – продолжать пить дальше или переходить на другой препарат?"}],"action":{"type":"next"}}},{"type":"answer","data":{"answers":[{"text":"Уменьшение или урежение менструальноподобной реакции – признак того, что Вам необходимо перейти на монофазный режим терапии МГТ","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Уменьшение или урежение менструальноподобной реакции – признак того, что Вам необходимо перейти на монофазный режим терапии МГТ"}],"action":{"type":"next"}}}},{"text":"Можете продолжать принимать свой препарат как обычно и дальше в циклическом реижме. Изменение частоты менструаций в вашем возрасте на лечебную тактику не влияет","action":{"type":"info","data":{"head":"Сообщение","body":"Данная рекомендация неверна","footer":{"btnData":[{"name":"Ок","action":{"type":"close"}}]}}}}]}},{"type":"talk","data":{"talk":[{"isDoctor":false,"text":"Что это такое?"}],"action":{"type":"next"}}},{"type":"answer","data":{"answers":[{"text":"Это менопаузальная гормональная терапия, которая восполняет дефицит половых гормонов и восстановливает менструации","action":{"type":"info","data":{"head":"Сообщение","body":"Данное утверждение неверно","footer":{"checkbox":false,"checkboxText":"Принимаю","btnData":[{"name":"Ок","action":{"type":"close"}}]}}}},{"text":"Это тоже менопаузальная гормональная терапия, которая будет восполнять дефицит половых гормонов, только без менструальноподобной реакции","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Это тоже менопаузальная гормональная терапия, которая будет восполнять дефицит половых гормонов, только без менструальноподобной реакции"}],"action":{"type":"next"}}}}]}},{"type":"talk","data":{"talk":[{"isDoctor":false,"text":"Т.е. я могу продолжить прием этого же препарата, но в непрерывном режиме?"}],"action":{"type":"next"}}},{"type":"answer","data":{"answers":[{"text":"Да, именно так","action":{"type":"info","data":{"head":"Сообщение","body":"Данная рекомендация неверна","footer":{"btnData":[{"name":"Ок","action":{"type":"close"}}]}}}},{"text":"У нас есть два варианта продолжения терапии: эстрадиол+дидрогестерон или эстрадиол+дроспиренон","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"У нас есть два варианта продолжения терапии: эстрадиол+дидрогестерон или эстрадиол+дроспиренон"}],"action":{"type":"next"}}}}]}},{"type":"talk","data":{"talk":[{"isDoctor":false,"text":"А зачем мне что-то менять и переходить на другой препарат?"}],"action":{"type":"next"}}},{"type":"answer","data":{"answers":[{"text":"Состояние перименопаузы, в котором Вы находились, когда начинали прием циклической МГТ, существенно отличается от Вашего состояния сейчас (постменопауза). И поэтому может требоваться другая терапия ","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Состояние перименопаузы, в котором Вы находились, когда начинали прием циклической МГТ, существенно отличается от Вашего состояния сейчас (постменопауза). И поэтому может требоваться другая терапия"}],"action":{"type":"next"}}}}]}},{"type":"talk","data":{"talk":[{"isDoctor":false,"text":"А разве не все препараты МГТ одинаковы?"}],"action":{"type":"next"}}},{"type":"answer","data":{"answers":[{"text":"Первый компонент МГТ – эстрадиол, он одинаков во всех препаратах. Второй компонент – дроспиренон – обладает дополнительными положительными эффектами","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Первый компонент МГТ – эстрадиол, он одинаков во всех препаратах. Второй компонент – дроспиренон – обладает дополнительными положительными эффектами"}],"action":{"type":""}}}},{"text":"Дроспиренон способствует снижению АД у женщин с гипертонией, уменьшает отеки, положительно сказывается на метаболических изменениях, например, на наборе веса, рисках развития атеросклероза и других ССЗ","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Дроспиренон способствует снижению АД у женщин с гипертонией, уменьшает отеки, положительно сказывается на метаболических изменениях, например, на наборе веса, рисках развития атеросклероза и других ССЗ"}],"action":{"type":"next"}}}}]}},{"type":"talk","data":{"talk":[{"isDoctor":false,"text":"Ого! Ничего себе! Столько эффектов в одной маленькой таблетке!         Доктор, как мне правильно перейти на МГТ с дроспиреноном?   "}],"action":{"type":"next"}}},{"type":"answer","data":{"answers":[{"text":"Вы должны допить текущую упаковку циклического препарата, и со следующего дня можете начать прием Анжелик® - МГТ с дроспиреноном","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Вы должны допить текущую упаковку циклического препарата, и со следующего дня можете начать прием Анжелик® - МГТ с дроспиреноном"}],"action":{"type":"next"}}}},{"text":"Можете начать прием Анжелик® - МГТ с дроспиреноном прямо сегодня","action":{"type":"info","data":{"head":"Сообщение","body":"Данная рекомендация неверна","footer":{"btnData":[{"name":"Ок","action":{"type":"close"}}]}}}}]}},{"type":"talk","data":{"talk":[{"isDoctor":false,"text":"Спасибо, доктор!"}],"action":{"type":"next"}}},{"type":"answer","data":{"answers":[{"text":"Для контроля переносимости и эффективности терапии Вам нужно записаться на прием через 1-2 месяца после начала приема. ","action":{"type":"talk","data":{"talk":[{"isDoctor":true,"text":"Для контроля переносимости и эффективности терапии Вам нужно записаться на прием через 1-2 месяца после начала приема. "}],"action":{"type":"next"}}}},{"text":"Для контроля эффективности терапии запишитесь на прием через 6 месяцев после начала приема нового препарата","action":{"type":"info","data":{"head":"Сообщение","body":"Данная рекомендация неверна","footer":{"btnData":[{"name":"Ок","action":{"type":"close"}}]}}}}]}},{"type":"talk","data":{"talk":[{"isDoctor":false,"text":"До свидания!"}],"action":{"type":"next"}}},{"type":"info","data":{"head":"Резюме","body":"<b><ul><li>Эстрогенный компонент во всех препаратах МГТ идентичен.<li>Только дроспиренон в качестве гестагенного компонента обладает рядом дополнительных преимуществ: антиандрогенное и антиминералокортикоидное действие.<li>Препарат Анжелик® может оказывать комплексное действие на патогенез менопаузы и способствовать профилактике поздних осложнений, таких как остеопороз, метаболических и сердечно-сосудистых нарушений.<li>Для перехода с циклического режима МГТ необходимо допить текущую упаковку и начать прием Анжелик® со следующего дня.<ul></b>","body2":"АО «БАЙЕР» <br>107113, Москва, 3-я Рыбинская ул., дом 18, строение 2.<br>Телефон: (495) 231-12-00<br>Факс: (495) 231-12-02 АО «БАЙЕР»","btnList":[{"name":"Пройти диалог ещё раз","action":{"type":"jumpToStepClearChat","stepId":"patient2"}},{"name":"Инструкция Анжелик®","action":{"type":"openLink","url":"https://med-game.ru/sites/default/files/docs/Anzhelik.pdf"}}],"footer":{"btnData":[{"name":"Ок","action":{"type":"jumpToStepClearChat","stepId":"patientChoice"}}]}}}]'),Pt={name:"App",data(){return{patientAnswersArray:[],stepNumber:0,showModal:!1,showImageModal:!1,modalInfo:{},modalImageData:{},showChat:!0,disableAnswers:!1,answers:[],chatList:[],mainBranch:Lt,actualState:{},showButtonToChoice:!1,btnDataChoicePatient:{}}},components:{InfoModal:tt,ViewChat:Bt},methods:{sleep(t){return new Promise((e=>setTimeout(e,t)))},async addMessages(t,e){for(let a=0;a<t.length;a++)this.chatList.push(t[a]),await this.sleep(1e3);e()},doAction(t){if("next"===t.type&&this.stepNumber<this.mainBranch.length-1)this.stepNumber+=1,this.actualState=this.mainBranch[this.stepNumber],this.showModal=!1,this.answers.length>0&&(this.answers.length=0),this.doAction(this.actualState);else if("close"===t.type)this.showModal=!1;else if("closeCheck"===t.type)this.showModal=!1,this.doAction(t.action);else if("info"===t.type)this.modalInfo=t.data,this.showModal=!0;else if("answer"===t.type){this.actualState=t;for(let t=0;t<this.actualState.data.answers.length;t++)this.answers.push(this.actualState.data.answers[t])}else if("talk"===t.type)this.disableAnswers=!0,this.addMessages(t.data.talk,(()=>{"next"===t.data.action.type&&(this.answers.length=0),this.disableAnswers=!1,this.doAction(t.data.action)}));else if("checkAnswerList"===t.type)0===this.answers.length&&this.doAction({type:"next"});else if("jumpToStep"===t.type){const e=this.mainBranch.findIndex((e=>e.id===t.stepId));-1===e?console.log(`Error: can't find stepId "${t.stepId}" in data`):(this.stepNumber=e,this.actualState=this.mainBranch[this.stepNumber],this.showModal=!1,this.answers.length>0&&(this.answers.length=0),this.doAction(this.actualState))}else if("jumpToStepClearChat"===t.type)this.stepNumber=this.mainBranch.findIndex((e=>e.id===t.stepId)),this.actualState=this.mainBranch[this.stepNumber],this.showModal=!1,this.chatList.length=0,this.answers.length>0&&(this.answers.length=0),this.doAction(this.actualState);else if("openLink"===t.type)window.open(t.url,"_blank");else if("writePatientChoice"===t.type)this.showModal=!1,this.patientAnswersArray.push([t.questionNumber,t.answerNumber]),this.doAction(t.action);else if("runChoiceAnswers"===t.type){const e=this.patientAnswersArray;e.sort(((t,e)=>t[0]-e[0]));const a=e.map((t=>t[1])).join("");this.patientAnswersArray.length=0;const n=t.data.resumeArray.find((t=>t.choiceAnswers==a));this.doAction(n.action)}else"showButtonToChoice"===t.type&&(this.showButtonToChoice=t.showButton,this.btnDataChoicePatient=t.btnDataItem,this.doAction(t.action))},deleteanswer(t){this.answers.splice(t,1)}},created(){this.actualState=this.mainBranch[this.stepNumber],this.doAction(this.actualState)}},jt=Pt,$t=(0,h.Z)(jt,o,s,!1,null,null,null),Mt=$t.exports;n.ZP.config.productionTip=!1,new n.ZP({render:t=>t(Mt)}).$mount("#app")},990:function(t,e,a){var n={"./background.jpeg":380,"./choicePatient1.jpg":708,"./choicePatient2.jpg":241,"./doctor2.svg":8,"./green1.jpg":396,"./patient2.svg":75,"./risk1.jpg":579};function o(t){var e=s(t);return a(e)}function s(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}o.keys=function(){return Object.keys(n)},o.resolve=s,t.exports=o,o.id=990},8:function(t,e,a){"use strict";t.exports=a.p+"img/doctor2.ba1adc31.svg"},75:function(t,e,a){"use strict";t.exports=a.p+"img/patient2.e2899c44.svg"},380:function(t,e,a){"use strict";t.exports=a.p+"img/background.390c800b.jpeg"},708:function(t,e,a){"use strict";t.exports=a.p+"img/choicePatient1.1b16df50.jpg"},241:function(t,e,a){"use strict";t.exports=a.p+"img/choicePatient2.b1a8d607.jpg"},396:function(t,e,a){"use strict";t.exports=a.p+"img/green1.f964c776.jpg"},579:function(t,e,a){"use strict";t.exports=a.p+"img/risk1.cf191b99.jpg"}},e={};function a(n){var o=e[n];if(void 0!==o)return o.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,n,o,s){if(!n){var i=1/0;for(d=0;d<t.length;d++){n=t[d][0],o=t[d][1],s=t[d][2];for(var c=!0,r=0;r<n.length;r++)(!1&s||i>=s)&&Object.keys(a.O).every((function(t){return a.O[t](n[r])}))?n.splice(r--,1):(c=!1,s<i&&(i=s));if(c){t.splice(d--,1);var l=o();void 0!==l&&(e=l)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[n,o,s]}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.p=""}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,s,i=n[0],c=n[1],r=n[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(o in c)a.o(c,o)&&(a.m[o]=c[o]);if(r)var d=r(a)}for(e&&e(n);l<i.length;l++)s=i[l],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(d)},n=self["webpackChunkmedtest3"]=self["webpackChunkmedtest3"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(914)}));n=a.O(n)})();
//# sourceMappingURL=app.9563bcb1.js.map