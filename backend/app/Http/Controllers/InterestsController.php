<?php

namespace App\Http\Controllers;

use App\Models\Interest;
use Illuminate\Http\Request;

class InterestsController extends Controller
{
    public function get()
    {
        return Interest::where("active", true)->paginate();
    }
}
