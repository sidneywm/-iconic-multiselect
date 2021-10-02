"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}function _defineProperty(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}
/*!
 * IconicMultiSelect v0.6.1
 * Licence:  MIT
 * (c) 2021 Sidney Wimart.
 */var IconicMultiSelect=function(){function e(t){var i=t.data,n=t.itemTemplate,s=t.noData,l=t.noResults,o=t.placeholder,a=t.select,r=t.tagTemplate,c=t.textField,d=t.valueField;_classCallCheck(this,e),_defineProperty(this,"_data",void 0),_defineProperty(this,"_domElements",void 0),_defineProperty(this,"_event",function(){}),_defineProperty(this,"_itemTemplate",void 0),_defineProperty(this,"_multiselect",void 0),_defineProperty(this,"_noData",void 0),_defineProperty(this,"_noResults",void 0),_defineProperty(this,"_options",[]),_defineProperty(this,"_placeholder",void 0),_defineProperty(this,"_select",void 0),_defineProperty(this,"_selectContainer",void 0),_defineProperty(this,"_selectedOptions",[]),_defineProperty(this,"_tagTemplate",void 0),_defineProperty(this,"_textField",void 0),_defineProperty(this,"_valueField",void 0),_defineProperty(this,"_cross",'\n    <svg\n      width="24"\n      height="24"\n      viewBox="0 0 24 24"\n      fill="none"\n      xmlns="http://www.w3.org/2000/svg"\n    >\n      <path\n        d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"\n        fill="currentColor"\n      />\n    </svg>\n    '),this._data=null!=i?i:[],this._itemTemplate=null!=n?n:null,this._noData=null!=s?s:"No data found.",this._noResults=null!=l?l:"No results found.",this._placeholder=null!=o?o:"Select...",this._select=a,this._selectContainer=document.querySelector(a),this._tagTemplate=null!=r?r:null,this._textField=null!=c?c:null,this._valueField=null!=d?d:null}return _createClass(e,[{key:"init",value:function(){if(!this._selectContainer||"SELECT"!==this._selectContainer.nodeName)throw new Error("The selector '".concat(this._select,"' did not select any valid select tag."));if(this._itemTemplate&&0===this._data.length)throw new Error("itemTemplate must be initialized with data from the component settings");this._options=this._data.length>0?this._getDataFromSettings():this._getDataFromSelectTag(),this._renderMultiselect(),this._renderOptionsList(),this._domElements={clear:this._multiselect.querySelector(".multiselect__clear-btn"),input:this._multiselect.querySelector(".multiselect__input"),optionsContainer:this._multiselect.querySelector(".multiselect__options"),optionsContainerList:this._multiselect.querySelector(".multiselect__options > ul"),options:{list:this._multiselect.querySelectorAll(".multiselect__options > ul > li"),find:function(e){for(var t=0;t<this.list.length;t++){var i=this.list[t];if(e(i))return i}},some:function(e){for(var t=0;t<this.list.length;t++){if(e(this.list[t],t))return!0}return!1}}},this._enableEventListenners()}},{key:"subscribe",value:function(e){if("function"!=typeof e)throw new Error("parameter in the subscribe method is not a function");this._event=e}},{key:"_addOptionToList",value:function(e,t){var i=this,n='<span class="multiselect__selected" data-value="'.concat(e.value,'">').concat(this._tagTemplate?this._processTemplate(this._tagTemplate,t):e.text,'<span class="multiselect__remove-btn">').concat(this._cross,"</span></span>");this._domElements.input.insertAdjacentHTML("beforebegin",n),this._multiselect.querySelector('span[data-value="'.concat(e.value,'"]')).lastElementChild.addEventListener("click",function(){var t=i._domElements.options.find(function(t){return t.dataset.value==e.value});i._handleOption(t)})}},{key:"_clearSelection",value:function(){for(var e=this,t=function(t){var i=e._selectedOptions[t],n=e._domElements.options.find(function(e){return e.dataset.value==i.value});n.classList.remove("multiselect__options--selected"),e._removeOptionFromList(n.dataset.value)},i=0;i<this._selectedOptions.length;i++)t(i);this._selectedOptions=[],this._handleClearSelectionBtn(),this._handlePlaceholder(),this._dispatchEvent({action:"CLEAR_ALL_OPTIONS",selection:this._selectedOptions})}},{key:"_closeList",value:function(){this._domElements.input.value="",this._domElements.optionsContainer.classList.remove("visible"),this._filterOptions(""),this._removeAllArrowSelected()}},{key:"_dispatchEvent",value:function(e){this._event(e)}},{key:"_enableEventListenners",value:function(){var e=this;document.addEventListener("mouseup",function(t){var i=t.target;e._multiselect.contains(i)||(e._filterOptions(""),e._closeList(),e._handlePlaceholder())}),this._domElements.clear.addEventListener("click",function(){e._clearSelection()});for(var t=0;t<this._domElements.options.list.length;t++){this._domElements.options.list[t].addEventListener("click",function(t){var i=t.target;e._handleOption(i),e._closeList()})}this._domElements.input.addEventListener("focus",function(){e._domElements.optionsContainer.classList.add("visible"),e._domElements.input.placeholder=""}),this._domElements.input.addEventListener("input",function(t){var i=t.target.value;e._domElements.options.list.length>0&&e._filterOptions(i)}),this._domElements.input.addEventListener("keydown",function(t){e._handleArrows(t),e._handleBackspace(t),e._handleEnter(t)})}},{key:"_filterOptions",value:function(e){var t=this,i=this._domElements.optionsContainer.classList.contains("visible"),n=e.toLowerCase();if(!i&&e.length>0&&this._domElements.optionsContainer.classList.add("visible"),this._domElements.options.list.length>0){for(var s=0;s<this._domElements.options.list.length;s++){var l=this._domElements.options.list[s];(this._itemTemplate?this._data[s][this._textField]:l.textContent).toLowerCase().substring(0,n.length)===n?this._domElements.optionsContainerList.appendChild(l):l.parentNode&&l.parentNode.removeChild(l)}var o=this._domElements.options.some(function(e,i){return(t._itemTemplate?t._data[i][t._textField]:e.textContent).toLowerCase().substring(0,n.length)===n});this._showNoResults(!o)}}},{key:"_generateId",value:function(e){for(var t="",i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=i.length,s=0;s<e;s++)t+=i.charAt(Math.floor(Math.random()*n));return t}},{key:"_getDataFromSelectTag",value:function(){for(var e=[],t=this._selectContainer.options,i=0;i<t.length;i++)e.push({text:t[i].text,value:t[i].value});return e}},{key:"_getDataFromSettings",value:function(){if(this._data.length>0&&this._valueField&&this._textField){var e="string"==typeof this._valueField,t="string"==typeof this._textField,i=[];if(!e||!t)throw new Error("textField and valueField must be of type string");for(var n=0;n<this._data.length;n++){var s=this._data[n];i.push({value:s[this._valueField],text:s[this._textField]})}return i}return null}},{key:"_handleArrows",value:function(e){if(40===e.keyCode||38===e.keyCode){e.preventDefault();var t=this._domElements.optionsContainer.classList.contains("visible"),i=this._multiselect.querySelector(".multiselect__options > ul");if(t){var n=this._multiselect.querySelector(".multiselect__options ul li.arrow-selected"),s={ArrowUp:"previous",Up:"previous",ArrowDown:"next",Down:"next"};if(!n)return i.firstElementChild.classList.add("arrow-selected"),void i.firstElementChild.scrollIntoView(!1);if(n.classList.remove("arrow-selected"),!(n=n[s[e.key]+"ElementSibling"]))return(n=i.children["next"===s[e.key]?0:i.children.length-1]).classList.add("arrow-selected"),void this._scrollIntoView(i,n);n.classList.add("arrow-selected"),this._scrollIntoView(i,n)}else this._domElements.optionsContainer.classList.add("visible"),i.firstElementChild.classList.add("arrow-selected"),i.firstElementChild.scrollIntoView(!1)}}},{key:"_handleBackspace",value:function(e){if(8===e.keyCode&&""===e.target.value){var t=this._selectedOptions.length>0?this._selectedOptions[this._selectedOptions.length-1]:null;if(t){var i=this._multiselect.querySelector('li[data-value="'.concat(t.value,'"]'));this._handleOption(i),0===this._selectedOptions.length&&this._domElements.optionsContainer.classList.remove("visible")}}}},{key:"_handleClearSelectionBtn",value:function(){this._selectedOptions.length>0?this._domElements.clear.style.display="flex":this._domElements.clear.style.display="none"}},{key:"_handleEnter",value:function(e){if(13===e.keyCode){var t=this._multiselect.querySelector(".multiselect__options ul li.arrow-selected");t&&(this._handleOption(t),this._closeList())}}},{key:"_handleOption",value:function(e){for(var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=0;i<this._selectedOptions.length;i++){if(this._selectedOptions[i].value==e.dataset.value)return e.classList.remove("multiselect__options--selected"),this._selectedOptions.splice(i,1),this._removeOptionFromList(e.dataset.value),this._handleClearSelectionBtn(),this._handlePlaceholder(),t&&this._dispatchEvent({action:"REMOVE_OPTION",value:e.dataset.value,selection:this._selectedOptions})}for(var n=0;n<this._options.length;n++){var s=this._options[n];if(s.value==e.dataset.value)return e.classList.add("multiselect__options--selected"),this._selectedOptions=[].concat(_toConsumableArray(this._selectedOptions),[s]),this._addOptionToList(s,n),this._handleClearSelectionBtn(),this._handlePlaceholder(),t&&this._dispatchEvent({action:"ADD_OPTION",value:e.dataset.value,selection:this._selectedOptions})}}},{key:"_handlePlaceholder",value:function(){this._selectedOptions.length>0?this._domElements.input.placeholder="":this._domElements.input.placeholder=this._placeholder}},{key:"_processTemplate",value:function(e,t){for(var i=e,n=e.match(/\$\{(\w+)\}/g).map(function(e){return e.replace(/\$\{|\}/g,"")}),s=0;s<n.length;s++){var l,o=n[s];i=i.replace("${".concat(o,"}"),null!==(l=this._data[t][o])&&void 0!==l?l:"")}return i}},{key:"_removeAllArrowSelected",value:function(){var e=this._domElements.options.find(function(e){return e.classList.contains("arrow-selected")});e&&e.classList.remove("arrow-selected")}},{key:"_removeOptionFromList",value:function(e){var t=this._multiselect.querySelector('span[data-value="'.concat(e,'"]'));t&&t.parentNode&&t.parentNode.removeChild(t)}},{key:"_renderOptionsList",value:function(){var e=this,t='\n        <div class="multiselect__options">\n          <ul>\n          '.concat(this._options.length>0&&!this._itemTemplate?this._options.map(function(e){return'\n              <li data-value="'.concat(e.value,'">').concat(e.text,"</li>\n            ")}).join(""):"","\n\n          ").concat(this._options.length>0&&this._itemTemplate?this._options.map(function(t,i){return'\n              <li data-value="'.concat(t.value,'">').concat(e._processTemplate(e._itemTemplate,i),"</li>\n            ")}).join(""):"","\n          ").concat(this._showNoData(0===this._options.length),"\n          </ul>\n        </div>\n      ");this._multiselect.insertAdjacentHTML("beforeend",t)}},{key:"_renderMultiselect",value:function(){this._selectContainer.style.display="none";var e="iconic-"+this._generateId(20),t='\n      <div id="'.concat(e,'" class="multiselect__container">\n        <div class="multiselect__wrapper">\n          <input class="multiselect__input" placeholder="').concat(this._placeholder,'" />\n        </div>\n        <span style="display: none;" class="multiselect__clear-btn">').concat(this._cross,"</span>\n      </div>\n    ");this._selectContainer.insertAdjacentHTML("afterend",t),this._multiselect=document.querySelector("#".concat(e))}},{key:"_scrollIntoView",value:function(e,t){var i=e.getBoundingClientRect(),n=t.getBoundingClientRect();i.top<n.bottom-t.offsetHeight||(e.scrollTop=t.clientHeight+(t.offsetTop-t.offsetHeight)),i.bottom>n.top+t.offsetHeight||(e.scrollTop=t.clientHeight+(t.offsetTop-t.offsetHeight)-(e.offsetHeight-(t.offsetHeight+(t.offsetHeight-t.clientHeight))))}},{key:"_showNoData",value:function(e){return e?'<p class="multiselect__options--no-data">'.concat(this._noData,"</p>"):""}},{key:"_showNoResults",value:function(e){var t=this._multiselect.querySelector(".multiselect__options--no-results");if(e){var i='<p class="multiselect__options--no-results">'.concat(this._noResults,"</p>");!t&&this._domElements.optionsContainerList.insertAdjacentHTML("beforeend",i)}else t&&t.parentNode&&t.parentNode.removeChild(t)}}]),e}();