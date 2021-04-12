/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(params) {
  const domains = params;
  const dns = {};
  domains.forEach((elem) => {
    let domain = elem;
    domain = domain.split('.').reverse().join('.');
    while (domain) {
      dns[`.${domain}`] = Object.keys(dns).includes(`.${domain}`) ? dns[`.${domain}`] + 1 : 1;
      domain = domain.split('.');
      domain.pop();
      domain = domain.join('.');
    }
  });
  return dns;
}
module.exports = getDNSStats;
