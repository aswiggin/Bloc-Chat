(function() {
    function BlocChatCookies($cookies) {
      var currentUser = $cookies.get('blocChatCurrentUser');
      if (!currentUser || currentUser === '') {
          $uibModal.open({
              templateUrl: '/templates/username.html',
              size: 'lg',
              controller: 'ModalCtrl as modal'
          });
      }
    }

    angular
      .module('blocChat')
      .run(['$cookies', 'uibModal', BlocChatCookies]);
})();
