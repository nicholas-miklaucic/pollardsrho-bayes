  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("8129d7bf-98dd-43b2-9441-9905395e06b9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '8129d7bf-98dd-43b2-9441-9905395e06b9' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.3.min.js": "dM3QQsP+wXdHg42wTqW85BjZQdLNNIXqlPw/BgKoExPmTG7ZLML4EGqLMfqHT6ON", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.3.min.js": "8x57I4YuIfu8XyZfFo0XVr2WAT8EK4rh/uDe3wF7YuW2FNUSNEpJbsPaB1nJ2fz2", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.3.min.js": "3QTqdz9LyAm2i0sG5XTePsHec3UHWwVsrOL68SYRoAXsafvfAyqtQ+h440+qIBhS"};
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.3.min.js", "https://unpkg.com/@holoviz/panel@0.12.1/dist/panel.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"5f7964b0-c744-4029-91b4-0a57b9d4bf0d":{"defs":[{"extends":null,"module":null,"name":"ReactiveHTML1","overrides":[],"properties":[]},{"extends":null,"module":null,"name":"FlexBox1","overrides":[],"properties":[{"default":"flex-start","kind":null,"name":"align_content"},{"default":"flex-start","kind":null,"name":"align_items"},{"default":"row","kind":null,"name":"flex_direction"},{"default":"wrap","kind":null,"name":"flex_wrap"},{"default":"flex-start","kind":null,"name":"justify_content"}]},{"extends":null,"module":null,"name":"TemplateActions1","overrides":[],"properties":[{"default":0,"kind":null,"name":"open_modal"},{"default":0,"kind":null,"name":"close_modal"}]},{"extends":null,"module":null,"name":"MaterialTemplateActions1","overrides":[],"properties":[{"default":0,"kind":null,"name":"open_modal"},{"default":0,"kind":null,"name":"close_modal"}]}],"roots":{"references":[{"attributes":{},"id":"2475","type":"DataRange1d"},{"attributes":{},"id":"2522","type":"Selection"},{"attributes":{},"id":"2521","type":"UnionRenderers"},{"attributes":{},"id":"2519","type":"AllLabels"},{"attributes":{"text":"Penguin size"},"id":"2471","type":"Title"},{"attributes":{},"id":"2494","type":"HelpTool"},{"attributes":{"index":220,"label":{"value":"Gentoo"},"renderers":[{"id":"2511"}]},"id":"2526","type":"LegendItem"},{"attributes":{},"id":"2479","type":"LinearScale"},{"attributes":{},"id":"2518","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Flipper Length (mm)","formatter":{"id":"2515"},"major_label_policy":{"id":"2516"},"ticker":{"id":"2482"}},"id":"2481","type":"LinearAxis"},{"attributes":{},"id":"2516","type":"AllLabels"},{"attributes":{},"id":"2486","type":"BasicTicker"},{"attributes":{},"id":"2482","type":"BasicTicker"},{"attributes":{"axis":{"id":"2481"},"ticker":null},"id":"2484","type":"Grid"},{"attributes":{},"id":"2515","type":"BasicTickFormatter"},{"attributes":{},"id":"2490","type":"WheelZoomTool"},{"attributes":{"source":{"id":"2507"}},"id":"2512","type":"CDSView"},{"attributes":{"axis":{"id":"2485"},"dimension":1,"ticker":null},"id":"2488","type":"Grid"},{"attributes":{"axis_label":"Body Mass (g)","formatter":{"id":"2518"},"major_label_policy":{"id":"2519"},"ticker":{"id":"2486"}},"id":"2485","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"species","transform":{"id":"2506"}},"line_alpha":{"value":0.1},"line_color":{"field":"species","transform":{"id":"2506"}},"marker":{"field":"species","transform":{"id":"2505"}},"size":{"value":12},"x":{"field":"flipper_length_mm"},"y":{"field":"body_mass_g"}},"id":"2510","type":"Scatter"},{"attributes":{"data":{"bill_depth_mm":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[344]},"bill_length_mm":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[344]},"body_mass_g":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[344]},"flipper_length_mm":{"__ndarray__":"AAAAAACgZkAAAAAAAEBnQAAAAAAAYGhAAAAAAAAA+H8AAAAAACBoQAAAAAAAwGdAAAAAAACgZkAAAAAAAGBoQAAAAAAAIGhAAAAAAADAZ0AAAAAAAEBnQAAAAAAAgGZAAAAAAADAZkAAAAAAAOBnQAAAAAAAwGhAAAAAAAAgZ0AAAAAAAGBoQAAAAAAAoGhAAAAAAAAAZ0AAAAAAAEBoQAAAAAAAwGVAAAAAAACAZkAAAAAAAKBnQAAAAAAAIGdAAAAAAACAZkAAAAAAAGBnQAAAAAAA4GZAAAAAAABgZ0AAAAAAAIBlQAAAAAAAgGZAAAAAAABAZkAAAAAAAEBmQAAAAAAAgGdAAAAAAAAAZ0AAAAAAAGBoQAAAAAAAgGhAAAAAAADAZ0AAAAAAAIBmQAAAAAAAoGZAAAAAAAAAZ0AAAAAAAMBmQAAAAAAAYGhAAAAAAABAZ0AAAAAAAIBoQAAAAAAAIGdAAAAAAADAZ0AAAAAAAMBmQAAAAAAAYGZAAAAAAADAZ0AAAAAAAOBnQAAAAAAAQGdAAAAAAACAZ0AAAAAAAMBnQAAAAAAAAGlAAAAAAABgZ0AAAAAAAOBnQAAAAAAAQGdAAAAAAAAgaEAAAAAAAKBmQAAAAAAAQGhAAAAAAAAgZ0AAAAAAAGBoQAAAAAAAIGdAAAAAAAAAaEAAAAAAAABnQAAAAAAAAGhAAAAAAABgaEAAAAAAAIBnQAAAAAAAwGdAAAAAAADAaEAAAAAAAMBnQAAAAAAAwGdAAAAAAACAaEAAAAAAAKBoQAAAAAAAwGdAAAAAAABgaEAAAAAAAOBnQAAAAAAAAGdAAAAAAABgZ0AAAAAAAGBoQAAAAAAAoGdAAAAAAACAaEAAAAAAAGBnQAAAAAAAIGhAAAAAAADgZ0AAAAAAAEBoQAAAAAAAwGdAAAAAAACgZ0AAAAAAAKBnQAAAAAAAwGdAAAAAAABAaUAAAAAAAKBpQAAAAAAAIGdAAAAAAABAZ0AAAAAAAGBnQAAAAAAAAGpAAAAAAADAZ0AAAAAAAIBoQAAAAAAAQGZAAAAAAAAAaEAAAAAAAABoQAAAAAAAYGlAAAAAAADgZkAAAAAAAMBnQAAAAAAAIGhAAAAAAAAAZ0AAAAAAAOBoQAAAAAAAwGdAAAAAAACgZkAAAAAAAKBoQAAAAAAAwGhAAAAAAADgZ0AAAAAAACBoQAAAAAAAoGhAAAAAAADgZ0AAAAAAAIBoQAAAAAAAgGdAAAAAAADgaEAAAAAAAKBnQAAAAAAAoGdAAAAAAABgZ0AAAAAAAMBoQAAAAAAAAGZAAAAAAABAaUAAAAAAAEBnQAAAAAAA4GhAAAAAAADgZ0AAAAAAAGBoQAAAAAAA4GdAAAAAAABAakAAAAAAAMBnQAAAAAAAoGhAAAAAAAAgaEAAAAAAAOBoQAAAAAAAYGdAAAAAAADAZ0AAAAAAAOBnQAAAAAAAAGlAAAAAAAAgZ0AAAAAAACBoQAAAAAAAIGhAAAAAAABgZ0AAAAAAAIBnQAAAAAAAwGdAAAAAAAAAaEAAAAAAACBnQAAAAAAAwGdAAAAAAAAAZ0AAAAAAAGBoQAAAAAAAIGhAAAAAAABgZ0AAAAAAACBpQAAAAAAAAGhAAAAAAACAaEAAAAAAACBoQAAAAAAAgGdAAAAAAACgaEAAAAAAAMBoQAAAAAAAQGZAAAAAAACgaEAAAAAAAGBoQAAAAAAAwGhAAAAAAAAgaEAAAAAAAEBoQAAAAAAAIGdAAAAAAAAgaUAAAAAAAMBnQAAAAAAAIGlAAAAAAACgaEAAAAAAAKBmQAAAAAAAwGdAAAAAAABgaEAAAAAAAKBmQAAAAAAA4GdAAAAAAABgZ0AAAAAAACBoQAAAAAAAYGhAAAAAAACgaEAAAAAAAABpQAAAAAAAAGlAAAAAAADgZ0AAAAAAAKBpQAAAAAAAYGdAAAAAAAAgaUAAAAAAAGBnQAAAAAAAYGlAAAAAAABgaEAAAAAAAOBoQAAAAAAAYGhAAAAAAABAakAAAAAAAABoQAAAAAAAoGlAAAAAAABAakAAAAAAAGBnQAAAAAAAgGhAAAAAAACAaEAAAAAAAIBoQAAAAAAAIGlAAAAAAADAZ0AAAAAAAIBqQAAAAAAAYGdAAAAAAADAaEAAAAAAAOBoQAAAAAAAIGlAAAAAAAAgaEAAAAAAAGBpQAAAAAAAYGdAAAAAAACgaEAAAAAAAOBnQAAAAAAAYGlAAAAAAABAaUAAAAAAAEBoQAAAAAAAwGlAAAAAAACgZ0AAAAAAAGBoQAAAAAAA4GlAAAAAAABAaUAAAAAAACBoQAAAAAAAQGpAAAAAAADAaEAAAAAAAGBqQAAAAAAAwGxAAAAAAABAakAAAAAAAEBrQAAAAAAA4GpAAAAAAABAakAAAAAAAGBqQAAAAAAAYGtAAAAAAAAgakAAAAAAAOBqQAAAAAAAwGpAAAAAAAAAa0AAAAAAAMBqQAAAAAAAoGpAAAAAAABAakAAAAAAACBrQAAAAAAAQGpAAAAAAACga0AAAAAAACBqQAAAAAAAwGtAAAAAAABAa0AAAAAAAOBqQAAAAAAAoGpAAAAAAADgakAAAAAAAOBqQAAAAAAA4GpAAAAAAAAAa0AAAAAAAOBqQAAAAAAAQGpAAAAAAACAa0AAAAAAAMBrQAAAAAAAIGpAAAAAAADgaUAAAAAAAMBsQAAAAAAAgGtAAAAAAACAa0AAAAAAAKBqQAAAAAAAYGtAAAAAAAAAakAAAAAAAABqQAAAAAAAAGpAAAAAAAAgbEAAAAAAAEBqQAAAAAAAAGtAAAAAAADAa0AAAAAAACBrQAAAAAAAQGpAAAAAAAAgbEAAAAAAAKBqQAAAAAAA4GpAAAAAAABAakAAAAAAAIBrQAAAAAAAQGpAAAAAAAAgbEAAAAAAACBrQAAAAAAAgGtAAAAAAAAAakAAAAAAAIBrQAAAAAAAAGpAAAAAAAAAbEAAAAAAAABqQAAAAAAAoGtAAAAAAADAakAAAAAAAOBsQAAAAAAAYGtAAAAAAADAbEAAAAAAAMBqQAAAAAAAoGxAAAAAAACAa0AAAAAAAOBrQAAAAAAAAGtAAAAAAACga0AAAAAAAKBrQAAAAAAAIGtAAAAAAAAAa0AAAAAAAMBsQAAAAAAAIGpAAAAAAACAa0AAAAAAAOBqQAAAAAAA4GtAAAAAAACAakAAAAAAAKBrQAAAAAAAgGpAAAAAAAAAbEAAAAAAAIBqQAAAAAAAgGxAAAAAAABAa0AAAAAAAEBrQAAAAAAAgGpAAAAAAADAbEAAAAAAAEBrQAAAAAAAgGxAAAAAAACAakAAAAAAAABsQAAAAAAAwGpAAAAAAABAbEAAAAAAAABrQAAAAAAAwGtAAAAAAABgaUAAAAAAACBsQAAAAAAAYGtAAAAAAACAbEAAAAAAAOBqQAAAAAAAgGxAAAAAAAAAa0AAAAAAAOBqQAAAAAAAQGpAAAAAAABga0AAAAAAAABqQAAAAAAAIGpAAAAAAAAAa0AAAAAAAKBsQAAAAAAAoGpAAAAAAADAbEAAAAAAACBrQAAAAAAAwGxAAAAAAAAga0AAAAAAAMBrQAAAAAAAwGpAAAAAAAAA+H8AAAAAAOBqQAAAAAAAwGtAAAAAAACAakAAAAAAAKBqQA==","dtype":"float64","order":"little","shape":[344]},"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343],"island":["Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Torgersen","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Dream","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe","Biscoe"],"sex":["Male","Female","Female","NaN","Female","Male","Female","Male","NaN","NaN","NaN","NaN","Female","Male","Male","Female","Female","Male","Female","Male","Female","Male","Female","Male","Male","Female","Male","Female","Female","Male","Female","Male","Female","Male","Female","Male","Male","Female","Female","Male","Female","Male","Female","Male","Female","Male","Male","NaN","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Male","Female","Male","Female","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Male","Female","Female","Male","Female","Male","Female","Male","Male","Female","Male","Female","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Male","Female","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Male","Female","Female","Male","Female","Male","Male","Female","Male","Female","Female","Male","Female","Male","Male","Female","Female","Male","Female","Male","Female","Male","Female","Male","Male","Female","Male","Female","Female","Male","Female","Male","Male","Female","Female","Male","Female","Male","Male","Female","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Male","Female","Female","Male","Female","Male","NaN","Male","Female","Male","Male","Female","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Male","Female","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","NaN","Male","Female","Male","Female","Male","Male","Female","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","Male","Female","Female","Male","Female","Male","Female","Male","NaN","Male","Female","Male","Female","Male","Female","Male","Female","Male","Female","Male","NaN","Male","Female","NaN","Female","Male","Female","Male"],"species":["Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Adelie","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Chinstrap","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo","Gentoo"]},"selected":{"id":"2522"},"selection_policy":{"id":"2521"}},"id":"2507","type":"ColumnDataSource"},{"attributes":{"callback":null,"tooltips":[["species","@{species}"],["island","@{island}"],["bill_length_mm","@{bill_length_mm}"],["bill_depth_mm","@{bill_depth_mm}"],["flipper_length_mm","@{flipper_length_mm}"],["body_mass_g","@{body_mass_g}"],["sex","@{sex}"]]},"id":"2496","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"field":"species","transform":{"id":"2506"}},"line_color":{"field":"species","transform":{"id":"2506"}},"marker":{"field":"species","transform":{"id":"2505"}},"size":{"value":12},"x":{"field":"flipper_length_mm"},"y":{"field":"body_mass_g"}},"id":"2509","type":"Scatter"},{"attributes":{"items":[{"id":"2524"},{"id":"2525"},{"id":"2526"}],"location":"top_left","title":"Species"},"id":"2523","type":"Legend"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"2495","type":"BoxAnnotation"},{"attributes":{"factors":["Adelie","Chinstrap","Gentoo"],"palette":["#1f77b4","#ff7f0e","#2ca02c"]},"id":"2506","type":"CategoricalColorMapper"},{"attributes":{},"id":"2489","type":"PanTool"},{"attributes":{"index":0,"label":{"value":"Adelie"},"renderers":[{"id":"2511"}]},"id":"2524","type":"LegendItem"},{"attributes":{"data_source":{"id":"2507"},"glyph":{"id":"2509"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2510"},"view":{"id":"2512"}},"id":"2511","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"2481"}],"center":[{"id":"2484"},{"id":"2488"},{"id":"2523"}],"css_classes":["bk-back"],"left":[{"id":"2485"}],"renderers":[{"id":"2511"}],"sizing_mode":"scale_width","title":{"id":"2471"},"toolbar":{"id":"2497"},"x_range":{"id":"2473"},"x_scale":{"id":"2477"},"y_range":{"id":"2475"},"y_scale":{"id":"2479"}},"id":"2470","subtype":"Figure","type":"Plot"},{"attributes":{"active_multi":null,"tools":[{"id":"2489"},{"id":"2490"},{"id":"2491"},{"id":"2492"},{"id":"2493"},{"id":"2494"},{"id":"2496"}]},"id":"2497","type":"Toolbar"},{"attributes":{"index":152,"label":{"value":"Chinstrap"},"renderers":[{"id":"2511"}]},"id":"2525","type":"LegendItem"},{"attributes":{},"id":"2473","type":"DataRange1d"},{"attributes":{},"id":"2493","type":"ResetTool"},{"attributes":{},"id":"2477","type":"LinearScale"},{"attributes":{"overlay":{"id":"2495"}},"id":"2491","type":"BoxZoomTool"},{"attributes":{},"id":"2492","type":"SaveTool"},{"attributes":{"factors":["Adelie","Chinstrap","Gentoo"],"markers":["hex","circle_x","triangle"]},"id":"2505","type":"CategoricalMarkerMapper"},{"attributes":{"children":[{"id":"2470"}],"css_classes":["bk-back"],"margin":[0,0,0,0],"name":"Row00118"},"id":"2527","type":"Row"}],"root_ids":["2527"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"5f7964b0-c744-4029-91b4-0a57b9d4bf0d","root_ids":["2527"],"roots":{"2527":"8129d7bf-98dd-43b2-9441-9905395e06b9"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);