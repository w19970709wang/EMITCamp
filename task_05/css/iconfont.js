;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-dateto" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M614.705729 530.359086l135.21533 0c27.532232 0 49.851723-22.020157 49.851723-49.169909 0-27.166381-22.318211-49.169909-49.851723-49.169909L614.705729 432.019268c-27.532232 0-49.853002 22.002249-49.853002 49.169909C564.852727 508.338928 587.173497 530.359086 614.705729 530.359086z"  ></path>'+
      ''+
      '<path d="M872.56057 111.161244l-110.397562 0L762.163008 39.772902c0-21.612092-21.436842-39.133302-47.88815-39.133302-26.433399 0-47.886871 17.522488-47.886871 39.133302l0 71.388342L354.568795 111.161244 354.568795 42.463061c0-21.612092-21.436842-39.134581-47.879196-39.134581-26.450029 0-47.877916 17.522488-47.877916 39.134581l0 68.698184-106.741606 0C68.571543 111.161244 0.6396 170.083778 0.6396 242.504435l0 650.14342C0.6396 965.069791 68.571543 1024 152.070076 1024l720.490493 0c83.513884 0 151.43943-58.930209 151.43943-131.352145L1024 242.504435C1024 170.083778 956.074453 111.161244 872.56057 111.161244zM919.197661 892.647855c0 12.692227-20.369989 27.449084-46.637092 27.449084L152.070076 920.096939c-26.258149 0-46.620462-14.756857-46.620462-27.449084L105.449614 242.504435c0-12.683273 20.362314-27.441409 46.620462-27.441409l106.741606 0 0 51.692492c0 21.619768 21.427888 39.142256 47.877916 39.142256 26.442354 0 47.879196-17.522488 47.879196-39.142256l0-51.692492 311.821751 0 0 49.011288c0 21.612092 21.453472 39.133302 47.886871 39.133302 26.451308 0 47.88815-17.522488 47.88815-39.133302l0-49.011288 110.397562 0c26.267103 0 46.637092 14.758136 46.637092 27.441409L919.20022 892.647855z"  ></path>'+
      ''+
      '<path d="M751.071061 626.914418 274.718541 626.914418c-27.532232 0-49.853002 22.020157-49.853002 49.169909 0 27.166381 22.31949 49.169909 49.853002 49.169909l476.35252 0c27.515603 0 49.835093-22.020157 49.835093-49.169909S778.585384 626.914418 751.071061 626.914418z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
