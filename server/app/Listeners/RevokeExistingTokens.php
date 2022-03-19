<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class RevokeExistingTokens
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        //
        $user = User::find($event->userId);

        if ($user) {

            $res = DB::table('oauth_access_tokens')
                ->orderBy('created_at', 'desc')
                ->skip(1)
                ->limit(10)
                ->where('user_id', $event->userId)
                ->get();

            foreach ($res as $key => $value) {
                DB::table('oauth_access_tokens')->where('id', '=', $value->id)->update(['revoked' => 1]);
            }
        }
    }
}
