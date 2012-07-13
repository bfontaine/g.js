(function(){

var from = function(f) {
        return {
            to: function(t) {
                var s=1,incl=true;
                return {
                    by: function(_s) {s = _s;return this;},
                    excluded: function() {incl=false;return this;},

                    do: function(fn) {
                        for (i=f;(s>0) ? i < t : i > t ;i+=s) {
                            fn.call(this, i);
                        }
                        if (incl && i == t) { fn.call(this, i); }
                    },

                    to_a: function() {
                        var a=[];
                        this.do(function(e){
                            a.push(e);
                        });
                        return a;
                    },
                };
            }
        };
}

try {exports.from = from;}
catch (ReferenceError) {window.g = {from:from};}

})();
