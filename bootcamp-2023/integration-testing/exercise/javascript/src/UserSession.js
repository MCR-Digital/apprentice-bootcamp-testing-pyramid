"use strict";

class UserSession {
    constructor(user) {
        this.currentUser = user;
    }

    getLoggedUser() {
        return this.currentUser;
    }

}

module.exports = UserSession;
