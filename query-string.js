/**
*
* Get parameters in url string
* Parameter str = URI query string
* Author: Diogo Lima <franco.diogolima@gmail.com>
* 
*/
var queryString = function ( str ) {
  //'use strict';

  // If not defined parameter str, get location search string
  if ( str === undefined ) {str = window.location.search;}
  
  // If not provide query string
  if ( str.length === 0 ) {return null;}

  // Create object return as nul
  var ret = Object.create(null);

  // Express validy is full url (domain)
  var regExp = new RegExp(/^(http|https)\:\/\/+|(w){3}\.+|[a-zA-Z_]\.[a-zA-Z]{2,4}?/);

  // If full url
  if ( regExp.test( str ) ) {
    // if not query string
    if ( str.indexOf('?') === -1 ) {return null;}
    // get just query string
    str = str.substr( str.indexOf('?') );
  }

  // replace start string and remove spaces
  str = str.replace(/^\?|#|&/, '').trim();

  // Explode & and verify each parameter
  str.split('&').forEach( function ( param ) {

    // Explode in equal '='
    var parts = param.replace(/\+/g, ' ').split('=');

    // Get key and remove index in parts
    var key = parts.shift();

    // Set value with undefined or parts, join with =
    var val = parts.length > 0 ? parts.join('=') : undefined;

    // Decode key
    key = decodeURIComponent(key);

    // Decode val
    val = val === undefined ? null : decodeURIComponent(val);

    // If first key
    if ( ret[ key ] === undefined ) {
      ret[ key ] = val;
    }
    // If key is type array
    else if ( Array.isArray( ret[ key ] ) ) {
      ret[ key ].push( val );
    }
    // If second set this key, convert key object to array
    else{
      ret[ key ] = [ret[ key ], val];
    }

  } );

  // Return object result;
  return ret;
}
