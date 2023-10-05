<?php

namespace TripServiceKata\User;

use TripServiceKata\Exception\DependentClassCalledDuringUnitTestException;

class UserSession
{
    private $user;

    public function __construct(User $user) {
        $this->user = $user;
    }

    public function getLoggedUser()
    {
        return $this->user;
    }

}
