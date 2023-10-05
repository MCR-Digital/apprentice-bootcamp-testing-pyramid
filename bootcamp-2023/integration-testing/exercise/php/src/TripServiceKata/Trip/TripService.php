<?php

namespace TripServiceKata\Trip;

use Exception;
use TripServiceKata\User\User;
use TripServiceKata\User\UserSession;

class TripService
{
    private UserSession $session;

    public function __construct($userSession)
    {
        $this->session = $userSession;
    }

    public function getTripsByUser(User $user): array
    {
        $tripList = array();
        $loggedUser = $this->session->getLoggedUser();
        $isFriend = false;
        if ($loggedUser != null) {
            foreach ($user->getFriends() as $friend) {
                if ($friend == $loggedUser) {
                    $isFriend = true;
                    break;
                }
            }
            if ($isFriend) {
                $tripList = TripDAO::findTripsByUser($user);
            }
            return $tripList;
        } else {
            throw new Exception();
        }
    }
}
