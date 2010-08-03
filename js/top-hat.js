require.def(
  "need",
  [],
  function() {
    function defaultDecay() {
      return this.level - this.decayRate;
    }

    function defaultAttenuation() {
      return "TODO";
    }

    function SimpleNeed(options) {
      this.level = options.level || 0;
      if ('decayRate' in options)
        this.decayRate = options.decayRate;
      this.decay = options.decay || defaultDecay;
      this.attenuation = options.attenuation || defaultAttenuation;
    };

    SimpleNeed.prototype = {
      decayRate: 5
    };

    return {
      SimpleNeed: SimpleNeed
    };
  });

require.def(
  "tests/test-all",
  ["need"],
  function(need) {
    test("SimpleNeed tests",
         function() {
           var sneed = new need.SimpleNeed({level: 0.1});
           equals(sneed.level, 0.1, "options.level sets need.level");
         });
  });
