"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}
/*!
 * IconicMultiSelect v0.6.0
 * Licence:  MIT
 * (c) 2021 Sidney Wimart.
 */var cross='\n<svg\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  xmlns="http://www.w3.org/2000/svg"\n>\n  <path\n    d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"\n    fill="currentColor"\n  />\n</svg>\n',scrollIntoView=function(e,t){var n=e.getBoundingClientRect(),i=t.getBoundingClientRect();n.top<i.bottom-t.offsetHeight||(e.scrollTop=t.clientHeight+(t.offsetTop-t.offsetHeight)),n.bottom>i.top+t.offsetHeight||(e.scrollTop=t.clientHeight+(t.offsetTop-t.offsetHeight)-(e.offsetHeight-(t.offsetHeight+(t.offsetHeight-t.clientHeight))))},IconicMultiSelect=function(){function e(t){var n=t.data,i=t.itemTemplate,s=t.noData,o=t.noResults,l=t.placeholder,a=t.prefix,r=t.select,c=t.tagTemplate,d=t.textField,u=t.valueField;_classCallCheck(this,e),_defineProperty(this,"customCss",void 0),_defineProperty(this,"data",void 0),_defineProperty(this,"domElements",{}),_defineProperty(this,"event",function(){}),_defineProperty(this,"itemTemplate",void 0),_defineProperty(this,"noData",void 0),_defineProperty(this,"noResults",void 0),_defineProperty(this,"options",[]),_defineProperty(this,"placeholder",void 0),_defineProperty(this,"prefix",void 0),_defineProperty(this,"selectContainer",void 0),_defineProperty(this,"selectedOptions",[]),_defineProperty(this,"tagTemplate",void 0),_defineProperty(this,"textField",void 0),_defineProperty(this,"valueField",void 0),this.data=null!=n?n:[],this.itemTemplate=null!=i?i:null,this.noData=null!=s?s:"No data found.",this.noResults=null!=o?o:"No results found.",this.placeholder=null!=l?l:"Select...",this.prefix=null!=a?a:"iconic-",this.selectContainer=document.querySelector(r),this.tagTemplate=null!=c?c:null,this.textField=null!=d?d:null,this.valueField=null!=u?u:null}return _createClass(e,[{key:"init",value:function(){if(!this.selectContainer||"SELECT"!==this.selectContainer.nodeName)throw new Error("The selector '".concat(element,"' did not select any valid select tag."));if(this.itemTemplate&&0===this.data.length)throw new Error("itemTemplate must be initialized with data from the component settings");this.options=this.data.length>0?this._getDataFromSettings():this._getDataFromSelectTag(),this._renderMultiselect(),this._renderOptionsList(),this.domElements={clear:document.querySelector(".".concat(this.prefix+"multiselect__clear-btn")),input:document.querySelector(".".concat(this.prefix+"multiselect__input")),optionsContainer:document.querySelector(".".concat(this.prefix+"multiselect__options")),optionsContainerList:document.querySelector(".".concat(this.prefix+"multiselect__options > ul")),options:{list:document.querySelectorAll(".".concat(this.prefix+"multiselect__options"," > ul > li")),find:function(e){for(var t=0;t<this.list.length;t++){var n=this.list[t];if(e(n))return n}},some:function(e){for(var t=0;t<this.list.length;t++){if(e(this.list[t],t))return!0}return!1}}},this._enableEventListenners()}},{key:"subscribe",value:function(e){if("function"!=typeof e)throw new Error("parameter in the subscribe method is not a function");this.event=e}},{key:"_addOptionToList",value:function(e,t){var n=this,i='<span class="'.concat(this.prefix+"multiselect__selected",'" data-value="').concat(e.value,'">').concat(this.tagTemplate?this._processTemplate(this.tagTemplate,t):e.text,'<span class="').concat(this.prefix+"multiselect__remove-btn",'">').concat(cross,"</span></span>");this.domElements.input.insertAdjacentHTML("beforebegin",i),document.querySelector('span[data-value="'.concat(e.value,'"]')).lastElementChild.addEventListener("click",function(){var t=n.domElements.options.find(function(t){return t.dataset.value==e.value});n._handleOption(t)})}},{key:"_clearSelection",value:function(){for(var e=this,t=function(t){var n=e.selectedOptions[t],i=e.domElements.options.find(function(e){return e.dataset.value==n.value});i.classList.remove("".concat(e.prefix,"multiselect__options--selected")),e._removeOptionFromList(i.dataset.value)},n=0;n<this.selectedOptions.length;n++)t(n);this.selectedOptions=[],this._handleClearSelectionBtn(),this._handlePlaceholder(),this._dispatchEvent({action:"CLEAR_ALL_OPTIONS",selection:this.selectedOptions})}},{key:"_closeList",value:function(){this.domElements.input.value="",this.domElements.optionsContainer.classList.remove("visible"),this._filterOptions(""),this._removeAllArrowSelected()}},{key:"_dispatchEvent",value:function(e){this.event(e)}},{key:"_enableEventListenners",value:function(){var e=this;document.addEventListener("mouseup",function(t){var n=t.target;document.getElementById("iconic5656-multiselect").contains(n)||(e._filterOptions(""),e._closeList(),e._handlePlaceholder())}),this.domElements.clear.addEventListener("click",function(){e._clearSelection()});for(var t=0;t<this.domElements.options.list.length;t++){this.domElements.options.list[t].addEventListener("click",function(t){var n=t.target;e._handleOption(n),e._closeList()})}this.domElements.input.addEventListener("focus",function(){e.domElements.optionsContainer.classList.add("visible"),e.domElements.input.placeholder=""}),this.domElements.input.addEventListener("input",function(t){var n=t.target.value;e.domElements.options.list.length>0&&e._filterOptions(n)}),this.domElements.input.addEventListener("keydown",function(t){e._handleArrows(t),e._handleBackspace(t),e._handleEnter(t)})}},{key:"_filterOptions",value:function(e){var t=this,n=this.domElements.optionsContainer.classList.contains("visible"),i=e.toLowerCase();if(!n&&e.length>0&&this.domElements.optionsContainer.classList.add("visible"),this.domElements.options.list.length>0){for(var s=0;s<this.domElements.options.list.length;s++){var o=this.domElements.options.list[s];(this.itemTemplate?this.data[s][this.textField]:o.textContent).toLowerCase().substring(0,i.length)===i?this.domElements.optionsContainerList.appendChild(o):o.parentNode&&o.parentNode.removeChild(o)}var l=this.domElements.options.some(function(e,n){return(t.itemTemplate?t.data[n][t.textField]:e.textContent).toLowerCase().substring(0,i.length)===i});this._showNoResults(!l)}}},{key:"_getDataFromSelectTag",value:function(){for(var e=[],t=this.selectContainer.options,n=0;n<t.length;n++)e.push({text:t[n].text,value:t[n].value});return e}},{key:"_getDataFromSettings",value:function(){if(this.data.length>0&&this.valueField&&this.textField){var e="string"==typeof this.valueField,t="string"==typeof this.textField,n=[];if(!e||!t)throw new Error("textField and valueField must be of type string");for(var i=0;i<this.data.length;i++){var s=this.data[i];n.push({value:s[this.valueField],text:s[this.textField]})}return n}return null}},{key:"_handleArrows",value:function(e){if(40===e.keyCode||38===e.keyCode){var t=this.domElements.optionsContainer.classList.contains("visible"),n=document.querySelector(".".concat(this.prefix+"multiselect__options > ul"));if(t){var i=document.querySelector(".".concat(this.prefix,"multiselect__options ul li.arrow-selected")),s={ArrowUp:"previous",Up:"previous",ArrowDown:"next",Down:"next"};if(!i)return n.firstElementChild.classList.add("arrow-selected"),void n.firstElementChild.scrollIntoView();if(i.classList.remove("arrow-selected"),!(i=i[s[e.key]+"ElementSibling"]))return(i=n.children["next"===s[e.key]?0:n.children.length-1]).classList.add("arrow-selected"),void scrollIntoView(n,i);i.classList.add("arrow-selected"),scrollIntoView(n,i)}else this.domElements.optionsContainer.classList.add("visible"),n.firstElementChild.classList.add("arrow-selected"),n.firstElementChild.scrollIntoView()}}},{key:"_handleBackspace",value:function(e){if(8===e.keyCode&&""===e.target.value){var t=this.selectedOptions.length>0?this.selectedOptions[this.selectedOptions.length-1]:null;if(t){var n=document.querySelector('li[data-value="'.concat(t.value,'"]'));this._handleOption(n),0===this.selectedOptions.length&&this.domElements.optionsContainer.classList.remove("visible")}}}},{key:"_handleEnter",value:function(e){if(13===e.keyCode){var t=document.querySelector(".".concat(this.prefix,"multiselect__options ul li.arrow-selected"));t&&(this._handleOption(t),this._closeList())}}},{key:"_handleClearSelectionBtn",value:function(){this.selectedOptions.length>0?this.domElements.clear.style.display="flex":this.domElements.clear.style.display="none"}},{key:"_handleOption",value:function(e){for(var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=0;n<this.selectedOptions.length;n++){if(this.selectedOptions[n].value==e.dataset.value)return e.classList.remove("".concat(this.prefix,"multiselect__options--selected")),this.selectedOptions.splice(n,1),this._removeOptionFromList(e.dataset.value),this._handleClearSelectionBtn(),this._handlePlaceholder(),t&&this._dispatchEvent({action:"REMOVE_OPTION",value:e.dataset.value,selection:this.selectedOptions})}for(var i=0;i<this.options.length;i++){var s=this.options[i];if(s.value==e.dataset.value)return e.classList.add("".concat(this.prefix,"multiselect__options--selected")),this.selectedOptions=[].concat(_toConsumableArray(this.selectedOptions),[s]),this._addOptionToList(s,i),this._handleClearSelectionBtn(),this._handlePlaceholder(),t&&this._dispatchEvent({action:"ADD_OPTION",value:e.dataset.value,selection:this.selectedOptions})}}},{key:"_handlePlaceholder",value:function(){this.selectedOptions.length>0?this.domElements.input.placeholder="":this.domElements.input.placeholder=this.placeholder}},{key:"_processTemplate",value:function(e,t){for(var n=e,i=e.match(/\$\{(\w+)\}/g).map(function(e){return e.replace(/\$\{|\}/g,"")}),s=0;s<i.length;s++){var o,l=i[s];n=n.replace("${".concat(l,"}"),null!==(o=this.data[t][l])&&void 0!==o?o:"")}return n}},{key:"_removeAllArrowSelected",value:function(){var e=this.domElements.options.find(function(e){return e.classList.contains("arrow-selected")});e&&e.classList.remove("arrow-selected")}},{key:"_removeOptionFromList",value:function(e){var t=document.querySelector('span[data-value="'.concat(e,'"]'));t&&t.parentNode&&t.parentNode.removeChild(t)}},{key:"_renderOptionsList",value:function(){var e=this,t='\n        <div class="'.concat(this.prefix,'multiselect__options">\n          <ul>\n          ').concat(this.options.length>0&&!this.itemTemplate?this.options.map(function(e){return'\n              <li data-value="'.concat(e.value,'">').concat(e.text,"</li>\n            ")}).join(""):"","\n\n          ").concat(this.options.length>0&&this.itemTemplate?this.options.map(function(t,n){return'\n              <li data-value="'.concat(t.value,'">').concat(e._processTemplate(e.itemTemplate,n),"</li>\n            ")}).join(""):"","\n          ").concat(this._showNoData(0===this.options.length),"\n          </ul>\n        </div>\n      ");document.querySelector(".".concat(this.prefix+"multiselect__container")).insertAdjacentHTML("beforeend",t)}},{key:"_renderMultiselect",value:function(){this.selectContainer.style.display="none";var e='\n      <div id="iconic5656-multiselect" class="'.concat(this.prefix+"multiselect__container",'">\n        <div class="').concat(this.prefix+"multiselect__wrapper",'">\n          <input class="').concat(this.prefix+"multiselect__input",'" placeholder="').concat(this.placeholder,'" />\n        </div>\n        <span style="display: none;" class="').concat(this.prefix+"multiselect__clear-btn",'">').concat(cross,"</span>\n      </div>\n    ");this.selectContainer.insertAdjacentHTML("afterend",e)}},{key:"_showNoData",value:function(e){return e?'<p class="'.concat(this.prefix,'multiselect__options--no-data">').concat(this.noData,"</p>"):""}},{key:"_showNoResults",value:function(e){var t=document.querySelector(".".concat(this.prefix,"multiselect__options--no-results"));if(e){var n='<p class="'.concat(this.prefix,'multiselect__options--no-results">').concat(this.noResults,"</p>");!t&&this.domElements.optionsContainerList.insertAdjacentHTML("beforeend",n)}else t&&t.parentNode&&t.parentNode.removeChild(t)}}]),e}();