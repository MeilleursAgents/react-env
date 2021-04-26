function isBrowser() {
  return Boolean(typeof window !== "undefined" && window.__ENV);
}

function getFiltered() {
  var prefix = process.env.REACT_ENV_PREFIX || 'REACT_APP';
  return Object.keys(process.env).filter(function (key) {
    return new RegExp("^".concat(prefix, "_"), 'i').test(key);
  }).reduce(function (env, key) {
    env[key] = process.env[key];
    return env;
  }, {});
}

function env() {
  var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var prefix = (isBrowser() ? window.__ENV['REACT_ENV_PREFIX'] : process.env.REACT_ENV_PREFIX) || 'REACT_APP';
  var safeKey = "".concat(prefix, "_").concat(key);

  if (isBrowser()) {
    return key.length ? window.__ENV[safeKey] : window.__ENV;
  }

  return key.length ? process.env[safeKey] : getFiltered();
}

export default env;
