// LocalStorageService.js
const LocalStorageService = (function () {
    var _service;
    function _getService() {
        if (!_service) {
            _service = this;
            return _service
        }
        return _service
    }
    function _setToken(token) {
        localStorage.setItem('access_token', token);
    }
    function _getAccessToken() {
        return localStorage.getItem('access_token');
    }
    function _clearToken() {
        localStorage.removeItem('access_token');
    }

    function _setStaff(isStaff) {
        localStorage.setItem('isStaff', isStaff);
    }
    function _isStaff() {
        return localStorage.getItem('isStaff');
    }
    function _clearStaff() {
        localStorage.removeItem('isStaff');
    }
    
    return {
        getService: _getService,
        setToken: _setToken,
        getAccessToken: _getAccessToken,
        clearToken: _clearToken,
        setStaff: _setStaff,
        isStaff: _isStaff,
        clearStaff: _clearStaff
    }
})();
export default LocalStorageService;