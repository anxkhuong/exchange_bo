(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-718fd18e"],{"3b2b":function(t,e,s){var n=s("7726"),i=s("5dbc"),o=s("86cc").f,r=s("9093").f,l=s("aae3"),u=s("0bfb"),c=n.RegExp,a=c,h=c.prototype,p=/a/g,d=/a/g,g=new c(p)!==p;if(s("9e1e")&&(!g||s("79e5")((function(){return d[s("2b4c")("match")]=!1,c(p)!=p||c(d)==d||"/a/i"!=c(p,"i")})))){c=function(t,e){var s=this instanceof c,n=l(t),o=void 0===e;return!s&&n&&t.constructor===c&&o?t:i(g?new a(n&&!o?t.source:t,e):a((n=t instanceof c)?t.source:t,n&&o?u.call(t):e),s?this:h,c)};for(var m=function(t){t in c||o(c,t,{configurable:!0,get:function(){return a[t]},set:function(e){a[t]=e}})},f=r(a),v=0;f.length>v;)m(f[v++]);h.constructor=c,c.prototype=h,s("2aba")(n,"RegExp",c)}s("7a56")("RegExp")},5111:function(t,e,s){"use strict";(function(t){const s={selectionUp:[38],selectionDown:[40],select:[13],hideList:[27],showList:[40],autocomplete:[32,13]},n={input:String,select:Object};function i(t,e){return e.split(".").reduce((t,e)=>t===Object(t)?t[e]:t,t)}function o(t,e){return r(t,e.keyCode)}function r(t,e){if(t.length<=0)return!1;const s=t=>t.some(t=>t===e);return Array.isArray(t[0])?t.some(t=>s(t)):s(t)}function l(t,e,s){return s?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}function u(t){return function(){for(var e=[],s=0;s<arguments.length;s++)e[s]=arguments[s];try{return Promise.resolve(t.apply(this,e))}catch(n){return Promise.reject(n)}}}function c(){}function a(t,e){if(!e)return t&&t.then?t.then(c):Promise.resolve()}function h(t,e){var s=t();return s&&s.then?s.then(e):e(s)}function p(t){var e=t();if(e&&e.then)return e.then(c)}function d(t,e){try{var s=t()}catch(n){return e(n)}return s&&s.then?s.then(void 0,e):s}function g(t,e){try{var s=t()}catch(n){return e()}return s&&s.then?s.then(e,e):e()}var m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"vue-simple-suggest",class:[t.styles.vueSimpleSuggest,{designed:!t.destyled,focus:t.isInFocus}],on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"tab",9,e.key,"Tab"))return null;t.isTabbed=!0}}},[s("div",{ref:"inputSlot",staticClass:"input-wrapper",class:t.styles.inputWrapper,attrs:{role:"combobox","aria-haspopup":"listbox","aria-owns":t.listId,"aria-expanded":t.listShown&&!t.removeList?"true":"false"}},[t._t("default",[s("input",t._b({staticClass:"default-input",class:t.styles.defaultInput,domProps:{value:t.text||""}},"input",t.$attrs,!1))])],2),t._v(" "),s("transition",{attrs:{name:"vue-simple-suggest"}},[t.listShown&&!t.removeList?s("ul",{staticClass:"suggestions",class:t.styles.suggestions,attrs:{id:t.listId,role:"listbox","aria-labelledby":t.listId}},[this.$scopedSlots["misc-item-above"]?s("li",{class:t.styles.miscItemAbove},[t._t("misc-item-above",null,{suggestions:t.suggestions,query:t.text})],2):t._e(),t._v(" "),t._l(t.suggestions,(function(e,n){return s("li",{key:t.getId(e,n),staticClass:"suggest-item",class:[t.styles.suggestItem,{selected:t.isSelected(e),hover:t.isHovered(e)}],attrs:{role:"option","aria-selected":t.isHovered(e)||t.isSelected(e)?"true":"false",id:t.getId(e,n)},on:{mouseenter:function(s){return t.hover(e,s.target)},mouseleave:function(e){return t.hover(void 0)},click:function(s){return t.suggestionClick(e,s)}}},[t._t("suggestion-item",[s("span",[t._v(t._s(t.displayProperty(e)))])],{autocomplete:function(){return t.autocompleteText(e)},suggestion:e,query:t.text})],2)})),t._v(" "),this.$scopedSlots["misc-item-below"]?s("li",{class:t.styles.miscItemBelow},[t._t("misc-item-below",null,{suggestions:t.suggestions,query:t.text})],2):t._e()],2):t._e()])],1)},staticRenderFns:[],name:"vue-simple-suggest",inheritAttrs:!1,model:{prop:"value",event:"input"},props:{styles:{type:Object,default:()=>({})},controls:{type:Object,default:()=>s},minLength:{type:Number,default:1},maxSuggestions:{type:Number,default:10},displayAttribute:{type:String,default:"title"},valueAttribute:{type:String,default:"id"},list:{type:[Function,Array],default:()=>[]},removeList:{type:Boolean,default:!1},destyled:{type:Boolean,default:!1},filterByQuery:{type:Boolean,default:!1},filter:{type:Function,default(t,e){return!e||~this.displayProperty(t).toLowerCase().indexOf(e.toLowerCase())}},debounce:{type:Number,default:0},nullableSelect:{type:Boolean,default:!1},value:{},mode:{type:String,default:"input",validator:t=>!!~Object.keys(n).indexOf(t.toLowerCase())},preventHide:{type:Boolean,default:!1}},watch:{mode:{handler(t,e){this.constructor.options.model.event=t,this.$parent&&this.$parent.$forceUpdate(),this.$nextTick(()=>{"input"===t?this.$emit("input",this.text):this.$emit("select",this.selected)})},immediate:!0},value:{handler(t){"string"!==typeof t&&(t=this.displayProperty(t)),this.updateTextOutside(t)},immediate:!0}},data(){return{selected:null,hovered:null,suggestions:[],listShown:!1,inputElement:null,canSend:!0,timeoutInstance:null,text:this.value,isPlainSuggestion:!1,isClicking:!1,isInFocus:!1,isFalseFocus:!1,isTabbed:!1,controlScheme:{},listId:this._uid+"-suggestions"}},computed:{listIsRequest(){return"function"===typeof this.list},inputIsComponent(){return this.$slots.default&&this.$slots.default.length>0&&!!this.$slots.default[0].componentInstance},input(){return this.inputIsComponent?this.$slots.default[0].componentInstance:this.inputElement},on(){return this.inputIsComponent?"$on":"addEventListener"},off(){return this.inputIsComponent?"$off":"removeEventListener"},hoveredIndex(){for(let t=0;t<this.suggestions.length;t++){const e=this.suggestions[t];if(this.hovered&&this.valueProperty(this.hovered)==this.valueProperty(e))return t}return-1},textLength(){return this.text&&this.text.length||this.inputElement.value.length||0},isSelectedUpToDate(){return!!this.selected&&this.displayProperty(this.selected)===this.text}},created(){this.controlScheme=Object.assign({},s,this.controls)},mounted:u((function(){const t=this;return l(t.$slots.default,(function(){t.$nextTick(()=>{t.inputElement=t.$refs["inputSlot"].querySelector("input"),t.inputElement?(t.setInputAriaAttributes(),t.prepareEventHandlers(!0)):console.error("No input element found")})}))})),beforeDestroy(){this.prepareEventHandlers(!1)},methods:{isEqual(t,e){return e&&this.valueProperty(t)==this.valueProperty(e)},isSelected(t){return this.isEqual(t,this.selected)},isHovered(t){return this.isEqual(t,this.hovered)},setInputAriaAttributes(){this.inputElement.setAttribute("aria-activedescendant",""),this.inputElement.setAttribute("aria-autocomplete","list"),this.inputElement.setAttribute("aria-controls",this.listId)},prepareEventHandlers(t){const e=this[t?"on":"off"],s={click:this.showSuggestions,keydown:this.onKeyDown,keyup:this.onListKeyUp},n=Object.assign({blur:this.onBlur,focus:this.onFocus,input:this.onInput},s);for(const o in n)this.input[e](o,n[o]);const i=t?"addEventListener":"removeEventListener";for(const o in s)this.inputElement[i](o,s[o])},isScopedSlotEmpty(t){if(t){const e=t(this);return!(Array.isArray(e)||e&&(e.tag||e.context||e.text||e.children))}return!0},miscSlotsAreEmpty(){const t=["misc-item-above","misc-item-below"].map(t=>this.$scopedSlots[t]);if(t.every(t=>!!t))return t.every(this.isScopedSlotEmpty.bind(this));const e=t.find(t=>!!t);return this.isScopedSlotEmpty.call(this,e)},getPropertyByAttribute(t,e){return this.isPlainSuggestion?t:void 0!==typeof t?i(t,e):t},displayProperty(e){if(this.isPlainSuggestion)return e;let s=this.getPropertyByAttribute(e,this.displayAttribute);return"undefined"===typeof s&&(s=JSON.stringify(e),t&&~"production".indexOf("dev")&&console.warn("[vue-simple-suggest]: Please, provide `display-attribute` as a key or a dotted path for a property from your object.")),String(s||"")},valueProperty(t){if(this.isPlainSuggestion)return t;const e=this.getPropertyByAttribute(t,this.valueAttribute);return"undefined"===typeof e&&console.error("[vue-simple-suggest]: Please, check if you passed 'value-attribute' (default is 'id') and 'display-attribute' (default is 'title') props correctly.\n        Your list objects should always contain a unique identifier."),e},autocompleteText(t){this.setText(this.displayProperty(t))},setText(t){this.$nextTick(()=>{this.inputElement.value=t,this.text=t,this.$emit("input",t)})},select(t){(this.selected!==t||this.nullableSelect&&!t)&&(this.selected=t,this.$emit("select",t),t&&this.autocompleteText(t)),this.hover(null)},hover(t,e){const s=t?this.getId(t,this.hoveredIndex):"";this.inputElement.setAttribute("aria-activedescendant",s),t&&t!==this.hovered&&this.$emit("hover",t,e),this.hovered=t},hideList(){this.listShown&&(this.listShown=!1,this.hover(null),this.$emit("hide-list"))},showList(){this.listShown||this.textLength>=this.minLength&&(this.suggestions.length>0||!this.miscSlotsAreEmpty())&&(this.listShown=!0,this.$emit("show-list"))},showSuggestions:u((function(){const t=this;return h((function(){if(0===t.suggestions.length&&t.minLength<=t.textLength)return t.showList(),a(t.research())}),(function(){t.showList()}))})),onShowList(t){o(this.controlScheme.showList,t)&&this.showSuggestions()},moveSelection(t){if(this.listShown&&this.suggestions.length&&o([this.controlScheme.selectionUp,this.controlScheme.selectionDown],t)){t.preventDefault();const e=o(this.controlScheme.selectionDown,t),s=2*e-1,n=e?0:this.suggestions.length-1,i=e?this.hoveredIndex<this.suggestions.length-1:this.hoveredIndex>0;let r=null;r=this.hovered?i?this.suggestions[this.hoveredIndex+s]:this.suggestions[n]:this.selected||this.suggestions[n],this.hover(r)}},onKeyDown(t){const e=this.controlScheme.select,s=this.controlScheme.hideList;"Enter"===t.key&&this.listShown&&r([e,s],13)&&t.preventDefault(),"Tab"===t.key&&this.hovered&&this.select(this.hovered),this.onShowList(t),this.moveSelection(t),this.onAutocomplete(t)},onListKeyUp(t){const e=this.controlScheme.select,s=this.controlScheme.hideList;this.listShown&&o([e,s],t)&&(t.preventDefault(),o(e,t)&&this.select(this.hovered),this.hideList())},onAutocomplete(t){o(this.controlScheme.autocomplete,t)&&(t.ctrlKey||t.shiftKey)&&this.suggestions.length>0&&this.suggestions[0]&&this.listShown&&(t.preventDefault(),this.hover(this.suggestions[0]),this.autocompleteText(this.suggestions[0]))},suggestionClick(t,e){this.$emit("suggestion-click",t,e),this.select(t),this.preventHide||this.hideList(),this.isClicking&&setTimeout(()=>{this.inputElement.focus(),this.isClicking=!1},0)},onBlur(t){this.isInFocus?(this.isClicking=this.hovered&&!this.isTabbed,this.isClicking?t&&t.isTrusted&&!this.isTabbed&&(this.isFalseFocus=!0):(this.isInFocus=!1,this.hideList(),this.$emit("blur",t))):(this.inputElement.blur(),console.error("This should never happen!\n          If you encountered this error, please make sure that your input component emits 'focus' events properly.\n          For more info see https://github.com/KazanExpress/vue-simple-suggest#custom-input.\n\n          If your 'vue-simple-suggest' setup does not include a custom input component - please,\n          report to https://github.com/KazanExpress/vue-simple-suggest/issues/new")),this.isTabbed=!1},onFocus(t){this.isInFocus=!0,t&&!this.isFalseFocus&&this.$emit("focus",t),this.isClicking||this.isFalseFocus||this.showSuggestions(),this.isFalseFocus=!1},onInput(t){const e=t.target?t.target.value:t;this.updateTextOutside(e),this.$emit("input",e)},updateTextOutside(t){this.text!==t&&(this.text=t,this.hovered&&this.hover(null),this.text.length<this.minLength?this.hideList():this.debounce?(clearTimeout(this.timeoutInstance),this.timeoutInstance=setTimeout(this.research,this.debounce)):this.research())},research:u((function(){const t=this;return g((function(){return d((function(){return p((function(){if(t.canSend){t.canSend=!1;let e=t.text;return l(t.getSuggestions(t.text),(function(s){e===t.text&&t.$set(t,"suggestions",s)}))}}))}),(function(e){throw t.clearSuggestions(),e}))}),(function(){return t.canSend=!0,0===t.suggestions.length&&t.miscSlotsAreEmpty()?t.hideList():t.isInFocus&&t.showList(),t.suggestions}))})),getSuggestions:u((function(t){const e=this;if(t=t||"",t.length<e.minLength)return[];e.selected=null,e.listIsRequest&&e.$emit("request-start",t);let s=!1,n=[];return g((function(){return d((function(){return h((function(){if(e.listIsRequest)return l(e.list(t),(function(t){n=t||[]}));n=e.list}),(function(){Array.isArray(n)||(n=[n]),s="object"!==typeof n[0]&&"undefined"!==typeof n[0]||Array.isArray(n[0]),e.filterByQuery&&(n=n.filter(s=>e.filter(s,t))),e.listIsRequest&&e.$emit("request-done",n)}))}),(function(t){if(!e.listIsRequest)throw t;e.$emit("request-failed",t)}))}),(function(){return e.maxSuggestions&&n.splice(e.maxSuggestions),e.isPlainSuggestion=s,n}))})),clearSuggestions(){this.suggestions.splice(0)},getId(t,e){return`${this.listId}-suggestion-${this.isPlainSuggestion?e:this.valueProperty(t)||e}`}}};e["a"]=m}).call(this,s("f28c"))},a204:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"page-autocomplete-demo"}},[s("vx-card",{attrs:{title:"Basic Autocomplete","code-toggler":""}},[s("vue-simple-suggest",{attrs:{list:t.simpleSuggestionList,"filter-by-query":!0},model:{value:t.chosen,callback:function(e){t.chosen=e},expression:"chosen"}}),s("p",{staticClass:"mt-4"},[t._v("Chosen element: "+t._s(t.chosen))]),s("template",{slot:"codeContainer"},[t._v('\n<template>\n  <vue-simple-suggest\n    v-model="chosen"\n    :list="simpleSuggestionList"\n    :filter-by-query="true">\n    \x3c!-- Filter by input text to only show the matching results --\x3e\n  </vue-simple-suggest>\n\n  <p class="mt-4">Chosen element: '+t._s(t.chosen)+"</p>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      chosen: '',\n    }\n  },\n  methods: {\n    simpleSuggestionList() {\n      return [\n        'Vue.js',\n        'React.js',\n        'Angular.js'\n      ]\n    },\n  }\n}\n<\/script>\n\n<style lang=\"scss\">\n@import \"@/assets/scss/vuexy/extraComponents/autocomplete.scss\";\n</style>\n      ")])],2),s("vx-card",{attrs:{title:"Ajax Based Autocomplete","code-toggler":""}},[s("vue-simple-suggest",{ref:"suggestComponent",attrs:{pattern:"\\w+",list:t.getList,"max-suggestions":10,"min-length":3,debounce:200,"filter-by-query":!1,"prevent-submit":!0,controls:{selectionUp:[38,33],selectionDown:[40,34],select:[13,36],hideList:[27,35]},mode:t.mode,"nullable-select":!0,placeholder:"Search information...","value-attribute":"id","display-attribute":"text"},on:{select:t.onSuggestSelect},scopedSlots:t._u([{key:"misc-item-above",fn:function(e){var n=e.suggestions,i=e.query;return[s("div",{staticClass:"misc-item"},[s("span",[t._v("You're searching for '"+t._s(i)+"'.")])]),n.length>0?[s("div",{staticClass:"misc-item"},[s("span",[t._v(t._s(n.length)+" suggestions are shown...")])]),s("hr")]:t.loading?t._e():s("div",{staticClass:"misc-item"},[s("span",[t._v("No results")])])]}},{key:"suggestion-item",fn:function(e){return s("div",{attrs:{title:e.suggestion.description}},[s("div",{staticClass:"text"},[s("span",{domProps:{innerHTML:t._s(t.boldenSuggestion(e))}})])])}},{key:"misc-item-below",fn:function(e){e.suggestions;return t.loading?s("div",{staticClass:"misc-item"},[s("span",[t._v("Loading...")])]):t._e()}}],null,!0),model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},[s("div",{staticClass:"g"},[s("input",{attrs:{type:"text"}})])]),s("p",{staticClass:"mt-3"},[t._v("Selected element ("+t._s(typeof t.selected)+"): "),s("pre",{staticClass:"selected hljs"},[s("span",{domProps:{innerHTML:t._s(t.selected)}})])]),s("template",{slot:"codeContainer"},[t._v('\n<template>\n  <vue-simple-suggest\n    pattern="\\w+"\n    v-model="model"\n    :list="getList"\n    :max-suggestions="10"\n    :min-length="3"\n    :debounce="200"\n    :filter-by-query="false"\n    :prevent-submit="true"\n    :controls="{\n      selectionUp: [38, 33],\n      selectionDown: [40, 34],\n      select: [13, 36],\n      hideList: [27, 35]\n    }"\n    :mode="mode"\n    :nullable-select="true"\n    ref="suggestComponent"\n    placeholder="Search information..."\n    value-attribute="id"\n    display-attribute="text"\n    @select="onSuggestSelect">\n\n    <div class="g">\n      <input type="text">\n    </div>\n\n    <template slot="misc-item-above" slot-scope="{ suggestions, query }">\n      <div class="misc-item">\n        <span>You\'re searching for \''+t._s("{{ query }}")+'\'.</span>\n      </div>\n\n      <template v-if="suggestions.length > 0">\n        <div class="misc-item">\n          <span>'+t._s("{{ suggestions.length }}")+' suggestions are shown...</span>\n        </div>\n        <hr>\n      </template>\n\n      <div class="misc-item" v-else-if="!loading">\n        <span>No results</span>\n      </div>\n    </template>\n\n    <div slot="suggestion-item" slot-scope="scope" :title="scope.suggestion.description">\n      <div class="text">\n        <span v-html="boldenSuggestion(scope)"></span>\n      </div>\n    </div>\n\n    <div class="misc-item" slot="misc-item-below" slot-scope="{ suggestions }" v-if="loading">\n      <span>Loading...</span>\n    </div>\n  </vue-simple-suggest>\n\n  <p class="mt-3">Selected element ('+t._s("{{ typeof selected }}")+"): <pre class=\"selected hljs\"><span v-html=\"selected\"></span></pre></p>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      model: null,\n    }\n  },\n  methods: {\n    getList (inputValue) {\n      return new Promise((resolve, reject) => {\n        let url = `https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&namespace=*&search=${inputValue}&limit=10&namespace=0&format=json`\n        fetch(url).then(response => {\n          if (!response.ok) {\n            reject()\n          }\n          response.json().then(json => {\n            json.shift();\n            let result = []\n            const fields = ['text', 'description', 'link']\n            json.forEach((part, i) => {\n              part.forEach((el, j) => {\n                if (!result[j]) {\n                  result.push({\n                    id: j+1\n                  })\n                }\n                result[j][fields[i]] = el\n              })\n            })\n            resolve(result)\n            // resolve([...(json.items || [])])\n          }).catch(e => {\n            reject(e)\n          })\n        }).catch(error => {\n          this.loading = false\n          reject(error)\n        })\n      })\n    },\n    onSuggestSelect (suggest) {\n      this.selected = suggest\n    },\n    boldenSuggestion(scope) {\n      if (!scope) return scope;\n      const { suggestion, query } = scope;\n      let result = this.$refs.suggestComponent.displayProperty(suggestion);\n      if (!query) return result;\n      const texts = query.split(/[\\s-_/\\\\|.]/gm).filter(t => !!t) || [''];\n      return result.replace(new RegExp('(.*?)(' + texts.join('|') + ')(.*?)','gi'), '$1<b>$2</b>$3');\n    },\n  }\n}\n<\/script>\n      ")])],2),s("vx-card",{attrs:{title:"Mode"}},[s("p",{staticClass:"mb-3"},[t._v("Determines the event, that triggers "),s("code",[t._v("v-model")]),t._v(". Can be one of "),s("code",[t._v("'input'")]),t._v(" (default) or "),s("code",[t._v("'select'")]),t._v(".")]),s("p",{staticClass:"mb-3"},[t._v("For example, if "),s("code",[t._v("'input'")]),t._v(" is chosen - then v-model will update the value each time an "),s("code",[t._v("input")]),t._v(" event is fired, setting the input's string.")]),s("p",{staticClass:"mb-3"},[t._v("Same is for "),s("code",[t._v("'select'")]),t._v(" - v-model changes only when something is selected from the list, setting the selected value (string, object or whatever) to its argument.")]),s("p",{staticClass:"mb-3"},[t._v("A proper use-case for it being when one wants to use the component only for selection binding and custom input for text binding:")]),s("prism",{staticClass:"rounded-lg",attrs:{language:"markup"}},[t._v('\n<vue-simple-suggest v-model="selected" mode="select">\n  <input v-model="text">\n</vue-simple-suggest>\n      ')])],1)],1)},i=[],o=(s("ac6a"),s("3b2b"),s("a481"),s("28a5"),s("5111")),r=(s("c4c94"),s("8d51")),l=s.n(r),u={name:"Autocomplete",data:function(){return{chosen:"",selected:null,model:null,mode:"input",loading:!1,log:[]}},methods:{simpleSuggestionList:function(){return["Vue.js","React.js","Angular.js"]},onSuggestSelect:function(t){this.selected=t},boldenSuggestion:function(t){if(!t)return t;var e=t.suggestion,s=t.query,n=this.$refs.suggestComponent.displayProperty(e);if(!s)return n;var i=s.split(/[\s-_/\\|.]/gm).filter((function(t){return!!t}))||[""];return n.replace(new RegExp("(.*?)("+i.join("|")+")(.*?)","gi"),"$1<b>$2</b>$3")},getList:function(t){var e=this;return new Promise((function(s,n){var i="https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&namespace=*&search=".concat(t,"&limit=10&namespace=0&format=json");fetch(i).then((function(t){t.ok||n(),t.json().then((function(t){t.shift();var e=[],n=["text","description","link"];t.forEach((function(t,s){t.forEach((function(t,i){e[i]||e.push({id:i+1}),e[i][n[s]]=t}))})),s(e)})).catch((function(t){n(t)}))})).catch((function(t){e.loading=!1,n(t)}))}))}},components:{VueSimpleSuggest:o["a"],Prism:l.a}},c=u,a=(s("f8a3"),s("2877")),h=Object(a["a"])(c,n,i,!1,null,null,null);e["default"]=h.exports},c4c94:function(t,e,s){},d82a:function(t,e,s){},f8a3:function(t,e,s){"use strict";s("d82a")}}]);