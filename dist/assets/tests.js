'use strict';

define('trainee/tests/acceptance/features-project-test', ['exports', 'ember', 'ember-qunit', 'qunit', 'trainee/tests/helpers/yadda', 'trainee/tests/acceptance/steps/features-project-steps', 'trainee/tests/helpers/start-app', 'trainee/tests/helpers/destroy-app'], function (exports, _ember, _emberQunit, _qunit, _traineeTestsHelpersYadda, _traineeTestsAcceptanceStepsFeaturesProjectSteps, _traineeTestsHelpersStartApp, _traineeTestsHelpersDestroyApp) {

  function testFeature(feature) {
    if (feature.annotations.ignore) {
      (0, _emberQunit.skip)('Feature: ' + feature.title, function (assert) {});;
    } else {
      (0, _qunit.module)('Feature: ' + feature.title, {
        beforeEach: function beforeEach() {
          this.application = (0, _traineeTestsHelpersStartApp['default'])();
        },
        afterEach: function afterEach() {
          (0, _traineeTestsHelpersDestroyApp['default'])(this.application);
        }
      });

      feature.scenarios.forEach(function (scenario) {
        if (scenario.annotations.ignore) {
          (0, _emberQunit.skip)('Scenario: ' + scenario.title, function (assert) {});
        } else {
          (0, _emberQunit.test)('Scenario: ' + scenario.title, function (assert) {
            return new _ember['default'].RSVP.Promise(function (resolve) {
              _traineeTestsHelpersYadda['default'].Yadda(_traineeTestsAcceptanceStepsFeaturesProjectSteps['default'](assert), this).yadda(scenario.steps, { ctx: {} }, resolve);
            });
          });
        }
      });
    }
  };

  testFeature({
    "title": "features project",
    "annotations": {},
    "description": [],
    "scenarios": [{
      "title": "the one where I type ember g feature",
      "annotations": {},
      "description": [],
      "steps": ["Given I type \"Ember g feature make-feature\"", "When I look in the folder", "Then I should find a file"]
    }]
  });
});
define('trainee/tests/acceptance/steps/steps', ['exports', 'trainee/tests/helpers/yadda'], function (exports, _traineeTestsHelpersYadda) {
  exports['default'] = function (assert) {
    return _traineeTestsHelpersYadda['default'].localisation.English.library().given('I type "Ember g feature make-feature"', function (next) {
      visit('/');
      assert.ok(true, this.step);
      andThen(function () {
        return next();
      });
    }).when('I look in the folder', function (next) {
      assert.ok(true, this.step);
      next();
    });
  };
});
define('trainee/tests/acceptance/steps/steps.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | acceptance/steps/steps.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/steps/steps.js should pass jshint.');
  });
});
define('trainee/tests/app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'app.js should pass jshint.\napp.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 4, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 6, col 1, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\napp.js: line 13, col 3, \'object short notation\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\napp.js: line 18, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n7 errors');
  });
});
define('trainee/tests/controllers/about.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/about.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/about.js should pass jshint.\ncontrollers/about.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/about.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('trainee/tests/controllers/emberjs.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/emberjs.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/emberjs.js should pass jshint.\ncontrollers/emberjs.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/emberjs.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('trainee/tests/controllers/emberjs/exemplos.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/emberjs/exemplos.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/emberjs/exemplos.js should pass jshint.\ncontrollers/emberjs/exemplos.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/emberjs/exemplos.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('trainee/tests/controllers/home.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/home.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/home.js should pass jshint.\ncontrollers/home.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/home.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('trainee/tests/controllers/nativescript.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/nativescript.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/nativescript.js should pass jshint.\ncontrollers/nativescript.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/nativescript.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('trainee/tests/controllers/soapui.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/soapui.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/soapui.js should pass jshint.\ncontrollers/soapui.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/soapui.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('trainee/tests/controllers/yadda.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/yadda.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/yadda.js should pass jshint.\ncontrollers/yadda.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/yadda.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('trainee/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('trainee/tests/helpers/destroy-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('trainee/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'trainee/tests/helpers/start-app', 'trainee/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _traineeTestsHelpersStartApp, _traineeTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _traineeTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _traineeTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('trainee/tests/helpers/module-for-acceptance.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('trainee/tests/helpers/resolver', ['exports', 'trainee/resolver', 'trainee/config/environment'], function (exports, _traineeResolver, _traineeConfigEnvironment) {

  var resolver = _traineeResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _traineeConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _traineeConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('trainee/tests/helpers/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('trainee/tests/helpers/start-app', ['exports', 'ember', 'trainee/app', 'trainee/config/environment'], function (exports, _ember, _traineeApp, _traineeConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    // use defaults, but you can override
    var attributes = _ember['default'].assign({}, _traineeConfigEnvironment['default'].APP, attrs);

    _ember['default'].run(function () {
      application = _traineeApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('trainee/tests/helpers/start-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('trainee/tests/helpers/yadda', ['exports', 'npm:yadda'], function (exports, _npmYadda) {
  exports['default'] = _npmYadda['default'];
});
define('trainee/tests/helpers/yadda.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/yadda.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/yadda.js should pass jshint.');
  });
});
define('trainee/tests/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'resolver.js should pass jshint.\nresolver.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nresolver.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('trainee/tests/router.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'router.js should pass jshint.\nrouter.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nrouter.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nrouter.js: line 4, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nrouter.js: line 20, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n4 errors');
  });
});
define('trainee/tests/routes/about.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/about.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/about.js should pass jshint.\nroutes/about.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/about.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('trainee/tests/routes/emberjs.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/emberjs.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/emberjs.js should pass jshint.\nroutes/emberjs.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/emberjs.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('trainee/tests/routes/emberjs/exemplos.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/emberjs/exemplos.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/emberjs/exemplos.js should pass jshint.\nroutes/emberjs/exemplos.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/emberjs/exemplos.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('trainee/tests/routes/home.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/home.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/home.js should pass jshint.\nroutes/home.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/home.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('trainee/tests/routes/nativescript.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/nativescript.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/nativescript.js should pass jshint.\nroutes/nativescript.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/nativescript.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('trainee/tests/routes/soapui.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/soapui.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/soapui.js should pass jshint.\nroutes/soapui.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/soapui.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('trainee/tests/routes/yadda.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/yadda.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/yadda.js should pass jshint.\nroutes/yadda.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/yadda.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('trainee/tests/test-helper', ['exports', 'trainee/tests/helpers/resolver', 'ember-qunit'], function (exports, _traineeTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_traineeTestsHelpersResolver['default']);
});
define('trainee/tests/test-helper.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('trainee/tests/unit/controllers/about-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:about', 'Unit | Controller | about', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('trainee/tests/unit/controllers/about-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/about-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/about-test.js should pass jshint.');
  });
});
define('trainee/tests/unit/controllers/emberjs-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:emberjs', 'Unit | Controller | emberjs', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('trainee/tests/unit/controllers/emberjs-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/emberjs-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/emberjs-test.js should pass jshint.');
  });
});
define('trainee/tests/unit/controllers/emberjs/exemplos-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:emberjs/exemplos', 'Unit | Controller | emberjs/exemplos', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('trainee/tests/unit/controllers/emberjs/exemplos-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/emberjs/exemplos-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/emberjs/exemplos-test.js should pass jshint.');
  });
});
define('trainee/tests/unit/controllers/home-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:home', 'Unit | Controller | home', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('trainee/tests/unit/controllers/home-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/home-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/home-test.js should pass jshint.');
  });
});
define('trainee/tests/unit/controllers/nativescript-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:nativescript', 'Unit | Controller | nativescript', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('trainee/tests/unit/controllers/nativescript-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/nativescript-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/nativescript-test.js should pass jshint.');
  });
});
define('trainee/tests/unit/controllers/soapui-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:soapui', 'Unit | Controller | soapui', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('trainee/tests/unit/controllers/soapui-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/soapui-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/soapui-test.js should pass jshint.');
  });
});
define('trainee/tests/unit/controllers/yadda-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:yadda', 'Unit | Controller | yadda', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('trainee/tests/unit/controllers/yadda-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/yadda-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/yadda-test.js should pass jshint.');
  });
});
define('trainee/tests/unit/routes/about-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:about', 'Unit | Route | about', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('trainee/tests/unit/routes/about-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/about-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/about-test.js should pass jshint.');
  });
});
define('trainee/tests/unit/routes/emberjs-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:emberjs', 'Unit | Route | emberjs', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('trainee/tests/unit/routes/emberjs-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/emberjs-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/emberjs-test.js should pass jshint.');
  });
});
define('trainee/tests/unit/routes/emberjs/exemplos-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:emberjs/exemplos', 'Unit | Route | emberjs/exemplos', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('trainee/tests/unit/routes/emberjs/exemplos-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/emberjs/exemplos-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/emberjs/exemplos-test.js should pass jshint.');
  });
});
define('trainee/tests/unit/routes/home-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:home', 'Unit | Route | home', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('trainee/tests/unit/routes/home-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/home-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/home-test.js should pass jshint.');
  });
});
define('trainee/tests/unit/routes/nativescript-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:nativescript', 'Unit | Route | nativescript', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('trainee/tests/unit/routes/nativescript-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/nativescript-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/nativescript-test.js should pass jshint.');
  });
});
define('trainee/tests/unit/routes/soapui-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:soapui', 'Unit | Route | soapui', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('trainee/tests/unit/routes/soapui-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/soapui-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/soapui-test.js should pass jshint.');
  });
});
define('trainee/tests/unit/routes/yadda-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:yadda', 'Unit | Route | yadda', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('trainee/tests/unit/routes/yadda-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/yadda-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/yadda-test.js should pass jshint.');
  });
});
define('trainee/tests/unit/steps/steps', ['exports', 'trainee/tests/helpers/yadda'], function (exports, _traineeTestsHelpersYadda) {
  exports['default'] = function (assert) {
    return _traineeTestsHelpersYadda['default'].localisation.English.library().given('I type "Ember g feature make-feature"', function (next) {
      assert.ok(true, this.step);
      next();
    }).when('I look in the folder', function (next) {
      assert.ok(true, this.step);
      next();
    });
  };
});
define('trainee/tests/unit/steps/steps.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/steps/steps.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/steps/steps.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('trainee/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
