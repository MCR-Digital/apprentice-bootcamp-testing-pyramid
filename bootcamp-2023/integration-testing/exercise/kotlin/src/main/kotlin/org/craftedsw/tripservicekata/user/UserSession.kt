package org.craftedsw.tripservicekata.user

class UserSession(user: User) {
    private var currentUser: User? = user;

    val loggedUser: User?
        get() = currentUser
}
