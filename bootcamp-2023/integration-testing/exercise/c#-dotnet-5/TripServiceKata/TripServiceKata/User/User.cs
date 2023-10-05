﻿using System.Collections.Generic;

namespace TripServiceKata.User
{
    public class User
    {
        private readonly List<Trip.Trip> _trips = new();
        private readonly List<User> _friends = new();

        public List<User> GetFriends() => _friends;

        public void AddFriend(User user) => _friends.Add(user);

        public void AddTrip(Trip.Trip trip) => _trips.Add(trip);

        public List<Trip.Trip> Trips() => _trips;
    }
}