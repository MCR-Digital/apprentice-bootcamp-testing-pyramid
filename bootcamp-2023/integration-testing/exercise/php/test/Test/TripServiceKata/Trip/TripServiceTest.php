<?php

namespace Test\TripServiceKata\Trip;

use PHPUnit\Framework\TestCase;
use TripServiceKata\Trip\TripService;
use TripServiceKata\User\User;
use TripServiceKata\User\UserSession;

class TripServiceTest extends TestCase
{
    /** @test */
    public function it_does_something()
    {
        $user = new User();
        $friend = new User();
        $user->addFriend($friend);
        $friend->addFriend($user);
        $friend->addTrip('paris');
        $service = new TripService(new UserSession($user));

        $this->assertTrue($service->getTripsByUser($friend) == ['paris']);
    }
}
