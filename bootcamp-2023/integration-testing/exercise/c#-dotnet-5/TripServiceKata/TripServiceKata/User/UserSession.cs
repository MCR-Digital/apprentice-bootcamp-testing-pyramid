using TripServiceKata.Exception;

namespace TripServiceKata.User
{
    public class UserSession
    {
        private readonly User user;
        public UserSession(User user)
        {
            this.user = user;
        }

        public User? GetLoggedUser()
        {
            return user;
        }
    }
}