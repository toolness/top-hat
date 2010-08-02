require.def(
  "tests/test-all",
  ["top-hat"],
  function(topHat) {
    test("sample test",
         function() {
           ok(topHat.foo, "topHat.foo is truthy");
         });
  });
