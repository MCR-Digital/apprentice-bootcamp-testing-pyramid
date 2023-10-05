<?php

namespace TripServiceKata\Trip;

use TripServiceKata\User\User;
use TripServiceKata\Exception\DependentClassCalledDuringUnitTestException;

class TripDAO
{
    public static function findTripsByUser(User $user)
    {
        return $user->getTrips();
    }
}
