package org.craftedsw.tripservicekata.trip

import org.craftedsw.tripservicekata.exception.CollaboratorCallException
import org.craftedsw.tripservicekata.user.User

class TripDAO {

    companion object {
        @JvmStatic fun findTripsByUser(user: User): List<Trip> {
            return user.trips
        }
    }

}
