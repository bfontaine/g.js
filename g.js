(function(){

var from = function(n) {
        return {
            to: function(m) {
                var f=n,t=m,s=1,excl=false;
                return {
                    by: function(_s) {s = _s;return this;},
                    excluded: function() {excl=true;},

                    do: function(f) {
                        var i=n;
                        for (;(s>0) ? i < t : i > t ;i+=s) {
                            f.call(this, i);
                        }
                        excl && f.call(this, i);
                    }
                };
            }
        };
}

try {exports.from = from;}
catch (ReferenceError) {window.g = {from:from};}

})();
