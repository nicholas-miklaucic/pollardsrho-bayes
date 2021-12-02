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
    
      
      
    
      var element = document.getElementById("dfb3b0b9-4491-4a8a-946f-ea540b131bb1");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'dfb3b0b9-4491-4a8a-946f-ea540b131bb1' but no matching script tag was found.")
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
                    
                  var docs_json = '{"7fda7df9-924f-44c1-aad5-b1f2c9432fa4":{"defs":[{"extends":null,"module":null,"name":"ReactiveHTML1","overrides":[],"properties":[]},{"extends":null,"module":null,"name":"FlexBox1","overrides":[],"properties":[{"default":"flex-start","kind":null,"name":"align_content"},{"default":"flex-start","kind":null,"name":"align_items"},{"default":"row","kind":null,"name":"flex_direction"},{"default":"wrap","kind":null,"name":"flex_wrap"},{"default":"flex-start","kind":null,"name":"justify_content"}]},{"extends":null,"module":null,"name":"TemplateActions1","overrides":[],"properties":[{"default":0,"kind":null,"name":"open_modal"},{"default":0,"kind":null,"name":"close_modal"}]},{"extends":null,"module":null,"name":"MaterialTemplateActions1","overrides":[],"properties":[{"default":0,"kind":null,"name":"open_modal"},{"default":0,"kind":null,"name":"close_modal"}]}],"roots":{"references":[{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"1908","type":"Line"},{"attributes":{},"id":"1890","type":"BasicTicker"},{"attributes":{"end":1.5,"start":0.5},"id":"1879","type":"Range1d"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1899","type":"BoxAnnotation"},{"attributes":{},"id":"1883","type":"LinearScale"},{"attributes":{"axis_label":"Prior Probability","axis_label_text_color":"#777777","axis_label_text_font":"myriad-pro-semi-condensed","axis_label_text_font_size":"20px","axis_label_text_font_style":"normal","formatter":{"id":"1918"},"major_label_policy":{"id":"1917"},"major_label_text_color":"#777777","major_label_text_font":"myriad-pro-semi-condensed","major_label_text_font_size":"15px","major_tick_line_alpha":0,"minor_tick_line_alpha":0,"ticker":{"id":"1890"}},"id":"1889","type":"LinearAxis"},{"attributes":{"axis":{"id":"1885"},"grid_line_alpha":0,"ticker":null},"id":"1888","type":"Grid"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"1885"}],"border_fill_alpha":0,"center":[{"id":"1888"},{"id":"1892"}],"left":[{"id":"1889"}],"renderers":[{"id":"1910"}],"sizing_mode":"scale_width","title":{"id":"1875"},"toolbar":{"id":"1900"},"x_range":{"id":"1877"},"x_scale":{"id":"1881"},"y_range":{"id":"1879"},"y_scale":{"id":"1883"}},"id":"1874","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1877","type":"Range1d"},{"attributes":{},"id":"1881","type":"LinearScale"},{"attributes":{},"id":"1896","type":"SaveTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAABbv1Kg1q+EP1u/UqDWr5Q/CB988MEHnz9bv1Kg1q+kPzJvZ0jM26k/CB988MEHrz9wZ0jM2xmyP1u/UqDWr7Q/RhdddNFFtz8yb2dIzNu5Px3HcRzHcbw/CB988MEHvz96O0Ni3s7AP3BnSMzbGcI/ZZNNNtlkwz9bv1Kg1q/EP1HrVwrU+sU/RhdddNFFxz88Q2LezpDIPzJvZ0jM28k/J5tssskmyz8dx3Ecx3HMPxPzdobEvM0/CB988MEHzz9/pUCtXynQP3o7Q2LeztA/ddFFF1100T9wZ0jM2xnSP2r9SoFav9I/ZZNNNtlk0z9gKVDrVwrUP1u/UqDWr9Q/VlVVVVVV1T9R61cK1PrVP0yBWr9SoNY/RhdddNFF1z9BrV8pUOvXPzxDYt7OkNg/N9lkk0022T8yb2dIzNvZPy0Fav1Kgdo/J5tssskm2z8iMW9nSMzbPx3HcRzHcdw/GF100UUX3T8T83aGxLzdPw6JeTtDYt4/CB988MEH3z8DtX6lQK3fP3+lQK1fKeA/ffDBBx984D96O0Ni3s7gP3eGxLydIeE/ddFFF1104T9yHMdxHMfhP3BnSMzbGeI/bbLJJpts4j9q/UqBWr/iP2hIzNsZEuM/ZZNNNtlk4z9j3s6QmLfjP2ApUOtXCuQ/XnTRRRdd5D9bv1Kg1q/kP1gK1PqVAuU/VlVVVVVV5T9ToNavFKjlP1HrVwrU+uU/TjbZZJNN5j9MgVq/UqDmP0nM2xkS8+Y/RhdddNFF5z9EYt7OkJjnP0GtXylQ6+c/P/jggw8+6D88Q2LezpDoPzmO4ziO4+g/N9lkk0026T80JObtDInpPzJvZ0jM2+k/L7rooosu6j8tBWr9SoHqPypQ61cK1Oo/J5tssskm6z8l5u0MiXnrPyIxb2dIzOs/IHzwwQcf7D8dx3Ecx3HsPxsS83aGxOw/GF100UUX7T8VqPUrBWrtPxPzdobEvO0/ED744IMP7j8OiXk7Q2LuPwvU+pUCte4/CB988MEH7z8Gav1KgVrvPwO1fqVAre8/AAAAAAAA8D8=","dtype":"float64","order":"little","shape":[100]},"y":{"__ndarray__":"AAAAAAAA8D8AAAAAAADwP/3//////+8/+f//////7z/9///////vP/7//////+8//P//////7z8AAAAAAADwPwAAAAAAAPA/+///////7z/8///////vP/7//////+8//f//////7z/9///////vP////////+8//f//////7z/8///////vP/z//////+8//f//////7z/9///////vP/v//////+8//f//////7z/8///////vP/z//////+8//P//////7z/6///////vP/r//////+8//v//////7z/8///////vP////////+8/////////7z/7///////vP/r//////+8//v//////7z/8///////vPwAAAAAAAPA//P//////7z/9///////vP/3//////+8//f//////7z/8///////vP/7//////+8//P//////7z/9///////vP/3//////+8//v//////7z/////////vP/3//////+8/////////7z/8///////vP/z//////+8//P//////7z/9///////vP////////+8//P//////7z/+///////vP/3//////+8/+v//////7z/9///////vP/z//////+8//f//////7z/+///////vP/v//////+8//P//////7z8AAAAAAADwP/3//////+8//P//////7z/8///////vP/z//////+8//v//////7z/////////vP/v//////+8//v//////7z/7///////vP/v//////+8//v//////7z/8///////vP////////+8//f//////7z/9///////vP/3//////+8//P//////7z/+///////vP/7//////+8//P//////7z/7///////vP/3//////+8//v//////7z/7///////vPwAAAAAAAPA/+v//////7z/8///////vPwAAAAAAAPA/+///////7z/6///////vP/r//////+8/+v//////7z/6///////vP/j//////+8/AAAAAAAA8D8=","dtype":"float64","order":"little","shape":[100]}},"selected":{"id":"1922"},"selection_policy":{"id":"1921"}},"id":"1907","type":"ColumnDataSource"},{"attributes":{"active_multi":null,"tools":[{"id":"1893"},{"id":"1894"},{"id":"1895"},{"id":"1896"},{"id":"1897"},{"id":"1898"}]},"id":"1900","type":"Toolbar"},{"attributes":{"source":{"id":"1907"}},"id":"1911","type":"CDSView"},{"attributes":{"data_source":{"id":"1907"},"glyph":{"id":"1908"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1909"},"view":{"id":"1911"}},"id":"1910","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"1874"}],"margin":[0,0,0,0],"name":"Row00125"},"id":"1912","type":"Row"},{"attributes":{"text":"Prior Belief","text_color":"#777777","text_font":"myriad-pro-semi-condensed","text_font_size":"20px","text_font_style":"normal"},"id":"1875","type":"Title"},{"attributes":{},"id":"1893","type":"PanTool"},{"attributes":{},"id":"1894","type":"WheelZoomTool"},{"attributes":{},"id":"1922","type":"Selection"},{"attributes":{"axis_label":"True Accuracy","axis_label_text_color":"#777777","axis_label_text_font":"myriad-pro-semi-condensed","axis_label_text_font_size":"20px","axis_label_text_font_style":"normal","formatter":{"id":"1915"},"major_label_policy":{"id":"1914"},"major_label_text_color":"#777777","major_label_text_font":"myriad-pro-semi-condensed","major_label_text_font_size":"15px","major_tick_line_alpha":0,"minor_tick_line_alpha":0,"ticker":{"id":"1886"}},"id":"1885","type":"LinearAxis"},{"attributes":{"axis":{"id":"1889"},"dimension":1,"grid_line_alpha":0,"ticker":null},"id":"1892","type":"Grid"},{"attributes":{},"id":"1921","type":"UnionRenderers"},{"attributes":{},"id":"1897","type":"ResetTool"},{"attributes":{},"id":"1918","type":"BasicTickFormatter"},{"attributes":{},"id":"1886","type":"BasicTicker"},{"attributes":{},"id":"1917","type":"AllLabels"},{"attributes":{"overlay":{"id":"1899"}},"id":"1895","type":"BoxZoomTool"},{"attributes":{},"id":"1898","type":"HelpTool"},{"attributes":{},"id":"1914","type":"AllLabels"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"1909","type":"Line"},{"attributes":{},"id":"1915","type":"BasicTickFormatter"}],"root_ids":["1912"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"7fda7df9-924f-44c1-aad5-b1f2c9432fa4","root_ids":["1912"],"roots":{"1912":"dfb3b0b9-4491-4a8a-946f-ea540b131bb1"}}];
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