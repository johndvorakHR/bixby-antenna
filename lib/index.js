exports = module.exports = function antenna(id) {
  var map = {
    'adapter': './adapter',
    'receiver': './receiver',
    'boot/connection': './boot/connection'
  };
  
  var mid = map[id];
  if (mid) {
    return require(mid);
  }
};

exports.scope = function(id, obj, $scope) {
  if (id == 'settings') {
    var prefix = $scope.prefix || 'connection';
    if ($scope.options && $scope.options['#']) {
      prefix = $scope.options['#'];
    }
    return obj.isolate(prefix);
  }
  return obj;
}
