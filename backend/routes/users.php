<?php

use Illuminate\Support\Facades\Route;

Route::get('', fn() => "ok")->name('users.index');

Route::get("testinho", fn() => "testinho");
