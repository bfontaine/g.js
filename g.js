(function(){

var from = function(n) {
        return {
            to: function(m) {
                var f=n,t=m,s=1,incl=true;
                return {
                    by: function(_s) {s = _s;return this;},
                    excluded: function() {incl=false;return this;},

                    do: function(fn) {
                        var i=f;
                        for (;(s>0) ? i < t : i > t ;i+=s) {
                            fn.call(this, i);
                        }
                        if (incl && i == t) { fn.call(this, i); }
                    }
                };
            }
        };
}

try {exports.from = from;}
catch (ReferenceError) {window.g = {from:from};}

})();
