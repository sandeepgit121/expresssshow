/*
//Plugin start
//(function (jQuery_1_7_1) {
    var methods =
       {
           init: function (options) {
               return this.each(function () {
                   var _this = jQuery_1_7_1(this);
                   _this.data('marquee', options);
                   var _li = jQuery_1_7_1('>li', _this);

                   _this.wrap('<div class="slide_container"></div>')
                        .height(_this.height())
                       .hover(function () { if (jQuery_1_7_1(this).data('marquee').stop) { jQuery_1_7_1(this).stop(true, false); } },
                              function () { if (jQuery_1_7_1(this).data('marquee').stop) { jQuery_1_7_1(this).marquee('slide'); } })
                        .parent()
                        .css({ position: 'relative', overflow: 'hidden', 'height': jQuery_1_7_1('>li', _this).height() })
                        .find('>ul')
                        .css({ width: screen.width * 2, position: 'relative' });

                   for (var i = 0; i < Math.ceil((screen.width * 3) / _this.width()); ++i) {
                       _this.append(_li.clone());
                   }

                   _this.marquee('slide');
               });
           },

           slide: function () {
               var jQuery_1_7_1this = this;
               jQuery_1_7_1this.animate({ 'left': jQuery_1_7_1('>li', jQuery_1_7_1this).width() * -1 },
                         jQuery_1_7_1this.data('marquee').duration,
                         'swing',
                         function () {
                             jQuery_1_7_1this.css('left', 0).append(jQuery_1_7_1('>li:first', jQuery_1_7_1this));
                             jQuery_1_7_1this.delay(jQuery_1_7_1this.data('marquee').delay).marquee('slide');

                         }
                        );

           }
       };

    jQuery_1_7_1.fn.marquee = function (m) {
        var settings = {
            'delay': 2000,
            'duration': 900,
            'stop': true
        };

        if (typeof m === 'object' || !m) {
            if (m) {
                jQuery_1_7_1.extend(settings, m);
            }

            return methods.init.apply(this, [settings]);
        }
        else {
            return methods[m].apply(this);
        }
    };
//}
// )();

//Plugin end

*/


//Plugin start
(function ($) {
var methods =
{
init: function (options) {
return this.each(function () {
var _this = $(this);
_this.data('marquee', options);
var _li = $('>li', _this);

_this.wrap('<div class="slide_container"></div>')
.height(_this.height())
.hover(function () { if ($(this).data('marquee').stop) { $(this).stop(true, false); } },
function () { if ($(this).data('marquee').stop) { $(this).marquee('slide'); } })
.parent()
.css({ position: 'relative', overflow: 'hidden', 'height': $('>li', _this).height() })
.find('>ul')
.css({ width: screen.width * 2, position: 'relative' });

for (var i = 0; i < Math.ceil((screen.width * 3) / _this.width()); ++i) {
_this.append(_li.clone());
}

_this.marquee('slide');
});
},

slide: function () {
var $this = this;
$this.animate({ 'left': $('>li', $this).width() * -1 },
$this.data('marquee').duration,
'swing',
function () {
$this.css('left', 0).append($('>li:first', $this));
$this.delay($this.data('marquee').delay).marquee('slide');

}
);

}
};

$.fn.marquee = function (m) {
var settings = {
'delay': 2000,
'duration': 900,
'stop': true
};

if (typeof m === 'object' || !m) {
if (m) {
$.extend(settings, m);
}

return methods.init.apply(this, [settings]);
}
else {
return methods[m].apply(this);
}
};
}
 )(jQuery_1_7_1);