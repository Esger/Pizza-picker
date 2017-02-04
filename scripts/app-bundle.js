define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function App() {
    _classCallCheck(this, App);

    this.message = 'Pizza List!';
    this.pizzas = ['Margherita', 'Napolitana'];
  };
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    longStackTraces: _environment2.default.debug,
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('components/pizza-list',[], function () {
  "use strict";
});
define('pizzas/pizza-list',[], function () {
  "use strict";
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <h1>${message}</h1>\n  <require from=\"pizzas/pizza-list\"></require>\n</template>\n"; });
define('text!components/pizza-list.html', ['module'], function(module) { module.exports = "<template>\n\t<h2>The best pizzas</h2>\n\t<ul>\n\t\t<li repeat.for=\"pizza of pizzas\">\n\t\t\t${pizza}\n\t\t</li>\n\t</ul>\n</template>\n"; });
define('text!pizzas/pizza-list.html', ['module'], function(module) { module.exports = "<h2>The best pizzas</h2>\n<ul>\n\t<li repeat.for=\"pizza of pizzas\">\n\t\t${pizza}\n\t</li>\n</ul>\n"; });
//# sourceMappingURL=app-bundle.js.map