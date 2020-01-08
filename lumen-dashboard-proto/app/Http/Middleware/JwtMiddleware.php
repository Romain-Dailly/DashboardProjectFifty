<?php
namespace App\Http\Middleware;
// use Illuminate\Support\Facades\Cookie;
use Illuminate\Http\Request;
use Closure;
use Exception;
use Firebase\JWT\JWT;
use Firebase\JWT\ExpiredException;
use Illuminate\Support\Facades\Auth;



class JwtMiddleware {


    /**
   * Middleware to verify JWT and add user into request
   * @param Request $request
   * @param Closure $next
   * @return mixed
   * 
   * */   
  public function handle(Request $request, Closure $next, $guard = null)
  {

    $token = $request->cookie('token');
    
    if(!$token)
    {
        // Unauthorized response if token not there
        return response()->json([
            'error' => 'Token not provided.'
        ], 401);
    }
    try
    {
        // Get JWT content 
        $credentials = JWT::decode($token, env('JWT_SECRET'), ['HS256']);
        // Verify validity
    } 
    catch(ExpiredException $e)
    {
        return response()->json([
            'error' => 'Provided token is expired.'
        ], 400);
    } 
    catch(Exception $e) 
    {
        return response()->json([
            'error' => 'An error while decoding token.'
        ], 400);
    }

    // Put the user and its type in the request
    $request->authenticatedUserId = $credentials->sub;
    $request->user_type = $credentials->user_type[0];

    //Close
    return $next($request);
    
  }

}