
/**
 * Append wait function for deferred to jQuery.
 * @param {object} $ - jQuery object.
 */
const addWaitFeature = ($) => {
  /**
   * Wait function.
   * @param {number} msec - milliseconds
   * @see http://qiita.com/deep_blue_ao/items/3b0bb69f16a7381d9871
   */
  $.wait = (msec) => {
    // Instantiate deferred.
    const d = new $.Deferred;
    setTimeout(() => {
      // 指定時間経過後にresolveしてdeferredを解決する
      d.resolve(msec);
    }, msec);
    return d.promise();
  };
};

/**
 * Get parameter value from query parameter.
 * @param {string} sParam - The key of query parameter.
 * @see http://stackoverflow.com/questions/19491336/get-url-parameter-jquery-or-how-to-get-query-string-values-in-js
 */
const getUrlParameter = (sParam) => {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
};
