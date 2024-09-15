<?php

namespace App\Http\Controllers;

use App\Models\Film;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        $films = Film::paginate(8); // Mengambil 8 film per halaman
        return Inertia::render('Home', [
            'films' => $films,
        ]);
    }
}