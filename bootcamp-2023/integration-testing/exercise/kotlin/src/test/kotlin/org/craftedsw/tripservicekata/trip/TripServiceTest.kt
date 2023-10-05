import org.craftedsw.tripservicekata.trip.Trip
import org.craftedsw.tripservicekata.trip.TripService
import org.craftedsw.tripservicekata.user.User
import org.craftedsw.tripservicekata.user.UserSession

class TripServiceTest {
    @org.junit.Test
    fun foo() {
        val user = User()
        val friend = User()
        friend.addFriend(user)
        user.addFriend(friend)
        friend.addTrip(Trip("paris"))
        val tripService = TripService(UserSession(user))

        assert(tripService.getTripsByUser(friend)[0].placeName == "paris")
    }
}