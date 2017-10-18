(function() {
    function ModalCtrl(Room, $uibModalInstance, $cookies) {
        this.cancel = function () {
            $uibModalInstance.close();
        };
        this.submit = function() {
            Room.add(this.newRoom);
            $uibModalInstance.close();
        };
        this.createUsername = function() {
            $cookies.put('blocChatCurrentUser', this.username);
            $uibModalInstance.close();
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', '$cookies', ModalCtrl])
})();
